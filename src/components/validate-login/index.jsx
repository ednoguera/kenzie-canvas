import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom'
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
    const [accessKey, setAccessKey] = useState("pikachu")

    const onFinish = (values) => {
        // if (accessKey == "pikachu") {

        // }
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const label = "Chave de acesso"

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
                        message: 'Calma ai, você precisa da chave de acesso!',
                    },
                ]}
            >
                <StyledInput placeholder="Digite aqui a chave que enviamos no seu e-mail" />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <StyledButton type="primary" htmlType="submit">
                    Avançar
                </StyledButton>
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

