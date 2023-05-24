function animateNumber(currentNumber, targetNumber) {
    var increment = 1;
    var interval = setInterval(updateNumber, 10);
  
    function updateNumber() {
      if (currentNumber >= targetNumber) {
        clearInterval(interval);
      } else {
        currentNumber += increment;
        document.getElementById("currentNumber").textContent = currentNumber;
      }
    }
  }
  
  function startAnimation() {
    var scrollTargetOffset = document.getElementById("scrollTarget").offsetTop;
    var windowOffset = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight;
  
    if (windowOffset + windowHeight >= scrollTargetOffset) {
      animateNumber(0, 75);
      window.removeEventListener("scroll", startAnimation);
    }
  }
  
  window.addEventListener("scroll", startAnimation);
  