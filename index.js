const textEl = document.getElementById('text-area')


function displayResults(data) {
    textEl.innerHTML = `${data}`
}

fetch('https://swapi.dev/api/people/')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        displayResults(data)
    })