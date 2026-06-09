import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';

const stack = [
  ['CTFd', 'Платформа'],
  ['Docker', 'Контейнеризация'],
  ['Nginx', 'HTTPS / раздача файлов'],
  ['Python + Scapy', 'Перехват пакетов'],
  ['iptables / NFQUEUE', 'Сетевой фильтр'],
  ['DuckDNS', 'Публичный домен'],
  ['Let’s Encrypt', 'TLS-сертификат'],
  ['PyTorch / pickle', 'Задача с RCE'],
  ['LLM API', 'AI-задача'],
];

export default function Slide10Stack() {
  return (
    <MSSlideLayout>
      <div className="flex flex-col h-full px-20 py-16">
        <div className="mb-10">
          <div className="slide-kicker text-slide-accent mb-3">Технологии</div>
          <h2 className="slide-title font-bold text-slide-primary mb-3">
            Стек проекта
          </h2>
          <p className="slide-body-lg font-light text-slide-gray-600">
            Чем пользовались при разработке борды и задач.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-5">
          {stack.map(([name, role]) => (
            <div
              key={name}
              className="p-6 bg-white rounded-sm border border-slide-gray-200 shadow-sm"
            >
              <div className="font-mono font-semibold text-slide-accent mb-2"
                   style={{ fontSize: 26 }}>
                {name}
              </div>
              <div className="slide-body text-slide-gray-600 font-light">
                {role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MSSlideLayout>
  );
}
