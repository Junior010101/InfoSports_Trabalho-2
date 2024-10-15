const form = document.getElementById("formula");

form.addEventListener('submit', (e) => {
    let peso = document.getElementById("pesos").value;
    let altura = document.getElementById("alturas").value;

    if (peso == '' || peso == null && altura == '' || altura == null){
        console.error();
    }
    else {
        e.preventDefault();
        caucular();

        document.getElementById("pesos").value = '';
        document.getElementById("alturas").value = '';
    }
})
function caucular() {
    let peso = document.getElementById("pesos").value;
    let altura = document.getElementById("alturas").value;

    let Imc = peso / (altura ** 2);

    document.getElementById("imc").innerHTML = "Seu IMC é Aproximadamente: " + Imc.toFixed(1);

    if (Imc <= 18.5){
        document.getElementById("saude").innerHTML = "CLASSIFICAÇÃO: MAGREZA";
        document.getElementById("grau").innerHTML = "OBESIDADE (Grau): 0";
    }
    if (Imc >= 18.6 && Imc <= 24.9){
        document.getElementById("saude").innerHTML = "CLASSIFICAÇÃO: NORMAL";
        document.getElementById("grau").innerHTML = "OBESIDADE (Grau): 0";
    }
    if (Imc >= 25 && Imc <= 29.9){
        document.getElementById("saude").innerHTML = "CLASSIFICAÇÃO: SOBREPESO";
        document.getElementById("grau").innerHTML = "OBESIDADE (Grau): 1";
    }
    if (Imc >= 30 && Imc <= 39.9){
        document.getElementById("saude").innerHTML = "CLASSIFICAÇÃO: OBESIDADE";
        document.getElementById("grau").innerHTML = "OBESIDADE (Grau): 2";
    }
    if (Imc >= 40){
        document.getElementById("saude").innerHTML = "CLASSIFICAÇÃO: OBESIDADE GRAVE";
        document.getElementById("grau").innerHTML = "OBESIDADE (Grau): 3";
    }
    
    let modal = document.getElementById("saida");
    modal.show()
}

