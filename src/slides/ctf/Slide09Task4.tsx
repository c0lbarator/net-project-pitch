import React from 'react';
import TaskSlide from './TaskSlide';
import nonogram from '@/assets/nonogram.png';

export default function Slide09Task4() {
  return (
    <TaskSlide
      num="4" id="nanogram" name="Harder than a Crossword" category="Stegano"
      description={
        <>
          <p className="mb-3">
            Шпионы общаются через журнал «Бабушкин компот» с кроссвордами.
            Перехвачено сообщение — японский кроссворд (нонограмма) 29×37
            с числовыми подсказками по строкам и столбцам.
          </p>
          <p>
            В нём «зашифрован» ключ от архива с флагом.
          </p>
          <img src={nonogram} alt="Nonogram" className="mx-auto my-6 border border-white/20 rounded-sm" />
        </>
      }
      solution={
        <>
          <p className="mb-3">
            Решаем нонограмму: либо вручную, либо SAT-солвером /{' '}
            <span className="font-mono">python-constraint</span>.
          </p>
          <p className="mb-3">
            Закрашенные клетки складываются в QR-код.
          </p>
          <p>
            Сканируем QR (zbar / pyzbar) → получаем ключ →
            распаковываем архив → флаг.
          </p>
        </>
      }
      flagHint="нонограмма → QR → ключ к архиву"
    />
  );
}
