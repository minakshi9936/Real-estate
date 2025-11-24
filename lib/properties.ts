export interface Property {
  id: number
  title: string
  description: string
  imageURL: string
  price: number
  location: string
  area: number
  bedrooms: number
  bathrooms: number
  features: string[]
  gallery: string[]
  propertyType: string
}

const mockProperties: Property[] = [
  {
    id: 1,
    title: 'Luxury Penthouse in Downtown',
    description: 'An exquisite luxury penthouse offering breathtaking city views and premium amenities.',
    imageURL: 'https://images.unsplash.com/photo-1512917774080-9b274b3f4a0b?w=1200&h=800&fit=crop',
    price: 415000000,
    location: 'Downtown District, Metro City',
    area: 4500,
    bedrooms: 4,
    bathrooms: 4,
    features: [
      'Private Elevator',
      'Home Theater',
      'Wine Cellar',
      'Infinity Pool',
      '360° Views',
      'Smart Home',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9b274b3f4a0b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
    ],
    propertyType: 'Penthouse',
  },
  {
    id: 2,
    title: 'Modern Family Home in Residential Area',
    description: 'Spacious modern family home with elegant design and functional layout, perfect for growing families.',
    imageURL: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
    price: 149400000,
    location: 'Riverside Estates, Metro City',
    area: 3200,
    bedrooms: 4,
    bathrooms: 3,
    features: [
      'Garden',
      'Garage',
      'Modern Kitchen',
      'Master Suite',
      'Outdoor Patio',
      'Security System',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop',
    ],
    propertyType: 'House',
  },
  {
    id: 3,
    title: 'Contemporary Apartment - City Central',
    description: 'Modern apartment in the heart of the city with easy access to all amenities and public transport.',
    imageURL: 'https://images.unsplash.com/photo-1512917774080-9b274b3f4a0b?w=1200&h=800&fit=crop',
    price: 78850000,
    location: 'City Central, Metro City',
    area: 1800,
    bedrooms: 3,
    bathrooms: 2,
    features: [
      'Gym',
      'Pool',
      'Parking',
      'Balcony',
      'Modern Kitchen',
      'Security',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9b274b3f4a0b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop',
    ],
    propertyType: 'Apartment',
  },
  {
    id: 4,
    title: 'Villa with Private Pool',
    description: 'Luxurious villa with private pool, garden, and panoramic views. Perfect for luxury lifestyle.',
    imageURL: 'https://images.unsplash.com/photo-1613490493976-909e6ae84d27?w=1200&h=800&fit=crop',
    price: 290500000,
    location: 'Hillside Villas, Metro City',
    area: 5000,
    bedrooms: 5,
    bathrooms: 4,
    features: [
      'Private Pool',
      'Garden',
      'Home Automation',
      'Theater Room',
      'Gym',
      'Guest House',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1613490493976-909e6ae84d27?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9b274b3f4a0b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop',
    ],
    propertyType: 'Villa',
  },
  {
    id: 5,
    title: 'Studio Apartment - Prime Location',
    description: 'Compact and stylish studio apartment ideal for young professionals and first-time buyers.',
    imageURL: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
    price: 37350000,
    location: 'Business District, Metro City',
    area: 650,
    bedrooms: 1,
    bathrooms: 1,
    features: ['Balcony', 'Gym Access', 'Security', 'Parking', 'Furnished'],
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9b274b3f4a0b?w=1200&h=800&fit=crop',
    ],
    propertyType: 'Studio',
  },
  {
    id: 6,
    title: 'Suburban Home with Land',
    description: 'Beautiful suburban home with ample land, perfect for families seeking space and tranquility.',
    imageURL: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop',
    price: 99600000,
    location: 'Suburban Area, Metro City',
    area: 3800,
    bedrooms: 3,
    bathrooms: 2,
    features: [
      'Large Garden',
      'Workshop',
      'Garage',
      'Well Water',
      'Quiet Area',
      'Privacy',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
    ],
    propertyType: 'House',
  },
]

export function getAllProperties(): Property[] {
  return mockProperties
}

export function getPropertyById(id: number): Property | undefined {
  return mockProperties.find((property) => property.id === id)
}

export function getPropertyTypeStats() {
  const stats = {
    apartments: mockProperties.filter((p) => p.propertyType === 'Apartment').length,
    houses: mockProperties.filter((p) => p.propertyType === 'House').length,
    villas: mockProperties.filter((p) => p.propertyType === 'Villa').length,
    penthouses: mockProperties.filter((p) => p.propertyType === 'Penthouse').length,
  }
  return stats
}
