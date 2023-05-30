export interface Login {
  email: string;
  password: string;
}

export interface SignUp {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  country: string | null;
  password: {
    newPassword: string | null;
    confirmPassword: string | null;
  };
  role: string | null;
  id?: number;
}
export interface User {
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  password?: string;
  role: string;
  id?: number;
}
