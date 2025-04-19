import reactLogo from "../assets/mexicana.png";

// Importar todas las canciones - cambiado a rutas públicas absolutas
// Se eliminan las importaciones directas que causan problemas en Vercel
// y se reemplazan por strings en los objetos songs

export const songs = [
  {
    id: 1,
    title: "Abrazame muy Fuerte",
    artist: "Juan Gabriel",
    album: "Abrazame muy Fuerte",
    duration: "4:06",
    cover: reactLogo,
    url: "/music/Abrazame Muy Fuerte.mp3",
  },
  {
    id: 2,
    title: "Corre",
    artist: "Jesse y Joy",
    album: "El Perro",
    duration: "4:48",
    cover: reactLogo,
    url: "/music/Corre.mp3",
  },
  {
    id: 3,
    title: "Duele el Amor",
    artist: "Aleks Syntek y Ana Torroja",
    album: "Mundo Lite",
    duration: "4:30",
    cover: reactLogo,
    url: "/music/Duele el amor.mp3",
  },
  {
    id: 4,
    title: "El amor",
    artist: "Jose Luis Peralez",
    album: "Tiempo de otoño",
    duration: "4:11",
    cover: reactLogo,
    url: "/music/El Amor.mp3",
  },

  {
    id: 5,
    title: "El caminante",
    artist: "Joe Arroyo",
    album: "Joe arroyo inmortal",
    duration: "3:18",
    cover: reactLogo,
    url: "/music/El Caminante.mp3",
  },

  {
    id: 6,
    title: "La Leyenda del Hada y el Mago",
    artist: "Rata Blanca",
    album: "Magos,espadas y rosas",
    duration: "5:22",
    cover: reactLogo,
    url: "/music/La Leyenda del Hada y el Mago.mp3",
  },

  {
    id: 7,
    title: "Escombros",
    artist: "La suprema corte",
    album: "Escombros",
    duration: "3:57",
    cover: reactLogo,
    url: "/music/Escombros.mp3",
  },
  {
    id: 8,
    title: "Maldito Duende",
    artist: "Heroes del Silencio",
    album: "El mago",
    duration: "4:15",
    cover: reactLogo,
    url: "/music/Maldito duende.mp3",
  },
  {
    id: 9,
    title: "Manos de Tijera",
    artist: "Yiyo Sarante",
    album: "El secreto",
    duration: "3:49",
    cover: reactLogo,
    url: "/music/Manos De Tijera.mp3",
  },
  {
    id: 10,
    title: "Mentira",
    artist: "La ley",
    album: "MTV Unplugged",
    duration: "4:46",
    cover: reactLogo,
    url: "/music/Mentira.mp3",
  },
];
