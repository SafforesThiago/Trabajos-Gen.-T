{
    Usuario: "UnNuevoUsuario" ;
    Edad: 23 ;
    Direccion: "CalleDeMentira" ; 
    Fecha: "14/03/1999" ; 
    Contraseña: "UnaContraseñaMuySegura" 
}

var MiAuto = {},
     miAutoMarca = "Lamborghini",
     miAutoAño = 2022 
     miAuto.nuevo = true;

 var propertyKey = "modelo";
     miAuto[propertyKey] = "Aventador";

var  anotherPropertyKey = "Precio"
    MiAuto[anotherPropertyKey] = "450.000 USD";

var precioAuto = miAuto[anotherPropertyKey];

var nextProperty = "color"
    color: "Rojo";

    for (var key in miAuto) {
        if (miAuto.hasOwnProperty(key)) {
          var value = miAuto[key];
          console.log("Propiedad: " + key + ", Valor: " + value);
        }
      }
      
