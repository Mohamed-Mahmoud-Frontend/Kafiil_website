document.getElementById('clickedImg').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });

  // Close the menu if clicked outside of it
  window.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var clickedImg = document.getElementById('image');
    if (event.target !== menu && event.target !== image) {
      menu.style.display = 'none';
    }
  });



  var counterValue = 0;
  var counterElement = document.getElementById('counter');
  var counterPlus = document.getElementById('counterPlus');

  function increment() {
    counterValue++;
    updateCounterDisplay();
  }

  function decrement() {
    counterValue--;
    updateCounterDisplay();
  }




  function updateCounterDisplay() {
    counterElement.textContent = counterValue;
    counterPlus.textContent = counterValue * 100  + " $"  }