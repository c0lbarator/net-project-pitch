import React from 'react';
import { MSSlideLayout } from '@/components/slides/MSSlideLayout';
import { Bug } from 'lucide-react';

export default function Slide08HighlightPickle() {
  return (
    <MSSlideLayout variant="dark">
      <div className="flex flex-col h-full px-20 py-16">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-sm bg-slide-accent flex items-center justify-center">
            <Bug className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="slide-kicker text-slide-accent">Хайлайт · Crypto / ML</div>
            <h2 className="slide-title font-bold text-white">
              «Культ Личности»: pickle = RCE
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-10 flex-1">
          <div className="col-span-3 space-y-5">
            <p className="slide-body text-white/80 font-light">
              Веса PyTorch-модели (<span className="font-mono text-slide-accent">.pth</span>)
              — это под капотом обычный <span className="font-mono">pickle</span>.
              При десериализации Python <strong className="text-white">исполняет код</strong>,
              а не просто читает данные.
            </p>
            <p className="slide-body text-white/80 font-light">
              Внутри файла спрятана функция, которая через
              <span className="font-mono text-slide-accent"> exec()</span> деградирует веса
              и содержит флаг. Достаём её с помощью
              <span className="font-mono text-slide-accent"> pickletools</span> или дебаггера.
            </p>

            <div className="bg-black/40 border border-white/10 rounded-sm p-5 font-mono"
                 style={{ fontSize: 20, lineHeight: 1.5 }}>
              <span className="text-slide-accent">&gt;&gt;&gt;</span> python -m pickletools model.pth<br />
              <span className="text-white/50">  0: \x80 PROTO      4</span><br />
              <span className="text-white/50">  ...</span><br />
              <span className="text-white/50"> 42: c   GLOBAL    'builtins exec'</span><br />
              <span className="text-slide-accent">    # ← вот сюда зашит CTF{`{...}`}</span>
            </div>
          </div>

          <div className="col-span-2 bg-white/5 border border-white/10 rounded-sm p-7">
            <h3 className="slide-body-lg font-semibold text-white mb-4">
              Чему учит задача
            </h3>
            <ul className="space-y-4 slide-body font-light text-white/80">
              <li>· Никогда не грузить чужие <span className="font-mono">.pth</span> без песочницы.</li>
              <li>· HuggingFace ввёл формат <span className="font-mono text-slide-accent">.safetensors</span> именно из-за этой уязвимости.</li>
              <li>· Supply-chain атаки в ML — реальная и недооценённая угроза.</li>
            </ul>
          </div>
        </div>
      </div>
    </MSSlideLayout>
  );
}
