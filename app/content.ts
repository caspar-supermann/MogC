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

// Bildene i mosaikken. Legg nye bilder i public/images/galleri/ og føy dem til her.
// width/height er bildets mål i piksler (brukes til å beholde formatet).
export type GalleryImage = { src: string; alt: string; width: number; height: number };

const g = (file: string, alt: string, width = 1050, height = 1400): GalleryImage => ({
  src: `/images/galleri/${file}`,
  alt,
  width,
  height,
});

export const gallery: GalleryImage[] = [
  g("13.jpg", "Marita og Caspar i solnedgang ved sjøen"),
  g("10.jpg", "Marita og Caspar klatrer opp et bratt svaberg"),
  g("07.jpg", "Marita og Caspar pyntet i dress og kjole"),
  g("16.jpg", "Marita og Caspar i fjellsiden med dalen bak seg", 1400, 1050),
  g("14.jpg", "Marita og Caspar med medaljer etter 50 km ultraløp", 787, 1400),
  g("04.jpg", "Marita og Caspar i bilen på vei på ferie", 787, 1400),
  g("22.jpg", "Marita og Caspar med solbriller i sola", 665, 1182),
  g("12.jpg", "Marita og Caspar på en steinete fjelltopp"),
  g("02.jpg", "Marita og Caspar under grønne trær"),
  g("19.jpg", "Marita og Caspar med medaljer fra Oslo halvmaraton"),
  g("05.jpg", "Marita og Caspar på en klippe over havet"),
  g("08.jpg", "Marita og Caspar foran blomstrende rhododendron"),
  g("21.jpg", "Marita og Caspar under et tak av gamle tømmerstokker", 665, 1182),
  g("18.jpg", "Marita og Caspar etter en løpetur"),
  g("09.jpg", "Marita og Caspar ved målgang med medaljer", 1303, 1400),
  g("06.jpg", "Marita og Caspar på en hvit saltsjø", 787, 1400),
  g("20.jpg", "Marita og Caspar i alpinbakken"),
  g("01.jpg", "Marita og Caspar på svabergene ved sjøen"),
  g("11.jpg", "Marita og Caspar i en vinkjeller"),
  g("17.jpg", "Marita og Caspar i solnedgang på stranda"),
  g("03.jpg", "Marita og Caspar på fjelltur med utsikt over vannet"),
  g("15.jpg", "Marita og Caspar på løpetur i skogen"),
  g("23.jpg", "Marita og Caspar smiler innendørs", 665, 1182),
];
