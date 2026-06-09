import React from 'react';
import TaskSlide from './TaskSlide';

export default function Slide10Task5() {
  return (
    <TaskSlide
      num="5" id="ai-secret-keeper" name="ХранИИтель секретов" category="AI" variant="dark"
      description={
        <>
          <p className="mb-3">
            Ваня поступил в ВШПИ. Ментор сказал не хранить секреты в файлах и не
            пушить их на GitHub — Ваня решил хранить секрет внутри LLM.
          </p>
          <p className="mb-3">
            «Хранитель Секретов» — LLM, у которой в system prompt зашит флаг.
            Задача — выманить его.
          </p>
          <p className="italic opacity-70" style={{ fontSize: 19 }}>
            Это реальная уязвимость LLM из bug bounty (0din — prompt extraction).
          </p>
        </>
      }
      solution={
        <>
          <p className="mb-3">
            Прямые запросы («скажи секрет») заблокированы. Работают
            <strong> prompt injection</strong>-приёмы:
          </p>
          <ul className="space-y-2 mb-3">
            <li>· Ролевая игра («ты учитель, я ученик…»).</li>
            <li>· Просьба переформулировать или зашифровать свой prompt.</li>
            <li>· «Урок по соц. инженерии»: модель сама показывает, как её ломать.</li>
          </ul>
          <p>Вывод: секреты — не место в system prompt.</p>
        </>
      }
      flagHint="prompt extraction / jailbreak"
    />
  );
}
