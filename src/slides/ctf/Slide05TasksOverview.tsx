import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';

const tasks = [
  { id: '67kb', name: 'Сикс севен', cat: 'Network', desc: 'Эмуляция ТСПУ: SNI Spoofing для обхода блокировки.' },
  { id: 'spoof-maleev', name: 'Посторонним вход воспрещён', cat: 'Network', desc: 'E-mail спуфинг при отсутствии DMARC.' },
  { id: 'morse-gif', name: 'GIF-морзянка', cat: 'Network', desc: 'Сообщение, спрятанное в кадрах GIF азбукой Морзе.' },
  { id: 'RES-XBOX-128', name: 'RES-XBOX-128', cat: 'Crypto', desc: 'AES-128: ключ и шифротекст спрятаны в опечатках.' },
  { id: 'gamee-hack', name: 'Переиграл и уничтожил', cat: 'Crypto', desc: 'Reverse JS-античита в мини-игре Telegram.' },
  { id: 'basaltman-protocol', name: 'Культ Личности', cat: 'Crypto', desc: 'RCE через десериализацию pickle (.pth).' },
  { id: 'qrcode-cipher', name: 'Шифр в QR-коде', cat: 'Stegano', desc: 'Полезная нагрузка скрыта в значениях пикселей.' },
  { id: 'nanogram', name: 'Nanogram', cat: 'Stegano', desc: 'Текст → нонограмма → QR-код с флагом.' },
  { id: 'ai-secret-keeper', name: 'ХранИИтель секретов', cat: 'Stegano', desc: 'Prompt injection: вытащить секрет из system prompt.' },
];

const catColor: Record<string, string> = {
  Network: 'bg-slide-accent text-white',
  Crypto: 'bg-slide-primary text-white',
  Stegano: 'bg-slide-gray-200 text-slide-primary',
};

export default function Slide05TasksOverview() {
  return (
    <MSSlideLayout>
      <div className="flex flex-col h-full px-20 py-14">
        <div className="mb-8">
          <div className="slide-kicker text-slide-accent mb-3">Каталог задач</div>
          <h2 className="slide-title font-bold text-slide-primary">
            Все 9 заданий
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-5">
          {tasks.map((t) => (
            <div
              key={t.id}
              className="flex flex-col p-5 bg-white rounded-sm border border-slide-gray-200 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono slide-caption text-slide-gray-600">
                  {t.id}
                </span>
                <span
                  className={`px-3 py-1 rounded-full slide-chrome font-semibold ${catColor[t.cat]}`}
                  style={{ fontSize: 16 }}
                >
                  {t.cat}
                </span>
              </div>
              <h3 className="font-semibold text-slide-primary mb-2" style={{ fontSize: 24, lineHeight: 1.15 }}>
                {t.name}
              </h3>
              <p className="text-slide-gray-600 font-light" style={{ fontSize: 18, lineHeight: 1.3 }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MSSlideLayout>
  );
}
