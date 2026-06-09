import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { Flag } from 'lucide-react';

export default function Slide11Conclusion() {
  return (
    <MSSlideLayout variant="dark">
      <div className="flex flex-col justify-center h-full px-20 py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--slide-accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--slide-accent)) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative max-w-5xl">
          <div className="slide-kicker text-slide-accent mb-8">Итого</div>
          <h2 className="slide-title-lg font-bold mb-10">
            Запустили <span className="text-slide-accent">собственный CTF</span>
            <br />— и многому научились.
          </h2>
          <div className="w-32 h-1 bg-slide-accent mb-10" />

          <div className="grid grid-cols-3 gap-10 mb-16">
            {[
              { v: '9', l: 'авторских задач' },
              { v: '3', l: 'категории' },
              { v: '24/7', l: 'доступ к борде' },
            ].map((m, i) => (
              <div key={i}>
                <div className="font-bold text-slide-accent mb-2" style={{ fontSize: 88, lineHeight: 1 }}>
                  {m.v}
                </div>
                <div className="slide-body text-white/70">{m.l}</div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-slide-accent/20 border border-slide-accent flex items-center justify-center">
              <Flag className="w-8 h-8 text-slide-accent" />
            </div>
            <div>
              <div className="slide-body-lg font-semibold text-white">
                Спасибо за внимание!
              </div>
              <div className="slide-caption font-mono text-slide-accent mt-1">
                cyberkek.duckdns.org
              </div>
            </div>
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
