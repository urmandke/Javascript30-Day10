const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

checkboxes.forEach(checkbox => checkbox.addEventListener('click',handleCheck));

let lastChecked;
let inBetween = false;

function handleCheck(e){
    //Check if they had the shift key down
    //And check if they are checking it
    if(e.shiftKey && this.checked){
    //loop over every single checkbox 
    checkboxes.forEach(checkbox =>{
        console.log(checkbox); 
        if(checkbox == this || lastChecked){
            inBetween = !inBetween;
            console.log('Starting to check inbetween')
        }
        
        if(inBetween){
            checkbox.checked = true;
        }
    });

   
        
    }

    console.log(e);
    lastChecked = this;
}

