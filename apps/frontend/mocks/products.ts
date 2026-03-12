import type { Product } from '../types/product'

export const productsMock: Product[] = [
  {
    id: 'clx1a2b3c4d5e6f7g8h9i0j1',
    slug: 'silver-ring-luna',
    titleRu: 'Koltso Luna',
    titleEn: 'Ring Luna',
    descriptionRu: 'Serebryanoe koltso s minimalistichnym dizainom.',
    descriptionEn: 'Sterling silver ring with a minimalist design.',
    materials: ['Sterling Silver'],
    price: '129.00',
    isInStock: true,
    isPublished: true,
    sortOrder: 1,
    createdAt: '2026-03-10T10:00:00.000Z',
    updatedAt: '2026-03-12T09:30:00.000Z'
  },
  {
    id: 'clx2a2b3c4d5e6f7g8h9i0j2',
    slug: 'gold-necklace-aura',
    titleRu: 'Kole Aura',
    titleEn: 'Necklace Aura',
    descriptionRu: 'Tonkoe zolotoe kole dlya povsednevnykh obrazov.',
    descriptionEn: 'Delicate gold necklace for everyday looks.',
    materials: ['14K Gold'],
    price: '249.00',
    isInStock: true,
    isPublished: true,
    sortOrder: 2,
    createdAt: '2026-03-09T12:15:00.000Z',
    updatedAt: '2026-03-12T09:30:00.000Z'
  },
  {
    id: 'clx3a2b3c4d5e6f7g8h9i0j3',
    slug: 'pearl-earrings-mist',
    titleRu: 'Sergi Mist',
    titleEn: null,
    descriptionRu: 'Sergi s presnovodnym zhemchugom.',
    descriptionEn: null,
    materials: ['Freshwater Pearl', 'Sterling Silver'],
    price: '179.00',
    isInStock: false,
    isPublished: true,
    sortOrder: 3,
    createdAt: '2026-03-08T08:40:00.000Z',
    updatedAt: '2026-03-12T09:30:00.000Z'
  },
  {
    id: 'clx4a2b3c4d5e6f7g8h9i0j4',
    slug: 'bracelet-noir',
    titleRu: 'Braslet Noir',
    titleEn: 'Bracelet Noir',
    descriptionRu: null,
    descriptionEn: null,
    materials: ['Stainless Steel'],
    price: '99.00',
    isInStock: true,
    isPublished: false,
    sortOrder: 4,
    createdAt: '2026-03-07T14:20:00.000Z',
    updatedAt: '2026-03-12T09:30:00.000Z'
  }
]
