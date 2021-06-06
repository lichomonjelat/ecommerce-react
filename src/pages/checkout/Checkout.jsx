import { FormControl, TextField } from '@material-ui/core'
import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import './Checkout.scss'
import db from '../../db'
import { CartContext } from '../../services/context/CartContext'

export default function Checkout() {
    const { cart } = useContext(CartContext)

    const [id, setID] = useState()
    const [orderEnd, setOrderEnd] = useState(false)
    const { register, handleSubmit } = useForm();

    function onSubmit(data) {
        /*setOrderEnd(true);
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
                    total:420
                }
            }
        }).then(function (docRef) {
            setID(docRef)
        })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });*/
        console.log(data)

    }
    return (
        <div className="form-container">
            <h1 className="text-center">Checkout</h1>
            {
                orderEnd ?
                    <div>
                        <h2>Juancho</h2>
                        <h3>Su orden ha sido creada con exito! Su numero de orden es:</h3>
                        <h3>{id}</h3>
                        <h3>Gracias por confiar en Flipper Gadgets!</h3>
                    </div> :
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="container mt-5 ">
                            <FormControl fullWidth variant="outlined">
                                <TextField
                                    ref={register}
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
                                    ref={register}
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
                                    ref={register}
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
                            <button className="btn btn-success mx-auto">Terminar compra</button>
                        </div>
                    </form>
            }
        </div>
    )
}
