let slider = document.querySelector(".slider__contenedor")
let sliderIndividual = document.querySelectorAll(".contenido__slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 3000;

window.addEventListener("resize", function(){
    width = sliderIndividual[0].clientWidth;
})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform .9s";
    contador++;

    if(contador == sliderIndividual.length){   
        

        contador = 1;
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s";
        },1500)
    }
}