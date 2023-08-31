
var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

// deletes the last element of each value entered
function nextIndex(string){
    let preIndex = string.split('');
    preIndex.pop();
    return preIndex.join().replaceAll(",", "");
}

function getLog(x) {    
    return Math.log10(x);
   
}
function raisePower(x,y){
      
     
    
    
}

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        const π = 3.142857;
        if (btntext == "x") {
            btn = '*';
        }
        if (btntext == "÷") {
            btntext = "/"
        }
        
        if (btntext == "pi") {
            btntext = π;
        }

        if (btntext == '=') {
            console.log(screen.value);
            if (screen.value == "" || screen.value == undefined) {
                alert("Please add a number");
                btntext = "";
            } else {
                screen.value = eval(screen.value);
                btntext = "";
            }
        }
        if (btntext == "CE"){
            return screen.value = "" 
        }
        if (btntext == "AC"){
            return screen.value = nextIndex(screen.value);
        }
        if (btntext == "log"){
            return screen.value = getLog(screen.value);
        }
        if (btntext == "root"){
            return screen.value = sqRT(screen.value);
        }

        screen.value += btntext;
    });
    
};



