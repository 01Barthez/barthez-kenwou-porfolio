export type UserRole = 'admin';

export interface AuthFormValues {
  email: string;
  password: string;
  remember?: boolean;
}
