import Slide01Title from './Slide01Title';
import Slide02WhatIsCTF from './Slide02WhatIsCTF';
import Slide03Architecture from './Slide03Architecture';
import Slide04Categories from './Slide04Categories';
import Slide05TasksOverview from './Slide05TasksOverview';
import Slide06Task1 from './Slide06Task1';
import Slide07Task2 from './Slide07Task2';
import Slide08Task3 from './Slide08Task3';
import Slide09Task4 from './Slide09Task4';
import Slide10Task5 from './Slide10Task5';
import Slide11Task6 from './Slide11Task6';
import Slide12Task7 from './Slide12Task7';
import Slide13Task8 from './Slide13Task8';
import Slide14Task9 from './Slide14Task9';
import Slide15Stack from './Slide15Stack';
import Slide16Conclusion from './Slide11Conclusion';

export const ctfSlides = [
  { component: Slide01Title, name: 'Title', template: 'title' },
  { component: Slide02WhatIsCTF, name: 'Что такое CTF', template: 'three-up' },
  { component: Slide03Architecture, name: 'Архитектура', template: 'two-column' },
  { component: Slide04Categories, name: 'Категории', template: 'three-up' },
  { component: Slide05TasksOverview, name: 'Все задачи', template: 'grid' },
  { component: Slide06Task1, name: '1 · Сикс севен', template: 'two-column' },
  { component: Slide07Task2, name: '2 · Гифка вместо тысячи слов', template: 'two-column' },
  { component: Slide08Task3, name: '3 · Не сканируй, а то заберут', template: 'two-column' },
  { component: Slide09Task4, name: '4 · Harder than a Crossword', template: 'two-column' },
  { component: Slide10Task5, name: '5 · ХранИИтель секретов', template: 'two-column' },
  { component: Slide11Task6, name: '6 · Посторонним вход воспрещён', template: 'two-column' },
  { component: Slide12Task7, name: '7 · Культ Личности', template: 'two-column' },
  { component: Slide13Task8, name: '8 · Переиграл и уничтожил', template: 'two-column' },
  { component: Slide14Task9, name: '9 · RES-XBOX-128', template: 'two-column' },
  { component: Slide15Stack, name: 'Стек', template: 'grid' },
  { component: Slide16Conclusion, name: 'Итоги', template: 'title' },
];
