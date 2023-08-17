import { Button, SafeAreaView, StatusBar, View, Text} from "react-native";
import { useState } from "react";
import axios from "axios";


const Cards = () => {
    const [factCat, setFactCat] = useState();
    const [factCat2, setFactCat2] = useState();

    const fetchFactCat = async() =>{
        try {
            const catFactResponse = []
            for (let i = 0; i<=1; i++) {
                const {data} = await axios.get('https://catfact.ninja/fact')
                catFactResponse.push(data.fact)
            }
            setFactCat(catFactResponse)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <SafeAreaView>
            <StatusBar/>
            <View>
                <Text>FATOS SOBRE GATOS!</Text>
                    <Button title='clique aqui!' onPress={fetchFactCat}/>
                    <View>
                        {factCat?.lenght ? factCat.map(cf =>(
                            <Text> FACT:{cf.fact}</Text>
                        )) : <></>}
                    </View>
            </View>
        </SafeAreaView>
    );
}

export default Cards;