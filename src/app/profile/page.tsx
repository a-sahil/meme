// src/app/profile/page.tsx
'use client';

import { useAuth } from '@/hooks/useAuth';
import { UserProfile } from '@/components/features/Profile/UserProfile';
import AppLayout from '@/components/layout/AppLayout';
import { Loader2 } from 'lucide-react';

export default function ProfilePage() {
  const { user, isLoading, error } = useAuth();

  if (isLoading) {
    return (
      <AppLayout>
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="w-8 h-8 animate-spin text-purple-600" />
        </div>
      </AppLayout>
    );
  }

  if (error || !user) {
    return (
      <AppLayout>
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <p className="text-red-600 mb-4">{error || 'Please log in to view your profile'}</p>
          <button
            onClick={() => window.Telegram.WebApp.openTelegramLink('https://t.me/Sahil0x49')}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg"
          >
            Login with Telegram
          </button>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <UserProfile profile={user} />
    </AppLayout>
  );
}
