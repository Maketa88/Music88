import reactLogo from "../assets/mexicana.png";

// Importar todas las canciones
import ADiosLePido from "../../public/music/A DIOS LE PIDO.mp3";
import Ahora from "../../public/music/AHORA.mp3";
import AmarillaSeVuelve from "../../public/music/AMARILLA SE PONE.mp3";
import Amarillo from "../../public/music/AMARILLO.mp3";
import BesosEnGuerra from "../../public/music/BESOS EN GUERRA.mp3";
import CualEsEsa from "../../public/music/CUAL ES ESA.mp3";
import CuandoPararaLaLluvia from "../../public/music/CUANDO PARARA LA LLUVIA EN MI CORAZON.mp3";
import DagaAdicta from "../../public/music/DAGA ADICTA.mp3";
import DejameEntrar from "../../public/music/DEJAME ENTRAR.mp3";
import Dicen from "../../public/music/DICEN.mp3";
import DimeComoOlvidarte from "../../public/music/DIME COMO OLVIDARTE.mp3";
import EllaEsMiAmante from "../../public/music/ELLA ES MI AMANTE.mp3";
import Gatubela from "../../public/music/GATUBELA.mp3";
import GuaguancoDelAdios from "../../public/music/GUAGUANCO DEL ADIOS.mp3";
import Hooka from "../../public/music/HOOKA.mp3";
import Jure from "../../public/music/JURE.mp3";
import LaPregunta from "../../public/music/LA PREGUNTA.mp3";
import LlamadoDeEmergencia from "../../public/music/LLAMADO DE EMERGENCIA.mp3";
import Luna from "../../public/music/LUNA.mp3";
import MariposaTraicionera from "../../public/music/MARIPOSA TRAICIONERA.mp3";
import MeVoy from "../../public/music/ME VOY.mp3";
import MiExTeniaRazon from "../../public/music/MI EX TENIA RAZON.mp3";

import NadaEsEterno from "../../public/music/NADA ES ETERNO.mp3";
import Normal from "../../public/music/NORMAL.mp3";
import NoviaDeTodos from "../../public/music/NOVIA DE TODOS.mp3";
import NoviembreSinTi from "../../public/music/NOVIEMBRE SIN TI.mp3";
import Obligao from "../../public/music/OBLIGAO.mp3";
import PaginaDeAmor from "../../public/music/PAGINA DE AMOR.mp3";
import PrimeraCita from "../../public/music/PRIMERA CITA.mp3";
import Provenza from "../../public/music/PROVENZA.mp3";
import QuizasRemix from "../../public/music/QUIZAS (REMIX).mp3";
import RosaPastel from "../../public/music/ROSA PASTEL.mp3";
import SeAcaboElAmor from "../../public/music/SE ACABO EL AMOR.mp3";
import Secretos from "../../public/music/SECRETOS.mp3";
import SoloEsMejor from "../../public/music/SOLO ES MEJOR.mp3";
import UnaObraDeArte from "../../public/music/UNA OBRA DE ARTE.mp3";
import UnoSeCura from "../../public/music/UNO SE CURA.mp3";

import Vacaciones from "../../public/music/VACACIONES.mp3";
import YoNoQueriaEngañarte from "../../public/music/YO NO QUERIA ENGAÑARTE.mp3";
import YoTeHagoElAmor from "../../public/music/YO TE HAGO EL AMOR.mp3";

