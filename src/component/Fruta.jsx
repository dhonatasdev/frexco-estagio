import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';


const Fruta = () => {

    const { id } = useParams();
    const [fruta, setProduct] = useState([]);


    const dispatch = useDispatch();
    const addProduct = (fruta) => {
        dispatch(addCart(fruta));
    }


    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://madhauntingtelephones.josedhonatas.repl.co/index${id}.html`);
            setProduct(await response.json());
            //console.log(fruta.nutritions.protein);
        }
        getProduct();
    }, []);


    const MostraFruta = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={fruta.imagem} alt={fruta.name} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        Genêro: {fruta.genus}
                    </h4>
                    <h1 className="display-5">{fruta.name}</h1>
                    <br></br><br></br>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(fruta)}>
                        Adicionar ao carrinho
                    </button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Ir para carrinho
                    </NavLink>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {<MostraFruta />}
                </div>
            </div>
        </div>
    );
}

export default Fruta;
