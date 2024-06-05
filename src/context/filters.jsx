import { createContext, useState } from 'react'

export const FiltersContext = createContext({
  filters: {
    category: 'all',
    minPrice: 25
  },
  setFilters: () => {}
})

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 25
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
