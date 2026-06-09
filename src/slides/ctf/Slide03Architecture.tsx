import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { Server, Globe, Container, Database } from 'lucide-react';

const stack = [
  {
    icon: Server,
    title: 'CTFd',
    text: 'Open-source платформа для CTF: регистрация, скорборд, задачи, проверка флагов.',
  },
  {
    icon: Container,
    title: 'Docker',
    text: 'Платформа и динамические задачи (например, сервер «Сикс севен») крутятся в контейнерах.',
  },
  {
    icon: Globe,
    title: 'DuckDNS + HTTPS',
    text: 'Публичный домен cyberkek.duckdns.org, TLS-сертификат, доступ из любой сети.',
  },
  {
    icon: Database,
    title: 'Импорт бэкапа',
    text: 'Все 9 задач упакованы одним .zip-бэкапом CTFd и разворачиваются в один клик.',
  },
];

export default function Slide03Architecture() {
  return (
    <MSSlideLayout>
      <div className="flex flex-col h-full px-20 py-16">
        <div className="mb-12">
          <div className="slide-kicker text-slide-accent mb-4">Архитектура</div>
          <h2 className="slide-title font-bold text-slide-primary mb-4">
            Как устроена борда
          </h2>
          <p className="slide-body-lg font-light text-slide-gray-600 max-w-4xl">
            Развёрнутая нами инфраструктура полностью автономна и
            воспроизводится по инструкции из репозитория.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-8">
          {stack.map((s, i) => (
            <div
              key={i}
              className="flex gap-6 p-8 bg-white rounded-sm border border-slide-gray-200 shadow-sm"
            >
              <div className="w-14 h-14 rounded-sm bg-slide-primary flex items-center justify-center flex-shrink-0">
                <s.icon className="w-7 h-7 text-slide-accent" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="slide-body-lg font-semibold text-slide-primary mb-2">
                  {s.title}
                </h3>
                <p className="slide-body text-slide-gray-600 font-light">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MSSlideLayout>
  );
}
