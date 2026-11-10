// All tekst og praktisk info på siden samles her, så det er lett å oppdatere.
// Tekst i [klammer] er plassholdere som skal fylles ut.

export const wedding = {
  bride: "Marita",
  groom: "Caspar",
  dateISO: "2027-09-04T00:00:00+02:00",
  dateLong: "Lørdag 4. september 2027",
  dateShort: "04.09.2027",
  rsvpDeadline: "[dato]",
};

export const venue = {
  name: "Kokkeplassen",
  street: "Vesterveien 134",
  postal: "4817 His",
  website: "https://www.kokkeplassengard.no/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Kokkeplassen%2C%20Vesterveien%20134%2C%204817%20His",
  intro:
    "Hele dagen – fra vielse til siste dans – feirer vi på Kokkeplassen. [Et par setninger om stedet og hvorfor dere valgte det.]",
};

export const welcomeText =
  "Det som startet med en motorsykkeltur til Arendal, ender med et ja på samme kant av landet. Den 4. september samler vi alle vi er glade i på Kokkeplassen – til vielse, god mat, varme taler, mye latter og dans til langt på natt. Her finner du alt du trenger å vite. Vi gleder oss vilt til å feire med deg!";

export const program = [
  { time: "[kl.]", title: "Vielse", text: "Seremonien holdes på Kokkeplassen og utføres av varaordfører i Arendal, Inger Brokka de Ruiter. [Kort beskrivelse – ute/inne, hvor gjestene samles.]" },
  { time: "[kl.]", title: "Mottakelse", text: "[Bobler, mingling og bilder med brudeparet.]" },
  { time: "[kl.]", title: "Middag", text: "Tre retters middag og taler. Se menyen under." },
  { time: "[kl.]", title: "Fest", text: "[Brudevals, dans og nattmat.]" },
];

export const menu = [
  {
    course: "Forrett",
    dish: "Smørstekt kamskjell",
    description: "Sellerikrem, lune terninger av eple og sellerirot, kremet eplesaus og dill.",
  },
  {
    course: "Hovedrett",
    dish: "Mørbrad av kalv",
    description: "Kraftig soppsaus, stekt østerssopp med spinat og ramsløk, ertekrem og poteter.",
  },
  {
    course: "Dessert",
    dish: "Panna cotta",
    description:
      "Friske bringebær, sprø hvit sjokolade smaksatt med sitronverbena, bringebærsorbet og frysetørket bringebær.",
  },
];

export type InfoCard = { title: string; text: string; link?: { label: string; href: string } };

export const practical: InfoCard[] = [
  {
    title: "Reise og parkering",
    text: "Adressen er Kokkeplassen, Vesterveien 134, 4817 His. Det er god plass til å parkere bil ved lokalet. [Eventuelt info om taxi eller felles transport fra sentrum.]",
    link: { label: "Vis veibeskrivelse", href: venue.mapsUrl },
  },
  {
    title: "Overnatting",
    text: "Vi anbefaler Clarion Hotel Tyholmen i Arendal sentrum. [Eventuell rabattkode og frist for booking.]",
    link: {
      label: "Se hotellet og bestill rom",
      href: "https://www.strawberry.no/hotell/norge/arendal/clarion-hotel-tyholmen/",
    },
  },
  {
    title: "Antrekk",
    text: "Mørk dress/smoking. Ta gjerne med et hint av fargetemaet vårt, fersken og oliven.",
  },
  { title: "Ønskeliste", text: "[Lenke til ønskeliste eller tekst om gaver.]" },
  {
    title: "Taler og innslag",
    text: "Ønsker du å holde tale eller ha et innslag? Ta kontakt med toastmaster [navn, telefon, e-post].",
  },
  { title: "Barn", text: "Etter kl. 20 ønsker vi at det kun er voksne til stede." },
];

export const about = [
  "Det hele startet med en motorsykkeltur til Arendal – og det ble kjærlighet ved første blikk. Resten er, som de sier, historie.",
  "Siden har vi samlet på kilometer sammen: i løpesko, på tur, på motorsykkel og på reise. Vi er lekne, livsglade og sjelden i ro, og dagen avsluttes gjerne med et godt glass vin – eller en boks Pepsi Max med ro i stuen.",
  "Frieriet fant sted på toppen av Mount Ulfsryggen, besteget helt uten ekstra oksygen. Svaret ble ja, og nå gleder vi oss til å feire det med dere – passende nok i Arendal, der alt begynte.",
];

export const toastmaster = "Kontakt toastmaster [navn] på [telefon / e-post]";

export const gallery = [
  { src: "/images/fjell.jpg", alt: "Marita og Caspar på fjelltur", position: "center" },
  { src: "/images/hytte.jpg", alt: "Marita og Caspar under et tak av gamle tømmerstokker", position: "center 30%" },
  { src: "/images/sol.jpg", alt: "Marita og Caspar med solbriller i sola", position: "center 40%" },
  { src: "/images/hjemme.jpg", alt: "Marita og Caspar smiler innendørs", position: "center 45%" },
];
