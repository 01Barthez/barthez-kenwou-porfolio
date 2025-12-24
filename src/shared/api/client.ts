import axios from 'axios';
import type { ApiError } from '../types';
import { env } from '../../app/config/env';

class ApiClient {
  private client: any;

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 30_000,
    });

    // Attach token automatically if present (replace with your auth provider)
    this.client.interceptors.request.use((config: any) => {
      try {
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('authToken');
          if (token) {
            config.headers = {
              ...config.headers,
              Authorization: `Bearer ${token}`,
            } as any;
          }
        }
      } catch {
        // ignore
      }
      return config;
    });

    // Centralized error mapping to ApiError shape
    this.client.interceptors.response.use(
      (res: any) => res,
      (error: any) => {
        if (error.response) {
          const data = (error.response.data || {}) as any;
          const apiError: ApiError = {
            message: data.message || error.message,
            code: data.code,
            statusCode: error.response.status,
          };
          return Promise.reject(apiError);
        }

        if (error.request) {
          return Promise.reject({ message: 'No response received', statusCode: undefined } as ApiError);
        }

        return Promise.reject({ message: error.message } as ApiError);
      }
    );
  }

  private async request<T>(config: any): Promise<T> {
    const response = await this.client.request(config);
    return response.data as unknown as T;
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    return this.request<T>({ url: endpoint, method: 'GET', params });
  }

  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>({ url: endpoint, method: 'POST', data });
  }

  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>({ url: endpoint, method: 'PUT', data });
  }

  async patch<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>({ url: endpoint, method: 'PATCH', data });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>({ url: endpoint, method: 'DELETE' });
  }
}

const apiBase = `${env.API_BASE_URL.replace(/\/$/, '')}/api`;
const apiClient = new ApiClient(apiBase);

export { apiClient, ApiClient };
