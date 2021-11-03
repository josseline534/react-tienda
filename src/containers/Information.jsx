import React, {useRef, useContext} from 'react'
import { Link, useHistory } from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/containers/Information.css'

const Information = () => {
    const {state, addToBuyer} = useContext(AppContext)
    const { cart } = state
    const form = useRef(null)
    const history = useHistory()
    const handleSubmitForm = () => {
        const formData = new FormData(form.current)
        const buyer = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'address': formData.get('address'),
            'dpto': formData.get('dpto'),
            'pais': formData.get('pais'),
            'ciudad': formData.get('ciudad'),
            'cp': formData.get('cp'),
            'phone': formData.get('phone'),
        }
        addToBuyer(buyer)
        history.push('/checkout/payment')
    }
    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Información de contacto:</h2>
                </div>
                <div className="Information-from">
                    <form ref={form}>
                        <input type="text" name="name" id="" placeholder="Nombre Completo" required />
                        <input type="email" name="email" id="" placeholder="Correo electrónico" required />
                        <input type="text" name="address" id="" placeholder="Dirección" required />
                        <input type="text" name="dpto" id="" placeholder="Dpto." required/>
                        <input type="text" name="pais" id="" placeholder="País" required />
                        <input type="text" name="ciudad" id="" placeholder="Ciudad" required />
                        <input type="text" name="cp" id="" placeholder="Codigo Postal" required />
                        <input type="tel" name="phone" id="" placeholder="Teléfono" required />
                    </form>
                </div>
                <div className="Information-buttons">
                    <Link to="/checkout">
                        <div className="Information-back">
                            Regresar
                        </div>
                    </Link>
                    <div className="Information-next">
                        <button type="button" onClick={handleSubmitForm}>
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                {cart.map(item => (
                    <div className="Information-item" key={item.cartId}>
                    <div className="Information-element">
                        <h4>{item.title}</h4>
                        <span>${item.price}</span>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Information