let personas = [
    {nombre: "ana", edad:"28"},
    { nombre:"maria", edad:"24" },
    { nombres:" Jose", edad:"31"}] ;

let personasconmasde27 = personas.filter(persona => parseInt(persona.edad) > 27);

console.log(personasconmasde27);