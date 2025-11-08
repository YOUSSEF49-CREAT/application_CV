const steps = document.querySelectorAll('.step')
const personel__globale = document.querySelectorAll('.pageS')
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
        skip_page()
    }
});
prvbtn.addEventListener('click', () =>{
    if(compt>0){
        compt--;
        upditstep()
        skip_page()
    }
});
upditstep()
skip_page()


function skip_page(){
    personel__globale.forEach((step , index ) => {
        step.classList.toggle('page_step', index === compt);
    });
    prvbtn.disabled = compt === 0 ;
    nxtbtn.disabled = compt === steps.length - 1 ;
}
// ******************************************declaration*************************************************************
let clearinput = document.querySelectorAll('input') 
let savebtn = document.getElementById('savebtn')
let frstname = document.getElementById('first-name')
let lastname = document.getElementById('last-name')
let emaile = document.getElementById('email')
let telephone = document.getElementById('telephone')
let adresse = document.getElementById('adresse')
let ville = document.getElementById('ville')
let dtnaisan = document.getElementById('date_nais')
let lienais = document.getElementById('lieu_nais')
let nationale = document.getElementById('nationalite')
let permis = document.getElementById('Permis')

let nomWORK = document.getElementById('nomWORK')
let villework = document.getElementById('villework')
let departwork = document.getElementById('departwork')
let finalework = document.getElementById('finalework')
let contrat = document.getElementById('contrat')
let deswork = document.getElementById('deswork')

let deplome = document.getElementById('deplome')
let ecole = document.getElementById('ecole')
let anneScool = document.getElementById('anneScool')
let villescool = document.getElementById('villescool')

// ********************************************************ajout*************************************************************

let data_cv ;
if(localStorage.cv != null){
    data_cv = JSON.parse(localStorage.cv)
}else{
    data_cv = [] ;
}
let btn = 0 ;
savebtn.addEventListener('click' , function() {
    
    btn++
    savebtn.disabled = btn === 1 ;
    let data_cv_pro = {
        fname : frstname.Value ,
        lname : lastname.value ,
        eml : emaile.value ,
        tele : telephone.value ,
        adrs : adresse.value ,
        vil : ville.value ,
        daten : dtnaisan.value ,
        linsn : lienais.value ,
        ntion : nationale.value ,
        prm : permis.value,
        nomwrk : nomWORK.value ,
        vilwork : villework.value ,
        deparwrk : departwork.value ,
        fnlwrk : finalework.value ,
        cntra : contrat.value ,
        descwrk : deswork.value ,
        deplm : deplome.value ,
        ecl : ecole.value ,
        anescl : anneScool.value ,
        vilscl : villescool.value , 
    }
    data_cv.push(data_cv_pro)
    localStorage.setItem('cv' , JSON.stringify(data_cv));

                 frstname.Value = "" ;
                lastname.value = "" ;
                 emaile.value = "" ;
                  telephone.value = "" ;
                  adresse.value = "" ;
                ville.value = "" ;
                dtnaisan.value = "" ;
                lienais.value = "" ;
                nationale.value = "" ;
                permis.value= "" ;
                 nomWORK.value = "" ;
                 villework.value = "" ;
                departwork.value = "" ;
                 finalework.value = "" ;
                contrat.value = "" ;
                 deswork.value = "" ;
                deplome.value = "" ;
                ecole.value = "" ;
                anneScool.value = "" ;
                 villescool.value = "" ; 
    
})
// *************************************afich*************************************************************************

