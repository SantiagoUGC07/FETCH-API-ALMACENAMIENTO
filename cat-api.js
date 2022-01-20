let $btnGato = document.querySelector('#btnGato');

$btnGato.addEventListener('click', () =>
{
    fetch('https://api.thecatapi.com/v1/images/search').then(resp => resp.json()).then(data =>
    {
        //para procesar la promesa del servidor y decir que su respuesta,nos la devuelva en tipo objeto then(resp=>resp.json()), pero asu vez el json devuelve una promesa.
        //para procesar la promesa de json se coloca .then(data=>)
        console.log(data);
        let imagenGatito = document.createElement('img');
        imagenGatito.src = data[0].url;//para acceder al arreglo y al elemento url.
        document.body.appendChild(imagenGatito);
    });
    //para obtener la imagen de los perros..
    fetch('https://dog.ceo/api/breeds/image/random').then(resp => resp.json()).then(data =>
    {
        console.log(data);
        let imagenGatito = document.createElement('img');
        imagenGatito.src = data.message;//el url lo contiene el message y ya viene como objeto por eso no se pone en forma de arreglo.
        document.body.appendChild(imagenGatito);
    });

});
// Json = JavaScript Object Notation (UN OBJETO)
// fetch= solicitar info de http:
