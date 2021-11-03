import React from 'react'
import { Helmet } from 'react-helmet'
import initialState from '../initialState'
import Products from './Products'

const Home = () =>
<>
    <Helmet>
        <title>Beautiful Store</title>
    </Helmet>
    <Products products={ initialState.products }/>
</>
export default Home