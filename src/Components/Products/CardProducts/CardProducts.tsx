import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Product from '../../../Models/Product'
import { AuthContext } from '../../../Contexts/AuthContext'

interface CardProductProps {
  product: Product
}

function CardProduct({ product }: CardProductProps) {
  const { addProduct, removeProduct } = useContext(AuthContext)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={product.photo} alt="Product Photo" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p>R${product.price}</p>
      </div>

      <div className="flex justify-center gap-1 px-6 pt-4 pb-2">

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => addProduct(product)}>Adicionar</button>

        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => removeProduct(product.id)}>Remover</button>
      </div>
    </div>







  )
}

export default CardProduct