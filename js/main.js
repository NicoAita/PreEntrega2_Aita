
/* 

    PPREMISAS A SEGUIR para la segunda preentrega:



Funciones de orden superior (métodos de búsqueda y trasnformación).

Funciones comunes con variables, constantes, arrays, etc.

Objetos JS - Arrays de objetos literales.

Lógica funcional de la aplicación.

Entradas - salidas (prompt, confirm, alert, console.log, console.warn, console.error).


- Crearemos una función a "llamar buscarProducto()" que retorne un resultado. Usaremos el método ".find()" para rastrear el producto por su ID (código).

- Crearemos una función "finalizarCompra()". Validaremos el carrito que tentga productos, si va todo ok: 
            - instacniaremos el objeto Compra(), pasándole el carrito como parámetro.
            - agradecerenis la compra.
            - vaciamos el carrito.
- Agrupamos tood en una sola función "comprar()"

*/





const carrito = [];

const productos = [{ codigo: 1, nombre: `Gorra HxH`, precio: 900 },
{ codigo: 2, nombre: `Remera HxH`, precio: 1000 }, { codigo: 3, nombre: `Canguro HxH`, precio: 1900 },
{ codigo: 4, nombre: `Pantuflas HxH`, precio: 700 }, { codigo: 5, nombre: `Taza HxH`, precio: 250 },
{ codigo: 6, nombre: `Libreta HxH`, precio: 320 }];


//Hago una función que emplea el método "find" para iterar los elementos de mi Array desde el primero al último. Me retorna una copia del objeto y deja de iterar. Si no encuentra coicidencia nos devuelve "undefined".
function buscarProducto(codigo) {
    let productoSeleccionado = productos.find((producto) => producto.codigo === codigo);
    return productoSeleccionado;
}


// La barra invertida \ se escribe con alt + 92. La "\n" me hace un salto de línea.

//Recordar siempre ponerle un parseInt al prompt o al resultado porque lo que ingrese el usuario siempre lo va a tomar como string y yo lo necesito como valor numérico para que JS lo entienda como tal.

function comprar() {
    let codigo = prompt("Ingresá el código del producto que querés agregar al carrito: \n 1- Gorra \n 2- Remera \n 3- Canguro \n 4- Pantuflas \n 5- Taza \n 6- Libreta");

    let productoElegido = buscarProducto(parseInt(codigo));

    if (productoElegido !== undefined) {
        carrito.push(productoElegido);



        let respuesta = confirm("¿Querés agregar otro producto más?😁");
        if (respuesta === true) {
            comprar() //Esto es un proceso de "recursividad" que es cuando llamo a la misma función dentro de ella.
        } else {
            const carritoUsuario = new Compra(carrito);
            let subtotal = carritoUsuario.obtenerSubtotal()
            console.table(carrito);
            alert("El costo toal de tu compra es de ➡ $" + subtotal);
            
            //Instancio la clase Compra, y le paso en los parámetros el "carrito" (el Array que se va a ir llenando).
            //Llamo al método obtenerSubtotal que está en la pestaña de "class" para que vaya sumando los precios de cada elemento que agrega el usuario y me devulva el resultado.
        }
    } else {
        alert("El código que ingresaste no es correcto🙃 Refrescá la página para empezar de nuevo (👉F5)");
    }

}

//Si cuando el usuario ingresa un valor, este no es numérico, en "let productoElegido" va a quedar un "undefined". Saber esto nos da pie para agregar un condicional IF que le advierta al usauario que el valor ingresado no es correcto. (Min.31:59)




















