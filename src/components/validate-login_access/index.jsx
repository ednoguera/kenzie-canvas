import React, { useState } from 'react'
import { Form } from 'antd'
import { useHistory } from 'react-router-dom'
import { FormContainer, StyledButton, StyledInput } from '../../style/styled-components'



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

const ValidateLogin = (props) => {
    const [accessGranted, setAccessGranted] = useState()
    const [accessKey, setAccessKey] = useState("pikachu")
    const label = "Chave de acesso"
    const history = useHistory()



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
            onFinish={props.onFinish}
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

