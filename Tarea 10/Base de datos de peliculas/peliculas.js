var películas = [
    { titulo: "Metegol", rating: 7.5, loHasVisto: true },
    { titulo: "Kung fu Panda", rating: 3.8, loHasVisto: false },
    { titulo: "Gigantes de Acero", rating: 9.0, loHasVisto: true },
    { titulo: "Madagascar", rating: 2.9, loHasVisto: false },
  ];
  
  for (var i = 0; i < películas.length; i++) {
    var película = películas[i];
    var estado = película.loHasVisto ? "has visto" : "no has visto";
    console.log("Título: " + película.titulo + ", Rating: " + película.rating + ", Estado: " + estado);
  }
  