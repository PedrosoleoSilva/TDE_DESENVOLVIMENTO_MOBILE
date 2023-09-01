import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import axios from "axios";
import { FlatList } from "react-native";



const Listagem = ({item})=>{
    <View>
         <Text>Nome: {university.name}</Text>
        <Text>Alpha code: {university.alpha_two_code}</Text>
    </View>
}

const ListUniversi = () => {
        const [lista, setLista] = useState();

    const fechtListUniversi = async() =>{
        try {
            const {data} = await axios.get('http://universities.hipolabs.com/search?country=Brazil')
            setLista(data)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <SafeAreaView>
            <FlatList
                data={lista}
                renderItem={({item}) => <Listagem item={item}/>}
            />
        </SafeAreaView>
    );
}

export default ListUniversi;