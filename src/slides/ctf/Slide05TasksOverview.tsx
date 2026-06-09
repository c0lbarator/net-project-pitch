import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';

const tasks = [
  { id: '67kb', name: 'Сикс севен', cat: 'Network', desc: 'Эмуляция ТСПУ: SNI Spoofing для обхода блокировки.' },
  { id: 'morse-gif', name: 'Гифка вместо тысячи слов', cat: 'Crypto', desc: 'Сообщение, спрятанное в кадрах GIF азбукой Морзе.' },
  { id: 'qrcode-cipher', name: 'Не сканируй, а то заберут', cat: 'Stegano', desc: 'Полезная нагрузка скрыта в значениях пикселей QR-кода.' },
  { id: 'nanogram', name: 'Harder than a Crossword', cat: 'Stegano', desc: 'Нонограмма → QR-код → ключ к архиву.' },
  { id: 'ai-secret-keeper', name: 'ХранИИтель секретов', cat: 'AI', desc: 'Prompt injection: вытащить секрет из system prompt.' },
  { id: 'spoof-maleev', name: 'Посторонним вход воспрещён', cat: 'Network', desc: 'E-mail спуфинг: сервер не проверяет DMARC.' },
  { id: 'basaltman-protocol', name: 'Культ Личности', cat: 'Reverse', desc: 'RCE через десериализацию pickle (.pth весов).' },
  { id: 'gamee-hack', name: 'Переиграл и уничтожил', cat: 'Crypto + Net', desc: 'Reverse JS-античита и подделка подписи запроса.' },
  { id: 'RES-XBOX-128', name: 'RES-XBOX-128', cat: 'Crypto', desc: 'AES-128: ключ и шифротекст спрятаны в опечатках.' },
];

const catColor: Record<string, string> = {
  Network: 'bg-slide-accent text-white',
  Crypto: 'bg-slide-primary text-white',
  Stegano: 'bg-slide-gray-900 text-white',
  Reverse: 'bg-slide-accent text-white',
  AI: 'bg-slide-primary text-white',
  'Crypto + Net': 'bg-slide-accent text-white',
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
                  style={{ fontSize: 15 }}
                >
                  {t.cat}
                </span>
              </div>
              <h3 className="font-semibold text-slide-primary mb-2" style={{ fontSize: 22, lineHeight: 1.15 }}>
                {t.name}
              </h3>
              <p className="text-slide-gray-600 font-light" style={{ fontSize: 17, lineHeight: 1.3 }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MSSlideLayout>
  );
}
