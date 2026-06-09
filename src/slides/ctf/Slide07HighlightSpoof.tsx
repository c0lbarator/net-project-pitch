import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { Mail, ShieldOff } from 'lucide-react';

export default function Slide07HighlightSpoof() {
  return (
    <MSSlideLayout>
      <div className="flex flex-col h-full px-20 py-16">
        <div className="mb-10">
          <div className="slide-kicker text-slide-accent mb-3">
            Хайлайт · Network
          </div>
          <h2 className="slide-title font-bold text-slide-primary mb-3">
            «Посторонним вход воспрещён»
          </h2>
          <p className="slide-body-lg font-light text-slide-gray-600">
            Email-спуфинг от имени Алексея Викторовича.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 flex-1">
          <div className="bg-white rounded-sm p-8 border-t-4 border-slide-accent shadow-sm">
            <Mail className="w-12 h-12 text-slide-accent mb-4" strokeWidth={1.5} />
            <h3 className="slide-body-lg font-semibold text-slide-primary mb-4">
              Задача
            </h3>
            <p className="slide-body text-slide-gray-600 font-light">
              Получить флаг от сервера, который выдаёт его только письму с
              корпоративного адреса преподавателя. Адрес нужно найти, а затем
              отправить письмо «от него».
            </p>
          </div>

          <div className="bg-slide-primary rounded-sm p-8 text-white">
            <ShieldOff className="w-12 h-12 text-slide-accent mb-4" strokeWidth={1.5} />
            <h3 className="slide-body-lg font-semibold mb-4">Решение</h3>
            <ul className="space-y-3 slide-body font-light text-white/85">
              <li>· OSINT — ищем корпоративную почту преподавателя.</li>
              <li>· Проверяем DNS-записи домена: SPF/DKIM/DMARC отсутствуют.</li>
              <li>· Подделываем поле <span className="font-mono text-slide-accent">From:</span> и отправляем письмо через сторонний SMTP.</li>
              <li>· Сервер принимает письмо как валидное → выдаёт флаг.</li>
            </ul>
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
