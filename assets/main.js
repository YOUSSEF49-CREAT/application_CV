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
        frstname : frstname.value.toLowerCase() ,
        lastname : lastname.value.toLowerCase() ,
        emaile : emaile.value.toLowerCase() ,
        telephone : telephone.value.toLowerCase() ,
        adresse : adresse.value.toLowerCase() ,
        ville : ville.value.toLowerCase() ,
        dtnaisan : dtnaisan.value.toLowerCase() ,
        lienais : lienais.value.toLowerCase() ,
        nationale : nationale.value.toLowerCase() ,
        permis : permis.value.toLowerCase(),
        nomWORK : nomWORK.value.toLowerCase() ,
        villework : villework.value.toLowerCase() ,
        departwork : departwork.value.toLowerCase() ,
        finalework : finalework.value.toLowerCase() ,
        contrat : contrat.value.toLowerCase() ,
        deswork : deswork.value.toLowerCase() ,
        deplome : deplome.value.toLowerCase() ,
        ecole : ecole.value.toLowerCase() ,
        anneScool : anneScool.value.toLowerCase() ,
        villescool : villescool.value.toLowerCase() , 
    }
    data_cv.push(data_cv_pro)
    localStorage.setItem('cv' , JSON.stringify(data_cv));
    affiche()

                 frstname.value = "" ;
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
affiche();
// *************************************afich*************************************************************************

function affiche(){
    let table_cv = '';
    let espace = " " ;
    for(let i = 0 ; i < data_cv.length ; i++){
        table_cv += 
                    `  <div class="cv__body">
                                              <div class="photoCv">
                                                         <i class="fa-solid fa-user"></i>
                                                         <h1>${data_cv[i].frstname + espace + data_cv[i].lastname }</h1>
                                              </div>
                                              <p class="des">${data_cv[i].deswork}</p>
                                              <div class="lighn-separ"></div>
                                              <h3>information personelle</h3>
                                              <div class="donee__personl">
                                                          <div class="key-per">
                                                                 <p>prenom</p>
                                                                 <p>nom</p>
                                                                 <p>email</p>
                                                                 <p>telephone</p>
                                                                 <p>adresse</p>
                                                                 <p>ville</p>
                                                                 <p>date de naissance</p>
                                                                 <p>lieu de naissance</p>
                                                                 <p>nationalite</p>
                                                                 <p>type de permis</p>
                                                          </div>
                                                          <div class="value-per">
                                                                 <p>${data_cv[i].frstname}</p>
                                                                 <p>${data_cv[i].lastname}</p>
                                                                 <p>${data_cv[i].emaile}</p>
                                                                 <p>${data_cv[i].telephone}</p>
                                                                 <p>${data_cv[i].adresse}</p>
                                                                 <p>${data_cv[i].ville}</p>
                                                                 <p>${data_cv[i].dtnaisan}</p>
                                                                 <p>${data_cv[i].lienais}</p>
                                                                 <p>${data_cv[i].nationale}</p>
                                                                 <p>${data_cv[i].permis}</p>
                                                          </div>
                                              </div>
                                              <div class="lighn-separ"></div>
                                              <h3>enseignement</h3>
                                              <div class="enseignement">
                                                          <div class="ensign-s">
                                                                      <p>nom de lecole</p>
                                                                      <p>anne scolaire</p>
                                                                      <p>deplome</p>
                                                                      <p>la ville</p>
                                                          </div>
                                                          <div class="ensign-s">
                                                                      <p>${data_cv[i].ecole}</p>
                                                                      <p>${data_cv[i].anneScool}</p>
                                                                      <p>${data_cv[i].deplome}</p>
                                                                      <p>${data_cv[i].villescool}</p>
                                                          </div>
                                              </div>
                                              <div class="lighn-separ"></div>
                                              <h3>information profetionelle</h3>
                                              <div class="exprswork">
                                                           <div class="ensign-s">
                                                                      <p>la periode</p>
                                                                      <p>nom de societe</p>
                                                                      <p>la ville de societe</p>
                                                                      <p>type de contrat</p>
                                                          </div>
                                                          <div class="ensign-s">
                                                                      <p>${data_cv[i].departwork}   ***  ${data_cv[i].finalework}</p>
                                                                      <p>${data_cv[i].nomWORK}</p>
                                                                      <p>${data_cv[i].villework}</p>
                                                                      <p>${data_cv[i].contrat}</p>
                                                          </div>
                                              </div>
                                                
                                   </div>
                                   <div class="cvbackgbtn">
                                                              <button>updite</button>
                                                                 <button>delete</button>
                                                 </div>
                                   `
    }
    console.log(table_cv)
    document.getElementById('cvbackg').innerHTML = table_cv ;
}
affiche();