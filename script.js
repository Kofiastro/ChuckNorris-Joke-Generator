const jokeBtn = document.querySelector('#joke-btn');
const loading = document.querySelector('#joke');

async function generateJoke() {
    try {
        const res = await fetch('https://api.chucknorris.io/jokes/random');
        if (!res.ok) {
            loading.innerHTML = 'Oops No jokes on you!';
        }
        const data = await res.json();
        loading.innerHTML=data.value;
    }
    catch (error) {
        console.log(error);
    }
};

//Add Event listeners 
jokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);