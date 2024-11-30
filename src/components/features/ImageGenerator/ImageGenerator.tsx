// src/components/features/ImageGenerator/ImageGenerator.tsx
'use client';

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Loader2, Image as ImageIcon, Lightbulb, Crown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import AspectRatioSelector from '@/components/ui/AspectRatioSelector';
import ArtStyleSelector from '@/components/ui/ArtStyleSelector';

const ImageGenerator = () => {
  const router = useRouter();
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [artStyle, setArtStyle] = useState('colorful');
  const [isGenerating, setIsGenerating] = useState(false);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp']
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    onDrop: (acceptedFiles) => {
      // Handle file upload
      console.log(acceptedFiles);
    }
  });

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      // TODO: Implement your AI model generation here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulation
    } catch (error) {
      console.error('Generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="w-8 h-8" /> {/* Placeholder for logo */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600">
            <Lightbulb className="w-6 h-6" />
          </button>
          <button
            onClick={() => router.push('/pro')}
            className="flex items-center space-x-1 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
          >
            <Crown className="w-4 h-4" />
            <span>PRO</span>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Prompt Input */}
        <div className="relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter prompt..."
            className="w-full px-4 py-3 rounded-lg border text-black border-gray-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <div className="w-5 h-5 rounded-full border-2 border-current" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              ×
            </button>
          </div>
        </div>

        {/* Upload Area */}
        <div {...getRootProps()} className="cursor-pointer">
          <input {...getInputProps()} />
          <div className={`
            border-2 border-dashed rounded-lg p-4 text-center
            ${isDragActive ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:border-gray-400'}
          `}>
            <ImageIcon className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p className="text-sm text-gray-600">
              {isDragActive ? 'Drop your image here' : 'Add Photo'}
            </p>
          </div>
        </div>

        {/* Aspect Ratio Selector */}
        <AspectRatioSelector
          value={aspectRatio}
          onChange={setAspectRatio}
        />

        {/* Art Style Selector */}
        <ArtStyleSelector
          value={artStyle}
          onChange={setArtStyle}
        />

        {/* Generate Button */}
        <Button
          fullWidth
          isLoading={isGenerating}
          onClick={handleGenerate}
          disabled={!prompt.trim()}
        >
          Generate
        </Button>
      </div>
    </div>
  );
};

export default ImageGenerator;