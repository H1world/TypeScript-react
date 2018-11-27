(function () {
  const docEl = document.documentElement as HTMLInputElement;
  const setRem = function () {
    const screenWidth = docEl.clientWidth || window.screen.width || 360;
    // PSD宽度(可变的)
    docEl.style.fontSize = (100 * screenWidth / 375) + 'px';
  };
  window.addEventListener('resize', setRem, false);
  setRem();
})();