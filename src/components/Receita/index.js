import React from 'react';

import './styles.css';

import Sunomono from '../../assets/sunomono.jpg'
import Shimeji from '../../assets/shimeji.jpg'
import Misso from '../../assets/misso.jpg'

function Receita() {
    return(
        <div className="receita_container">




<div className="receita">
                <div className="receita-img-div">
                    <img src={ Shimeji}/>
                </div>
                <div className="receita-text">
                <h2>Shimeji</h2>
                <h3>Ingredientes</h3>
                    <ul>
                        <li>200g de shimeji</li>
                        <li>2 colheres de sopa rasas de molho shoyu</li>
                        <li>2 colheres de sopa de açúcar cristal</li>
                        <li>2 colheres de sopa de manteiga sem sal</li>
                        <li>Cebolinha picada a gosto.</li>
                        
                    </ul>
                    <h3 className="preparo">Modo de preparo</h3>
                    <p>
                    Comece o preparo picando bem o cogumelo, tirando o talo que vem junto com eles. Caso estejam sujos, use um pano úmido para limpa-los evitando jogar água (pois eles podem inchar).

Use uma frigideira para derreter a manteiga e coloque os cogumelos para dourar. Acrescente o shoyu e mexa bem, até que tudo incorpore e que o shimeji cozinhe por mais 5 minutos (reduzindo o fogo).

Sirva com um pouco de cebolinha por cima, ainda quente!
                    </p>
                </div>



            </div>
            <div className="receita">
                <div className="receita-img-div">
                    <img src={Sunomono}/>
                </div>
                <div className="receita-text">
                    <h2>Sunomono</h2>
                    <h3>Ingredientes</h3>
                    <ul>
                        <li>1 pepino japonês</li>
                        <li>1 colher de sopa de sal marinho</li>
                        <li>2 colheres de sopa de açúcar cristal</li>
                        <li>3 colheres de sopa de vinagre de arroz</li>
                        <li>2 colheres de sopa de gergelim preto e branco</li>
                        <li>Sal, pimenta do reino e óleo de gergelim a gosto.</li>
                    </ul>
                    <h3 className="preparo">Modo de preparo</h3>
                    <p>
                    Lave e seque bem o pepino, para depois fatiá-lo em tirinhas bem finas, com a faca, um fatiador ou cortador.

Em seguida, toste as sementes de gergelim diretamente na frigideira para deixá-las com um sabor mais acentuado.

Prepare o molho que vai ser usado para temperar os pepinos. Use o açúcar, misture com o vinagre de arroz em uma panela e coloque em fogo baixo. O açúcar deve derreter completamente para você ter o molho pronto. Depois, deixe-o resfriar.

Coloque os pepinos fatiados em um prato fundo e adicione o sal, para estimular que elas desidratem. Coloque, em seguida, as fatias em um escorredor por 15 minutos, para que escorra o máximo de líquido. Em seguida, enxague os pepinos em água corrente e remova o resto do que sobrou. Seque bem com papel toalha e coloque em um recipiente para receber o molho.

Misture bem os pepinos com o molho, o gergelim torrado e algumas gotas do óleo de gergelim. Sirva em seguida.
                    </p>
                    
                </div>

            </div>

            




            <div className="receita">
                <div className="receita-img-div">
                    <img src={ Misso}/>
                </div>
                <div className="receita-text">
                <h2>Missoshiro</h2>
                <h3>Ingredientes</h3>
                    <ul>
                        <li>1 colher de sopa e ½ de missô;</li>
                        <li>1 colher de sopa e ½ de missô;</li>
                        <li>½ envelope de tempero em pó de peixe (hondashi);</li>
                        <li>80g de tofu;</li>
                        <li>Cebolinha picada a gosto.</li>
                        
                    </ul>
                    <h3 className="preparo">Modo de preparo</h3>
                    <p>
                    Coloque a água em um recipiente para ferver. Quando começar a borbulhar, abaixe o fogo e acrescente o missô, mexendo bem para dissolver. Depois acrescente o tempero de peixe e o tofu, misturando tudo novamente ainda com fogo acesso.

                    Desligue o fogo na hora de servir. Coloque em uma tigela funda e acrescente cebolinha para finalizar.
                    </p>
                </div>



            </div>
        </div>
    )
}

export default Receita;