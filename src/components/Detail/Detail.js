import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';

export const Detail = ({ id, isOpen, onClose }) => {

  const [product, setProduct] = useState({})

  useEffect(() => {
    if(id > 0){

      fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProduct(json))
    }

    console.log(product)
    return () => {

    }
  }, [id])

  if (!isOpen) return null;

  

  return ReactDOM.createPortal(

    <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">{product.title} {id}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClose}></button>
          </div>
          <div class="modal-body">
          <div className='row'>
            <div className='col-6'>
              <img src={product.image} />
            </div>
          <div className='col-6'>
            <p>{product.description}</p>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#portal')
  )
}
