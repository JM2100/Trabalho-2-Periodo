function imprime(){
    
    document.getElementById('imprime').innerHTML = `
    <textarea rows="6" placeholder="De seu Feedback sobre o Site"
                         id="cor" onkeyup="mudaCorFonte()" ></textarea>
    `
    
}
function mudaCorFonte(){
    let r = Math.random()*255
    let g = Math.random()*255
    let b = Math.random()*255
    document.getElementById('cor').style.color = `
    rgb(${r},${g},${b})
    `
}