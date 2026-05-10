import type { Produce } from "@/lib/schemas/types";

/**
 * Produce — where Moroccan food comes from in Morocco. Origin coordinates
 * are approximate centres of the producing region; notes flesh out the
 * specifics. Where a produce item also has a full ingredient page in the
 * wiki, link via `ingredient_slug`.
 */
export const produce: Produce[] = [
  {
    slug: "lamb",
    name: "Lamb",
    kind: "meat",
    blurb:
      "Mutton and lamb come overwhelmingly from the Middle Atlas pastoral belt — the Timahdite and Sardi breeds — and from the steppes of the eastern plateau.",
    origins: [
      { region_name: "Middle Atlas (Timahdite)", lat: 33.233, lng: -5.067, notes: "Timahdite breed; mountain pasture." },
      { region_name: "Boulemane plateau", lat: 33.366, lng: -4.733, notes: "Sardi breed; transhumance." },
      { region_name: "Eastern High Plateau (Oriental)", lat: 33.6, lng: -2.9, notes: "Beni-Guil breed; PGI status." },
      { region_name: "High Atlas (Imilchil)", lat: 32.156, lng: -5.633, notes: "Summer high pasture; the Aït Atta migration." },
    ],
  },
  {
    slug: "beef",
    name: "Beef",
    kind: "meat",
    blurb:
      "Beef cattle concentrate in the irrigated plains around Fez–Meknès and the Gharb, and again in the Doukkala. The Atlas mountains provide draught and dual-purpose stock that ends up in khlii.",
    origins: [
      { region_name: "Fez–Meknès plain (Saïs)", lat: 34.05, lng: -5.2, notes: "Dairy and beef cattle; alfalfa." },
      { region_name: "Gharb plain", lat: 34.6, lng: -6.0, notes: "Irrigated lowland herds." },
      { region_name: "Doukkala (El Jadida)", lat: 33.0, lng: -8.5, notes: "Coastal grazing." },
      { region_name: "Middle Atlas slopes", lat: 33.3, lng: -5.4, notes: "Stock that becomes khlii." },
    ],
  },
  {
    slug: "chicken",
    name: "Chicken",
    kind: "meat",
    blurb:
      "Beldi (free-range, slower-growing) chickens from rural smallholdings; industrial broilers from the Casablanca–Settat–Berrechid corridor.",
    origins: [
      { region_name: "Berrechid–Settat corridor", lat: 33.16, lng: -7.62, notes: "Industrial broiler hub." },
      { region_name: "Souss villages", lat: 30.4, lng: -8.9, notes: "Beldi chicken; rural backyards." },
      { region_name: "Rif foothills", lat: 35.0, lng: -4.6, notes: "Beldi chicken from northern smallholdings." },
    ],
  },
  {
    slug: "seafood",
    name: "Seafood",
    kind: "seafood",
    blurb:
      "Morocco lands more sardines than any country on earth — a 3,500 km Atlantic-and-Mediterranean coastline running from Saïdia to Lagouira. Each port has its own catch.",
    origins: [
      { region_name: "Tangier (Strait)", lat: 35.78, lng: -5.81, notes: "Mixed Atlantic-Mediterranean catch; tuna." },
      { region_name: "Al Hoceima", lat: 35.247, lng: -3.93, notes: "Mediterranean grouper, sea bream, octopus." },
      { region_name: "Saïdia (eastern Med)", lat: 35.09, lng: -2.23, notes: "Sardine, anchovy, sea bass." },
      { region_name: "Larache", lat: 35.19, lng: -6.16, notes: "Atlantic sardine; oyster beds." },
      { region_name: "Casablanca", lat: 33.6, lng: -7.62, notes: "Largest landings — sardine, hake." },
      { region_name: "Safi", lat: 32.3, lng: -9.24, notes: "Historic sardine capital." },
      { region_name: "Essaouira", lat: 31.513, lng: -9.77, notes: "Atlantic sardine, sea bream, conger; the harbour grills." },
      { region_name: "Agadir", lat: 30.42, lng: -9.6, notes: "Largest fishing fleet by tonnage." },
      { region_name: "Tan-Tan / Laâyoune", lat: 28.04, lng: -11.1, notes: "Octopus, cephalopods, southern sardine." },
      { region_name: "Dakhla", lat: 23.69, lng: -15.94, notes: "Oyster farms; cuttlefish; high-value catch." },
    ],
  },
  {
    slug: "oranges",
    name: "Oranges",
    kind: "fruit",
    ingredient_slug: "orange",
    blurb:
      "Citrus thrives on the irrigated coastal plains. Berkane in the east is famous for clementine; the Souss ships navels by the boatload; the Gharb grows the bulk of bitter and Maroc-Late.",
    origins: [
      { region_name: "Berkane (Triffa plain)", lat: 34.917, lng: -2.317, notes: "Berkane clementine; PGI." },
      { region_name: "Souss-Massa", lat: 30.42, lng: -9.6, notes: "Navel and Maroc-Late; export hub." },
      { region_name: "Gharb plain (Kénitra)", lat: 34.26, lng: -6.58, notes: "Bitter and sweet orange." },
      { region_name: "Tadla (Beni Mellal)", lat: 32.34, lng: -6.36, notes: "Mid-country citrus belt." },
    ],
  },
  {
    slug: "olives",
    name: "Olives & olive oil",
    kind: "fat",
    ingredient_slug: "olive-oil",
    blurb:
      "The Picholine Marocaine grows almost everywhere there is hill country. Meknès is the formal capital of olive oil; Fez and the eastern hills follow close behind.",
    origins: [
      { region_name: "Meknès (Saïs)", lat: 33.9, lng: -5.55, notes: "Picholine Marocaine; the country's olive-oil capital." },
      { region_name: "Fez region", lat: 34.033, lng: -5.0 },
      { region_name: "Beni Mellal foothills", lat: 32.34, lng: -6.36 },
      { region_name: "Taza–Taounate", lat: 34.74, lng: -4.01, notes: "Eastern hills; small estates." },
      { region_name: "Marrakech-Haouz", lat: 31.629, lng: -7.981 },
    ],
  },
  {
    slug: "argan",
    name: "Argan",
    kind: "tree-fruit",
    ingredient_slug: "argan",
    blurb:
      "The argan tree (Argania spinosa) grows nowhere else on earth. Its endemic range is a triangle between Essaouira, Agadir, and Taroudant — a UNESCO biosphere.",
    origins: [
      { region_name: "Essaouira hinterland", lat: 31.513, lng: -9.77, notes: "Northern edge of the argan range." },
      { region_name: "Souss plain (Agadir/Taroudant)", lat: 30.47, lng: -8.88, notes: "The heart of the argan biosphere." },
      { region_name: "Anti-Atlas (Tafraout)", lat: 29.72, lng: -8.97, notes: "Highland argan; women's cooperatives." },
    ],
  },
  {
    slug: "saffron",
    name: "Saffron",
    kind: "spice",
    ingredient_slug: "saffron",
    blurb:
      "Moroccan saffron is grown almost entirely on the high plateaux of the Anti-Atlas around Taliouine. Harvest is two weeks in late October, by hand, before sunrise.",
    origins: [
      { region_name: "Taliouine", lat: 30.532, lng: -7.92, notes: "Crocus sativus; PGI; the heart of saffron country." },
      { region_name: "Taznakht", lat: 30.581, lng: -7.196, notes: "Eastern edge of the saffron belt." },
    ],
  },
  {
    slug: "almonds",
    name: "Almonds",
    kind: "tree-fruit",
    ingredient_slug: "almond",
    blurb:
      "Almonds grow across the Rif and in the foothills of the Anti-Atlas. Tafraout is the sentimental capital — pink granite hills, blossom in February.",
    origins: [
      { region_name: "Tafraout (Anti-Atlas)", lat: 29.72, lng: -8.97, notes: "Beldi almond; pink-rock orchards." },
      { region_name: "Rif (Chefchaouen)", lat: 35.17, lng: -5.27, notes: "Northern almond groves." },
      { region_name: "Tata oases", lat: 29.74, lng: -7.97, notes: "Pre-Saharan almond." },
    ],
  },
  {
    slug: "dates",
    name: "Dates",
    kind: "fruit",
    blurb:
      "The date palm threads through the Drâa, the Tafilalet, and the southern oases. Mejhoul from Erfoud is the export-grade fruit; bouffegous and jihel are the everyday eating dates.",
    origins: [
      { region_name: "Tafilalet (Erfoud / Rissani)", lat: 31.43, lng: -4.23, notes: "Mejhoul date capital." },
      { region_name: "Drâa Valley (Zagora)", lat: 30.33, lng: -5.84, notes: "Bouffegous, jihel; long oasis line." },
      { region_name: "Tata-Akka oases", lat: 29.74, lng: -7.97 },
      { region_name: "Figuig", lat: 32.11, lng: -1.23, notes: "Eastern oases; aziza date." },
    ],
  },
  {
    slug: "wheat",
    name: "Wheat & semolina",
    kind: "grain",
    blurb:
      "Hard durum and soft bread wheat cover the rain-fed plains. The Saïs (Meknès) and the Chaouia are the breadbaskets; the Gharb adds irrigated yield.",
    origins: [
      { region_name: "Saïs plain (Meknès–Fez)", lat: 33.95, lng: -5.4 },
      { region_name: "Chaouia (Settat)", lat: 33.0, lng: -7.62 },
      { region_name: "Gharb plain", lat: 34.6, lng: -6.0 },
      { region_name: "Tadla", lat: 32.34, lng: -6.36 },
    ],
  },
  {
    slug: "preserved-lemon",
    name: "Preserved lemon",
    kind: "preserve",
    ingredient_slug: "preserved-lemon",
    blurb:
      "The doqq lemon — small, thin-skinned, almost-sweet — is the variety preserved in salt. It grows in the eastern Souss and in pockets of the Haouz.",
    origins: [
      { region_name: "Souss (Taroudant)", lat: 30.47, lng: -8.88, notes: "Doqq lemon orchards." },
      { region_name: "Marrakech-Haouz", lat: 31.629, lng: -7.981 },
    ],
  },
  {
    slug: "smen",
    name: "Smen",
    kind: "dairy",
    ingredient_slug: "smen",
    blurb:
      "Aged, salted butter — produced household-by-household across the country, but most often associated with the Middle Atlas pastoral belt and the great kitchens of Fez.",
    origins: [
      { region_name: "Middle Atlas pastures", lat: 33.3, lng: -5.4 },
      { region_name: "Fez (kitchen tradition)", lat: 34.033, lng: -5.0 },
      { region_name: "High Atlas (Aït Bouguemez)", lat: 31.74, lng: -6.34 },
    ],
  },
  {
    slug: "honey",
    name: "Honey",
    kind: "preserve",
    blurb:
      "Mountain and desert honeys — euphorbia from the Souss, thyme from the Atlas, jujube and carob from the Rif. The pre-Saharan euphorbia (daghmous) is the most prized.",
    origins: [
      { region_name: "Souss (euphorbia)", lat: 30.4, lng: -8.9, notes: "Daghmous honey; bitter, intense." },
      { region_name: "Middle Atlas (thyme)", lat: 33.3, lng: -5.4 },
      { region_name: "Rif (carob, jujube)", lat: 35.0, lng: -4.6 },
      { region_name: "Anti-Atlas (sidr)", lat: 29.72, lng: -8.97 },
    ],
  },
  {
    slug: "cumin",
    name: "Cumin",
    kind: "spice",
    blurb:
      "Domestic cumin from the eastern hills and the Rif; supplemented by Indian and Syrian imports. The everyday spice — alongside salt, the side-table seasoning for mechoui.",
    origins: [
      { region_name: "Taza", lat: 34.21, lng: -4.01 },
      { region_name: "Rif foothills", lat: 35.0, lng: -4.6 },
      { region_name: "Eastern plateau", lat: 33.6, lng: -2.9 },
    ],
  },
  {
    slug: "mint",
    name: "Mint",
    kind: "vegetable",
    blurb:
      "Spearmint (na'na') is a staple irrigated crop. Mequinez is famous; the Haouz around Marrakech grows year-round bunches for the tea-glasses of the country.",
    origins: [
      { region_name: "Meknès", lat: 33.9, lng: -5.55, notes: "Mequinez mint; the most prized." },
      { region_name: "Marrakech-Haouz", lat: 31.629, lng: -7.981 },
      { region_name: "Souss", lat: 30.4, lng: -8.9 },
    ],
  },
];
