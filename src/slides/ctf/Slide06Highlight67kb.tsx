import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { Zap } from 'lucide-react';

export default function Slide06Highlight67kb() {
  return (
    <MSSlideLayout variant="dark">
      <div className="flex flex-col h-full px-20 py-16">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-sm bg-slide-accent flex items-center justify-center">
            <Zap className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="slide-kicker text-slide-accent">
              Хайлайт · Network
            </div>
            <h2 className="slide-title font-bold text-white">
              «Сикс севен»: эмуляция ТСПУ
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 flex-1">
          {/* Left: idea */}
          <div className="space-y-6">
            <p className="slide-body text-white/80 font-light">
              Сервер раздаёт файл с флагом по HTTPS. Если SNI в TLS-рукопожатии
              не равен <span className="font-mono text-slide-accent">ok.ru</span> —
              соединение принудительно сбрасывается после первых
              <span className="font-mono text-slide-accent"> 67&nbsp;КБ</span>.
            </p>
            <p className="slide-body text-white/80 font-light">
              Решение — техника <strong className="text-white">SNI Spoofing</strong>:
              указать TLS-имя <span className="font-mono text-slide-accent">ok.ru</span>,
              но коннектиться к реальному IP сервера.
            </p>

            <div className="bg-black/40 border border-slide-accent/40 rounded-sm p-5 font-mono"
                 style={{ fontSize: 20, lineHeight: 1.5 }}>
              <span className="text-slide-accent">$</span> curl -k --resolve <br />
              &nbsp;&nbsp;<span className="text-white">ok.ru:6767:&lt;IP&gt;</span> \<br />
              &nbsp;&nbsp;https://ok.ru/flag.bin -o flag.bin
            </div>
          </div>

          {/* Right: how it works */}
          <div className="bg-white/5 border border-white/10 rounded-sm p-8">
            <h3 className="slide-body-lg font-semibold text-white mb-6">
              Что под капотом
            </h3>
            <ul className="space-y-5 slide-body font-light text-white/80">
              <li className="flex gap-4">
                <span className="text-slide-accent font-mono">01</span>
                <span><strong className="text-white">iptables → NFQUEUE</strong> перехватывает весь трафик на порт 6767.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-slide-accent font-mono">02</span>
                <span>Python + <strong className="text-white">Scapy</strong> парсит TLS Client Hello и достаёт SNI.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-slide-accent font-mono">03</span>
                <span>На поток ставится лимит байт; нужный SNI снимает ограничение.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-slide-accent font-mono">04</span>
                <span>После исчерпания лимита соединение закрывается через <strong className="text-white">RST-инъекцию</strong>.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
