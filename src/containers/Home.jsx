import React from 'react'
import initialState from '../initialState'
import Products from './Products'

const Home = () =>
<Products products={ initialState.products }/>

export default Home