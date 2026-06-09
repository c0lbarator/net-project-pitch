import React from 'react';
import TaskSlide from './TaskSlide';

export default function Slide14Task9() {
  return (
    <TaskSlide
      num="9" id="RES-XBOX-128" name="RES-XBOX-128" category="Crypto" variant="dark"
      description={
        <>
          <p className="mb-3">
            На задаче — текст условия с опечатками и шифротекст.
          </p>
          <p>
            «Условие сперва надо расшифровать» — название
            <span className="font-mono text-slide-accent"> RES-XBOX-128 </span>
            подсказывает анаграмму:
            <span className="font-mono text-slide-accent"> AES-128</span>.
          </p>
        </>
      }
      solution={
        <>
          <p className="mb-3">
            Внимательно читаем условие — <strong>опечатки складываются
            в hex-ключ</strong> (32 символа = 16 байт = AES-128).
          </p>
          <p className="mb-3">
            Вторая часть текста — base64 шифротекст с IV в начале.
          </p>
          <p>
            Расшифровываем AES-128-CBC (PyCryptodome) →
            получаем флаг.
          </p>
        </>
      }
      flagHint="RES-XBOX-128 = anagram(AES-128)"
    />
  );
}
