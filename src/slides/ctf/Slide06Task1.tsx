import React from 'react';
import TaskSlide from './TaskSlide';

export default function Slide06Task1() {
  return (
    <TaskSlide
      num="1" id="67kb" name="Сикс севен" category="Network" variant="dark"
      description={
        <>
          <p className="mb-3">
            Михаил Афанасьевич из <em>РусСвязьВидеть</em> делает новую защиту Руснета
            и спрашивает совета у сына Вани.
          </p>
          <p className="mb-3">
            Сервер раздаёт архив с флагом по адресу{' '}
            <span className="font-mono text-slide-accent">
              https://cyberkek.duckdns.org:6767/flag.bin
            </span>, но если что-то не так — отдаёт только первые
            {' '}<span className="font-mono text-slide-accent">67 КБ</span>.
          </p>
          <p className="italic opacity-70" style={{ fontSize: 19 }}>
            P.S. Запостите результат в Одноклассники.
          </p>
        </>
      }
      solution={
        <>
          <p className="mb-3">
            Сервер эмулирует ТСПУ: iptables → NFQUEUE передаёт пакеты в Python,
            Scapy достаёт SNI из TLS Client Hello.
          </p>
          <p className="mb-3">
            Если SNI ≠ <span className="font-mono text-slide-accent">ok.ru</span> — на поток
            ставится лимит 67 КБ и RST-инъекция.
          </p>
          <p className="mb-2">Решение — <strong>SNI spoofing</strong>:</p>
          <div
            className="bg-black/40 border border-white/10 rounded-sm p-4 font-mono"
            style={{ fontSize: 18, lineHeight: 1.45 }}
          >
            curl -k --resolve ok.ru:6767:&lt;IP&gt; \<br />
            &nbsp;&nbsp;https://ok.ru:6767/flag.bin -o flag.bin
          </div>
        </>
      }
      flagHint="TLS-имя ok.ru, реальный IP сервера"
    />
  );
}
