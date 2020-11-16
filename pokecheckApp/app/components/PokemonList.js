import React from "react";
import { View } from "react-native";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemones }) => {
    const pokemonCard = pokemones.map((pokemon, index) => {
        return <PokemonCard
                    key={pokemones[index].id}
                    name={pokemon.name}
                    image={pokemon.image}
                    typeList={pokemon.typeList}
                    id={pokemon.id}
                    height={pokemon.height}
                    weight={pokemon.weight}
               />
    })
    return (
        <View>
            {pokemonCard}
        </View>
    )
};

export default PokemonList;