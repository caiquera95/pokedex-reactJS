import {useEffect, useState} from 'react';
import './favorites.css';
import { Toaster, toast } from 'react-hot-toast';


export default function Favorites(){
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const meusFavoritos = localStorage.getItem('pokemons');
        setPokemons(JSON.parse(meusFavoritos) || [] );
         
    }, []);

    function handleDelete(id){
        let filtroPokemons = pokemons.filter((item) =>{
            return(item.id !== id)
            
        })
        setPokemons(filtroPokemons);
        localStorage.setItem('pokemons', JSON.stringify(filtroPokemons))
        toast.success("Excluído")
    }

    return(

        <>
        <div>
        <Toaster position='top-right'/>
            
        </div>
      <div className='meusPokemons  '>
        {pokemons.length === 0 ? 
                <h1>Não há Pokemons Salvos</h1>
        
          : (
          <>
            
            <h1>Pokemons Favoritos</h1>

            <div className='boxFav'>
            <ul>
                {pokemons.map((item) =>{
                    return (
                        <li key={item.id}>
                            <img src={`https://cdn.traction.one/pokedex/pokemon/${item.id}.png`} alt={item.name} />
                                <span>ID: <p>{item.id}</p></span>
                                <span><p>{item.name}</p></span>
                                <button className='btnDelete' 
                                onClick={ () => handleDelete(item.id)}>
                                    Excluir
                                </button>
                        </li>
                    )
                })}
            </ul>
            </div>
          </>
        )}
        
      </div>
      
    </>

    )
}