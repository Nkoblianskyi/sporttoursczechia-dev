// Central tours data — no brand names, no stadium names, no ticket sales
export type TourCategory = 'cyklo' | 'moto' | 'hory'

export interface Tour {
  id: string
  slug: string
  category: TourCategory
  title: string
  subtitle: string
  description: string
  fullDescription: string
  image: string
  duration: string
  difficulty: 'Lehká' | 'Střední' | 'Náročná' | 'Extrémní'
  dateFrom: string
  dateTo: string
  maxParticipants: number
  country: string
  region: string
  included: string[]
  notIncluded: string[]
  highlights: string[]
}

export const TOURS: Tour[] = [
  {
    id: '1',
    slug: 'cyklo-bohemske-udoli',
    category: 'cyklo',
    title: 'Cyklotour Českou krajinou',
    subtitle: 'Romantická cesta bohemskými údolími a hrady',
    description:
      'Projíždějte malebnou českou přírodou na kole. Středověké hrady, lesní cesty a tiché vesničky vás pohltí.',
    fullDescription:
      'Tato šestice dní na kole vás provede tím nejkrásnějším, co česká krajina nabízí. Budete projíždět hlubokými bory, stoupat na kamenité hřebeny a sjíždět do sytě zelených údolí podél řek. Každý den nabídne jiný ráz krajiny – od romantických vinohradů na jihu po dramatické skalní stěny severních Čech. Ubytování v rodinných penzionech, autentická česká kuchyně a průvodce se znalostí místních tajných stezek jsou součástí zájezdu.',
    image: '/images/tour-cycling-bohemia.jpg',
    duration: '6 dní / 5 nocí',
    difficulty: 'Střední',
    dateFrom: '2026-05-15',
    dateTo: '2026-05-20',
    maxParticipants: 12,
    country: 'Česká republika',
    region: 'Střední Čechy',
    included: ['Průvodce po celou dobu', 'Ubytování v penzionu', 'Snídaně každý den', 'Technická podpora', 'Mapa tras'],
    notIncluded: ['Letenky', 'Vlastní kolo nebo půjčovné', 'Obědy a večeře'],
    highlights: ['Historické hrady a zámky', 'Tiché lesní cesty', 'Malebné říční údolí', 'Místní gastronomie'],
  },
  {
    id: '2',
    slug: 'moto-alpsky-okruh',
    category: 'moto',
    title: 'Alpský moto okruh',
    subtitle: 'Nejkrásnější horské průsmyky Alp na motorce',
    description:
      'Devítidenní okruh přes nejúchvatnější průsmyky Alp. Rakušané silnice, švýcarské krajiny a italská pohostinnost.',
    fullDescription:
      'Moto výprava určená zkušeným jezdcům, kteří touží po setkání s alpskou velkolepostí. Každý den nás čeká nový průsmyk, nová vyhlídka a nová krajina. Vineme se přes legendární alpské silnice, přičemž podél cesty míjíme jezera, ledovce a kamenná středověká městečka. Skupinová jízda v maximálním počtu deseti motocyklistů zaručuje bezpečnost a pohodlný průjezd i užšími cestami. Hotel vždy přímo v centru historického městečka.',
    image: '/images/tour-moto-alpine.jpg',
    duration: '9 dní / 8 nocí',
    difficulty: 'Náročná',
    dateFrom: '2026-06-20',
    dateTo: '2026-06-28',
    maxParticipants: 10,
    country: 'Rakousko / Švýcarsko / Itálie',
    region: 'Alpy',
    included: ['Průvodce na motorce', 'Ubytování ve 3* hotelech', 'Snídaně', 'Pojištění skupiny', 'GPS trasa'],
    notIncluded: ['Motocykl nebo půjčovné', 'Palivo', 'Obědy a večeře', 'Osobní pojištění'],
    highlights: ['Legendární horské průsmyky', 'Alpská jezera', 'Malebná středověká městečka', 'Panoramatické výhledy'],
  },
  {
    id: '4',
    slug: 'horsky-trekking-krkonose',
    category: 'hory',
    title: 'Horský trekking v Krkonoších',
    subtitle: 'Pěší výprava nejvyšším pohořím Česka',
    description:
      'Pětidenní trekking po hřebenech Krkonoš. Rázovitá příroda, nádherné výhledy a tradiční horská pohostinnost.',
    fullDescription:
      'Krkonoše jsou jedním z nejkrásnějších pohoří střední Evropy a tento trekking vám umožní je poznat v jejich plné divokosti. Hřebenová cesta nabídne každý den nové panorama – od rašelinišť s endemickými rostlinami, přes skalní sutě, až po rozkvetlé alpské louky. Nocujete v horských chatách s tradiční atmosférou. Průvodce je certifikovaný horský vůdce se znalostí záchranných tras a první pomoci.',
    image: '/images/tour-hiking-krkonose.jpg',
    duration: '5 dní / 4 noci',
    difficulty: 'Náročná',
    dateFrom: '2026-07-10',
    dateTo: '2026-07-14',
    maxParticipants: 8,
    country: 'Česká republika',
    region: 'Krkonoše',
    included: ['Certifikovaný horský průvodce', 'Ubytování v chatách', 'Polopenzi', 'Pojištění skupiny'],
    notIncluded: ['Osobní výbava a obuv', 'Dopravu na místo', 'Osobní pojištění'],
    highlights: ['Nejvyšší vrcholy Česka', 'Endemická fauna a flora', 'Horské chaty', 'Dramatické výhledy'],
  },
  {
    id: '5',
    slug: 'cyklo-dunajska-stezka',
    category: 'cyklo',
    title: 'Cyklotour Dunajskou stezkou',
    subtitle: 'Podél Dunaje do srdce Evropy',
    description:
      'Sedmidenní cyklovýprava po proslulé dunajské stezce. Vinohradnická krajina, kláštery a malebná říční města.',
    fullDescription:
      'Dunajská cyklostezka je jednou z nejoblíbenějších cyklomagistrálek Evropy a není divu – podél celé trasy se vine nádherná říční krajina, střídaná vinohrady, historickými kláštery na kopcích a klidnými říčními přístaveními. Naše trasa je plánována tak, aby byl každý den pohodlně zvládnutelný i méně zdatnými cyklisty, přičemž denní etapy jsou doplněny o zastávky na zajímavých místech. Cyklovaky přepravuje doprovodné auto, takže jedete vždy lehce.',
    image: '/images/tour-cycling-danube.jpg',
    duration: '7 dní / 6 nocí',
    difficulty: 'Lehká',
    dateFrom: '2026-08-08',
    dateTo: '2026-08-14',
    maxParticipants: 14,
    country: 'Rakousko / Maďarsko',
    region: 'Dunajské údolí',
    included: ['Průvodce', 'Přeprava zavazadel autem', 'Ubytování', 'Snídaně', 'GPS trasa'],
    notIncluded: ['Kolo nebo půjčovné', 'Obědy a večeře', 'Dopravu na start'],
    highlights: ['Proslulá cyklostezka', 'Kláštery a hrady', 'Vinohradnická krajina', 'Říční přístavy'],
  },
  {
    id: '6',
    slug: 'moto-dolomity',
    category: 'moto',
    title: 'Moto tour po Dolomitech',
    subtitle: 'Dramatické skály italských Dolomitů na motorce',
    description:
      'Šestidenní okruh pod zlatě osluněnými dolomitskými věžemi. Italská kuchyně, skvělé silnice a nezapomenutelná krajina.',
    fullDescription:
      'Dolomity jsou pro motoristy světoznámá destinace a právem. Silnice se vinují pod strmými skalními věžemi, kolem zářivě modrých horských jezer a přes lesy s vůní pryskyřice. Naše trasa kombinuje nejkrásnější průsmyky s kulturními zastávkami v malebných horských vesničkách, kde si dáme pravé tirolské jídlo nebo espresso v rodinné kavárně. Ubytování ve vybraných horských hotelích s výhledem na Dolomity.',
    image: '/images/tour-moto-dolomites.jpg',
    duration: '6 dní / 5 nocí',
    difficulty: 'Střední',
    dateFrom: '2026-07-25',
    dateTo: '2026-07-30',
    maxParticipants: 8,
    country: 'Itálie',
    region: 'Dolomity',
    included: ['Průvodce motorkář', 'Ubytování ve 3* hotelích', 'Snídaně', 'GPS trasa'],
    notIncluded: ['Motorka nebo půjčovné', 'Palivo', 'Obědy a večeře', 'Pojištění motorky'],
    highlights: ['Světoznámé dolomitské průsmyky', 'Italská horská kuchyně', 'Horská jezera', 'Skalní věže'],
  },
  {
    id: '8',
    slug: 'cyklo-toskana',
    category: 'cyklo',
    title: 'Cyklotour Toskánskem',
    subtitle: 'Mezi cypřiši a vinohrady italského jihu',
    description:
      'Osmidenní cyklotour po slavné toskánské krajině. Středověká hillside města, vínové silnice a dolce vita.',
    fullDescription:
      'Toskánsko je krajina jak z obrazu – aleje cypřišů, zlaté kopce, středověká opevněná města na horách a nekonečné vinohrady. Náš cyklookruh vás provede tím nejautentičtějším Toskánskem, daleko od turistických mas. Každý den uzavřete v jiném středověkém městečku, kde po večeři výhled z hradeb na oranžový západ slunce nahradí jakoukoli reklamu. Podpora doprovodným vozem, průvodce mluvící česky i italsky.',
    image: '/images/tour-cycling-tuscany.jpg',
    duration: '8 dní / 7 nocí',
    difficulty: 'Střední',
    dateFrom: '2026-09-20',
    dateTo: '2026-09-27',
    maxParticipants: 10,
    country: 'Itálie',
    region: 'Toskánsko',
    included: ['Průvodce', 'Přeprava zavazadel', 'Ubytování', 'Snídaně', 'Ochutnávka vín'],
    notIncluded: ['Letenky', 'Kolo nebo půjčovné', 'Obědy a večeře'],
    highlights: ['Ikonická toskánská krajina', 'Středověká hillside města', 'Ochutnávka vín', 'Dolce vita'],
  },
]

export const CATEGORY_LABELS: Record<TourCategory, string> = {
  cyklo: 'Cykloturistika',
  moto: 'Moto výlety',
  hory: 'Horské túry',
}

export const DIFFICULTY_COLORS: Record<string, string> = {
  'Lehká': 'bg-green-100 text-green-800',
  'Střední': 'bg-yellow-100 text-yellow-800',
  'Náročná': 'bg-orange-100 text-orange-800',
  'Extrémní': 'bg-red-100 text-red-800',
}
