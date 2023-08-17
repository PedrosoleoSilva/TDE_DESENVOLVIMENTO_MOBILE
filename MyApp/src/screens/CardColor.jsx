import 'react';
import axios from "axios";
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity} from "react-native";
import React, { useEffect, useState } from 'react'

const CardColor = ({colors,onPressButton}) => {
    

    const [infoFom, setInfoFom] = useState(false);
    const [info2, setInfo2] = useState(false);

    const fechtInfo = async () =>{
        try {
            const {data} = await axios.get('https://catfact.ninja/fact')
            const {data : data2} = await axios.get('https://catfact.ninja/fact')
            setInfoFom(data.fact)
            setInfo2(data2.length)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <TouchableOpacity onPress={fechtInfo} style={{ backgroundColor: colors, width: 400, height:300, padding: 50}}>
            
                <Text>{infoFom ? infoFom : ""}</Text>
                <Text>{info2 ? info2 : ""}</Text>
       
        </TouchableOpacity>

        
      
        
    );
}

const styles = StyleSheet.create({
    card: {
    borderRadius: 8,
    padding: 16,
    margin: 8,
    width: 100,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
   
    },
    });

export default CardColor;