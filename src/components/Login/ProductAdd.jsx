import LogIn from "./Login";
import React, { useState, useEffect } from 'react';
import db from  '../../db';
import { useForm } from "react-hook-form";
import './upload.scss'



const LoginContainer = () => {

    const [data, setData] = useState({})

    const items = db.collection("items");

    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        
            db.collection("items").add({
                new:data.new,
                featured:data.featured,
                product_category: data.product_category,
                product_description: data.product_description,
                product_photo: data.product_photo,
                product_price: data.product_price,
                product_title: data.product_title,
                product_brand:data.product_brand
            }).then(function(docRef) {
                alert("Producto añadido con id:" + docRef.id)
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
        
    }

    const [logged, setLogged] = useState(false)

    const [product, setProduct] = useState({
        category: "",
        description: ""
    })


    return (
        <div>
            {
                logged ?
                    <div className="input-container">
                        <h2>Agregar un nuevo producto</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">Titulo del Producto</label>
                                    <input required {...register("product_title")} type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputPassword4">Descripcion del producto</label>
                                    <input required  {...register("product_description")} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">Precio del producto</label>
                                    <input required {...register("product_price")} type="number" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputPassword4">Marca del producto</label>
                                    <input required {...register("product_brand")} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputEmail4">Foto del producto</label>
                                    <input required {...register("product_photo")} type="text" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputState">Categoria</label>
                                    <select required {...register("product_category")} id="inputState" className="form-control">
                                        <option value="celulares">Celulares</option>
                                        <option value="camaras">Camaras</option>
                                        <option value="tablet">Tablets</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="inputState">Destacado?</label>
                                    <select  {...register("featured")} id="inputState" className="form-control">
                                        <option value={true}>Si</option>
                                        <option value={false}>No</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <label for="inputState">Nuevo?</label>
                                    <select  {...register("new")} id="inputState" className="form-control">
                                        <option value={true}>Si</option>
                                        <option value={false}>No</option>
                                    </select>
                                </div>
                            </div>

                            <button type='submit' className="btn btn-primary" > Enviar producto</button>
                        </form>
                        
                    </div> :
                    <LogIn login={setLogged} />
            }
        </div>
    );
}

export default LoginContainer;
