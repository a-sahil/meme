// src/hooks/useAuth.ts
import { useEffect, useState } from 'react';
import { UserProfile, AuthState } from '@/types/auth';

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const initAuth = async () => {
      try {
        // Get Telegram WebApp instance
        const tg = window.Telegram.WebApp;
        
        // Check if initDataUnsafe and user data exist
        if (!tg.initDataUnsafe?.user) {
          setAuthState({
            user: null,
            isLoading: false,
            error: 'Not authorized in Telegram',
          });
          return;
        }

        // Get user data from Telegram
        const telegramUser = tg.initDataUnsafe.user;
        
        // Simulate user profile retrieval (replace this with actual backend call if needed)
        const userProfile: UserProfile = {
          id: telegramUser.id.toString(),
          username: telegramUser.username || `user_${telegramUser.id}`,
          firstName: telegramUser.first_name,
          lastName: telegramUser.last_name || '',
          photoUrl: telegramUser.photo_url || '',
          isPro: false, // You can determine this based on backend logic
          generationHistory: [],
          createdAt: new Date(),
        };

        // Set authenticated user data
        setAuthState({
          user: userProfile,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setAuthState({
          user: null,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Authentication failed',
        });
      }
    };

    initAuth();
  }, []);

  return authState;
};
