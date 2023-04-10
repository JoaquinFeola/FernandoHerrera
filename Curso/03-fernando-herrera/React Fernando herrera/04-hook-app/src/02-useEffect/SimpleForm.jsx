import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'joaquin',
        email: 'joacoarielfeola@gmail.com'
    });

    const { username, email } = formState;
    
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    };

    useEffect( () => {
        // console.log('useeffect called!');   
    }, [formState]);

    useEffect( () => {
        // console.log('useeffect email!');   
    }, [email]);



    return (
    <>
        <h1>Formulario simple</h1>
        <hr />

        <input 
            type="text"
            className="form-control"
            placeholder="Username"
            name="username" 
            value={username}
            onChange={onInputChange}
        />     

        <input 
            type="email"
            className="form-control mt-2"
            placeholder="joacoarielfeola@gmail.com"
            name="email" 
            value={email}
            onChange={onInputChange}
        />

        {
            ( username === 'joaquin' ) && <Message/> 
        }
    </>
  )
}
