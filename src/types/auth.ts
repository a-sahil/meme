// src/types/auth.ts
export interface UserProfile {
  id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  photoUrl?: string;
  isPro: boolean;
  generationHistory: GenerationHistory[];
  createdAt: Date;
}

export interface GenerationHistory {
  id: string;
  prompt: string;
  imageUrl: string;
  style: string;
  aspectRatio: string;
  createdAt: Date;
}

export interface AuthState {
  user: UserProfile | null;
  isLoading: boolean;
  error: string | null;
}