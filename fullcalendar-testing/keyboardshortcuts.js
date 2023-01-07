// e is event object that gives all necessary info
// about event and keys user presses. not showing anything
document.addEventListener('keydown', (e) => {
  console.log(e.key);
  // add shift key to this condition
  if (e.key.toLowerCase() === 's') {
    alert('S key pressed. Want to go to settings?');
  }
});  