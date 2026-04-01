import { productsMock } from '../../mocks/products'
import CatalogFilters from '../catalog-filters/CatalogFilters'
import ProductCard from '../product-card/ProductCard'
import './Catalog.scss'

const Catalog = () => {
  const availableProducts = productsMock.filter(({ isInStock }) => isInStock)
  const unavailableProducts = productsMock.filter(({ isInStock }) => !isInStock)
  const categories = [...new Set(productsMock.flatMap(({ categories }) => categories))]

  return (
    <section className="catalog">
      <CatalogFilters categories={categories} />
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
