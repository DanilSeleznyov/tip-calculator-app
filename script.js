let tip;
let index;
const tipItems = document.querySelectorAll('.tip_item')
tipItems.forEach(el=>{
    el.addEventListener('click', ()=>{
        index = el.id
        getValue(index)
    })
})

function removeClass() {
    tipItems.forEach(el => {
        el.classList.remove('selected');
    });
}
function getInputTip() {
    tip = document.querySelector('.tip_item_custom').value
    checkInputs()
}

function getValue(index){
    let indexArr = [5,10,15,25,50]
    tip = indexArr[index]
    removeClass()
    tipItems[index].classList.add('selected')
    document.querySelector('.tip_item_custom').value = null
    checkInputs()
}

function checkInputs(){
    if(document.querySelector('.bill').value != 0 &&
    document.querySelector('.people').value != 0 &&
    tip != undefined){
        calcResults()
    }

    if (document.querySelector('.people').value <= 0) {
        document.querySelector('.empty_error').style.display = 'block'
    }else{
        document.querySelector('.empty_error').style.display = 'none'
    }
}

function calcResults() {
    let bill = document.querySelector('.bill').value
    let people = document.querySelector('.people').value
    let tipAmount = ((bill/100)*tip)/people
    let total = (bill/people) + ((bill/100)*tip)/people
    document.querySelector('.tip_amount').innerHTML = tipAmount.toFixed(2)
    document.querySelector('.total').innerHTML = total.toFixed(2)
    let usualText = 'font-size: 45px; gap:23px;'
    let smallText = 'font-size: 40px; gap:31px;'
    let verySmallText = 'font-size: 35px; gap:40px;'
    let extraSmallText = 'font-size: 30px; gap:48px;'
    if(tipAmount>=10000){
        document.querySelector('.numbers').style.cssText = smallText
    }else{
        document.querySelector('.numbers').style.cssText = usualText
    }
    if(total>=100000){
        document.querySelector('.numbers').style.cssText = smallText
    }else{
        document.querySelector('.numbers').style.cssText = usualText
    }
    if(tipAmount>=100000){
        document.querySelector('.numbers').style.cssText = verySmallText
    }
    if(total>=1000000){
        document.querySelector('.numbers').style.cssText = verySmallText
    }
    if(tipAmount>=10000000){
        document.querySelector('.numbers').style.cssText = extraSmallText
    }
    if(total>=100000000){
        document.querySelector('.numbers').style.cssText = extraSmallText
    }
}

function reset(){
    document.querySelector('.people').value = null
    document.querySelector('.bill').value = null
    document.querySelector('.tip_item_custom').value = null
    tip = null
    document.querySelector('.tip_amount').innerHTML = 0
    document.querySelector('.total').innerHTML = 0
    document.querySelector('.empty_error').style.display = 'none'
    removeClass()
    checkInputs()
}