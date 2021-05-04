const btn = document.querySelector('#btnRadius')
const radius = document.querySelector('#radius')
const inpTopLeft = document.querySelector('.inputLeftTop')
const inpTopRight = document.querySelector('.inputRightTop')
const inpBottonLeft = document.querySelector('.inputLeftBotton')
const inpBottonRight = document.querySelector('.inputRightBotton')
const inputsValue = document.querySelector('.inputsValue')
const p = document.querySelector('#p')
const pp = document.querySelector('#pp')
const ppp = document.querySelector('#ppp')
const comun = document.querySelector('.emComun')




btn.addEventListener('click', function (e) {
    modificaBorda()
    resultadoBorda()

})

function modificaBorda() {
    radius.style.borderTopLeftRadius = inpTopLeft.value + "px"
    radius.style.transition = '0.4s ease'
    radius.style.borderTopRightRadius = inpTopRight.value + "px"
    radius.style.borderBottomLeftRadius = inpBottonLeft.value + "px"
    radius.style.borderBottomRightRadius = inpBottonRight.value + "px"


}
/*const inpTopLeft = document.querySelector('.inputLeftTop')
const inpTopRight = document.querySelector('.inputRightTop')
const inpBottonLeft = document.querySelector('.inputLeftBotton')
const inpBottonRight = document.querySelector('.inputRightBotton')*/
function resultadoBorda() {
    if (inpTopLeft.value == inpTopRight.value && inpBottonLeft.value == inpBottonRight.value) {


       
        p.innerHTML = "-webkit-border-radius:" + inpTopRight.value + "px"
        pp.innerHTML= "-moz-border-radius:" + inpTopRight.value + "px"
        ppp.innerHTML ="border-radius:" + inpTopRight.value + "px"
        return

    }
   

  


}

//maximo 12 combinaçoes 3 pra cada borda
/*-webkit-border-top-left-radius: 99px; 999
-webkit-border-top-right-radius: 88px;
-webkit-border-bottom-right-radius: 77px;
-webkit-border-bottom-left-radius: 34px;
-moz-border-radius-topleft: 99px; 99
-moz-border-radius-topright: 88px;
-moz-border-radius-bottomright: 77px;
-moz-border-radius-bottomleft: 34px;
border-top-left-radius: 99px; 99
border-top-right-radius: 88px;
border-bottom-right-radius: 77px;
border-bottom-left-radius: 34px;
*/

