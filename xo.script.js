let area = document.getElementById('area');
let btn  = document.getElementById('btn');
let boxes = document.getElementsByClassName('box');
let chenpionx = document.getElementById('chenpionx');
let chenpiono = document.getElementById('chenpiono');
let pointx = document.getElementById('pointx');
let pointo = document.getElementById('pointo');
let global = document.getElementById('global');
num = 0;
let met = [];

area.addEventListener('click' , function (event) {
    if (event.target.innerHTML === '') {
        met.push(event.target);
        if(num % 2 === 0){
            event.target.innerHTML = 'x';
        } 
        else{   
        event.target.innerHTML = 'o'};
        num++
        check ();
    };
});

function check () {
    let arr  = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i = 0; i < arr.length; i++) {
        if (boxes[arr[i][0]].innerHTML === 'x' && 
            boxes[arr[i][1]].innerHTML === 'x' &&
            boxes[arr[i][2]].innerHTML === 'x' ){
            chenpionx.innerText = 'win x';
            global.style.display = 'block';
            pointx.innerText ++;
            setTimeout (function(){
            global.style.display = 'none';
            chenpionx.innerText = '';
            for (let ax = 0; ax < met.length; ax++) {
            met[ax].innerText = ''
            };
            met.splice(0,9)
            },2000);
                
            }
        else if (boxes[arr[i][0]].innerHTML === 'o' && 
            boxes[arr[i][1]].innerHTML === 'o' &&
            boxes[arr[i][2]].innerHTML === 'o' ){
            chenpiono.innerText = 'win o' ;
            global.style.display = 'block';
            pointo.innerText ++;
            setTimeout (function(){
            global.style.display = 'none';
            chenpiono.innerText = '';
            for (let ax = 0; ax < met.length; ax++) {
                 met[ax].innerText = ''
            };
                met.splice(0,9)
                },2000);  
            }; 
        
            if ( pointx.innerText === "10" || pointo.innerText === "10") {
             pointx.innerText = 0;
             pointo.innerText = 0;
            } 
            if(met.length > 8 ) {
            setTimeout (function(){
            global.style.display = 'none';
            chenpiono.innerText = '';
            for (let ax = 0; ax < met.length; ax++) {
            met[ax].innerText = ''
            };
             met.splice(0,9)
            },2000);  
            }    
         };
};      
         let clearing = function () {
             for (let ax = 0;ax < met.length;ax++) {
             met[ax].innerHTML  = '' ;
             };
        };