import Link from 'next/link'
import { productsMock } from '../../mocks/products'
import './Catalog.scss'

const CURRENCY_SYMBOL = '$'
const MATERIALS_SEPARATOR = ', '
const IN_STOCK_LABEL = 'In stock'
const OUT_OF_STOCK_LABEL = 'Out of stock'
const ORDER_PAGE_HREF = '/order'
const ORDER_BUTTON_LABEL = 'Order'

const Catalog = () => {
  const availableProducts = productsMock.filter(({ isInStock }) => isInStock)
  const unavailableProducts = productsMock.filter(({ isInStock }) => !isInStock)

  return (
    <section className="catalog">
      <ul className="catalog__list">
        {availableProducts.map((product) => {
          const { id, titleRu, price, descriptionRu, images, materials, isInStock } = product
          const [firstImage] = images

          return (
            <li key={id} className="catalog__item">
              {firstImage ? <img className="catalog__image" src={firstImage} alt={titleRu} /> : null}
              <p className="catalog__title">{titleRu}</p>
              <p className="catalog__price">
                {CURRENCY_SYMBOL}
                {price}
              </p>
              {descriptionRu ? <p className="catalog__description">{descriptionRu}</p> : null}
              <p className="catalog__materials">{materials.join(MATERIALS_SEPARATOR)}</p>
              <p className="catalog__status">{isInStock ? IN_STOCK_LABEL : OUT_OF_STOCK_LABEL}</p>
              <Link href={ORDER_PAGE_HREF} className="catalog__button">
                {ORDER_BUTTON_LABEL}
              </Link>
            </li>
          )
        })}
      </ul>
      {unavailableProducts.length ? (
        <div className="catalog__unavailable">
          <div className="catalog__divider" />
          <ul className="catalog__list">
            {unavailableProducts.map((product) => {
              const { id, titleRu, descriptionRu, images, materials, isInStock } = product
              const [firstImage] = images

              return (
                <li key={id} className="catalog__item">
                  {firstImage ? <img className="catalog__image" src={firstImage} alt={titleRu} /> : null}
                  <p className="catalog__title">{titleRu}</p>
                  {descriptionRu ? <p className="catalog__description">{descriptionRu}</p> : null}
                  <p className="catalog__materials">{materials.join(MATERIALS_SEPARATOR)}</p>
                  <p className="catalog__status">{isInStock ? IN_STOCK_LABEL : OUT_OF_STOCK_LABEL}</p>
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}
    </section>
  )
}

export default Catalog
