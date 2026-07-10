export interface UserRole {
  id: string;
  name: string;
}

export interface User {

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  avatar?: string;

  role: UserRole;

}

export interface AuthContextType {

  user: User | null;

  loading: boolean;

}