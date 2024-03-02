let ecommerce = [
    {nombre:"Samsung TV", precio:6000 ,articulos:10},
    {nombre:"DELL notebook", precio:4000 ,articulos:30},
    {nombre:"Auriculares Sony", precio:1500 ,articulos:15},
    {nombre:"Monitor Phillips", precio:12000 ,articulos:20},
    {nombre:"Teclado Logitech", precio:3000 ,articulos:5},
]

function calcularValorTotal(ecommerce) {
    let productosValorTotal = [];
  
    for (let i = 0; i < ecommerce.length; i++) {
      let producto = ecommerce[i];
      let valorTotal = producto.precio * producto.articulos;
  
      productosValorTotal.push({ nombre: producto.nombre, valorTotal: valorTotal });
    }
  
    return productosValorTotal;
  }
  
  let productosConValorTotal = calcularValorTotal(ecommerce);
  console.log(productosConValorTotal);