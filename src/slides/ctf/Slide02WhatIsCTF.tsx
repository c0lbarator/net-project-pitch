import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { Flag, Brain, Trophy } from 'lucide-react';

const items = [
  {
    icon: Brain,
    title: 'Решай задачи',
    text: 'Уязвимости, реверс, криптография, анализ трафика — каждая задача проверяет конкретный навык.',
  },
  {
    icon: Flag,
    title: 'Захватывай флаги',
    text: 'Ответ к задаче — строка вида CTF{...}. Её нужно найти, расшифровать или вытащить из системы.',
  },
  {
    icon: Trophy,
    title: 'Поднимайся в топ',
    text: 'За каждый сданный флаг — баллы. Скорборд обновляется в реальном времени.',
  },
];

export default function Slide02WhatIsCTF() {
  return (
    <MSSlideLayout>
      <div className="flex flex-col h-full px-20 py-16">
        <div className="mb-12">
          <div className="slide-kicker text-slide-accent mb-4">Контекст</div>
          <h2 className="slide-title font-bold text-slide-primary mb-4">
            Что такое CTF?
          </h2>
          <p className="slide-body-lg font-light text-slide-gray-600 max-w-4xl">
            Capture The Flag — формат соревнований, где участники находят
            уязвимости и решают задачи по кибербезопасности.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-8">
          {items.map((it, i) => (
            <div
              key={i}
              className="flex flex-col p-8 bg-white rounded-sm border-t-4 border-slide-accent shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-slide-accent/10 flex items-center justify-center mb-6">
                <it.icon className="w-8 h-8 text-slide-accent" strokeWidth={1.5} />
              </div>
              <h3 className="slide-body-lg font-semibold text-slide-primary mb-4">
                {it.title}
              </h3>
              <p className="slide-body text-slide-gray-600 font-light">
                {it.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MSSlideLayout>
  );
}
