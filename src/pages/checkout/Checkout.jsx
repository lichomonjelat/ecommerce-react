import { FormControl, TextField } from '@material-ui/core'
import React, { useState, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './Checkout.scss'
import db from '../../db'
import { CartContext } from '../../services/context/CartContext'

export default function Checkout() {
    const { cart } = useContext(CartContext)

    const [id, setID] = useState()
    const [customer, setCustomer] = useState()
    const [orderEnd, setOrderEnd] = useState(false)
    const { register, handleSubmit } = useForm();

    const [qty, setQty] = useState(0)

    const [total, setTotal] = useState(0)

    useEffect(() => {
        let cantidad = cart.reduce(function (total, currentValue) {
            return total + currentValue.item.count
        }, 0);
        setQty(cantidad);

        let total = cart.reduce(function(total,currentValue){
            return total + (currentValue.item.data.product_price*currentValue.item.count)
        }, 0);
        setTotal(total);
    }, [cart]);

    function onSubmit(data) {
        setCustomer(data.name);
        setOrderEnd(true);
        db.collection("orders").add({
            order:{
                buyer:{
                    email:data.email,
                    name:data.name,
                    lastname:data.lastname,
                    phone:data.phone
                },
                items:{cart},
                total:{
                    total
                }
            }
        }).then(function (docRef) {
            setID(docRef.id)
        })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
        console.log(cart)

    }
    return (
        <div className="form-container">
            <h1 className="text-center">Checkout</h1>
            {
                orderEnd ?
                    <div>
                        <h2>{customer}</h2>
                        <h3>Su orden ha sido creada con exito! Su numero de orden es:</h3>
                        <h3>{id}</h3>
                        <h3>Gracias por confiar en Flipper Gadgets!</h3>
                    </div> :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="container mt-5 ">
                            <FormControl fullWidth variant="outlined">
                                <TextField
                                    {...register("name")}
                                    id="outlined-full-width"
                                    label="Nombre"
                                    style={{ margin: 8 }}
                                    placeholder="Ingrese su nombre"
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                                <TextField
                                    {...register("lastname")}
                                    id="outlined-full-width"
                                    label="Apellido"
                                    style={{ margin: 8 }}
                                    placeholder="Ingrese su apellido"

                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                                <TextField
                                    {...register("email")}
                                    id="outlined-full-width"
                                    label="Email"
                                    style={{ margin: 8 }}
                                    placeholder="Ingrese su email"
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </FormControl>
                            <FormControl fullWidth variant="outlined">
                                <TextField
                                    {...register("phone")}
                                    id="outlined-full-width"
                                    label="Telefono"
                                    style={{ margin: 8 }}
                                    placeholder="Ingrese su telefono"
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                            </FormControl>
                            <button className="btn btn-success mx-auto">Terminar compra</button>
                        </div>
                    </form>
            }
        </div>
    )
}
