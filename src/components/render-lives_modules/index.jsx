import React from 'react'
import styled from 'styled-components'

const Lives = () => {
    return (
        <PageLivesContainer>
            <div>TÍTULO</div>
            <GroupLivesContainer>
                <div>Dia 26</div>
                <div>
                    <h3>Descubra sua grande oportunidade de carreira para 2021</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/6HXeByLjrPs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <h3>26/01 - Live com Hudson Carolino e Maria Porcina</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xBDAwS49Ed0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <h3>Demo com Q&A - Introdução à programação, variáveis, estruturas de decisão</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tXNaLef4w_0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </GroupLivesContainer>

            <GroupLivesContainer>
                <div>Dia 27</div>
                <div>
                    <h3>Segredos para você ter sucesso na programação!</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QOoW3evXhSM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <h3>27/01 - Live com Hudson Carolino e Maria Porcina</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KfJcSrCHNnM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <h3>Demo com Q&A - Estruturas de repetição, arrays</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4OynhSBJhuk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </GroupLivesContainer>

            <GroupLivesContainer>

                <div>Dia 28</div>
                <div>
                    <h3>10 passos para ter um perfil atraente no Linkedin</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/DQsNx4hhKLA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <h3>28/01 - Live com Hudson Carolino e Maria Porcina</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/aHMGhfg8jr4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <h3>Arrays aninhados e funções</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LTklhUyDHgw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </GroupLivesContainer >

            <GroupLivesContainer>
                <div>Dia 29</div>
                <div>
                    <h3>A jornada COMPLETA para você entrar na carreira do futuro, ser disputado e ganhar 5x mais</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/8O4z_rnqWiI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <h3>29/01 - Live com Hudson Carolino e Maria Porcina</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4nXBiG9ZYM0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <h3>Demo com Q&A - Introdução a objetos (como arrays associativos ou dicionários)</h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Y8x0HHaWy2s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </GroupLivesContainer>
        </PageLivesContainer>
    )
}

export default Lives

const PageLivesContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const GroupLivesContainer = styled.div`
    display: flex;
`