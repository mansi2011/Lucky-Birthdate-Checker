let crossBtn = document.querySelector('#close');
let noticeDiv = document.querySelector('.notice')
let dobInput = document.querySelector('#input-date');
let numberInput = document.querySelector('#input-number');
let btnCheck = document.querySelector('#btn-check');
let sadDiv = document.querySelector('.sad-div');
let happyDiv = document.querySelector('.happy-div');

var xyz = dobInput.value
var abc = numberInput.value

console.log(typeof(dobInput.value))
console.log(xyz,abc)

function checkLuckyDob(dob,num){
    let sum = 0 ;
    for (let i=0; i<dob.length; i++){
        if (dob[i] == '-'){
            continue
        }
        else{
            sum += dob[i]
        }
    }
    if (sum % num == 0){
        console.log("happy");
        happyDiv.style.display = "block";
        sadDiv.style.display = "none";
    }
    else{
        console.log("sad");
        sadDiv.style.display = "block";
        happyDiv.style.display = "none";
    }
}




btnCheck.addEventListener('click', function(){
    checkLuckyDob(dobInput.value,numberInput.value)
})

crossBtn.addEventListener('click', ()=>{
    noticeDiv.style.display = "none";
})
