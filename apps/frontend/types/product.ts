export type Product = {
  id: string
  slug: string
  titleRu: string
  titleEn: string | null
  descriptionRu: string | null
  descriptionEn: string | null
  materials: string[]
  price: string
  isInStock: boolean
  isPublished: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}
