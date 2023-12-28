//CUADRADO
let bac = document.getElementById("bac");
let rac = document.getElementById("rac");
let bpc = document.getElementById("bpc");
let rpc = document.getElementById("rpc");

bac.addEventListener("click",acuadrado);

function acuadrado(){
    let base=parseFloat(document.getElementById("bc1").value);
    let altura=parseFloat(document.getElementById("ac1").value);

    let areac = base*altura;

    rac.innerHTML=`El area del Cuadrado es: ${areac}`;
}

bpc.addEventListener("click",pcuadrado);

function pcuadrado(){
    let lado=parseFloat(document.getElementById("lc1").value);

    let perimetro = lado*4;

    rpc.innerHTML=`El Perimetro del Cuadrado es: ${perimetro}`;
}
//TRIANGULO
let bat = document.getElementById("bat");
let rat = document.getElementById("rat");
let bpt = document.getElementById("bpt");
let rpt = document.getElementById("rpt");

bat.addEventListener("click",atriangulo);

function atriangulo(){
    let base=parseFloat(document.getElementById("bt1").value);
    let altura=parseFloat(document.getElementById("at1").value);

    let areat = (base*altura)/2

    rat.innerHTML=`El area del Triangulo es: ${areat}`;
}

bpt.addEventListener("click",ptriangulo);

function ptriangulo(){
    let lado1=parseFloat(document.getElementById("lt1").value);
    let lado2=parseFloat(document.getElementById("lt2").value);
    let lado3=parseFloat(document.getElementById("lt3").value);

    let perimetro = lado1+lado2+lado3;

    rpt.innerHTML=`El perimetro del triangolo es: ${perimetro}`;
}
//RECTANGULO
let bar = document.getElementById("bar");
let rar = document.getElementById("rar");
let bpr = document.getElementById("bpr");
let rpr = document.getElementById("rpr");

bar.addEventListener("click",arectangulo);

 function arectangulo(){
    let base=parseFloat(document.getElementById("br1").value);
    let altura=parseFloat(document.getElementById("ar1").value);

    let area=base*altura;

    rar.innerHTML=`El area del Rectangulo es: ${area}`;
 }

 bpr.addEventListener("click",prectangulo);

function prectangulo(){
    let lado1=parseFloat(document.getElementById("lr1").value);
    let lado2=parseFloat(document.getElementById("lr2").value);

    let perimetro1 = lado1*2;
    let perimetro2 = lado2*2;
    let perf = perimetro1 + perimetro2;

    rpr.innerHTML=`El perimetro del triangolo es: ${perf}`;
}
//ROMBO
let barombo = document.getElementById("barombo");
let rarombo = document.getElementById("rarombo");
let bprombo = document.getElementById("bprombo");
let rprombo = document.getElementById("rprombo");

barombo.addEventListener("click",arombo);

function arombo(){
    let dm1=parseFloat(document.getElementById("dm1").value);
    let dm2=parseFloat(document.getElementById("dm2").value);

    let area = (dm1*dm2)/2;

    rarombo.innerHTML=`El area del Rombo es: ${area}`;
}
bprombo.addEventListener("click",prombo);

function prombo(){
    let lr=parseFloat(document.getElementById("lrombo").value);

    let perimetro = lr*4;

    rprombo.innerHTML=`El perimetro del Rombo es: ${perimetro}`;
}
//ROMBOIDE
let baromboide = document.getElementById("baromboide");
let raromboide = document.getElementById("raromboide");
let bpromboide = document.getElementById("bpromboide");
let rpromboide = document.getElementById("rpromboide");

baromboide.addEventListener("click",aromboide);
 function aromboide(){
    let bromboide=parseFloat(document.getElementById("bromboide").value);
    let aromboide=parseFloat(document.getElementById("aromboide").value);

    let area = bromboide*aromboide;

    raromboide.innerHTML=`El area del Romboide es: ${area}`;
 }
 bpromboide.addEventListener("click",prectangulo);

function prectangulo(){
    let lado1=parseFloat(document.getElementById("lromboide1").value);
    let lado2=parseFloat(document.getElementById("lromboide2").value);

    let perimetro1 = lado1*2;
    let perimetro2 = lado2*2;
    let perf = perimetro1 + perimetro2;

    rpromboide.innerHTML=`El perimetro del triangolo es: ${perf}`;
}
//TRAPECIO
let batrapecio = document.getElementById("batrapecio");
let ratrapecio = document.getElementById("ratrapecio");
let bptrapecio = document.getElementById("bptrapecio");
let rptrapecio = document.getElementById("rptrapecio");

batrapecio.addEventListener("click",atrapecio);

function atrapecio(){
    let bmt1=parseFloat(document.getElementById("bmt1").value);
    let bmt2=parseFloat(document.getElementById("bmt2").value);
    let atrapecio=parseFloat(document.getElementById("atrapecio").value);

    let area=((bmt1 + bmt2)*atrapecio)/2

    ratrapecio.innerHTML=`El area del Trapecio es: ${area}`;
}
bptrapecio.addEventListener("click",ptrapecio);

function ptrapecio(){
    let lado1=parseFloat(document.getElementById("ltr1").value);
    let lado2=parseFloat(document.getElementById("ltr2").value);
    let lado3=parseFloat(document.getElementById("ltr3").value);
    let lado4=parseFloat(document.getElementById("ltr4").value);

    let perimetro = lado1+lado2+lado3+lado4;

    rptrapecio.innerHTML=`El perimetro del triangolo es: ${perimetro}`;
}
// PENTAGONO
let bapentagono = document.getElementById("bapentagono");
let rapentagono = document.getElementById("rapentagono");
let bppentagono = document.getElementById("bppentagono");
let rppentagono = document.getElementById("rppentagono");

bapentagono.addEventListener("click",apentagono);

function apentagono(){
    let apotema=parseFloat(document.getElementById("apotema").value);
    let pp=parseFloat(document.getElementById("pp").value);

    let area=pp*apotema;

    rapentagono.innerHTML=`El area del Pentagono es: ${area}`;
}

bppentagono.addEventListener("click",ppentagono);

function ppentagono(){
    let lpentagono=parseFloat(document.getElementById("lpentagono").value);

    let perimetrop=lpentagono*5;

    rppentagono.innerHTML=`El perimetro del Pentagono es: ${perimetrop}`;
}
// CIRCULO
let bacirculo = document.getElementById("bacirculo");
let racirculo = document.getElementById("racirculo");
let bpcirculo = document.getElementById("bpcirculo");
let rpcirculo = document.getElementById("rpcirculo");

bacirculo.addEventListener("click",acirculo);

function acirculo(){
    let radio=parseFloat(document.getElementById("radio").value);

    let areac=radio*(3.1416*3.1416);

    racirculo.innerHTML=`El area del Circulo es: ${areac}`;
}

bpcirculo.addEventListener("click",pcirculo);

function pcirculo(){
    let diametro=parseFloat(document.getElementById("diametro").value);

    let perimetro = diametro*3.1416;

    rpcirculo.innerHTML=`El perimetro del Ciaculo es: ${perimetro}`;
}