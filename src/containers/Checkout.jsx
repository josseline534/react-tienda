import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/containers/Checkout.css'

const Checkout = () =>{
    const { state, removeToCart } = useContext(AppContext)
    const { cart } = state

    const handleRemoveToCart = (index) => {
        removeToCart(index)
    }

    const handleSubTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price
        const sumTotal = cart.reduce(reducer, 0)
        return sumTotal
    }
    return (
        <div className="Checkout">
            <div className="Checkout-content">
                {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos...</h3>}
                {cart.map((c) => (
                <div key={c.cartId} className="Checkout-item">
                <div className="Checkout-element">
                        <h4>{c.title}</h4>
                        <span>${c.price}</span>
                    </div>
                    <button type="button" onClick={()=>handleRemoveToCart(c.cartId)}>
                        <i className="fas fa-trash-alt"/>
                    </button>
                </div>
                ))}
            </div>
            {cart.length > 0 &&(
            <div className="Checkout-sidebar">
                <h3>Precio Total: ${handleSubTotal()}</h3>
                <Link to="/checkout/information">
                    <button type="button">Continuar Pedido</button>
                </Link>
            </div>
            )}
        </div>
    )
}


export default Checkout