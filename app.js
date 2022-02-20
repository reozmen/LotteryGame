let input = document.getElementById('input');
let button = document.getElementById('button');
let result = document.getElementById('result');




button.addEventListener('click', function(){
    result.innerText = "";
    let x = 0;
while(x<input.value) { 
    
    let liste = []
    
    let liste2 = [];



    for(let i = 0; liste.length < 6 ; i++)
    {
        let number = Math.floor(Math.random()*90+1)
        if (liste.includes(number)){
            continue;
        }
        else{
        liste.push(number);
        }

    }

    for(let j = 0; liste2.length < 2 ; j++)
    {
        let number1 = Math.floor(Math.random()*90+1)
        
        if (liste.includes(number1) && j== 0){
            continue;
        }
        else{
        liste2.push(number1);
        }

    }
    

let liste1 = liste.sort((function(a, b){return a - b}))
    

       

    result.innerText += `${liste1[0]} - ${liste1[1]} - ${liste1[2]} - ${liste1[3]} - ${liste1[4]} - ${liste1[5]} | ${liste2[0]} | ${liste2[1]}\n \n `;
    // input.value = "";
    x++;
}}


);