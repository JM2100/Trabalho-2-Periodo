function avisoNomeF() {
    let login = document.getElementById('login').value;
    if (login.trim().length > 2) {
        document.getElementById('avisoNome').innerHTML = "";
    } else {
        document.getElementById('avisoNome').innerHTML = "Mín. de 3 caracteres";
    }
}

function avisoSenhaF() {
    let senhal = document.getElementById('senhal').value;
    if (senhal.trim().length > 7) {
        document.getElementById('avisoSenha').innerHTML = "";
    } else {
        document.getElementById('avisoSenha').innerHTML = "Mín. de 8 caracteres";
    }
}

function logar() {
    var login = document.getElementById('login').value;
    var senhal = document.getElementById('senhal').value;
    
    if (login == "vitor" && senhal == "12345678") {
        location.href = "galeria.html";
    } else if (login != "vitor" && senhal == "12345678") {
        document.getElementById('avisoNome').innerHTML = "Login incorreto";
    } else if (login == "vitor" && senhal != "12345678") {
        document.getElementById('avisoSenha').innerHTML = "Senha incorreta"; 
    }else{
        document.getElementById('avisoSenha').innerHTML = "Usuario não cadastredo";
    }
}


import { images } from "./dados.js";

const galleryContainer = document.querySelector('#gallery-container');
const loadMoreButton = document.querySelector('#load-more');
console.log(galleryContainer, loadMoreButton);

const imagesPerpage = 4;
let currentImageIndex = 0;

function loadImages () {
    const pageImages = images.slice(currentImageIndex, currentImageIndex + imagesPerpage);
    currentImageIndex += imagesPerpage;
    
    pageImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const imgItem = document.createElement('img');
        imgItem.src = image.src;
        imgItem.alt = image.alt;

        galleryItem.appendChild(imgItem);
        galleryContainer.appendChild(galleryItem);
    });
}

loadImages();
loadMoreButton.addEventListener('click', loadImages);