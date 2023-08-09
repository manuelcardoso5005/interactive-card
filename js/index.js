const _name = document.querySelector("#name")
const _number = document.querySelector("#number")
const _date = document.querySelector("#date")
const _month = document.querySelector("#month")
const _cvc = document.querySelector("#cvc")

const card_name = document.querySelector(".card-name")
const card_number = document.querySelector(".card-number")
const card_mm = document.querySelector(".mm")
const card_yy = document.querySelector(".yy")
const card_cvc = document.querySelector(".card-cvc")

const msgname = document.querySelector('.msgname')
const msgnumber = document.querySelector('.msgnumber')
const msgtime = document.querySelector('.msgtime')
const msgcvc = document.querySelector('.msgcvc')

const formulary = document.querySelector('.formulary-box')
const thanks = document.querySelector('.complete')
const btn_confirm = document.querySelector("#confirm")


_name.addEventListener('input', ()=>{
    card_name.textContent = _name.value
})

_number.addEventListener('input', ()=>{
    const numeroCartao = _number.value.replace(/\D/g, '');
    const formattedNumeroCartao = numeroCartao.replace(/(\d{4})(?=\d)/g, '$1 ');
    card_number.textContent = formattedNumeroCartao
})

_date.addEventListener('input', ()=>{
    const numero = _date.value
    const numeroFormatado = numero.padStart(2, '0')
    card_mm.textContent =  numeroFormatado
})

_month.addEventListener('input', ()=>{
    card_yy.textContent = _month.value
})

_cvc.addEventListener('input', ()=>{
    card_cvc.textContent = _cvc.value
})

_name.addEventListener('change', ()=>{
    validarNome (_name)
})

_number.addEventListener('change', ()=>{
    validarNumber(_number)
})

_date.addEventListener('change', ()=>{
    validarTime(_date, msgtime)
})

_month.addEventListener('change', ()=>{
    validarTime(_month, msgtime)
})

_cvc.addEventListener('change', ()=>{
    validarCvc (_cvc)
})

btn_confirm.addEventListener('click', ()=>{

    validarNumber(_number)
    validarNome (_name)
    validarTime(_date, msgtime)
    validarTime(_month, msgtime)
    validarCvc (_cvc)

    if ((msgname.textContent == "" && msgnumber.textContent=="" && msgtime.textContent =="" && msgcvc.textContent=="") ){
        formulary.style.display = "none"
        thanks.style.display = "block"

    }
    
})

function validarNome (nome){
    if (nome.value == "" || nome.value.length < 3 || !isNaN(nome.value)) {
        card_name.textContent = "Jane Appleseed"
        msgname.textContent = "Put a valid name"
        nome.style.border = "1px solid hsl(0, 100%, 66%)"
    } else {
        corBorda (nome, msgname)
    }
}

function validarNumber(valor){
    if (valor.value == "" || valor.value.length < 16 || isNaN(valor.value)){
        card_number.textContent = "0000 0000 0000 0000"
        msgnumber.textContent = "Put a valid number"
        valor.style.border = "1px solid hsl(0, 100%, 66%)"
    } else {
        corBorda (valor, msgnumber)
    }
}

function validarCvc (cvc){
    if (cvc.value == "" || cvc.value < 3 || isNaN(cvc.value)){
        cvc.textContent = "000"
        msgcvc.textContent = "Put a valid number"
        cvc.style.border = "1px solid hsl(0, 100%, 66%)"
    
    } else {
        corBorda (cvc, msgcvc)

    }
}

function corBorda (borda, messageErro){
    messageErro.textContent =  ""
    borda.style.border = "1px solid hsl(270, 3%, 87%)"
}

function validarTime(_time, msgError){
    if (_time.value == "" || _time.value.length > 2){
        msgError.textContent = "Can't be blank"
        _time.style.border = "1px solid hsl(0, 100%, 66%)"
       
    } else {
        corBorda (_time, msgError)
    }
}
