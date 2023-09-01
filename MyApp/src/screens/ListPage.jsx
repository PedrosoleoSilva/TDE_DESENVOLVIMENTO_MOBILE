import {FlatList, SafeAreaView, View, Text, StyleSheet} from  'react-native'

const pokemonData = [
    {
        name: 'Pikachu',
        type: 'Elétrico',
    },
    {
        name: 'Charmander',
        type: 'Fogo',
    },
    {
        name: 'Psyduck',
        type: 'Psíquico',
    },

]

const style = StyleSheet.create({
    pokemonCard: {
        padding: 16,
        backgroundColor: 'aqua',
        margin: 8,
        borderRadius: 20,
    },
    text:{
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Arial',
    }
})

const PokemonItem = ({pokemon}) =>{
    const {name, type} = pokemon
    return (
        <View style={style.pokemonCard}>
            <Text style={style.text}>Pokemon: {pokemon.name}</Text>
            <Text style={style.text}>Tipo: {type}</Text>
        </View>
    )
}

const ListPage = () => {
    return (
        <SafeAreaView style={{marginTop: 12}}>
            <FlatList
                data={pokemonData}
                renderItem={({item}) => <PokemonItem pokemon={item}/>}
            />
        </SafeAreaView>
    );
}

export default ListPage;