export const songs = [
  {
    id: 1,
    title: "Luna",
    artist: "Feid",
    album: "Inter Shibuya",
    duration: "3:22",
    cover: reactLogo,
    url: Luna,
  },
  {
    id: 2,
    title: "Dicen",
    artist: "Juan Fernando Velasco",
    album: "El Comienzo",
    duration: "3:51",
    cover: reactLogo,
    url: Dicen,
  },
  {
    id: 3,
    title: "Mariposa Traicionera",
    artist: "Maná",
    album: "Revolución de Amor",
    duration: "4:22",
    cover: reactLogo,
    url: MariposaTraicionera,
  },
  {
    id: 4,
    title: "Amarilla Se Pone",
    artist: "Orquesta La Fuerza Mayor",
    album: "El Comienzo",
    duration: "3:38",
    cover: reactLogo,
    url: AmarillaSeVuelve,
  },
  {
    id: 5,
    title: "Hooka",
    artist: "Don Omar",
    album: "Danny Ocean",
    duration: "3:41",
    cover: reactLogo,
    url: Hooka,
  },
  {
    id: 6,
    title: "Daga Adicta",
    artist: "Luigi 21 Plus",
    album: "Orquídeas",
    duration: "3:51",
    cover: reactLogo,
    url: DagaAdicta,
  },
  {
    id: 7,
    title: "Solo Es Mejor",
    artist: "Yandar y Yostin",
    album: "Mor, No Le Temas A La Oscuridad",
    duration: "3:27",
    cover: reactLogo,
    url: SoloEsMejor,
  },
  {
    id: 8,
    title: "Ella Es Mi Amante",
    artist: "Yandar y Yostin",
    album: "Bucle",
    duration: "2:56",
    cover: reactLogo,
    url: EllaEsMiAmante,
  },
  {
    id: 9,
    title: "Secretos",
    artist: "Reykon",
    album: "ADN",
    duration: "3:48",
    cover: reactLogo,
    url: Secretos,
  },
  {
    id: 10,
    title: "Obligao",
    artist: "Luigi 21 Plus",
    album: "Single",
    duration: "3:30",
    cover: reactLogo,
    url: Obligao,
  },
  {
    id: 11,
    title: "Uno Se Cura",
    artist: "Raulin Rosendo",
    album: "2000",
    duration: "5:20",
    cover: reactLogo,
    url: UnoSeCura,
  },
  {
    id: 12,
    title: "La Pregunta",
    artist: "J Álvarez",
    album: "Otro Nivel De Música",
    duration: "4:35",
    cover: reactLogo,
    url: LaPregunta,
  },
  {
    id: 13,
    title: "Quizás (Remix)",
    artist: "Wisin y Yandel",
    album: "The Academy",
    duration: "4:15",
    cover: reactLogo,
    url: QuizasRemix,
  },
  {
    id: 14,
    title: "Una Obra De Arte",
    artist: "J Balvin",
    album: "Agustín",
    duration: "4:07",
    cover: reactLogo,
    url: UnaObraDeArte,
  },
  {
    id: 15,
    title: "Primera Cita",
    artist: "Carin León",
    album: "Colmillo De Leche",
    duration: "2:54",
    cover: reactLogo,
    url: PrimeraCita,
  },
  {
    id: 16,
    title: "A Dios Le Pido",
    artist: "Juanes",
    album: "Un Día Normal",
    duration: "3:25",
    cover: reactLogo,
    url: ADiosLePido,
  },
  {
    id: 17,
    title: "Besos En Guerra",
    artist: "Morat, Juanes",
    album: "Balas Perdidas",
    duration: "3:59",
    cover: reactLogo,
    url: BesosEnGuerra,
  },
  {
    id: 18,
    title: "Mi Ex Tenía Razón",
    artist: "Karol G",
    album: "Mañana Será Bonito (Bichota Season)",
    duration: "2:44",
    cover: reactLogo,
    url: MiExTeniaRazon,
  },
  {
    id: 19,
    title: "Noviembre Sin Ti",
    artist: "Reik",
    album: "Reik",
    duration: "3:21",
    cover: reactLogo,
    url: NoviembreSinTi,
  },
  {
    id: 20,
    title: "Rosa Pastel",
    artist: "Belanova",
    album: "Dulce Beat",
    duration: "3:06",
    cover: reactLogo,
    url: RosaPastel,
  },
  {
    id: 21,
    title: "Me Voy",
    artist: "Julieta Venegas",
    album: "Limón y Sal",
    duration: "3:01",
    cover: reactLogo,
    url: MeVoy,
  },
  {
    id: 22,
    title: "Guaguancó Del Adiós",
    artist: "Roberto Roena",
    album: "Siembra",
    duration: "6:12",
    cover: reactLogo,
    url: GuaguancoDelAdios,
  },
  {
    id: 23,
    title: "Página de Amor",
    artist: "Tito Gómez",
    album: "Salsa Brava",
    duration: "4:52",
    cover: reactLogo,
    url: PaginaDeAmor,
  },

  {
    id: 25,
    title: "Cuando Parará La Lluvia En Mi Corazón",
    artist: "Jerry Rivera",
    album: "Cuenta Conmigo",
    duration: "4:40",
    cover: reactLogo,
    url: CuandoPararaLaLluvia,
  },
  {
    id: 26,
    title: "Nada Es Eterno",
    artist: "J Alvarez",
    album: "Nuevas Metas",
    duration: "4:15",
    cover: reactLogo,
    url: NadaEsEterno,
  },
  {
    id: 27,
    title: "Déjame Entrar",
    artist: "Makano",
    album: "Dejame Entrar",
    duration: "3:36",
    cover: reactLogo,
    url: DejameEntrar,
  },
  {
    id: 28,
    title: "Yo Te Hago El Amor",
    artist: "Zion y Lennox",
    album: "La Esencia",
    duration: "2:59",
    cover: reactLogo,
    url: YoTeHagoElAmor,
  },
  {
    id: 29,
    title: "Se Acabó El Amor",
    artist: "J Alvarez",
    album: "Single",
    duration: "3:34",
    cover: reactLogo,
    url: SeAcaboElAmor,
  },
  {
    id: 30,
    title: "Llamado De Emergencia",
    artist: "Daddy Yankee",
    album: "Talento De Barrio",
    duration: "3:54",
    cover: reactLogo,
    url: LlamadoDeEmergencia,
  },
  {
    id: 31,
    title: "Novia De Todos",
    artist: "Alzate",
    album: "Contigo",
    duration: "2:50",
    cover: reactLogo,
    url: NoviaDeTodos,
  },
  {
    id: 32,
    title: "Gatúbela",
    artist: "Karol G, Maldy",
    album: "Mañana Será Bonito",
    duration: "3:22",
    cover: reactLogo,
    url: Gatubela,
  },
  {
    id: 33,
    title: "Normal",
    artist: "Feid",
    album: "Ferxxo (Vol. 1: M.O.R.)",
    duration: "2:47",
    cover: reactLogo,
    url: Normal,
  },
  {
    id: 34,
    title: "Juré",
    artist: "Jhon Alex Castaño",
    album: "Single",
    duration: "2:27",
    cover: reactLogo,
    url: Jure,
  },
  {
    id: 35,
    title: "Amarillo",
    artist: "J Balvin",
    album: "Colores",
    duration: "2:45",
    cover: reactLogo,
    url: Amarillo,
  },
  {
    id: 36,
    title: "Ahora",
    artist: "J Balvin",
    album: "Ahora",
    duration: "4:00",
    cover: reactLogo,
    url: Ahora,
  },
  {
    id: 37,
    title: "Dime Cómo Olvidarte",
    artist: "Rakim y Ken Y",
    album: "Ubuntu",
    duration: "4:15",
    cover: reactLogo,
    url: DimeComoOlvidarte,
  },
  
  {
    id: 39,
    title: "Cuál Es Esa",
    artist: "Pirlo",
    album: "Vida Rockstar",
    duration: "2:55",
    cover: reactLogo,
    url: CualEsEsa,
  },
  {
    id: 40,
    title: "Yo No Quería Engañarte",
    artist: "Víctor Manuelle",
    album: "Cómo Te Voy a Olvidar",
    duration: "4:36",
    cover: reactLogo,
    url: YoNoQueriaEngañarte,
  },
  {
    id: 41,
    title: "Provenza",
    artist: "Karol G",
    album: "Mañana Será Bonito",
    duration: "3:30",
    cover: reactLogo,
    url: Provenza,
  },
  {
    id: 42,
    title: "Vacaciones",
    artist: "Feid",
    album: "Los Vaqueros: La Trilogía",
    duration: "3:02",
    cover: reactLogo,
    url: Vacaciones,
  },
];
