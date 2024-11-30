// src/components/ui/AspectRatioSelector.tsx
import React from 'react';
import { CONFIG } from '@/config/telegram';

interface AspectRatioSelectorProps {
  value: string;
  onChange: (ratio: string) => void;
}

const AspectRatioSelector: React.FC<AspectRatioSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <h3 className="text-lg font-medium mb-3 text-gray-500" >Aspect Ratio</h3>
      <div className="grid grid-cols-3 gap-2">
        {CONFIG.SUPPORTED_ASPECT_RATIOS.map((ratio) => (
          <button
            key={ratio.id}
            onClick={() => onChange(ratio.id)}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${value === ratio.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }
            `}
          >
            {ratio.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AspectRatioSelector;