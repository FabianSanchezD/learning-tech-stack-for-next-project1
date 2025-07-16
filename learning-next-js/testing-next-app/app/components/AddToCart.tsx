'use client'
import React from 'react'

const AddToCart = () => {
  return (
    <div>
        <button onClick={() => console.log('added to card')} className='btn btn-primary'>Add to Cart</button>
    </div>
  )
}

export default AddToCart