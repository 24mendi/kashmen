import React from 'react'

const Item = ({item, onShowModal}) => {
    return (
        <>
            <div className="card">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.price}</p>
                    <a href="#" className="btn btn-primary" onClick={onShowModal}>Go somewhere</a>
                </div>
            </div>
        </>
    )
}

export default Item