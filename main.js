debugger

function ingresarNombre(){
    alert("Bienvenido a Kie Brand");
    let nombre = prompt("Ingrese su nombre");
    while (nombre === "" || nombre === null){
        nombre = prompt ("Ingrese su nombre");
    }
}

function verProductos(){
    let producto;
    do {
        producto = prompt(" ¿Que prenda va a elegir? \n(1) Buzo Callum  \n(2) Jogger Lagon \n(3) Remera Frosty");
    } while (producto != 1 && producto != 2 && producto != 3);
    
    switch (producto){
        case "1":
            return "Buzo Callum";
        case "2":
            return "Jogger Lagon";
        case "3":
            return "Remera Frosty";
    }
}

function validarPrecio(producto){
    if (producto === "Buzo Callum"){
        return 10500;
    } else if (producto === "Jogger Lagon"){
        return 8000;
    } else{
        return 6750;
    }
}

function cobrar(producto,precio){
    alert ("Eligio el producto: " + producto.toUpperCase() + "\nPrecio $" + precio);

    let abonar = prompt("Ingrese con cuanto desea abonar :");
    if (abonar >= precio){
        alert ("Su vuelto es $" + (abonar-precio) + " Muchas gracias por su compra!");
    } else{
        alert ("Usted no tiene dinero para efectuar la compra de: " + producto.toUpperCase());
    }
}

ingresarNombre();
let productoSeleccionado = verProductos();
let precioProducto = validarPrecio(productoSeleccionado);
cobrar(productoSeleccionado,precioProducto);