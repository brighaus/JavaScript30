/**
 * Listens on key presses and plays sound + viz transition
 *    based on match against data-key attribute of html elements.
 *  Based on Wes Bos 30 day JS challenge: https://JavaScript30.com
 */

(function() {
  const keys = document.querySelectorAll('.key');
  const playClass = 'playing';

  function handleKeyPress(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(audio) {
      if (key) {
        key.classList.add(playClass);
      }
      audio.currentTime = 0;
      audio.play();
    }

  }

  function handleTransitionEnd(e) {
    if(e.propertyName === 'transform') {
      this.classList.remove(playClass);
    }
  }

  window.addEventListener('keydown', handleKeyPress);
  if(keys) {
    keys.forEach(k => k.addEventListener('transitionend', handleTransitionEnd));
  }
})();