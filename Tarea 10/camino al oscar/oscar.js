let greeting = "hello and welcome"
    greeting[0]
let words = greeting.split("")
let actoresVocales = []
let actoresPrincipales = ("tom hanks", "jhonny deep", "elizabeth taylor", "morgan freeman", "jennifer aniston", "meryl sheep", "natalie portman", "ashton kutler")
let peliculas = []
let actoresPrincipalesPorPelicula = {
    "titanic": "Leonardo di caprio",
    "El Padrino" : "al pacino",
    "matrix" : "keanu reeves",
    "Iron man": "Robert downey jr",
    "Soy leyenda": "Will smith",
    "bastardos sin gloria": "Brad Pitt",
}

for (let actor of actoresPrincipales) {
    let nombreApellido = actor.split(" ");
    let primeraLetra = nombreApellido[0][0].toLowerCase();
  
    if (/[aeiou]/.test(primeraLetra)) {
      actoresVocales.push(actor);
    }
  }
  
  console.log(actoresVocales);

  for (let pelicula in actoresPrincipalesPorPelicula) {
    let actores = actoresPrincipalesPorPelicula[pelicula];
    actoresPrincipales = actoresPrincipales.concat(actores);
  }
  
  console.log(actoresPrincipales);

  peliculas = Object.keys(actoresPrincipalesPorPelicula);

console.log(peliculas);

let peliculaPorActor = {};

for (let pelicula in actoresPrincipalesPorPelicula) {
    let actores = actoresPrincipalesPorPelicula[pelicula];
    
    for (let actor of actores) {
      if (peliculaPorActor.hasOwnProperty(actor)) {
        peliculaPorActor[actor].push(pelicula);
      } else {
        peliculaPorActor[actor] = [pelicula];
      }
    }
  }
  
  console.log(peliculaPorActor);