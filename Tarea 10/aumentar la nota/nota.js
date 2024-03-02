var listaEstudiantes = [
    { Estudiante: "Juan", nota: 6 },
    { Estudiante: "Mario", nota: 8 },
    { Estudiante: "Julia", nota: 10 },
    { Estudiante: "Sofia", nota: 2 }
  ];
  
  for (var i = 0; i < listaEstudiantes.length; i++) {
    var estudiante = listaEstudiantes[i];
    if (estudiante.nota > 5) {
      estudiante.nota = Math.min(estudiante.nota + 2, 10);
    }
  }
  
  console.log(listaEstudiantes);
  

