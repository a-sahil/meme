// src/config/telegram.ts
// import { WebApp } from '@twa-dev/sdk'

// declare global {
//   interface Window {
//     Telegram: {
//       WebApp: WebApp
//     }
//   }
// }

//  export const initTelegramApp = () => {
//   const tg = window.Telegram.WebApp
  
//   // Initialize the WebApp
//   tg.ready()
  
//   // Enable closing confirmation
//   tg.enableClosingConfirmation()
  
//   // Set header color
//   tg.setHeaderColor('#6c5ce7')
  
//   // Set background color
//   tg.setBackgroundColor('#ffffff')
  
//    return tg
// }
// export const initTelegramApp = () => {
//   // Check if Telegram WebApp is available
//   if (window.Telegram?.WebApp) {
//     const tg = window.Telegram.WebApp;
    
//     // Initialize the WebApp
//     tg.ready();

//     // Enable closing confirmation
//     tg.enableClosingConfirmation();

//     // Set header color
//     tg.setHeaderColor('#6c5ce7');

//     // Set background color
//     tg.setBackgroundColor('#ffffff');

//     return tg;
//   } else {
//     console.error('Telegram WebApp is not available');
//     return null; // or handle accordingly
//   }
// };


// App Configuration
export const CONFIG = {
  MAX_IMAGE_SIZE: 10 * 1024 * 1024, // 10MB
  SUPPORTED_ASPECT_RATIOS: [
    { id: '1:1', label: '1:1', width: 800, height: 800 },
    { id: '9:16', label: '9:16', width: 450, height: 800 },
    { id: '16:9', label: '16:9', width: 800, height: 450 },
    { id: '3:2', label: '3:2', width: 800, height: 533 },
    { id: '4:3', label: '4:3', width: 800, height: 600 },
    { id: '5:4', label: '5:4', width: 800, height: 640 }
  ],
  ART_STYLES: [
    { id: 'colorful', label: 'Colourful', thumbnail: '/styles/colorful.jpg' },
    { id: 'cyberpunk', label: 'Cyberpunk', thumbnail: '/styles/cyberpunk.jpg' },
    { id: 'real', label: 'Real', thumbnail: '/styles/real.jpg' }
  ]
}