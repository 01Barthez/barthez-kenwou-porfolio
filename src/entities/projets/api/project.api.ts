import { apiClient } from '@/shared/api/client';
import { PaginatedResponse } from '@/shared/types';
import { IProject, ProjectStatus } from '../model/project.types';

export const orderApi = {
  // Récupérer les Projects de l'utilisateur
  getProject: async (page = 1, limit = 10): Promise<PaginatedResponse<IProject>> => {
    return apiClient.get(`/Project/my-Project?page=${page}&limit=${limit}`);
  },

  // Récupérer une Project par ID
  getOrder: async (id: string): Promise<IProject> => {
    return apiClient.get(`/Project/${id}`);
  },

  // Créer une nouvelle Project
  createOrder: async (
    order: Omit<IProject, 'id' | 'createdAt' | 'updatedAt' | 'status'>,
  ): Promise<IProject> => {
    return apiClient.post('/Project', order);
  },

  // Mettre à jour le statut d'une Project (admin seulement)
  updateProjecttatus: async (id: string, status: ProjectStatus): Promise<IProject> => {
    return apiClient.patch(`/Project/${id}/status`, { status });
  },

  // Suppriler un Project
  DeleteProject: async (id: string): Promise<IProject> => {
    return apiClient.delete(`/Project/${id}/delete`);
  },
};
