var age = document.querySelector('#age');
var result = document.querySelector('#result');

age.addEventListener("keypress", function(){
    var ageValue = age.value;
    if(ageValue  <  11){
        result.innerHTML = `You Are Children`;
    }
    else if(ageValue  < 20){
        result.innerHTML = `You Are Teenager`;
    }
    else if(ageValue < 50){ 
        result.innerHTML = `You Are Young man`;
    }
    else if(ageValue < 200){
        result.innerHTML = `You Are Old `;
    }
    else{
        result.innerHTML = `You Are Alien`;
    }
});
