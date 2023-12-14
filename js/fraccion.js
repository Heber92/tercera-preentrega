// SUMA DE FRACCION
let bfs = document.getElementById("bfs");
let rfs = document.getElementById("rfs");

bfs.addEventListener("click",frasuma);

function frasuma(){
    let f1=parseInt(document.getElementById("f1").value);
    let f2=parseInt(document.getElementById("f2").value);
    let f3=parseInt(document.getElementById("f3").value);
    let f4=parseInt(document.getElementById("f4").value);

    let fns= (f1*f4) + (f2*f3);
    let fds= f2*f4;

    rfs.innerHTML=`La suma de la Fracion es ${fns}/${fds}`;
}
// RESTA DE FRACCION
let bfr = document.getElementById("bfr");
let rfr = document.getElementById("rfr");

bfr.addEventListener("click",fraresta);

function fraresta(){
    let f1=parseInt(document.getElementById("fr1").value);
    let f2=parseInt(document.getElementById("fr2").value);
    let f3=parseInt(document.getElementById("fr3").value);
    let f4=parseInt(document.getElementById("fr4").value);

    let fnr= (f1*f4) - (f2*f3);
    let fdr= f2*f4;

    rfr.innerHTML=`La resta de la Fracion es ${fnr}/${fdr}`;
}
//MULTIPLICACION DE FRACCION
let bfm = document.getElementById("bfm");
let rfm = document.getElementById("rfm");

bfm.addEventListener("click",framultiplicacion);

function framultiplicacion(){
    let f1=parseInt(document.getElementById("fra1").value);
    let f2=parseInt(document.getElementById("fra2").value);
    let f3=parseInt(document.getElementById("fra3").value);
    let f4=parseInt(document.getElementById("fra4").value);

    let fnm= f1*f3;
    let fdm= f2*f4;

    rfm.innerHTML=`La multiplicacion de la Fracion es ${fnm}/${fdm}`;
}
//DIVISION DE FRACCION
let bfd = document.getElementById("bfd");
let rfd = document.getElementById("rfd");

bfd.addEventListener("click",fradivision);

function fradivision(){
    let f1=parseInt(document.getElementById("frac1").value);
    let f2=parseInt(document.getElementById("frac2").value);
    let f3=parseInt(document.getElementById("frac3").value);
    let f4=parseInt(document.getElementById("frac4").value);

    let fnd= f1*f4;
    let fdd= f2*f3;

    rfd.innerHTML=`La multiplicacion de la Fracion es ${fnd}/${fdd}`;
}