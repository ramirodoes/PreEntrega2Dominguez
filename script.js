function Producto(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

// Productos a la venta
  let camiseta = new Producto('Camiseta', 2000, 5);
  let short = new Producto('Short', 1000, 3);
  let medias = new Producto('Medias', 300, 10);
  let pelota = new Producto('Pelota', 2200, 2);


  let productos = [camiseta, short, medias, pelota];

// Disponibilidad
  function mostrarProductos() {
    let mensaje = 'PRODUCTOS DISPONIBLES:\n\n';
    for (let producto of productos) {
      mensaje += `-${producto.nombre} ($${producto.precio}) - Stock: ${producto.stock}\n`;
    }
    alert(mensaje);
  }

// Hacer la compra
  function comprarProducto() {
    let productoElegido = prompt('Ingrese el nombre del producto que desea comprar:');
    let productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() === productoElegido.toLowerCase());

    if (!productoEncontrado) {
      alert('El producto ingresado no existe en la tienda.');
      return;
    }
  
    let cantidadElegida = prompt(`Ingrese la cantidad de ${productoElegido} que desea comprar:`);
    cantidadElegida = parseInt(cantidadElegida);
  
    if (isNaN(cantidadElegida) || cantidadElegida <= 0) {
      alert('La cantidad ingresada no es válida.');
      return;
    }
  
    if (cantidadElegida > productoEncontrado.stock) {
      alert(`Lamentablemente no disponemos de esa cantidad de ${productoElegido} en stock.`);
      return;
    }
  
    let total = cantidadElegida * productoEncontrado.precio;
    if (confirm(`El total de la compra es $${total}. ¿Desea confirmar la compra?`)) {
      productoEncontrado.stock -= cantidadElegida;
      alert(`¡Gracias por comprar productos en La Escuelita de Sayago!`);
    }
  }
  
  // Tienda de La Escuelita
  alert('¡Bienvenido a la Tienda del Racing Club de Montevideo!\n\nAquí podrás encontrar toda la indumentaria y/o accesorios para alentar a La Escuelita de Sayago.');
  let opcion;
  do {
    opcion = prompt('Ingrese la opción que desea realizar:\n\n1- Ver productos disponibles\n2- Comprar un producto\n3- Salir');
    opcion = parseInt(opcion);
    switch(opcion) {
      case 1:
        mostrarProductos();
        break;
      case 2:
        comprarProducto();
        break;
      case 3:
        alert('¡Gracias por visitar la Tienda de La Escuelita!');
        break;
      default:
        alert('La opción ingresada no es válida. Por favor, ingrese una opción correcta.');
        break;
    }
  } while (opcion !== 3);
  