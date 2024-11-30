// src/components/features/Profile/UserProfile.tsx
import React from 'react';
import Image from 'next/image';
import { User, Crown, Image as ImageIcon, Clock } from 'lucide-react';
import { UserProfile as UserProfileType } from '@/types/auth';
import Button from '@/components/ui/Button';

interface UserProfileProps {
  profile: UserProfileType;
}

export const UserProfile: React.FC<UserProfileProps> = ({ profile }) => {
  return (
    <div className="max-w-md mx-auto px-4 py-6 space-y-6">
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        {profile.photoUrl ? (
          <Image
            src={profile.photoUrl}
            alt={profile.username}
            width={64}
            height={64}
            className="rounded-full"
          />
        ) : (
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-purple-600" />
          </div>
        )}
        
        <div>
          <h2 className="text-xl font-bold">
            {profile.firstName} {profile.lastName}
          </h2>
          <p className="text-gray-600">@{profile.username}</p>
        </div>
      </div>

      {/* Subscription Status */}
      {profile.isPro ? (
        <div className="bg-purple-50 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Crown className="w-5 h-5 text-purple-600" />
            <span className="font-medium">PRO Member</span>
          </div>
          <Button variant="outline">Manage</Button>
        </div>
      ) : (
        <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Crown className="w-5 h-5 text-gray-400" />
            <span>Free Plan</span>
          </div>
          <Button>Upgrade to PRO</Button>
        </div>
      )}

      {/* Generation History */}
      <div>
        <h3 className="text-lg font-medium mb-4">Generation History</h3>
        {profile.generationHistory.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {profile.generationHistory.map((item) => (
              <div key={item.id} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.prompt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <p className="text-white text-sm truncate">{item.prompt}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 space-y-2">
            <ImageIcon className="w-12 h-12 mx-auto text-gray-400" />
            <p className="text-gray-600">No generations yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

// src/components/features/Profile/GenerationHistory.tsx
export const GenerationHistory: React.FC<{
  history: UserProfileType['generationHistory']
}> = ({ history }) => {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Recent Generations</h3>
        <button className="text-sm text-purple-600">See All</button>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        {history.slice(0, 6).map((item) => (
          <div key={item.id} className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.prompt}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-1 right-1 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded-full flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {new Date(item.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};