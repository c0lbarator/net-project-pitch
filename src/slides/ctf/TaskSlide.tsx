import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';

type Cat = 'Network' | 'Crypto' | 'Stegano' | 'Reverse' | 'AI' | 'Crypto + Network';

interface TaskSlideProps {
  num: string;
  id: string;
  name: string;
  category: Cat;
  variant?: 'default' | 'dark';
  description: React.ReactNode;
  solution: React.ReactNode;
  flagHint?: string;
}

const catColor: Record<Cat, string> = {
  Network: 'bg-slide-accent text-white',
  Crypto: 'bg-slide-primary text-white',
  Stegano: 'bg-slide-gray-900 text-white',
  Reverse: 'bg-slide-accent text-white',
  AI: 'bg-slide-primary text-white',
  'Crypto + Network': 'bg-slide-accent text-white',
};

export default function TaskSlide({
  num, id, name, category, variant = 'default',
  description, solution, flagHint,
}: TaskSlideProps) {
  const dark = variant === 'dark';
  return (
    <MSSlideLayout variant={variant}>
      <div className="flex flex-col h-full px-20 py-14">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-3">
              <span className={`slide-kicker ${dark ? 'text-slide-accent' : 'text-slide-accent'}`}>
                Задача {num}
              </span>
              <span
                className={`px-4 py-1 rounded-full font-semibold ${catColor[category]}`}
                style={{ fontSize: 18 }}
              >
                {category}
              </span>
              <span className={`font-mono ${dark ? 'text-white/50' : 'text-slide-gray-400'}`}
                    style={{ fontSize: 18 }}>
                {id}
              </span>
            </div>
            <h2 className={`slide-title font-bold ${dark ? 'text-white' : 'text-slide-primary'}`}>
              {name}
            </h2>
          </div>
        </div>

        {/* Two columns */}
        <div className="flex-1 grid grid-cols-2 gap-8 min-h-0">
          {/* Description */}
          <div
            className={`rounded-sm p-7 flex flex-col ${
              dark
                ? 'bg-white/5 border border-white/10'
                : 'bg-white border border-slide-gray-200 shadow-sm border-t-4 border-t-slide-accent'
            }`}
          >
            <div className={`slide-kicker mb-4 ${dark ? 'text-slide-accent' : 'text-slide-accent'}`}>
              Условие
            </div>
            <div
              className={`font-light flex-1 ${dark ? 'text-white/85' : 'text-slide-gray-900'}`}
              style={{ fontSize: 22, lineHeight: 1.4 }}
            >
              {description}
            </div>
          </div>

          {/* Solution */}
          <div
            className={`rounded-sm p-7 flex flex-col ${
              dark
                ? 'bg-slide-accent/10 border border-slide-accent/40'
                : 'bg-slide-primary text-white'
            }`}
          >
            <div className="slide-kicker text-slide-accent mb-4">Решение</div>
            <div
              className={`font-light flex-1 ${dark ? 'text-white/90' : 'text-white/90'}`}
              style={{ fontSize: 22, lineHeight: 1.4 }}
            >
              {solution}
            </div>
            {flagHint && (
              <div
                className="mt-5 pt-4 border-t border-white/15 font-mono text-slide-accent"
                style={{ fontSize: 18 }}
              >
                → {flagHint}
              </div>
            )}
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
