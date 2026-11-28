const capitulos = [
  {
    id: 1,
    titulo: "Piloto",
    temporada: 1,
    numEpisodio: 1,
    duracionMin: 22,
    rating: 7.8,
    visto: true,
  },
  {
    id: 2,
    titulo: "El algoritmo del conflicto",
    temporada: 1,
    numEpisodio: 2,
    duracionMin: 21,
    rating: 8.4,
    visto: true,
  },
  {
    id: 3,
    titulo: "La hipótesis del caos",
    temporada: 1,
    numEpisodio: 3,
    duracionMin: 25,
    rating: 8.9,
    visto: false,
  },
  {
    id: 4,
    titulo: "El colapso de la red",
    temporada: 2,
    numEpisodio: 1,
    duracionMin: 24,
    rating: 9.1,
    visto: true,
  },
  {
    id: 5,
    titulo: "Recursión infinita",
    temporada: 2,
    numEpisodio: 2,
    duracionMin: 28,
    rating: 8.5,
    visto: false,
  },
  {
    id: 6,
    titulo: "Paradoja temporal",
    temporada: 2,
    numEpisodio: 3,
    duracionMin: 23,
    rating: 9.4,
    visto: false,
  },
];

// filtrar no vistos
const capNoVistos = function filtrarNoVistos(capitulos) {
  return capitulos.filter((capitulo) => !capitulo.visto);
};

// mostrar el array de caps no vistos
/*
capNoVistos(capitulos).forEach((capitulos) => {
  console.log(capitulos);
});
*/

// buscar episodio por temporada y nro de episodio

function buscarEp(lista, temporada, numEpisodio) {
  return lista.find(
    (lista) =>
      lista.temporada === temporada && lista.numEpisodio === numEpisodio,
  );
}

// console.log(buscarEp(capitulos, 2, 3));

// formatear lista de capitulos a string

function formatearLista(capitulos) {
  return capitulos.map((capitulos) => {
    return `T${capitulos.temporada}E${capitulos.numEpisodio} - ${capitulos.titulo} (${capitulos.duracionMin} min)`;
  });
}
/*
formatearLista(capitulos).forEach((capitulos) => {
  console.log(capitulos);
});
*/

// CREAR Y CONSUMIR UNA PROMESA

const obtenerCapitulosPromise = (debeFallar = false) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (debeFallar) {
        reject(new Error("Error al consultar la base de datos"));
      } else {
        resolve(capitulos);
      }
    }, 1000);
  });
/*
obtenerCapitulosPromise().then((capitulos) => {
    console.log(capitulos);
}).catch((error) => {
    console.error(error);
});
*/

// ASYNC/AWAIT Y LOGICA DE ENDPOINT (puente al backend)

async function getCapitulos(query) {
  try {
  } catch (error) {}
}
