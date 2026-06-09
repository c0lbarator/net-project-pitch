import React from 'react';
import TaskSlide from './TaskSlide';

export default function Slide08Task3() {
  return (
    <TaskSlide
      num="3" id="qrcode-cipher" name="Не сканируй, а то заберут" category="Stegano" variant="dark"
      description={
        <>
          <p className="mb-3">
            В корпоративный чат пользователь @Shaman_Silence регулярно сбрасывает
            почти одинаковые ч/б квадраты — похожие на QR-коды.
          </p>
          <p className="mb-3">
            Те, кто их сканировал, увольняются со словами:
            «Мне предложили то, от чего невозможно отказаться».
          </p>
          <p>
            Сканировать запрещено. Найти ключ нужно в самом изображении —
            в его узорах.
          </p>
        </>
      }
      solution={
        <>
          <p className="mb-3">
            QR-код по структуре валиден, но содержит фишинговую ссылку — это отвлечение.
          </p>
          <p className="mb-3">
            Настоящий флаг спрятан в <strong>значениях пикселей</strong>:
            младшие биты «чёрных» клеток кодируют байты ASCII.
          </p>
          <p>
            Распарсить картинку (PIL/numpy), пройти по сетке QR, собрать
            LSB → получить строку с флагом.
          </p>
        </>
      }
      flagHint="LSB по сетке QR-модулей"
    />
  );
}
