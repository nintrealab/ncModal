"use strict";
import './modal/index';
import './tabs/index';

// Coding Style
import './coding'


try {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
} catch (_) {}