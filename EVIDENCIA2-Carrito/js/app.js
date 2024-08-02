const vaciar = document.querySelector("#vaciar-carrito");
const carrito = document.querySelector()
/* vaciar.addEventListener("click", (e)=>{
    console.log(e.target.innerText)
}) */

const listarCursos = document.querySelector("#lista-carrito tbody");

/* listarCursos.addEventListener("mouseenter", (e)=>{
    console.log("Pasando por la lista")
})  */

/* const add = document.querySelector("#lista-cursos a");

add.addEventListener("click", (evt)=>{
    evt.preventDefault()
    console.log(evt.target.innerText)

}) */

/* Funciones carrito */
function leerDatosCurso(curso){
    //crear objeto curso
    const cursoElegido = {
        nombre : curso.children[0].textContent,
        precio: curso.children[2].textContent,
        imagen: curso.children[3]
    }


    console.log(cursoElegido)
    
}



const agregarCurso = (evt)=>{
    evt.preventDefault()
    if(evt.target.classList.contains("button-primary")){
        console.log("Agregando al carrito")
        leerDatosCurso(evt.target.parentElement)
    }

}

//listarCursos.addEventListener("click", agregarCurso)