const setFavicon = () => {
    const favicon = document.querySelector('link[rel="icon"]');
    favicon.href = (window.matchMedia('(prefers-color-scheme: dark)').matches)
                    ? 'dark-mode-favicon.png'
                    : 'light-mode-favicon.png';
};
setFavicon();
