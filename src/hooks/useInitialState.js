import {useState} from 'react'
import initialState from '../initialState'

const useInitialState = () => {

    const [state, setState] = useState(initialState)

    const addToCart = payload => {
        setState({
            ...state,
            cart:[...state.cart, payload]
        })
    }

    const removeToCart = payload => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.cartId !== payload)
        })
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload]
        })
    }

    return {
        addToCart,
        removeToCart,
        state,
        setState,
        addToBuyer,
        addNewOrder
    }
}

export default useInitialState