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
  website: "https://kokkeplassen.no",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Kokkeplassen%2C%20Vesterveien%20134%2C%204817%20His",
  intro:
    "Hele dagen – fra vielse til siste dans – feirer vi på Kokkeplassen. [Et par setninger om stedet og hvorfor dere valgte det.]",
};

export const welcomeText =
  "[Velkomsttekst fra Marita og Caspar – et par setninger om hvor glade dere er for å feire dagen med familie og venner, og at all informasjonen gjestene trenger finnes på denne siden.]";

export const program = [
  { time: "[kl.]", title: "Vielse", text: "Seremonien holdes på Kokkeplassen. [Kort beskrivelse – ute/inne, hvor gjestene samles.]" },
  { time: "[kl.]", title: "Mottakelse", text: "[Bobler, mingling og bilder med brudeparet.]" },
  { time: "[kl.]", title: "Middag", text: "[Middag, taler og kake.]" },
  { time: "[kl.]", title: "Fest", text: "[Brudevals, dans og nattmat.]" },
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
    text: "[Dresscode – f.eks. mørk dress / sommerlig pent. Gjerne et hint om fargetemaet fersken og oliven.]",
  },
  { title: "Ønskeliste", text: "[Lenke til ønskeliste eller tekst om gaver.]" },
  {
    title: "Taler og innslag",
    text: "Ønsker du å holde tale eller ha et innslag? Ta kontakt med toastmaster [navn, telefon, e-post].",
  },
  { title: "Barn", text: "[Informasjon om barn i bryllupet.]" },
];

export const about =
  "[Historien om hvordan dere møttes, frieriet og litt om hvem dere er sammen – fjellturer, hytteliv og mye latter.]";

export const toastmaster = "Kontakt toastmaster [navn] på [telefon / e-post]";

export const gallery = [
  { src: "/images/fjell.jpg", alt: "Marita og Caspar på fjelltur", position: "center" },
  { src: "/images/hytte.jpg", alt: "Marita og Caspar under et tak av gamle tømmerstokker", position: "center 30%" },
  { src: "/images/sol.jpg", alt: "Marita og Caspar med solbriller i sola", position: "center 40%" },
  { src: "/images/hjemme.jpg", alt: "Marita og Caspar smiler innendørs", position: "center 45%" },
];
