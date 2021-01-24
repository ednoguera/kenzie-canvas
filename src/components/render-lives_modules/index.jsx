import React from 'react'
import styled from 'styled-components'
import { lives } from '../../helper/lives'
import { useWindowSize } from '../../helper/window-size-hook'

const Lives = () => {
    const { width } = useWindowSize()

    const setSize = () => {
        if (width >= 320 && width <= 1024) {
            return "320"
        } else {
            return "560"
        }
    }

    return (
        <div>
            <LivesTitle>
                <h2>Torne-se um programador desejado pelo mercado com nossos conteúdos ao vivo!</h2>
            </LivesTitle>

            <PageLivesContainer>

                <SectionDay>
                    <p>Dia 26</p>
                </SectionDay>

                <GroupLivesContainer>
                    <div>
                        <VideoHeader>
                            <h3>Descubra sua grande oportunidade de carreira para 2021</h3>
                        </VideoHeader>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/6HXeByLjrPs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <VideoHeader>
                            <h3>26/01 - Live com Hudson Carolino e Maria Porcina</h3>
                        </VideoHeader>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xBDAwS49Ed0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <VideoHeader>
                            <h3>Demo com Q&A - Introdução à programação, variáveis, estruturas de decisão</h3>
                        </VideoHeader>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/tXNaLef4w_0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </GroupLivesContainer>


                <SectionDay>
                    <p>
                        Dia 27
                </p>
                </SectionDay>

                <GroupLivesContainer>

                    <div>
                        <VideoHeader>
                            <h3>Segredos para você ter sucesso na programação!</h3>
                        </VideoHeader>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/QOoW3evXhSM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <VideoHeader>
                            <h3>27/01 - Live com Hudson Carolino e Maria Porcina</h3>
                        </VideoHeader>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/KfJcSrCHNnM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <VideoHeader>
                            <h3>Demo com Q&A - Estruturas de repetição, arrays</h3>
                        </VideoHeader>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4OynhSBJhuk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </GroupLivesContainer>


                <SectionDay>
                    <p>
                        Dia 28
                </p>
                </SectionDay>
                <GroupLivesContainer>
                    <div>
                        <VideoHeader>
                            <h3>10 passos para ter um perfil atraente no Linkedin</h3>
                        </VideoHeader>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/DQsNx4hhKLA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <VideoHeader>
                            <h3>28/01 - Live com Hudson Carolino e Maria Porcina</h3>
                        </VideoHeader>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/aHMGhfg8jr4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <VideoHeader>
                            <h3>Arrays aninhados e funções</h3>
                        </VideoHeader>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LTklhUyDHgw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                </GroupLivesContainer >


                <SectionDay>
                    <p>
                        Dia 29
                </p>
                </SectionDay>
                <GroupLivesContainer>
                    <div>
                        <VideoHeader>
                            <h3>A jornada COMPLETA para você entrar na carreira do futuro, ser disputado e ganhar 5x mais</h3>
                        </VideoHeader>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/8O4z_rnqWiI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <VideoHeader>
                            <h3>29/01 - Live com Hudson Carolino e Maria Porcina</h3>
                        </VideoHeader>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4nXBiG9ZYM0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div>
                        <VideoHeader>
                            <h3>Demo com Q&A - Introdução a objetos (como arrays associativos ou dicionários)</h3>
                        </VideoHeader>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Y8x0HHaWy2s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                </GroupLivesContainer>

            </PageLivesContainer>
        </div>
    )
}

export default Lives

const PageLivesContainer = styled.div`
    margin: 0% 10% 0 30%;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        margin: 2rem auto;
        text-align: left;
        padding: 0 5% 5% 5%;
        display: flex;
        flex-direction: column;
        
    }
`

const LivesTitle = styled.div`
    padding: 0 0 3% 30%;
    width: 90%;
    text-align: left;

    h2 {
        font-size: 36px;
        font-weight: bold;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        margin: 2rem auto;
        text-align: left;
        padding: 0 5% 5% 5%;
        
        h2 {
            font-size: 18px;
        }
    }
`

const GroupLivesContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    margin: 1rem;
    padding: 0 0 5% 0;

    div {
        margin: 0.5rem auto;
    }

    @media (min-width: 320px) and (max-width: 1024px) {
        width: 100%;
        margin: 2rem auto;
        text-align: left;
        padding: 0 5% 5% 5%;
        display: flex;
        flex-direction: column;
    }

`

const SectionDay = styled.div`
    border-bottom: 10px solid #05143c;
    width: 100%;
    padding-left: 0%;
    text-align: left;

    p {
        font-size: 36px;
        font-weight: bold;
        color: #5fdbfa;
        text-shadow: #05143c;
    }
`

const VideoHeader = styled.div`
    padding: 0 0 0 2%;

    h3 {
        font-size: 18px;
        font-weight: bold;
        text-align: left;
    }
`