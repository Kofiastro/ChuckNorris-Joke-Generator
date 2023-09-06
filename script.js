const jokeBtn = document.querySelector('#joke-btn');
const loading = document.querySelector('#joke');

function generateJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                loading.innerHTML=JSON.parse(this.responseText).value;
            }
            else {
                loading.innerHTML=('You got Jokes huh!, sorry Lad');
            }
        }
    }
    xhr.send();
};

//Add Event listeners 
jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded',generateJoke);