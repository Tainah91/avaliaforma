function inicio() {
    const textoOriginal = "Olá Avaliador!";
    console.log("Olá avalia no navegador!!")
    const elementoTexto = document.querySelector("p")
    const audio = document.querySelector("audio")
    const btn = document.querySelector("button")
    const atrasoRapido = 5000 // Atraso em milissegundos (2 segundos)
    const atrasoDevagar = 7000

    alert("Olá avalia no navegador!")
    
    setTimeout(function () {
        btn.style.display = "none"     
        audio.play() 
    }, atrasoRapido);

    setTimeout(function () {
        elementoTexto.textContent = textoOriginal   
    }, atrasoDevagar);

alert("Olá avalia no navegador!")

}
