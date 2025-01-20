document.addEventListener('DOMContentLoaded', (event) => {
  const noBtn = document.getElementById('noBtn');
  const trickMessage = document.getElementById('trickMessage');

  // Initially hide the trick message
  trickMessage.style.display = 'none';

  noBtn.addEventListener('click', function () {
    trickMessage.style.display = 'block'; // Show the trick message
    // Optional: Hide the No button after clicking
    this.style.display = 'none';
  });

  yesBtn.addEventListener('click', function () {
    // Direct to index.html
    window.location.href = 'app.html';
  });
});
