let crossBtn = document.querySelector('#close');
let noticeDiv = document.querySelector('.notice')
let dob = document.querySelector('#input-date');
let number = document.querySelector('#input-number');
let btnCheck = document.querySelector('#btn-check');
let sadDiv = document.querySelector('.sad-div');
let happyDiv = document.querySelector('.happy-div');


function checkLuckyDob(dob,num){
    let sum = 0 ;
    for (let i=0; i<dob.length; i++){
        if (dob[i] == '/'){
            continue
        }
        else{
            sum += dob[i]
        }
    }
    if (dob % num == 0){
        console.log("happy")
        happyDiv.style.display = "block"
    }
    else{
        console.log("sad")
        sadDiv.style.display = "block"
    }
}




btnCheck.addEventListener('click', function(){
    checkLuckyDob(dob.value,number.value)
})

crossBtn.addEventListener('click', ()=>{
    noticeDiv.style.display = "none";
})
