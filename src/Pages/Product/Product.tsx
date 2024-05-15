import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';
import Product from '../../Models/Product';
import { find, searchProducts } from '../../Services/Service'; 

function ProductPage() {
    const { addProduct, removeProduct, user } = useContext(AuthContext);
    const { id } = useParams<{ id: string }>(); 
    const token = user.token


    const [product, setProduct] = useState<Product>({
        id: 0,
        name: '',
        inventory: 0,
        price: 0,
        description: '',
        photo: '',
        category: null
    });

    async function findProductByID(id: string) {
        await find(`/products/${id}`, setProduct, {
            headers: {
                Authorization: token,
            },
        })}

    useEffect(() => {
            if (id !== undefined) {
            findProductByID(id);
        }
    }, [id]);

    // Se o produto ainda não foi carregado, exiba uma mensagem de carregamento ou retorne null
    if (!product) {
        return <div>...............</div>;
    }

    // Se o produto foi carregado com sucesso, renderize as informações do produto
    return (
        <div className="container mx-auto mt-4">
            <div className="flex">
                <div className="w-1/2">
                    <img src={product.photo} alt="Product Photo" className="w-full h-auto" />
                </div>
                <div className="w-1/2 px-4">
                    <div className="font-bold text-3xl mb-4">{product.name}</div>
                    <div className="text-gray-700 text-lg mb-4">{product.description}</div>
                    <div className="text-gray-800 text-2xl mb-4">R${product.price}</div>
                    <div className="flex gap-4">
                        {user.id === 1 ? (
                            <Link to={`/editProduct/${product.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Editar
                            </Link>
                        ) : (
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                onClick={() => addProduct(product)}
                            >
                                Adicionar ao carrinho
                            </button>
                        )}
                        {user.id === 1 ? (
                            <Link to={`/deleteProduct/${product.id}`} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                                Deletar
                            </Link>
                        ) : (
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                                onClick={() => removeProduct(product.id)}
                            >
                                Remover do carrinho
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
