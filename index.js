const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('joke-btn')

const API = 'https://icanhazdadjoke.com/'

async function getJoke() {
    try {
        const res = await fetch(API, {
            headers: {
                'accept': 'application/json',
            }
        })

        if(!res.ok) {
            throw new Error('Something went wrong!')
        }

        const data = await res.json()
        jokeEl.innerText = data.joke

    } catch (err) {
        console.log(err)
    }
}

//default joke on page load
getJoke()

jokeBtn.addEventListener('click', getJoke)