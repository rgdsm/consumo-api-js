const inputText = document.querySelector("#inputSearch");
const inputButton = document.querySelector("#inputButton");
const container = document.querySelector(".container");


const apiKey = "c989742e";

inputButton.addEventListener("click", (event) => {
  inputValue = inputText.value;


  const url = `https://www.omdbapi.com/?s=${inputValue}&apikey=${apiKey}`;


  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      if (json.Response == "True") {

        container.innerHTML = ""

        json.Search.forEach(movie => {
        container.innerHTML +=`
        <div>
        <h2>${movie.Title}</h2>, 
        <img src="${movie.Poster}" alt="${movie.Title}">
        <p>${movie.Year}</p>
        </div>
        `
        });

      } else {
        container.innerHTML = `<p>Filme não encontrado </p>`
      }
      
    }) .catch(err => {
        console.log(`Ocorreu um erro: `, err)
    })

                inputValue = ""
});
