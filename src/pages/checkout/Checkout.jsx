import { FormControl, TextField } from '@material-ui/core'
import React, { useState, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './Checkout.scss'
import db from '../../db'
import { CartContext } from '../../services/context/CartContext'
import swal from 'sweetalert'

export default function Checkout() {
    const { cart, emptyCart } = useContext(CartContext)

    const { register, handleSubmit } = useForm();

    const [qty, setQty] = useState(0)

    const [total, setTotal] = useState(0)

    useEffect(() => {
        let cantidad = cart.reduce(function (total, currentValue) {
            return total + currentValue.item.count
        }, 0);
        setQty(cantidad);

        let total = cart.reduce(function (total, currentValue) {
            return total + (currentValue.item.data.product_price * currentValue.item.count)
        }, 0);
        setTotal(total);
    }, [cart]);

    function onSubmit(data) {
        emptyCart();
        db.collection("orders").add({
            order: {
                buyer: {
                    email: data.email,
                    name: data.name,
                    lastname: data.lastname,
                    phone: data.phone
                },
                items: { cart },
                total: {
                    total
                }
            }
        }).then(function (docRef) {
            swal("Gracias " + data.name, "Su numero de orden es " + docRef.id, "success");
        })
            .catch(function (error) {
                swal("Ocurrio un error", error, "error")
            });


    }
    return (
        <div className="form-container">
            <h1 className="text-center">Checkout</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container d-flex flex-column justify-items-center align-content-center">
                    <div className="d-flex flex-row justify-content-center align-content-center mt-5">
                        <label htmlFor="">Nombre</label>
                        <input {...register("name")} type="text" />
                    </div>
                    <div className="d-flex flex-row justify-content-center align-content-center mt-5">
                        <label htmlFor="">Apellido</label>
                        <input {...register("lastname")} type="text" />
                    </div>
                    <div className="d-flex flex-row justify-content-center align-content-center mt-5" >
                        <label htmlFor="">Telefono</label>
                        <input {...register("phone")} type="text" />
                    </div>
                    <div className="d-flex flex-row justify-content-center align-content-center mt-5">
                        <label htmlFor="">Email</label>
                        <input {...register("email")} type="email" />
                    </div>
                    <button disabled={cart.length < 1 ? "disabled" : ""} className="btn btn-success mx-auto">Terminar compra</button>
                </div>
            </form>
        </div>
    )
}
