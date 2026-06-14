export type Brand = "Jordan" | "Nike" | "adidas" | "New Balance";

export interface Drop {
  id: string;
  name: string;
  brand: Brand;
  /** ISO date (YYYY-MM-DD) of the drop. */
  releaseDate: string;
  /** True when the exact day isn't confirmed yet and releaseDate is an estimate. */
  dateEstimated?: boolean;
  /** Suggested retail price in USD. */
  price: number;
  /** Direct image URL. */
  image: string;
  /** Link to the product / drop details page. */
  link: string;
}

const HOH = "https://houseofheat.co";

/**
 * Curated list of upcoming sneaker drops.
 *
 * Data is sourced from public sneaker release calendars (House of Heat, Sole
 * Retriever, Nice Kicks) and reflects releases announced as of June 2026.
 * Prices are manufacturer suggested retail (MSRP) and may vary by retailer.
 *
 * To keep the site fresh, update this array (or wire `app/api/drops` up to a
 * live feed). The UI automatically hides any drop whose date has passed.
 */
export const DROPS: Drop[] = [
  // ---------------------------------------------------------------- Jordan
  {
    id: "aj5-black-university-blue",
    name: 'Air Jordan 5 "Black/University Blue"',
    brand: "Jordan",
    releaseDate: "2026-06-20",
    price: 220,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/d0dc4bd58f5cad70249b1c01cb987dc957a9ba1a-2300x1438.jpg",
    link: `${HOH}/jordan/air-jordan-5-black-university-blue-white-dd0587-008`,
  },
  {
    id: "jaide-aj11-low-fiberglass",
    name: 'JAIDE x Air Jordan 11 Low "Fiberglass"',
    brand: "Jordan",
    releaseDate: "2026-06-27",
    price: 205,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/36c7365c2c305415cb5e847dcf3230319a370d40-3144x1965.jpg",
    link: `${HOH}/jordan/jaide-x-womens-air-jordan-11-low-iw1882-300`,
  },
  {
    id: "aj1-mid-palomino",
    name: 'Air Jordan 1 Mid "Palomino"',
    brand: "Jordan",
    releaseDate: "2026-07-01",
    price: 135,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/2b2ffa376dd342d049f04be43e682045b0aee060-2000x1250.png",
    link: `${HOH}/jordan/air-jordan-1-mid-palomino-dq8426-007`,
  },
  {
    id: "aj5-sunset",
    name: 'Air Jordan 5 "Sunset"',
    brand: "Jordan",
    releaseDate: "2026-07-01",
    price: 215,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/6ad89c2718540aa3c8f4d46ab021bf7268b5f704-1440x1440.jpg",
    link: `${HOH}/jordan/air-jordan-5-white-sunset-iv5678-102`,
  },
  {
    id: "jordan-triangle-baltic-blue",
    name: 'Jordan Triangle "Baltic Blue"',
    brand: "Jordan",
    releaseDate: "2026-07-02",
    price: 145,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/2df231faf7a81cc54982f10dbc773d50fb3104e3-2000x1334.jpg",
    link: `${HOH}/jordan/jordan-triangle-basketball-shoe-releases`,
  },
  {
    id: "aj1-high-og-love-the-game",
    name: 'Air Jordan 1 High OG "Love the Game"',
    brand: "Jordan",
    releaseDate: "2026-07-03",
    price: 190,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/e49af8fc2bbd12f9d9fcfe13966bc98f8a0fe929-2000x1250.jpg",
    link: `${HOH}/jordan/air-jordan-1-high-og-love-the-game-dz5485-201`,
  },
  {
    id: "aj7-miro",
    name: 'Air Jordan 7 "Miro"',
    brand: "Jordan",
    releaseDate: "2026-07-10",
    price: 210,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/c53badb5f5ff681c9bb929e7cec6c3d730b0926c-2000x1250.png",
    link: `${HOH}/jordan/air-jordan-7-white-multi-color-iq6573-100-release-date`,
  },
  {
    id: "aj4-birds-of-paradise",
    name: 'Air Jordan 4 "Birds of Paradise"',
    brand: "Jordan",
    releaseDate: "2026-07-10",
    price: 220,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/051b6b0c3fa8436857dda10bbbfbf3a7d8444df3-2000x1250.png",
    link: `${HOH}/jordan/air-jordan-4-birds-of-paradise-hv0823-101`,
  },
  {
    id: "aj3-og-true-blue",
    name: 'Air Jordan 3 OG "True Blue"',
    brand: "Jordan",
    releaseDate: "2026-07-18",
    price: 230,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/f7841622a5ff5cef82b37d4b58f300aa9b92601e-1200x750.jpg",
    link: `${HOH}/jordan/air-jordan-3-true-blue-fall-2026`,
  },
  {
    id: "aj4-comic",
    name: 'Air Jordan 4 "Comic"',
    brand: "Jordan",
    releaseDate: "2026-07-25",
    price: 220,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/cff832292f6755debc6d8753ef75267c49a4f5a5-2000x1250.png",
    link: `${HOH}/jordan/air-jordan-4-comic-io2362-100`,
  },
  {
    id: "aj6-xuanwu",
    name: 'Air Jordan 6 "Xuanwu"',
    brand: "Jordan",
    releaseDate: "2026-08-01",
    dateEstimated: true,
    price: 210,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/eb4b1a2adfce0d70be618e4a853fad4a23180568-2000x1250.png",
    link: `${HOH}/jordan/air-jordan-6-xuanwu-ir7572-220-release-date`,
  },
  {
    id: "spizike-low-white-cement",
    name: 'Jordan Spizike Low "White Cement"',
    brand: "Jordan",
    releaseDate: "2026-08-01",
    price: 160,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/7b926d6997334757ce1dd37a317f497b3dfcea11-2000x1250.png",
    link: `${HOH}/jordan/jordan-spizike-low-white-cement-iv6047-100`,
  },
  {
    id: "aj13-flint",
    name: 'Air Jordan 13 "Flint"',
    brand: "Jordan",
    releaseDate: "2026-08-01",
    price: 210,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/89616e10dce094e7c8e414ea19c3ef283a6378aa-2000x1250.png",
    link: `${HOH}/jordan/air-jordan-13-flint-iw3808-400-2026-release-date`,
  },
  {
    id: "aj17-low-black-patent",
    name: 'Air Jordan 17 Low "Black Patent"',
    brand: "Jordan",
    releaseDate: "2026-08-08",
    price: 190,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/0ac68519c3d5ef1e6cc180c31cf8721e1d9ff341-2000x1250.png",
    link: `${HOH}/jordan/air-jordan-17-low-black-patent-iv7640-001`,
  },
  {
    id: "aj8-bin-23",
    name: 'Air Jordan 8 "Bin 23"',
    brand: "Jordan",
    releaseDate: "2026-08-15",
    price: 200,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/84a25620bd4badbd1d8d1c55c0415ca9b472f385-2000x1250.png",
    link: `${HOH}/jordan/air-jordan-8-bin-23-io2053-300`,
  },

  // ------------------------------------------------------------------ Nike
  {
    id: "pegasus-premium-yin-yang-white",
    name: 'Nike Pegasus Premium "Yin & Yang" (White/Black)',
    brand: "Nike",
    releaseDate: "2026-06-16",
    price: 210,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/797b9aa8daed4d12e9b61375aac9f3b14ba09e2f-2000x1250.png",
    link: `${HOH}/nike/nike-pegasus-premium-sp-yin-yang-pack-ir2166-001-ir2166-102`,
  },
  {
    id: "pegasus-premium-yin-yang-black",
    name: 'Nike Pegasus Premium "Yin & Yang" (Black/White)',
    brand: "Nike",
    releaseDate: "2026-06-16",
    price: 210,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/eda56d64953636a93e340d18d6413854d79ba25d-2000x1250.png",
    link: `${HOH}/nike/nike-pegasus-premium-sp-yin-yang-pack-ir2166-001-ir2166-102`,
  },
  {
    id: "ama-maniere-pegasus-premium",
    name: 'A Ma Maniére x Nike Pegasus Premium "Timing Is Everything"',
    brand: "Nike",
    releaseDate: "2026-06-19",
    price: 220,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/9f718582304a24eb96391b023a7c88df9c385a6a-1080x1350.jpg",
    link: `${HOH}/nike/a-ma-maniere-x-nike-pegasus-premium-release-details`,
  },
  {
    id: "kd6-night-vision",
    name: 'Nike KD 6 "Night Vision"',
    brand: "Nike",
    releaseDate: "2026-06-19",
    price: 140,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/a6dc754a0f7dd41c72c93a442319fc14453cebdf-3144x1965.jpg",
    link: `${HOH}/nike/nike-kd-6-night-vision-2026-ih3582-001`,
  },
  {
    id: "ama-maniere-af1-low-pack",
    name: "A Ma Maniére x Nike Air Force 1 Low Pack",
    brand: "Nike",
    releaseDate: "2026-08-01",
    dateEstimated: true,
    price: 160,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/1bbeea7e925b1537c23fe2d439dbdf2e3f956d33-2000x1250.gif",
    link: `${HOH}/nike/a-ma-maniere-nike-air-force-1-low-wyws-summer-2026-pack`,
  },

  // ---------------------------------------------------------------- adidas
  {
    id: "harden-vol10-gradient",
    name: 'adidas Harden Vol. 10 "Gradient"',
    brand: "adidas",
    releaseDate: "2026-06-15",
    price: 160,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/557325b59e4195b1d22952f961e79f3d9ac23920-2000x1250.png",
    link: `${HOH}/adidas/mike-james-adidas-harden-vol-10-white-blue-gradient-details`,
  },
  {
    id: "clot-samba-espadrille-black",
    name: 'CLOT x adidas Samba Espadrille "Black"',
    brand: "adidas",
    releaseDate: "2026-06-17",
    price: 120,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/b3f400a012ad5bf6e1216bea28faa66919c94aaf-2000x1250.jpg",
    link: `${HOH}/adidas/clot-adidas-samba-espadrille-football-club-capsule`,
  },
  {
    id: "clot-samba-espadrille-green",
    name: 'CLOT x adidas Samba Espadrille "Green"',
    brand: "adidas",
    releaseDate: "2026-06-17",
    price: 120,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/899214bb1a6556d6a297d9a70500dbbbe95b7c11-2000x1250.jpg",
    link: `${HOH}/adidas/clot-adidas-samba-espadrille-football-club-capsule`,
  },
  {
    id: "harden-vol10-clear-cyan",
    name: 'adidas Harden Vol. 10 "Clear Cyan"',
    brand: "adidas",
    releaseDate: "2026-06-19",
    price: 160,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/3c5849d634ed599e5d8df4bd98da16064fe51448-2000x1250.png",
    link: `${HOH}/adidas/adidas-harden-vol-10-clear-cyan-ki1605`,
  },
  {
    id: "better-generation-predator-sala",
    name: 'The Better Generation x adidas "Grassroots" Predator Sala',
    brand: "adidas",
    releaseDate: "2026-06-20",
    price: 150,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/3058d47a17bc6d61042e6c1d2a74304fe2ae9db7-1600x900.png",
    link: `${HOH}/adidas/adidas-x-the-better-generation-grassroots-predator-sala-details`,
  },
  {
    id: "bape-adizero-evo-sl-mismatched",
    name: 'BAPE® x adidas Adizero Evo SL "Mismatched"',
    brand: "adidas",
    releaseDate: "2026-06-27",
    price: 170,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/d9ce293e1bfe4d818165a88383d80e29973d5668-2000x1250.jpg",
    link: `${HOH}/adidas/a-bathing-ape-bape-adidas-adizero-evo-sl-blue-green-red-kj5749`,
  },
  {
    id: "bape-adizero-evo-sl-camo",
    name: 'BAPE® x adidas Adizero Evo SL "Mismatched Camo"',
    brand: "adidas",
    releaseDate: "2026-06-27",
    price: 170,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/bf859ab5bce4651bc02619e0b512cee40c8342e0-2000x1250.png",
    link: `${HOH}/adidas/a-bathing-ape-bape-adidas-running-adizero-evo-sl-release-date`,
  },
  {
    id: "ae2-kids-tie-dye",
    name: 'Kids\' adidas Anthony Edwards 2 "Tie-Dye"',
    brand: "adidas",
    releaseDate: "2026-07-25",
    price: 100,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/cd4c71bc46466d5ef2a379cef3b56ffcc41f039c-2000x1250.jpg",
    link: `${HOH}/adidas/adidas-anthony-edwards-ae-2-tie-dye-release-date`,
  },

  // ----------------------------------------------------------- New Balance
  {
    id: "nb-991v2-seaglass",
    name: 'New Balance 991v2 "Seaglass"',
    brand: "New Balance",
    releaseDate: "2026-06-18",
    price: 200,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/9ab4dc18f7fab081da3d81309dc6764c183cc9b1-2000x1250.jpg",
    link: `${HOH}/new-balance/new-balance-991v2-seaglass-u991bb2-mahogany-rose-u991rb2`,
  },
  {
    id: "nb-991v2-mahogany-rose",
    name: 'New Balance 991v2 "Mahogany Rose"',
    brand: "New Balance",
    releaseDate: "2026-06-18",
    price: 200,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/356ca0ad69d8897d248edcef01e96d8113a1c8bd-2000x1250.jpg",
    link: `${HOH}/new-balance/new-balance-991v2-seaglass-u991bb2-mahogany-rose-u991rb2`,
  },
  {
    id: "nb-allerdale-vaporous-grey",
    name: 'New Balance Allerdale "Vaporous Grey"',
    brand: "New Balance",
    releaseDate: "2026-06-18",
    price: 130,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/3f6bd5898fbab0a81d416f8ff366b3a86eed03a9-2000x1250.jpg",
    link: `${HOH}/new-balance/new-balance-allerdale-off-white-tan-uadwlwo`,
  },
  {
    id: "basketcase-gator-run-maiden",
    name: 'BASKETCASE x New Balance Gator Run "Maiden"',
    brand: "New Balance",
    releaseDate: "2026-06-19",
    price: 150,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/b0294c6a95599be7e92f5bc393df930f011da979-1080x1350.jpg",
    link: `${HOH}/new-balance/basketcase-x-new-balance-gator-run-hacky-maiden-release-details`,
  },
  {
    id: "jjjjound-1890-silver",
    name: 'JJJJound x New Balance 1890 "Silver"',
    brand: "New Balance",
    releaseDate: "2026-06-25",
    price: 160,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/62d1c53e70c1b3cb62bbeab808c5aadebf322ec7-2000x1250.png",
    link: `${HOH}/new-balance/jjjjound-new-balance-1890-release-date`,
  },
  {
    id: "jjjjound-1890-black-white",
    name: 'JJJJound x New Balance 1890 "Black/White"',
    brand: "New Balance",
    releaseDate: "2026-06-25",
    price: 160,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/007f6153d8eb2e7abd8da60f2d07d478f1db88d3-2000x1250.png",
    link: `${HOH}/new-balance/jjjjound-new-balance-1890-release-date`,
  },
  {
    id: "nb-1890-outerspace",
    name: 'New Balance ABZORB 1890 "Outerspace"',
    brand: "New Balance",
    releaseDate: "2026-06-25",
    price: 150,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/5a6bfd7b1b01b39a7608cb9148633dc8f2bc0da8-2000x1250.jpg",
    link: `${HOH}/new-balance/new-balance-1890-outerspace-u189052j-linen-punch-u18901iu`,
  },
  {
    id: "nb-1890-linen-punch",
    name: 'New Balance ABZORB 1890 "Linen Punch"',
    brand: "New Balance",
    releaseDate: "2026-06-25",
    price: 150,
    image:
      "https://cdn.sanity.io/images/pu5wtzfc/production/80f5a6831758fe41fb00ba21798fe7c979dbfa5e-2000x1250.jpg",
    link: `${HOH}/new-balance/new-balance-1890-outerspace-u189052j-linen-punch-u18901iu`,
  },
];

export const BRANDS: Brand[] = ["Jordan", "Nike", "adidas", "New Balance"];

/** Returns drops that have not yet released, sorted soonest-first. */
export function getUpcomingDrops(now: Date = new Date()): Drop[] {
  const today = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
  return DROPS.filter((d) => new Date(d.releaseDate) >= today).sort(
    (a, b) =>
      new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
  );
}
