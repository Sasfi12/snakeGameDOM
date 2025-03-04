document.querySelector("body").addEventListener("click", function(e) {
    console.log(e)
})

document.querySelector("#snakeHead").addEventListener("click", function() {
   console.log(this.offsetLeft);
   console.log(this.style.top)
   if(isNaN(this.style.top)) {
    this.style.top = this.style.top + 50 + "px" 
   }
   else {
   this.style.top = `${parseInt(this.style.top.split("px").join("")) + 50}px`
    }
})
