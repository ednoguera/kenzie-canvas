import React, { useState } from 'react'
import { Form } from 'antd'
import { useHistory } from 'react-router-dom'
import { FormContainer, StyledButton, StyledInput } from '../../style/styled-components'


const ValidateLogin = (props) => {
    const [accessGranted, setAccessGranted] = useState()
    const [accessKey, setAccessKey] = useState("pikachu")
    const label = ""
    const history = useHistory()



    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <FormContainer
            // {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={props.onFinish}
            onFinishFailed={onFinishFailed}
        >
            <p>Chave de acesso</p>
            <Form.Item
                label={label}
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Verifique a chave que enviamos para o seu email",
                    },
                ]}
            >

                <StyledInput placeholder="A chave de acesso que enviamos!" />
            </Form.Item>

            <Form.Item >
                <StyledButton htmlType="submit">
                    Avançar
                </StyledButton>
                {accessGranted === true ? <h1>Acesso permitido!</h1> : accessGranted === false ? <h1>Acesso negado!</h1> : null}
            </Form.Item>
        </FormContainer>
    );
};


export default ValidateLogin
