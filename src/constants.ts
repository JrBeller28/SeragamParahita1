import { Product, Partner, Material, LiveProject, MajorPartner } from './types';

export const PARTNERS: Partner[] = [
  { name: 'Alfamart', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Alfamart_logo.svg/1200px-Alfamart_logo.svg.png' },
  { name: 'Pertamina', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pertamina_Logo.svg/1200px-Pertamina_Logo.svg.png' },
  { name: 'Inmrenared', logo: 'https://picsum.photos/seed/partner3/200/100' },
  { name: 'Pelindo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Logo_Pelindo.svg/1200px-Logo_Pelindo.svg.png' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Alfamart Shirt',
    category: 'Uniform',
    image: 'https://picsum.photos/seed/shirt1/400/500',
    badge: 'Client Badge',
    price: '$11.000',
    description: 'Official Alfamart field uniform designed for comfort and durability during long shifts.',
    features: ['Anti-wrinkle fabric', 'Breathable mesh', 'Reinforced stitching'],
    materialId: '1',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '2',
    name: 'Alfamart Polo Shirt',
    category: 'Uniform',
    image: 'https://raw.githubusercontent.com/Antigravity-Studio/media-assets/main/garment/red-polo-stacked.png',
    badge: 'Client Badge',
    price: '$9.000',
    description: 'Casual yet professional polo shirt for Alfamart office and management staff.',
    features: ['Premium pique cotton', 'Ribbed collar', 'Side slits for movement'],
    materialId: '1',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '3',
    name: 'Safety Gear',
    category: 'Safety',
    image: 'https://raw.githubusercontent.com/Antigravity-Studio/media-assets/main/garment/safety-uniform-orange.png',
    badge: 'Client Badge',
    price: '$15.000',
    description: 'High-visibility safety vest with reflective strips for industrial and construction environments.',
    features: ['High-viz orange', '3M Reflective tape', 'Multi-pocket design'],
    materialId: '2',
    sizes: ['M', 'L', 'XL'],
  },
  {
    id: '4',
    name: 'Safety Germitss',
    category: 'Safety',
    image: 'https://picsum.photos/seed/safety2/400/500',
    badge: 'Client Badge',
    price: '$13.000',
    description: 'Specialized safety overall for technical staff, providing full body protection.',
    features: ['Flame retardant', 'Oil resistant', 'Heavy duty zippers'],
    materialId: '2',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '5',
    name: 'Corporate Suit',
    category: 'Corporate',
    image: 'https://picsum.photos/seed/suit1/400/500',
    badge: 'Premium',
    price: '$45.000',
    description: 'Bespoke corporate suit for executive management, tailored for a perfect fit.',
    features: ['Italian wool blend', 'Silk lining', 'Hand-finished details'],
    materialId: '1',
    sizes: ['Custom Fit'],
  },
  {
    id: '6',
    name: 'Workwear Jacket',
    category: 'Workwear',
    image: 'https://picsum.photos/seed/jacket1/400/500',
    badge: 'Durable',
    price: '$25.000',
    description: 'Rugged workwear jacket designed for outdoor labor and harsh weather conditions.',
    features: ['Waterproof shell', 'Thermal lining', 'Adjustable cuffs'],
    materialId: '2',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
];

export const MATERIALS: Material[] = [
  {
    id: '1',
    name: 'Premium Cotton Pique',
    image: 'https://picsum.photos/seed/fabric1/800/600',
    specifications: {
      grammage: '230g',
      composition: '100% Cotton',
      recommendedUse: 'Uniforms',
      technicals: ['Breathable', 'Soft Touch', 'Durable Color'],
    },
  },
  {
    id: '2',
    name: 'Heavy Duty Drill',
    image: 'https://picsum.photos/seed/fabric2/800/600',
    specifications: {
      grammage: '280g',
      composition: '65% Poly, 35% Cotton',
      recommendedUse: 'Safety Wear',
      technicals: ['Tear Resistant', 'Easy Care', 'Industrial Wash'],
    },
  },
];

export const HERO_IMAGES = [
  'https://raw.githubusercontent.com/Antigravity-Studio/media-assets/main/garment/white-shirt-collar.png',
  'https://raw.githubusercontent.com/Antigravity-Studio/media-assets/main/garment/sewing-room-workers.png',
  'https://raw.githubusercontent.com/Antigravity-Studio/media-assets/main/garment/fabric-cutting-table.png',
];

export const LIVE_PROJECTS: LiveProject[] = [
  {
    id: '1',
    title: 'Pattern Cutting',
    status: 'Sewing 75k complete',
    progress: 75,
    image: 'https://raw.githubusercontent.com/Antigravity-Studio/media-assets/main/garment/fabric-cutting-table.png',
  },
  {
    id: '2',
    title: 'Sewing & Assembly',
    status: 'Sewing 75% complete',
    progress: 98,
    image: 'https://raw.githubusercontent.com/Antigravity-Studio/media-assets/main/garment/worker-sewing-machine.png',
  },
  {
    id: '3',
    title: 'Quality Control & Finishing',
    status: 'Quality 70k complete',
    progress: 55,
    image: 'https://picsum.photos/seed/qc/400/300',
  },
];

export const MAJOR_PARTNERS: MajorPartner[] = [
  {
    id: '1',
    name: 'Alfamart',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Alfamart_logo.svg/1200px-Alfamart_logo.svg.png',
    status: 'Live Order',
    progress: 85,
  },
  {
    id: '2',
    name: 'Alfamart',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Alfamart_logo.svg/1200px-Alfamart_logo.svg.png',
    status: 'Live Order',
    progress: 60,
  },
  {
    id: '3',
    name: 'Pertamina',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pertamina_Logo.svg/1200px-Pertamina_Logo.svg.png',
    status: 'Live Order',
    progress: 45,
  },
  {
    id: '4',
    name: 'Pertamina',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Pertamina_Logo.svg/1200px-Pertamina_Logo.svg.png',
    status: 'Live Order',
    progress: 90,
  },
];
