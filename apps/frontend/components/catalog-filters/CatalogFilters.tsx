import './CatalogFilters.scss'

type CatalogFiltersProps = {
  categories: string[]
}

const FILTER_TITLE = 'Фильтр по категориям'

const CatalogFilters = ({ categories }: CatalogFiltersProps) => {
  return (
    <section className="catalog-filters">
      <p className="catalog-filters__title">{FILTER_TITLE}</p>
      <ul className="catalog-filters__list">
        {categories.map((category) => (
          <li key={category} className="catalog-filters__item">
            <button type="button" className="catalog-filters__button">
              {category}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CatalogFilters
