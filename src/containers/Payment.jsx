import React, {useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext'
import '../styles/containers/Payment.css'

const Payment = () =>{
    const {state, addNewOrder} = useContext(AppContext)
    const { cart, buyer } = state
    const history = useHistory()

    const options = {
        clientId: 'AdIFBGZa-OeEDCMF6OE0WsjrxIFvF0wztCp9pj8yx9Nq2YVdD3Z8AjRTUJn4XIkRZ-5MMZcdOhyTWVpX',
        intent:'capture',
        currency: "USD"
    }

    const styles = {
        layout: 'vertical',
        shape: 'react'
    }

    const handleSubTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price
        const sumTotal = cart.reduce(reducer, 0)
        return sumTotal
    }

    const handlePaymentSuccess = (data) => {
        if(data.status === 'COMPLETED'){
            const newOrder = {
                buyer: buyer[buyer.length-1],
                product: cart,
                payment: data
            }
            addNewOrder(newOrder)
            history.push('/checkout/success')
        }
    }

    return(
    <div className="Payment">
        <div className="Payment-content">
            <h3>Resumen del pedido</h3>
            {cart.map(item => (
            <div className="Payment-item" key={item.cartId}>
                <div className="Payment-element">
                    <h4>{item.title}</h4>
                    <span>${item.price}</span>
                </div>
            </div>
            ))}
            <div className="Payment-button">
                <PayPalButton
                    options={options}
                    styles={styles}
                    amount={handleSubTotal()}
                    onStart={() => console.log('start Payment')}
                    onApprove={data => console.log(data)}
                    onSuccess={data => handlePaymentSuccess(data)}
                    onError={error => console.error(error)}
                    onCancel={data => console.log(data)}
                />
            </div>
        </div>
    </div>
    )
}

export default Payment