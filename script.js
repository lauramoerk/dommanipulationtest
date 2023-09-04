const heading = document.querySelector('h1');
heading.classList.add('dynamicheading')
const dynamicHeading = document.querySelector('.dynamicHeading');
const main = document.querySelector('main');
const newDiv = document.createElement("div");
const a = document.createElement("a")



heading.style.color = "pink";


heading.textContent = "Her er en liste af links til nice hjemmesider";

main.append(newDiv);
newDiv.append(a);
a.href = "www.google.dk";
a.textContent = "google"

// finde og ændre titel

let inspirationTitle = document.querySelector('#listetitel');
inspirationTitle.innerHTML = "Liste af inspiration:";

// lave container om til en variabel

let inspirationsContainer = document.querySelector('#inspirationscontainer');

// lave objekter for inspirationslinks

let inspiration1 = {
    title: 'Behance',
    url: "https://www.behance.net/" ,
}
let inspiration2 = {
    title: 'Dribbble',
    url: "https://dribbble.com/" ,  
}
let inspiration3 = {
    title: 'Awwwards',
    url: "https://www.awwwards.com/websites/" ,   
}


//samle objekter i en array:
let inspiration = [inspiration1, inspiration2, inspiration3];




let link1 = document.createElement('a');
link1.innerText = inspiration1.title;
link1.setAttribute('href', inspiration1.url);
console.log(link1);

let link1El = document.createElement('li');
link1El.appendChild(link1);

let link2 = document.createElement('a');
link2.innerText = inspiration2.title;
link2.setAttribute('href', inspiration2.url);
console.log(link2);

let link2El = document.createElement('li');
link2El.appendChild(link2);

let link3 = document.createElement('a');
link3.innerText = inspiration3.title;
link3.setAttribute('href', inspiration3.url);
console.log(link3);

let link3El = document.createElement('li');
link3El.appendChild(link3);

inspirationsContainer.appendChild(link1El);
inspirationsContainer.appendChild(link2El);
inspirationsContainer.appendChild(link3El);



