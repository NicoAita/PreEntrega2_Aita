
//Defino el Contructor:

//Este constructor me va a crear el carrito del usuario. Va a poner todos los productos que este seleccione.
class Compra {
    constructor(carritoDeCompras) {
        this.carrito = carritoDeCompras;
    }
    obtenerSubtotal() {
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acumulador, producto)=> acumulador + producto.precio, 0);
        }
    }
}



//Defino la clase:

/* const carrito = new Compra(carrito); 

carrito.obtenerSubtotal()  *///Este método va a llamar a "reduce", va a hacer todo el cálculo de los productos almacenados en el carrito y retornarnos el subtotal de la compra.