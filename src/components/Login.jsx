import React from 'react'
import Form from './Form'

const Login = (props) => {
    return (
        <div>
            <Form  getData={props.getData}/>
            
        </div>
    )
}

export default Login
