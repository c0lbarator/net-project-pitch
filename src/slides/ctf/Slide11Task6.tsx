import React from 'react';
import TaskSlide from './TaskSlide';

export default function Slide11Task6() {
  return (
    <TaskSlide
      num="6" id="spoof-maleev" name="Посторонним вход воспрещён" category="Network"
      description={
        <>
          <p className="mb-3">
            На задаче только одна строчка:
          </p>
          <div
            className="bg-slide-gray-100 border-l-4 border-slide-accent p-4 rounded-sm italic mb-4"
            style={{ fontSize: 21 }}
          >
            «Отдадим флаг только Алексею Викторовичу Малееву, напишите пожалуйста
            нам по адресу <span className="font-mono not-italic">yoop@disr.it</span>,
            и мы пришлём Вам ответ».
          </div>
          <p>
            Нужно получить письмо от сервера, который выдаёт флаг
            <em> только</em> Алексею Викторовичу.
          </p>
        </>
      }
      solution={
        <>
          <p className="mb-3">
            OSINT-ом находим корпоративную почту Алексея Викторовича Малеева на сайте МФТИ.
          </p>
          <p className="mb-3">
            Проблема не в чужом домене, а в том, что <strong>сервер задачи
            сам не проверяет DMARC/SPF/DKIM</strong> на входящих письмах.
          </p>
          <p className="mb-3">
            Поэтому через сторонний SMTP отправляем письмо с подделанным
            заголовком <span className="font-mono text-slide-accent">From: maleev@…</span>.
          </p>
          <p>Сервер принимает письмо за валидное → присылает флаг в ответ.</p>
        </>
      }
      flagHint="нет проверки DMARC на принимающей стороне"
    />
  );
}
