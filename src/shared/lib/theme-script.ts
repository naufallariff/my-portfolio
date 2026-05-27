export const themeScript = `
  (function() {
    try {
      const stored = localStorage.getItem('theme-storage');
      if (stored) {
        const { state } = JSON.parse(stored);
        if (state.design) document.documentElement.setAttribute('data-theme', state.design);
        if (state.color) document.documentElement.setAttribute('data-palette', state.color);
      }
    } catch(e) {}
  })()
`;