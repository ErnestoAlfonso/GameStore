import { useContext } from 'react'
import { FiltersContext } from '../context/filters.jsx'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.id >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.genres[0]['name'] === filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}
