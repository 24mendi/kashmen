import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'

const Listado = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(json => setProducts(json))

        return () => {

        }
    }, [])

    return (
        <div>
            <h2 className='text-center'>KASHMEN</h2>
            {
                products.length > 0 ? (
                    products.map((x) => {
                        return (
                            <Item item={x} key={x.id}></Item>
                        )
                    })
                ) : (<p>cargando</p>)
            }
        </div>
    )
}

export default Listado