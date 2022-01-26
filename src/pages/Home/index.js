import {getAllPokemon, getPokemon} from '../../services/api.js';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/';
import './style.css' ;


export default function Home() {
    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState("");
    const [prevUrl, setPrevUrl] = useState("");
    const [loading, setLoading] = useState(true);
    const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {
        async function fecthData() {
            const response = await getAllPokemon(initialUrl);
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            const pokemon = await loadPokemon(response.results);
            await loadPokemon(response.results);
            console.log(pokemon);
            setLoading(response.false);
        }

        fecthData();

    }, []);


    const next = async () => {
        setLoading(true);
        let data = await getAllPokemon(nextUrl);
        await loadPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
      }
    
      const prev = async () => {
        if (!prevUrl) return;
        setLoading(true);
        let data = await getAllPokemon(prevUrl);
        await loadPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
      }

    const loadPokemon = async (data) => {
        const _pokemonData = await Promise.all(data.map(async pokemon => {
            const pokemonRecord = await getPokemon(pokemon.url);
            return pokemonRecord
        }))

        setPokemonData(_pokemonData)
    }

    console.log(pokemonData)
     
    return (
        <>
      <div className='boxContainer'>
        {loading ? <h1 style={{ textAlign: 'center'}}> Carregando...</h1> : (
          <>
            <div className="grid-container">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />
              })}
            </div>
            <div className="btn">
              <button onClick={prev}>Anterior</button>
              <button onClick={next}>Próxima</button>
            </div>
          </>
        )}
      </div>
    </>
    )
}
