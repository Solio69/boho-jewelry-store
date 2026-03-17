import Link from 'next/link'
import type { Product } from '../../types/product'
import './ProductCard.scss'

const CURRENCY_SYMBOL = '$'
const TEXT_SEPARATOR = ', '
const IN_STOCK_LABEL = 'In stock'
const OUT_OF_STOCK_LABEL = 'Out of stock'
const ORDER_PAGE_HREF = '/order'
const ORDER_BUTTON_LABEL = 'Order'

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { titleRu, price, descriptionRu, images, categories, materials, isInStock } = product
  const [firstImage] = images

  return (
    <li className="product-card">
      {firstImage && <img className="product-card__image" src={firstImage} alt={titleRu} />}
      <p className="product-card__title">{titleRu}</p>
      <p className="product-card__categories">{categories.join(TEXT_SEPARATOR)}</p>
      {isInStock && (
        <p className="product-card__price">
          {CURRENCY_SYMBOL}
          {price}
        </p>
      )}
      {descriptionRu && <p className="product-card__description">{descriptionRu}</p>}
      <p className="product-card__materials">{materials.join(TEXT_SEPARATOR)}</p>
      <p className="product-card__status">{isInStock ? IN_STOCK_LABEL : OUT_OF_STOCK_LABEL}</p>
      {isInStock && (
        <Link href={ORDER_PAGE_HREF} className="product-card__button">
          {ORDER_BUTTON_LABEL}
        </Link>
      )}
    </li>
  )
}

export default ProductCard
