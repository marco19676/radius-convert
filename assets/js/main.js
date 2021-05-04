







const inpTopLeft = document.querySelector('.inputLeftTop')

const inpTopRight = document.querySelector('.inputRightTop')

const inpBottonLeft = document.querySelector('.inputLeftBotton')

const inpBottonRight = document.querySelector('.inputRightBotton')




const btn = document.querySelector('#btnRadius')

btn.addEventListener('click', function () {
   
   
   
    modificaBorda()
    resultadoBorda()
    

})
//funçoes

function modificaBorda() {



    const radius = document.querySelector('#radius')

    radius.style.borderTopLeftRadius = inpTopLeft.value + "px"
    
    radius.style.transition = '0.4s ease'
    radius.style.borderTopRightRadius = inpTopRight.value + "px"
    radius.style.borderBottomLeftRadius = inpBottonLeft.value + "px"
    radius.style.borderBottomRightRadius = inpBottonRight.value + "px"


}

function resultadoBorda() {


    const resultadoOne = document.querySelector('#resOne')

    const resultadoTwo = document.querySelector('#resTwo')

    const resultadoThree = document.querySelector('#resThree')

    const resultadoFour = document.querySelector('#resFour')

    resultadoOne.innerHTML = "-webkit-border-top-left-radius:" + inpTopLeft.value + "px" + "<p>-moz-border-radius-topleft:</p>" + inpTopLeft.value + "px" + "<p>border-top-left-radius: </p>" + inpTopLeft.value + "px"

    resultadoTwo.innerHTML = "-webkit-border-top-right-radius:" + inpTopRight.value + "px" + "<p>-moz-border-radius-topright:</p>" + inpTopRight.value + "px" + "<p>border-top-right-radius: </p>" + inpTopRight.value + "px"

    resultadoThree.innerHTML = "-webkit-border-bottom-right-radius:" + inpBottonLeft.value + "px" + "<p>-moz-border-radius-bottomright:</p>" + inpBottonLeft.value + "px" + "<p>border-bottom-right-radius: </p>" + inpBottonLeft.value + "px"

    resultadoFour.innerHTML = "-webkit-border-bottom-left-radius:" + inpBottonRight.value + "px" + "<p>-moz-border-radius-bottomleft:</p>" + inpBottonRight.value + "px" + "<p>border-bottom-left-radius: </p>" + inpBottonRight.value + "px"

}


document.addEventListener('load',alert('seja bem vindo(a) ao conversor de border radius!'))
