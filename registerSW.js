if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/shamemaru/sw.js', { scope: '/shamemaru/' })})}