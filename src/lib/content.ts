import type { OfferId, AddonId, Offer, Cocktail } from './types';

export const OFFERS: Record<OfferId, Offer> = {
  basic: {
    id: 'basic',
    name: 'BASIC',
    description: 'Idealny dla kameralnych przyjęć do 50 osób',
    price: 2500,
    baseGuests: 50,
    features: [
      'Profesjonalny bar mobilny',
      'Obsługa barmańska 6h',
      '6 koktajli alkoholowych',
      '3 koktajle bezalkoholowe',
      'Szkło, lód, dekoracje',
      'Karta koktajli',
    ],
  },
  premium: {
    id: 'premium',
    name: 'PREMIUM',
    description: 'Najpopularniejszy wybór na wesela 50-100 osób',
    price: 3800,
    baseGuests: 80,
    features: [
      'Wszystko z pakietu BASIC',
      'Rozszerzony bar LED',
      'Shot bar (3 rodzaje)',
      'Piwo lane (30L KEG)',
      'Drugi barman',
      'Personalizowane menu',
    ],
    popular: true,
  },
  exclusive: {
    id: 'exclusive',
    name: 'EXCLUSIVE',
    description: 'Luksusowa obsługa imprez 100-150 osób',
    price: 5500,
    baseGuests: 120,
    features: [
      'Wszystko z pakietu PREMIUM',
      'Premium alkohole',
      'Pokaz flair',
      'Fontanna czekoladowa',
      'Trzech barmanów',
      'Dedykowany koordynator',
    ],
  },
};

export const ADDONS: Record<AddonId, number> = {
  fountain: 800,
  lemonade: 600,
  ledbar: 400,
  hokery: 500,
  tapbeer: 450,
};

export const ADDON_LABELS: Record<AddonId, { name: string; description: string }> = {
  fountain: { name: 'Fontanna czekoladowa', description: 'Słodka atrakcja dla gości' },
  lemonade: { name: 'Stół lemoniad', description: 'Orzeźwiające napoje dla wszystkich' },
  ledbar: { name: 'Podświetlany bar LED', description: 'Efektowne oświetlenie baru' },
  hokery: { name: 'Hokery / strefa chill', description: 'Wygodne miejsca przy barze' },
  tapbeer: { name: 'Piwo z nalewaka', description: 'Dodatkowy KEG 30L piwa' },
};

export const COCKTAILS: Cocktail[] = [
  { name: 'Mojito', ingredients: 'rum, limonka, mięta, cukier trzcinowy, woda gazowana', category: 'alcoholic' },
  { name: 'Cuba Libre', ingredients: 'rum, cola, limonka', category: 'alcoholic' },
  { name: 'Vodka Sour', ingredients: 'wódka, sok z cytryny, syrop cukrowy', category: 'alcoholic' },
  { name: 'Sex on the Beach', ingredients: 'wódka, likier brzoskwiniowy, sok pomarańczowy, żurawina', category: 'alcoholic' },
  { name: 'Aperol Spritz', ingredients: 'Aperol, prosecco, woda gazowana, pomarańcza', category: 'alcoholic' },
  { name: 'Hugo Spritz', ingredients: 'prosecco, syrop z kwiatów bzu, mięta, limonka, woda gazowana', category: 'alcoholic' },
  { name: 'Virgin Mojito', ingredients: 'mięta, limonka, cukier trzcinowy, woda gazowana', category: 'non-alcoholic' },
  { name: 'Domowa Lemoniada', ingredients: 'cytryna, pomarańcza, syrop/miód, woda', category: 'non-alcoholic' },
  { name: 'Owocowy Fizz', ingredients: 'malina lub marakuja, lemoniada, świeże owoce', category: 'non-alcoholic' },
  { name: 'Kamikaze', ingredients: 'wódka, triple sec / blue curaçao, sok z limonki', category: 'shot' },
  { name: 'Wściekły Pies', ingredients: 'wódka, syrop malinowy / grenadina, kropla tabasco', category: 'shot' },
  { name: 'Cytrynowy', ingredients: 'wódka, sok z cytryny, syrop cukrowy / likier cytrynowy', category: 'shot' },
];

export const GALLERY_IMAGES: string[] = [
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1560963689-b5682b6440f8?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1609951651556-5334e2706168?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1574096079513-d8259312b785?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1587223962930-cb7f31384c19?w=600&h=600&fit=crop',
];

export const SHOPPING_LIST = {
  title: 'Lista zakupów (ok. 50 osób / 6 godz.)',
  items: [
    { name: 'Wódka czysta 0,7 L', quantity: 4, description: 'Vodka Sour, Sex on the beach, shoty' },
    { name: 'Rum biały 0,7 L', quantity: 3, description: 'Mojito, Cuba Libre' },
    { name: 'Likier brzoskwiniowy 0,7 L', quantity: 2, description: 'Sex on the Beach' },
    { name: 'Aperol 0,7 L', quantity: 2, description: 'Aperol Spritz' },
    { name: 'Triple Sec / Blue Curaçao 0,7 L', quantity: 1, description: 'Kamikaze, modyfikacje' },
    { name: 'Prosecco 0,75 L', quantity: 5, description: 'Aperol Spritz, Hugo Spritz' },
  ],
};
