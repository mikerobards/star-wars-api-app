const textEl = document.getElementById('text-area')


function displayResults(data) {
    textEl.innerHTML = `${data.name}`
}

fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(data => displayResults(data))