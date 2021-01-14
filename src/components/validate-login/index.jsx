import React, { useState, useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { useHistory } from "react-router-dom"
import styled from 'styled-components'



const layout = {
    labelCol: {
        span: 13,
    },
    wrapperCol: {
        span: 6,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const ValidateLogin = () => {
    const [accessGranted, setAccessGranted] = useState()
    const accessKey = "pikachu"
    const label = "Chave de acesso"
    const history = useHistory()


    const handlerEvent = () => {
        history.push('/modulos')
    }

    const onFinish = (values) => {

        if (values.password === accessKey) {
            setAccessGranted(true)
            localStorage.setItem("accessToken", "2fas1df23agfalkjsgd4f65")
            history.push("/modulos")
        } else {
            setAccessGranted(false)
        }
        console.log('Success:', values);
        console.log(history.location.pathname)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <FormContainer
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
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
                <StyledInput placeholder="Digite aqui a chave que enviamos no seu e-mail" />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <StyledButton htmlType="submit">
                    Avançar
                </StyledButton>
                {accessGranted === true ? <h1>Acesso permitido!</h1> : accessGranted === false ? <h1>Acesso negado!</h1> : null}
            </Form.Item>
        </FormContainer>
    );
};


export default ValidateLogin

const FormContainer = styled(Form)`
    padding-top: 1%;
    padding-left: 10%;
`

const StyledButton = styled(Button)`
    background-color: #714191;
    width: 30%;
    height: 50px;
    border-radius: 10px;
    font-weight: bold;
`

const StyledInput = styled(Input.Password)`
    height: 50px;
    border-radius: 10px;
`

