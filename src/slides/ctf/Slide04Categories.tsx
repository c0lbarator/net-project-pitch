import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { Network, KeyRound, Eye, Wrench } from 'lucide-react';

const cats = [
  {
    icon: Network,
    title: 'Network',
    color: 'bg-slide-accent',
    text: 'Анализ трафика, имитация ТСПУ, спуфинг отправителя e-mail.',
    tasks: ['Сикс севен', 'Посторонним вход воспрещён'],
  },
  {
    icon: KeyRound,
    title: 'Crypto',
    color: 'bg-slide-primary',
    text: 'Классические шифры, AES, азбука Морзе, подделка подписей.',
    tasks: ['RES-XBOX-128', 'Гифка вместо тысячи слов', 'Переиграл и уничтожил*'],
  },
  {
    icon: Eye,
    title: 'Stegano + AI',
    color: 'bg-slide-gray-900',
    text: 'Скрытые сообщения в QR, нонограммах и системных промптах LLM.',
    tasks: ['Не сканируй, а то заберут', 'Harder than a Crossword', 'ХранИИтель секретов'],
  },
  {
    icon: Wrench,
    title: 'Reverse',
    color: 'bg-slide-accent',
    text: 'Разбор бинарных форматов, эксплуатация pickle-десериализации.',
    tasks: ['Культ Личности (Basaltman)'],
  },
];

export default function Slide04Categories() {
  return (
    <MSSlideLayout>
      <div className="flex flex-col h-full px-20 py-14">
        <div className="mb-8">
          <div className="slide-kicker text-slide-accent mb-3">Категории</div>
          <h2 className="slide-title font-bold text-slide-primary mb-3">
            Четыре направления, девять задач
          </h2>
          <p className="slide-body-lg font-light text-slide-gray-600">
            Сбалансированный набор: от сетевого реверса до prompt-инъекций.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-4 gap-5">
          {cats.map((c, i) => (
            <div
              key={i}
              className="flex flex-col bg-white rounded-sm border border-slide-gray-200 shadow-sm overflow-hidden"
            >
              <div className={`${c.color} p-5 flex items-center gap-3`}>
                <c.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                <h3 className="text-white font-semibold" style={{ fontSize: 26 }}>
                  {c.title}
                </h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slide-gray-600 font-light mb-5" style={{ fontSize: 19, lineHeight: 1.3 }}>
                  {c.text}
                </p>
                <div className="mt-auto space-y-2">
                  {c.tasks.map((t) => (
                    <div
                      key={t}
                      className="text-slide-primary bg-slide-gray-100 px-3 py-2 rounded-sm"
                      style={{ fontSize: 16, lineHeight: 1.2 }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-slide-gray-400" style={{ fontSize: 16 }}>
          * «Переиграл и уничтожил» — на стыке Crypto и Network.
        </p>
      </div>
    </MSSlideLayout>
  );
}
