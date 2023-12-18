document.addEventListener("DOMContentLoaded", function () {
    var peso = document.querySelector("#peso");
    var altura = document.querySelector("#altura");
    const pesoError = document.querySelector("#pesoError");
    const alturaError = document.querySelector("#alturaError");
    const btCalcular = document.querySelector("#calcular");

    function verificarErroPeso() {
        if (peso.value <= 0 || isNaN(peso.value)) {
            pesoError.classList.remove("hidden");
        } else {
            pesoError.classList.add("hidden");
        }
    }

    function verificarErroAltura() {
        if (altura.value <= 0 || isNaN(altura.value)) {
            alturaError.classList.remove("hidden");
        } else {
            alturaError.classList.add("hidden");
        }
    }

    function verificarDados() {
        verificarErroPeso();
        verificarErroAltura();
    }

    function verificarStatusIMC(imc) {
        var statusElement = document.querySelector("h3");

        if (imc < 18.5) {
            statusElement.textContent = "Você está abaixo do peso.";
        } else if (imc >= 18.5 && imc < 24.9) {
            statusElement.textContent = "Seu peso está normal.";
        } else if (imc >= 25 && imc < 29.9) {
            statusElement.textContent = "Você está com sobrepeso.";
        } else if (imc >= 30 && imc < 34.9) {
            statusElement.textContent = "Você está com obesidade grau 1.";
        } else if (imc >= 35 && imc < 39.9) {
            statusElement.textContent = "Você está com obesidade grau 2.";
        } else {
            statusElement.textContent = "Você está com obesidade grau 3.";
        }
    }

    function calcularIMC() {
        var weight = parseFloat(peso.value);
        var height = parseFloat(altura.value) / 100;
        var imc = weight / (height * height);

        var resultadoElement = document.querySelector(".container__resultado h2");
        var statusElement = document.querySelector(".container__resultado p");

        if (!isNaN(imc)) {
            resultadoElement.textContent = `Seu IMC é: ${imc.toFixed(2)}`;
            verificarStatusIMC(imc);
        } else {
            resultadoElement.textContent = `Confira os seus dados`;
            statusElement.textContent = "";
        }
    }

    btCalcular.addEventListener("click", function () {
        verificarDados();
        calcularIMC();
    });
});
