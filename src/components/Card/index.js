import React, {useState} from 'react';
import './style.css'
import typeColors from '../../colors/typeColors';
import Modal from '../../components/Modal';
import {IoMdArrowRoundForward} from 'react-icons/io';
import {AiFillHeart} from 'react-icons/ai'
import { Toaster, toast } from 'react-hot-toast';

export default function Card({pokemon}) {

  const [showPostModal, setShowPostModal] = useState(false);
  const [detail, setDetail] = useState();

  function togglePostModal(item){
    setShowPostModal(!showPostModal) 
    console.log(item);
    setDetail(item);
  }

  function favoritos() {
    const meusFavoritos = localStorage.getItem('pokemons');
    let pokemonsSalvos = JSON.parse(meusFavoritos) || [];

    const hasPokemon = pokemonsSalvos.some((pokemonsSalvo) => pokemonsSalvo.id === pokemon.id)

    if (hasPokemon){
      toast.error("Já foi Salvo")
      return;
  }
    pokemonsSalvos.push(pokemon);
    localStorage.setItem('pokemons', JSON.stringify(pokemonsSalvos));
    toast.success('Salvo!')
    return;
}
  

  return (
    <> 
    <div>

    <Toaster position='top-right'/>

          <div className='card'> 

          <div className='card-center'>

            <button onClick={favoritos}>
                <AiFillHeart className='fav'/>
            </button> 
            

            <div className="card-img">
                <img src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
            </div>

          <div className='card-name'>
                  {pokemon.id}.
                  {pokemon.name}
          </div>

          <div className='card-types'>
              {pokemon.types.map(type => {
                  return (
                    <div className="card-type" style={{ backgroundColor: typeColors[type.type.name] }}>
                    <span>{type.type.name}</span>
                </div>
                  );
              })}
          </div>

            <button className="details" onClick={ () => togglePostModal(pokemon)}>
              Detalhes
                <IoMdArrowRoundForward/>
            </button>
          </div>

          </div>

          {showPostModal && (
                    <Modal
                    conteudo={detail}
                    close={togglePostModal}
                    />      
                )}

        </div>
        </>            

                      

  )
}
