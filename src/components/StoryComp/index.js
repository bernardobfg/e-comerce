import React from 'react'

import './styles.css'

import Rest from '../../assets/restaurante03.jfif'
import Estoque from '../../assets/estoque.jfif'

function StoryComp() {
    return (
        <div className="story">
            <div className="first">
                <div className="img-story">
                    <img src={Rest} />
                    <img src={Estoque} />
                </div>

                <div className="text-story">
                    <h2>Oishī</h2>
                    <p>Naomi nasceu em Quioto, Japão em 1980 e sempre foi uma apaixonada da culinária local. Aos 14 anos,
                    seus pais decidiram que era hora de se mudar para o brasil em busca de melhores oportunidades de vida.
                        <br/> <br/>
                    </p>
                    
                    <p>
                        Mesmo frequentando os restaurantes com culinária japonesa no Brasil, Naomi sabia que aquilo estava muito
                        longe do que ela estava habituada e sentia falta de seus hábitos alimentares antigos. <br/> <br/>
                    </p>
                    
                    <p>
                        Foi por isso que, em 2010, decidiu criar o Oishī, um novo conceito de restaurante japonês, que contempla
                         verdadeiramente os melhores aspectos da culinária japonesa. Além disso, o Oishī conta com uma loja em
                        seu interior que vende insumos da melhor qualidade para que as pessoas se sintam um pouquinho dentro
                        do Japão. <br/> <br/>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StoryComp