const hexValues: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')!;
const color = document.querySelector('.color')! 

btn.addEventListener('click',  () => {
    
    getColor((x) => {
        color.textContent = x;
    //Le asignamos el color al document
    document.body.style.backgroundColor = x;
        
    })


});

function getColor(cb:(color:string)=> void):void{
    let hexColor: string = "#";
    for(let i=0; i<6; i++){
        hexColor += hexValues[getRandomNumber()];
    }

    cb(hexColor);
}


function getRandomNumber():number{
    return Math.floor(Math.random() * hexValues.length);
}