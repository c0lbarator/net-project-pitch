import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { Network, KeyRound, Eye } from 'lucide-react';

const cats = [
  {
    icon: Network,
    title: 'Network',
    color: 'bg-slide-accent',
    text: 'Анализ трафика, протоколы, имитация ТСПУ, спуфинг отправителя e-mail.',
    tasks: ['67kb', 'spoof-maleev', 'morse-gif'],
  },
  {
    icon: KeyRound,
    title: 'Crypto',
    color: 'bg-slide-primary',
    text: 'Классические шифры, AES, реверс хеш-функций и форматов сериализации.',
    tasks: ['RES-XBOX-128', 'gamee-hack', 'basaltman-protocol'],
  },
  {
    icon: Eye,
    title: 'Stegano',
    color: 'bg-slide-accent',
    text: 'Скрытые сообщения в QR-кодах, GIF и логических головоломках.',
    tasks: ['qrcode-cipher', 'nanogram', 'ai-secret-keeper'],
  },
];

export default function Slide04Categories() {
  return (
    <MSSlideLayout>
      <div className="flex flex-col h-full px-20 py-16">
        <div className="mb-10">
          <div className="slide-kicker text-slide-accent mb-4">Категории</div>
          <h2 className="slide-title font-bold text-slide-primary mb-4">
            Три направления, девять задач
          </h2>
          <p className="slide-body-lg font-light text-slide-gray-600">
            Сбалансированный набор: от сетевого реверса до prompt-инъекций.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-8">
          {cats.map((c, i) => (
            <div
              key={i}
              className="flex flex-col bg-white rounded-sm border border-slide-gray-200 shadow-sm overflow-hidden"
            >
              <div className={`${c.color} p-6 flex items-center gap-4`}>
                <c.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                <h3 className="text-white font-semibold" style={{ fontSize: 36 }}>
                  {c.title}
                </h3>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="slide-body text-slide-gray-600 font-light mb-6">
                  {c.text}
                </p>
                <div className="mt-auto space-y-2">
                  {c.tasks.map((t) => (
                    <div
                      key={t}
                      className="font-mono slide-caption text-slide-primary bg-slide-gray-100 px-3 py-2 rounded-sm"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MSSlideLayout>
  );
}
