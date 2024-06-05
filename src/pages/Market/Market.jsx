import { Products } from '../../components/Products.jsx'
import { Header } from '../../components/Header.jsx'
import { useFilters } from '../../hooks/useFilters.js'
import { Cart } from '../../components/Cart.jsx'
import { CartProvider } from '../../context/cart.jsx'
import { useGame } from '../../hooks/useGameF.js'

export const Market = () => {

    const [games] = useGame()

    const { filterProducts } = useFilters()

    const filteredProducts = filterProducts(games)

    return (
        <CartProvider>
            <Header />
            <Cart />
            <Products products={filteredProducts} />
            {/* {IS_DEVELOPMENT && <Footer />} */}
        </CartProvider>
    )
}