const urlAPI = "https://jsonplaceholder.typicode.com/albums/1/photos";
const $cartas = document.querySelector("cartas");

fetch(urlAPI)
.then((resp) => resp.json())
.then((data) => {
    data.forEach((dato) => {
        const imagen = dato.thumbnailUrl;
        const titulo = dato.title;

        const contenido = `<div class = "col mb-4"> <div class="card">
        <img src = "${imagen}" class= " card-img-top" alt="...">
        <div class = "card-body"
        <h5 class = "card-title">${titulo}</h5>
        </div>
        </div>
        </div>;`
        const carta = document.createElement("div");
        carta.innerHTML = contenido;
        $cartas.appendChild(carta);
    });
});