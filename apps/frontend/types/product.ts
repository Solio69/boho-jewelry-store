export type Product = {
  id: string
  slug: string
  titleRu: string
  titleEn: string | null
  descriptionRu: string | null
  descriptionEn: string | null
  images: string[]
  categories: string[]
  materials: string[]
  price: string
  isInStock: boolean
  isPublished: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}
