const ringButtons = document.querySelectorAll('.ring-button')

for(let i=0; i<ringButtons.length; i++){
    const ringBtn = ringButtons[i];
   
    ringBtn.addEventListener("click", function(event){
        const color=event.target.id.replace("-color","");
        // console.log(typeof event)
        // console.log(event.target)
        
        // checked all if there would have been purple then removed and added another color before adding purple border

        for(let j=0; j<ringButtons.length; j++){
            ringButtons[j].classList.remove("border-red-600");
            ringButtons[j].classList.add("border-gray-300");
        }
        
        // color and border
        event.target.classList.add("border-red-600");
        event.target.classList.remove("border-gray-300");

        const productImage = document.getElementById('product-image');
        productImage.src= "../images/"+ color + ".png";
    })
}

function selectWristSize(size){
   
    const sizes = ['S', 'M', 'L', 'XL']
    for(let i=0; i<sizes.length; i++){
        const button = document.getElementById('size-' + sizes[i])
        // size-S. size-M, size-L, size-XL
        // console.log(button)
        const element = sizes[i];
        
        if(size === element){
            button.classList.add("border-purple-600")
        }
        else{
            button.classList.remove("border-purple-600")
            
        }
    }  

}