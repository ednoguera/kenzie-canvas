import React from 'react'
import styled from 'styled-components'
import codeWars1 from '../../assets/img/codewars.png'
import codeWars2 from '../../assets/img/codewars-2.png'

const Instructions = () => {
    return (
        <PageContainer>
            <HeaderContainer>
                <h2 >Olá, seja bem-vindo(a) ao curso de Introdução a Programação com Javascript da Kenzie Academy</h2>
                <p >Hoje você está dando o primeiro passo para iniciar sua carreira como desenvolvedor de software!</p>
                <p >&nbsp;</p>
                <h4 >Agora, vamos te explicar um pouco sobre o curso, as ferramentas que irá utilizar e alguns avisos importantes:</h4>
                <p>&nbsp;</p>
            </HeaderContainer>
            <h3>As Ferramentas</h3>
            <p>Para que você aproveite e aprenda muito durante o curso, selecionamos algumas ferramentas (sem custo para você) que servirão para a visualização das aulas, execução dos exercícios e entrega das atividades.</p>
            <p>Essas são as ferramentas que irá utilizar:</p>
            <ul>
                <li>
                    <strong>Slack (slack.com):</strong> O slack é uma das principais ferramentas de comunidade do mercado. E é por lá que você conseguirá interagir com outros usuários, se comunicar com o time de ensino da Kenzie e principalmente tirar todas as dúvidas que surgirem com nosso time de suporte!</li>
            </ul>
            <p>Não está na comunidade do Experiência Kenzie ainda? Entre agora mesmo através do link: <a href="https://join.slack.com/t/experienciakenzie/shared_invite/zt-j1wh9ho6-3ojdK0frsafrRtPzfC81hg" class="external" target="_blank" rel="noreferrer noopener"><span>https://join.slack.com/t/experienciakenzie/shared_invite/zt-j1wh9ho6-3ojdK0frsafrRtPzfC81hg</span><span aria-hidden="true" class="ui-icon ui-icon-extlink ui-icon-inline" title="Links para um site externo."></span><span class="screenreader-only">&nbsp;(Links para um site externo.)</span></a></p>
            <p>&nbsp;</p>
            <ul>
                <li><strong>Codewars (codewars.com):&nbsp;</strong></li>
            </ul>

            <p>Aqui é onde você executará grande parte dos exercícios e práticas do curso.&nbsp; Para utiliza-la basta acessar o site e criar uma conta clicando em SignUp. Você será redirecionado para esta tela:</p>

            <figure>
                <Img src={codeWars1} alt="Captura de Tela 2020-11-13 às 11.13.19.png" width="1332" height="788" data-api-endpoint="https://experiencia.kenzie.com.br/api/v1/courses/5/files/125" data-api-returntype="File" ></Img>
            </figure>

            <div>
                <p>Selecione a linguagem JAVASCRIPT e a ferramenta irá te propor um desafio para liberar seu login. É algo simples, mas caso tenha dúvidas peça ajuda a seus colegas na comunidade do SLACK</p>
            </div>

            <figure>
                <Img src={codeWars2} alt="Captura de Tela 2020-11-13 às 11.13.41.png" width="1334" height="778" data-api-endpoint="https://experiencia.kenzie.com.br/api/v1/courses/5/files/124" data-api-returntype="File" ></Img>
            </figure>

        </PageContainer>
    )
}

export default Instructions

const PageContainer = styled.div`
    width: 70%;
    margin: 2rem auto;
    text-align: left;
    padding: 0 5% 5% 15%;
`

const HeaderContainer = styled.div`
    h2 {
        font-size: 26px;
        font-weith: bold;
    }
`

const Img = styled.img`
    width: 90%;
    height: 80%;
`