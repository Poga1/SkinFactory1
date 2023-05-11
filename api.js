document.addEventListener('DOMContentLoaded', traerProductos)
const contenedor = document.querySelector('#contenedor')
const modal = new boostrap.Modal('#modal', {});

async function traerProductos() {
    const url = 'https://fakestoreapi.com/products'

    try {
        const resultado = await fetch(url)
        const respuesta = await resultado.json();
        pintarProductos(respuesta);
    } catch (error) {
        console.log(error)
    }
}

function pintarProductos(productos) {
    console.log(productos)
    productos.forEach((prod) => {
        const {id, title, price, category, description, image } = prod
        contenedor.innerHTML +=  `<div class="card" style="width: 18rem;">
            <img src = "${image}" class="card-img-top" alt = "Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${description}</p>
                    <p class="card-subtitle mb-2 text-muted">$${price}</p>
                    <p class="card-subtitle mb-2">${category}</p>
                    <button onclick=verProducto(${id}) class="btn btn-primary">Ver Imagen</button>
                </div>
     </div > 
     `;



    });
}

async function verProducto(id){
    const url= `https://fakestoreapi.com/products/${id}`

    try {
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        verProductoDetalle(resultado);
    } catch (error) {
        console.log(error)
        
    }
}

function verProductoDetalle(resultado){
    const {title, price, category, image } = resultado
    const modalTitle = document.querySelector('.modal .modal-title')
    const modalBody = document.querySelector('.modal .modal-body')
    modalTitle.textContent = title
    modalBody.innerHTML = `<img class= "img-fluid" src="${image}"
    <p class="text-center text-primary">Precio: ${price}</p> 
    <p class="text-center text-danger">Categoria: ${category}</p> 
    `
    
    

    modal.show()
}


