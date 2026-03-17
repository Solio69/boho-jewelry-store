import { productsMock } from '../../mocks/products'
import ProductCard from '../product-card/ProductCard'
import './Catalog.scss'

const Catalog = () => {
  const availableProducts = productsMock.filter(({ isInStock }) => isInStock)
  const unavailableProducts = productsMock.filter(({ isInStock }) => !isInStock)

  return (
    <section className="catalog">
      <ul className="catalog__list">
        {availableProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
      {unavailableProducts.length ? (
        <div className="catalog__unavailable">
          <div className="catalog__divider" />
          <ul className="catalog__list">
            {unavailableProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  )
}

export default Catalog
