import slide1 from './assets/slide1.png';


const title = document.createElement('h2');
title.textContent = "This is webpack";

const page = document.querySelector('body');
page.append(title);

const img = new Image();
img.src = slide1;
page.appendChild(img);