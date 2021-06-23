const textEl = document.getElementById('text-area')


function displayResults(data) {
    data.results.forEach(person => {
        textEl.innerHTML += `${person.name}
        <br>
        `
    })

}

fetch('https://swapi.dev/api/people/')
    .then(res => res.json())
    .then(data => {
        console.log(data.results)
        displayResults(data)
    })