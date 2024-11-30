// src/components/ui/ArtStyleSelector.tsx
import React from 'react';
import Image from 'next/image';
import { CONFIG } from '@/config/telegram';

interface ArtStyleSelectorProps {
  value: string;
  onChange: (style: string) => void;
}

const ArtStyleSelector: React.FC<ArtStyleSelectorProps> = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-medium text-gray-500">Art Style</h3>
        <button className="text-sm text-purple-600">See All</button>
      </div>
      
      <div className="grid grid-cols-3 gap-3">
  <button
    onClick={() => onChange('style-1')} // replace with actual id
    className={`
      relative rounded-lg overflow-hidden aspect-square
      ${value === 'style-1' ? 'ring-2 ring-purple-600' : 'hover:opacity-90'}
    `}
  >
    <Image
      src="/lawyer.jpg" // replace with actual thumbnail path
      alt="Style 1"
      className="object-cover"
      fill
      sizes="(max-width: 768px) 33vw"
    />
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
      <p className="text-white text-sm font-medium">Style 1</p>
    </div>
  </button>

  <button
    onClick={() => onChange('style-2')} // replace with actual id
    className={`
      relative rounded-lg overflow-hidden aspect-square
      ${value === 'style-2' ? 'ring-2 ring-purple-600' : 'hover:opacity-90'}
    `}
  >
    <Image
      src="/bhoot.jpg" // replace with actual thumbnail path
      alt="Style 2"
      className="object-cover"
      fill
      sizes="(max-width: 768px) 33vw"
    />
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
      <p className="text-white text-sm font-medium">Style 2</p>
    </div>
  </button>

  <button
    onClick={() => onChange('style-3')} // replace with actual id
    className={`
      relative rounded-lg overflow-hidden aspect-square
      ${value === 'style-3' ? 'ring-2 ring-purple-600' : 'hover:opacity-90'}
    `}
  >
    <Image
      src="/photo1.jpg" // replace with actual thumbnail path
      alt="Style 3"
      className="object-cover"
      fill
      sizes="(max-width: 768px) 33vw"
    />
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-2">
      <p className="text-white text-sm font-medium">Style 3</p>
    </div>
  </button>
</div>

    </div>
  );
};

export default ArtStyleSelector;