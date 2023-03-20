import React, { useEffect, useState } from "react";
import {BsFillCartCheckFill,  BsFillCartPlusFill} from 'react-icons/bs';
import { getItem, setItem } from "../services/LocalStorageFuncs";
import {productsArea } from "../style.css/style";




export const Store = () => {

    const [data, setData] = useState([]);
    const [cart, setCart] = useState( getItem('Carrinho')|| []);

    useEffect(() => {
            const fetchApi = async() => {
                const url = 'https://api.mercadolibre.com/sites/MLB/search?q=celular'
                const response = await fetch(url);
                const objJson = await response.json();
                setData(objJson.results)
            } 
            fetchApi();
    } , [])

    const handleclick = (obj) => {
        const element = cart.find((e) => e.id === obj.id)
        if (element){
            const arrFilter = cart.filter((e) => e.id !== obj.id );
            setCart(arrFilter)
            setItem('Carrinhoyt', arrFilter)
        } else {
            setCart([...cart, obj])
            setItem('Carrinhoyt', [...cart,obj])
        }
    }

    return (
        <div>
            <h1>ESCUP STORE</h1>
            <h2>BEM VINDO A MAIOR LOJA ONLINE DE SMARTPHONES DO BRASIL</h2>
            <h3>HOME</h3>
            <div>
                {
                    data.map((e) => (
                        <div key={e.id}>
                            <h4>{e.title}</h4>
                            <img src={e.thumbnail} alt="" />
                              <h4>{e.price}</h4>
                              <button
                              onClick ={() => handleclick(e)}
                              >
                                
                                    {
                                        cart.some((itemCart) => itemCart.id === e.id) ? (
                                            <BsFillCartCheckFill />
                                        ) : (
                                            <BsFillCartPlusFill />
                                        )
                                    }
                              </button>

                        </div>
                    ))
                    }
            </div>
            </div>
    ) 
    
}