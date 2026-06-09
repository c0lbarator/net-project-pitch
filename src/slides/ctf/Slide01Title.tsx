import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { Flag, Shield, Network } from 'lucide-react';

export default function Slide01Title() {
  return (
    <MSSlideLayout variant="dark">
      <div className="flex flex-col justify-center h-full px-20 py-16 relative overflow-hidden">
        {/* Decorative grid lines */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--slide-accent)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--slide-accent)) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative max-w-5xl">
          <div className="slide-kicker text-slide-accent mb-8">
            Проект по сетевым технологиям · 2026
          </div>

          <h1 className="slide-title-lg font-bold mb-8">
            Cyberkek <span className="text-slide-accent">CTF</span>
          </h1>

          <div className="w-32 h-1 bg-slide-accent mb-10" />

          <p className="slide-subtitle font-light text-white/80 max-w-3xl mb-16">
            Соревнование по информационной безопасности:
            <br />
            свой CTFd-сервер, 9 заданий и одна команда организаторов.
          </p>

          <div className="flex gap-10">
            {[
              { icon: Network, value: '3', label: 'Категории' },
              { icon: Flag, value: '9', label: 'Заданий' },
              { icon: Shield, value: 'CTFd', label: 'Платформа' },
            ].map((m, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-slide-accent/20 border border-slide-accent/40 flex items-center justify-center">
                  <m.icon className="w-7 h-7 text-slide-accent" />
                </div>
                <div>
                  <div className="slide-body-lg font-semibold">{m.value}</div>
                  <div className="slide-caption text-white/60">{m.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="slide-caption text-white/50 mt-16 font-mono">
            cyberkek.duckdns.org
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
