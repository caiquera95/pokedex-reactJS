import './modal.css';
import typeColors from '../../colors/typeColors';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {toast} from 'react-toastify'

export default function Modal({conteudo, close}){

  function favoritos() {
    const meusFavoritos = localStorage.getItem('pokemons');
    let pokemonsSalvos = JSON.parse(meusFavoritos) || [];

    const hasPokemon = pokemonsSalvos.some((pokemonsSalvo) => pokemonsSalvo.id === conteudo.id)

    if (hasPokemon){
      toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      return;
  }
    pokemonsSalvos.push(conteudo);
    localStorage.setItem('pokemons', JSON.stringify(pokemonsSalvos));
    alert('Pokemon Salvo')
}

  return(
    <div className="modal">
      <div className='containerModal'>
        <button className="close" onClick={ close }>
          < IoMdArrowRoundBack/>
          Voltar
        </button>
      <div>

          <div className="list">
              <p>
                  <a>{conteudo.name} <a className='aID'> Nº{conteudo.id}</a></a>
              </p>

            <div className='box'>

              <img src={`https://cdn.traction.one/pokedex/pokemon/${conteudo.id}.png`} />
                <div className='boxDiv'>
                  <div className='infos'>
                      <div className='boxInfo'>
                          <div>
                            <label className='title'>Altura:</label> 
                            <span>
                              {conteudo.height} 
                            </span> 
                          </div>

                          <div>
                            <label className='title'>Peso: </label> 
                            <span>
                              {conteudo.weight}
                            </span>
                          </div>

                          <div>
                            <label className='title'>Habilidades:  </label> 
                            <span>
                            {conteudo.abilities[0].ability.name}
                            </span>
                          </div>
                      </div>
                  </div>

                    <p>Tipo</p>

            <div className='boxTypes'>
              <div>
                    {conteudo.types.map(type => {
                        return (
                  <div className="boxType"
                  style={{ backgroundColor: typeColors[type.type.name] }}>
                      <span>{type.type.name}</span>
                  </div>

                );
              })}
            </div>
          </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}