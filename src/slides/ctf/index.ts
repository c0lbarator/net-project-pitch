import Slide01Title from './Slide01Title';
import Slide02WhatIsCTF from './Slide02WhatIsCTF';
import Slide03Architecture from './Slide03Architecture';
import Slide04Categories from './Slide04Categories';
import Slide05TasksOverview from './Slide05TasksOverview';
import Slide06Highlight67kb from './Slide06Highlight67kb';
import Slide07HighlightSpoof from './Slide07HighlightSpoof';
import Slide08HighlightPickle from './Slide08HighlightPickle';
import Slide09HighlightAI from './Slide09HighlightAI';
import Slide10Stack from './Slide10Stack';
import Slide11Conclusion from './Slide11Conclusion';

export const ctfSlides = [
  { component: Slide01Title, name: 'Title', template: 'title' },
  { component: Slide02WhatIsCTF, name: 'Что такое CTF', template: 'three-up' },
  { component: Slide03Architecture, name: 'Архитектура', template: 'two-column' },
  { component: Slide04Categories, name: 'Категории', template: 'three-up' },
  { component: Slide05TasksOverview, name: 'Все задачи', template: 'grid' },
  { component: Slide06Highlight67kb, name: '67kb — SNI Spoofing', template: 'two-column' },
  { component: Slide07HighlightSpoof, name: 'Email Spoofing', template: 'two-column' },
  { component: Slide08HighlightPickle, name: 'Pickle RCE', template: 'two-column' },
  { component: Slide09HighlightAI, name: 'Prompt Injection', template: 'two-column' },
  { component: Slide10Stack, name: 'Стек', template: 'grid' },
  { component: Slide11Conclusion, name: 'Итоги', template: 'title' },
];
