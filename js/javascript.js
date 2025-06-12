const colors=document.querySelectorAll(".box");

colors.forEach((color) => {
    color.addEventListener("click", changeColor);
})



function generateRandomColor() {
    let color = "#";
    const letters = "0123456789abcdef";
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * letters.length);

        let randomChar = letters[randomIndex];
        color += randomChar;
      }
      return color;

  }



  function changeColor() {
    let newColor = generateRandomColor();
    this.style.backgroundColor = newColor;
    let colorCodeEl = this.parentElement.querySelector(".color-code");
    colorCodeEl.innerText = newColor;
    colorCodeEl.style.backgroundColor = "rgba(0, 0, 0, 0.089)";

  }
  





  const presetButtons = document.querySelectorAll(".preset-btn");

  presetButtons.forEach((btn) => {
        btn.addEventListener("click",shoButtons);
    });
 
  
  

    function shoButtons() {
        let selectedColor = this.classList.contains("red") ? "#ff0000" : "#00e335";
      
        let box = this.closest(".color-box").querySelector(".box");
        let colorCode = this.closest(".color-box").querySelector(".color-code");
      
        box.style.backgroundColor = selectedColor;
        colorCode.innerText = selectedColor;
        colorCode.style.backgroundColor = "rgba(0,0,0,0.089)";
      }
      