let form = document.querySelector('form');


let input = document.createElement('input');

let inputtext = document.createTextNode('description')

input.id = 'description';

input.setAttribute('type','text');

input.setAttribute('placeholder' , 'description-to-add')

input.appendChild(inputtext);

let button = form.querySelector('button');

form.insertBefore(input, button);


let fruititems = document.querySelector('.fruits');

let descriptionitems = document.querySelector('#description')

form.addEventListener('submit', function (event) {

event.preventDefault();

let fruitDescription = document.getElementById('description').value;

if (fruitDescription === '') {

    alert('Please enter a description.');

    return;

}

 

let descriptionPara = document.getElementById('description');

let fruitName = document.getElementById('fruit-to-add').value;

let newli = document.createElement('li');

newli.className = 'fruit';

newli.innerHTML = fruitName + "<p>" + descriptionPara.value + "</p>" + '<button class="delete-btn">x</button>'//3

newli.firstElementChild.style.fontStyle = "italic";

fruititems.appendChild(newli);



document.getElementById('fruit-to-add').value = '';

document.getElementById('description').value = '';
});

fruititems.addEventListener('click', function (event) {

if (event.target.classList.contains('delete-btn')) {

    let buttontodelete = event.target.parentElement;

    fruititems.removeChild(buttontodelete)

}
})


let filter = document.getElementById('filter');


filter.addEventListener('keyup', function(event) {

let textenterd = event.target.value.toLowerCase();

let fruititems = document.getElementsByClassName('fruit');

for(let i=0;i<fruititems.length;i++){

    let currentfruittext = fruititems[i].firstChild.textContent.toLowerCase();

    if(currentfruittext.indexOf(textenterd) == -1){

        fruititems[i].style.display = 'none';

    }else{

        fruititems[i].style.display = 'flex';

    }

}
})