import React from 'react';
import TaskSlide from './TaskSlide';

export default function Slide12Task7() {
  return (
    <TaskSlide
      num="7" id="basaltman-protocol" name="Культ Личности (The Basaltman Protocol)" category="Reverse" variant="dark"
      description={
        <>
          <p className="mb-3">
            Совет директоров <em>ClosedAI</em> увольняет CEO Сэма Базальтмана.
            Накануне у Сэма был доступ к серверу обучения — и он
            модифицировал финальные веса флагманской модели <strong>SmolaLM</strong>.
          </p>
          <p>
            После запуска модель отвечает идеально на первый промпт, а затем
            стремительно глупеет. Нужно понять, что Сэм спрятал в весах.
          </p>
        </>
      }
      solution={
        <>
          <p className="mb-3">
            Веса PyTorch (<span className="font-mono text-slide-accent">.pth</span>) —
            это <span className="font-mono">pickle</span>, а
            <span className="font-mono"> pickle.load</span> исполняет код.
          </p>
          <p className="mb-3">
            Разбираем файл утилитой
            <span className="font-mono text-slide-accent"> pickletools</span> —
            видим <span className="font-mono">GLOBAL 'builtins exec'</span>
            и зашитый Python-код, который деградирует веса и содержит флаг.
          </p>
          <p>
            Извлекаем строку, исполняем её безопасно (статический разбор) —
            достаём CTF-флаг.
          </p>
        </>
      }
      flagHint="pickletools → exec payload в .pth"
    />
  );
}
