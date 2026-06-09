import React from 'react';
import TaskSlide from './TaskSlide';

export default function Slide13Task8() {
  return (
    <TaskSlide
      num="8" id="gamee-hack" name="Переиграл и уничтожил" category="Crypto + Network"
      description={
        <>
          <p className="mb-3">
            «Отдам флаг, если наберёшь больше 10 000 очков в пасьянс» — мини-игра
            от <span className="font-mono">Gamee</span> в Telegram.
          </p>
          <p className="italic opacity-70" style={{ fontSize: 19 }}>
            P.S. Если после этого вы поймаете перманентный бан в Gamee —
            мы не виноваты, действуйте с умом.
          </p>
        </>
      }
      solution={
        <>
          <p className="mb-3">
            Открываем игру в браузере (Telegram WebApp), смотрим
            <strong> сетевые запросы</strong>: счёт отправляется
            на сервер подписанным токеном.
          </p>
          <p className="mb-3">
            В JS-бандле находим античит и алгоритм подписи —
            простой HMAC от <span className="font-mono">score + seed + uid</span>.
          </p>
          <p>
            Реверсим, считаем подпись для нужного счёта,
            подменяем запрос — сервер засчитывает рекорд и отдаёт флаг.
          </p>
        </>
      }
      flagHint="reverse JS + подделка подписанного запроса"
    />
  );
}
