import React, {useContext} from 'react'
import AppContext from '../context/AppContext'
import Map from '../components/Map'
//import useGoogleAddress from '../hooks/useGoogleAddress'
import '../styles/containers/Success.css'

const Success = () => {
    const {state} = useContext(AppContext)
    const { buyer, orders } = state
    //const location = useGoogleAddress(orders[orders.length-1].buyer.address)
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer[buyer.length-1].name}, Gracias por tu compra.`}</h2>
                <span>Tu pedido llegará en 3 días a tu dirección: </span>
                <div className="Success-map">
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default Success