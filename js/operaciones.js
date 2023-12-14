// SUMA
let suma = document.getElementById("sumar");
let resultadosuma = document.getElementById("resultadosuma");

suma.addEventListener("click",hacerSuma);
function hacerSuma(){
    let n1=parseFloat(document.getElementById("n1").value);
    let n2=parseFloat(document.getElementById("n2").value);
    
    let s=n1+n2;
    resultadosuma.innerHTML=`La suma es ${s}`;
}

// RESTA
let resta = document.getElementById("restar");
let resultadoresta = document.getElementById("resultadoresta");

resta.addEventListener("click",hacerResta);
function hacerResta(){
    let n1=parseFloat(document.getElementById("nu1").value);
    let n2=parseFloat(document.getElementById("nu2").value);

    let r=n1-n2;
    resultadoresta.innerHTML=`La resta es ${r}`;
}

// MULTIPLICACION
let multiplicacion = document.getElementById("multiplicacion");
let resultadomultiplicacion = document.getElementById("resultadomultiplicacion");

multiplicacion.addEventListener("click",hacerMultiplicacion);

function hacerMultiplicacion(){
    let n1=parseFloat(document.getElementById("num1").value);
    let n2=parseFloat(document.getElementById("num2").value);

    let m=n1*n2;
    resultadomultiplicacion.innerHTML=`La multiplicacion es ${m}`;
}

// DIVISION
let div = document.getElementById("division");
let resultadodivision = document.getElementById("resultadodivision");

division.addEventListener("click",hacerDivision);

function hacerDivision(){
    let n1=parseFloat(document.getElementById("nume1").value);
    let n2=parseFloat(document.getElementById("nume2").value);

    let d=n1/n2;
    resultadodivision.innerHTML=`La division es ${d}`;
}
// SUMA DE FRACCION
// let bfs = document.getElementById("bfs");
// let rfs = document.getElementById("rfs");

// bfs.addEventListener("click",frasuma);

// function frasuma(){
//     let f1=parseInt(document.getElementById("f1").value);
//     let f2=parseInt(document.getElementById("f2").value);
//     let f3=parseInt(document.getElementById("f3").value);
//     let f4=parseInt(document.getElementById("f4").value);

//     let fns= (f1*f4) + (f2*f3);
//     let fds= f2*f4;

//     rfs.innerHTML=`La suma de la Fracion es `;
    
// }