import React from 'react';
import TaskSlide from './TaskSlide';

export default function Slide07Task2() {
  return (
    <TaskSlide
      num="2" id="morse-gif" name="Гифка вместо тысячи слов" category="Crypto"
      description={
        <>
          <p className="mb-3">
            Оператор техподдержки получает от пользователя «Шаман_Тишины»
            только короткие GIF-анимации: кошки, лампочки, мигающие диоды.
          </p>
          <p>
            Этот же пользователь оплачивает премиум биткоинами и каждый раз
            прикладывает к транзакции новый GIF. Начальник требует:
            «Узнай, чего он хочет».
          </p>
        </>
      }
      solution={
        <>
          <p className="mb-3">
            Мигающие кадры GIF — это <strong>азбука Морзе</strong>:
            «тёмный» кадр = точка/тире в зависимости от длительности.
          </p>
          <p className="mb-3">
            Скриптом на Pillow раскладываем GIF на кадры, по длительностям
            восстанавливаем последовательность точек и тире.
          </p>
          <p>Декодируем строку Морзе → получаем флаг.</p>
        </>
      }
      flagHint="frame durations → morse → text"
    />
  );
}
