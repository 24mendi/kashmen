import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import { Detail } from '../Detail/Detail'

const Listado = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=6')
            .then(res => res.json())
            .then(json => setProducts(json))

        return () => {

        }
    }, [])

    const [openModal, setOpenModal] = useState(false)
    const [productId, setProductId] = useState(0)


    const mostrarModal = (id) => {
        setOpenModal(true)
        setProductId(id)
    }

    return (
        <div>
            <h2 className='text-center'>KASHMEN</h2>
            <div className='list'>
                {
                    products.length > 0 ? (
                        products.map((x) => {
                            return (
                                <Item item={x} key={x.id} onShowModal={() => mostrarModal(x.id)}></Item>
                            )
                        })
                    ) : (<p>cargando</p>)
                }

            </div>

            <Detail isOpen={openModal} id={productId} onClose={() => setOpenModal(false)}></Detail>
        </div>
    )
}

export default Listado