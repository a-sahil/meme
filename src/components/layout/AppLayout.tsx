// src/components/layout/AppLayout.tsx
'use client'

import React, { useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Home, Compass , Settings, User } from 'lucide-react'
//import { initTelegramApp } from '@/config/telegram'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    //const tg = initTelegramApp()
    
    // Handle back button
   // tg.BackButton.onClick(() => router.back())
  }, [router])

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Discover', href: '/discover', icon: Compass },
    //{ name: 'ToolBox', href: '/toolbox', icon: Tools },
    { name: 'Settings', href: '/settings', icon: Settings },
    { name: 'Profile', href: '/profile', icon: User }
  ]

  return (
    <div className="min-h-screen bg-white">
      <main className="pb-16">
        {children}
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="max-w-md mx-auto px-4">
          <div className="flex justify-between">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              
              return (
                <button
                  key={item.name}
                  onClick={() => router.push(item.href)}
                  className={`flex flex-col items-center py-2 px-3 ${
                    isActive ? 'text-purple-600' : 'text-gray-500'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs mt-1">{item.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default AppLayout