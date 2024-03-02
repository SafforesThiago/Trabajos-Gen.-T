[{nombre:"Alba", edad:16 },
{nombre: "Estrella", edad:30  },
{nombre: "Belen", edad:20  },
{nombre: "Santiago", edad: 4  },
{nombre: "Katherine", edad:55  }]

personas.sort(function(a, b) {
    return a.edad - b.edad;
  });
  
for (var i = 0; i < personas.length; i++) {
    personas[i].posicion = i + 1;}

console.log(personas);