import { useState } from 'react'

const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            nombre, telefono, email
        }

        onConfirm(userData)
    }

    return (
        <div>
            <h1>Checkout</h1>
            <form onSubmit={handleConfirm}>


                <div className="col-sm-6">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="Input"
                        value={nombre} onChange={({ target }) => setNombre(target.value)} />
                </div>

                <div className="col-sm-6">
                    <label className="form-label">Telefono</label>
                    <input type="text" className="Input"
                        value={telefono} onChange={({ target }) => setTelefono(target.value)} />
                </div>

                <div className="col-sm-6">
                <label className="form-label">Email</label>
                <input type="email" className="Input"
                value={email} onChange={({ target }) => setEmail(target.value)}/>
              </div>
             <button type="submit" className='button'>Submit</button>

            </form>
        </div>
    )
}


export default CheckoutForm