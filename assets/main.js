const steps = document.querySelectorAll('.step')
let nxtbtn = document.getElementById('nextbtn')
let prvbtn = document.getElementById('prevbtn')


let compt = 0 ;


function upditstep(){
    steps.forEach((step , index ) => {
        step.classList.toggle('active', index === compt);
    });
    prvbtn.disabled = compt === 0 ;
    nxtbtn.disabled = compt === steps.length - 1 ;
}
nxtbtn.addEventListener('click', () =>{
    if(compt< steps.length - 1){
        compt++;
        upditstep()
    }
});
prvbtn.addEventListener('click', () =>{
    if(compt>0){
        compt--;
        upditstep()
    }
});
upditstep()