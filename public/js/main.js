document.querySelector("body").addEventListener("click", function(e) {
    console.log(e)
})


document.querySelector("#snakeHead").addEventListener("click", function() {
   console.log(this.offsetLeft);
   this.offsetLeft += 20
    
})
