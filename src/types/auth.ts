export interface User {
  id: string;
  email: string;
  token: string;
}

export interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  signup: (token: string) => void;
  logout: () => void;
}