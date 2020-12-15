import React from "react";
import { View, StyleSheet } from "react-native";
import PokemonCard from "./PokemonCard";
import MegaPokemon from "../../assets/MegaPokemon";

const PokemonList = () => {
    const pokemonCard = MegaPokemon.map((mega, index) => {
        return (
            <View style={styles.tripleContainer} key={index}>
                <PokemonCard
                    name={mega[0].name}
                    image={mega[0].image}
                    typeList={mega[0].typeList}
                    id={mega[0].id}
                    height={mega[0].height}
                    weight={mega[0].weight}
                    hp={mega[0].hp}
                    attack={mega[0].attack}
                    defense={mega[0].defense}
                    specialAttack={mega[0].specialAttack}
                    specialDefense={mega[0].specialDefense}
                    speed={mega[0].speed}
                />
                <PokemonCard
                    name={mega[1].name}
                    image={mega[1].image}
                    typeList={mega[1].typeList}
                    id={mega[1].id}
                    height={mega[1].height}
                    weight={mega[1].weight}
                    hp={mega[1].hp}
                    attack={mega[1].attack}
                    defense={mega[1].defense}
                    specialAttack={mega[1].specialAttack}
                    specialDefense={mega[1].specialDefense}
                    speed={mega[1].speed}
                />
                <PokemonCard
                    name={mega[2].name}
                    image={mega[2].image}
                    typeList={mega[2].typeList}
                    id={mega[2].id}
                    height={mega[2].height}
                    weight={mega[2].weight}
                    hp={mega[2].hp}
                    attack={mega[2].attack}
                    defense={mega[2].defense}
                    specialAttack={mega[2].specialAttack}
                    specialDefense={mega[2].specialDefense}
                    speed={mega[2].speed}
                />
            </View>
        )
    })
    return (
        <View>
            {pokemonCard}
        </View>
    )
};

const styles = StyleSheet.create({
    tripleContainer: {
        flexDirection: "row",
        flex: 1
    }
})

export default PokemonList;