var klikAantal = Math.ceil(0*Math.random());
var eindScore = klikAantal*Math.random()*5;
var aantalUitvoering = document.getElementById('aantal');
var waarderingUitvoering = document.getElementById('waardering');
var Sterretjes = document.querySelectorAll('.geen');


function sterKleuring(NummerVoorSter, percent) {
 var sterNaam = 's' + NummerVoorSter;
    percent = Math.min(percent, 100);
    document.getElementById(sterNaam).style.width = percent+'%';
    document.getElementById(sterNaam).style.width = percent+'%';
    
    
}
//sterKleuring(2,40);

function kleurDeSterren(waardering) {
    for(var i=1; i<6; i++)  {
     
        sterKleuring(i, waardering*100);
        waardering --;
        
    }
     
}

//random genereren en uitvoeren in DOM document
function voerUit() {
    aantalUitvoering.innerHTML = klikAantal;
    waarderingUitvoering.innerHTML = Math.ceil(10*eindScore/klikAantal)/10;
    kleurDeSterren(Math.ceil(10*eindScore/klikAantal)/10);
    
    
}

voerUit();

function klikVerwerking() {
  klikAantal ++;
    var nummers = this.getAttribute('data-role');
    eindScore += parseInt(nummers);
    voerUit();
    
}
for(var i=0; i<Sterretjes.length; i++) {
 Sterretjes[i].addEventListener('click',klikVerwerking);   
}