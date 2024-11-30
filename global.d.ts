// global.d.ts
export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        openTelegramLink: (url: string) => void;
        initDataUnsafe?: {
          user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            photo_url?: string;
          };
        };
      };
    };
  }
}
