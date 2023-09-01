import axios from "axios";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";



const UniversitiesList = () => {
    const [universities, setUniversities] = useState([]);

    const fetchUniversities = async () => {
        try {
            const { data } = await axios.get('http://universities.hipolabs.com/search?country=Brazil');
            setUniversities(data);
        } catch (error) {
            console.error(error);
        }
    };

    const UniversityItem = ({ university }) => (
        <View style={style.listCard}>
            <Text style={style.text}>Nome: {university.name}</Text>
            <Text  style={style.text}>Alpha code: {university.alpha_two_code}</Text>
        </View>
    );

    useEffect(() => {
        fetchUniversities();
    }, []);

    return (
        <View>
            <FlatList
                data={universities}
                renderItem={({ item }) => <UniversityItem university={item} />}
            />
        </View>
    );
};

const style = StyleSheet.create({
    listCard: {
        padding: 16,
        backgroundColor: 'aqua',
        margin: 8,
        borderRadius: 20,
    },
    text:{
        color: 'black',
        fontSize: 12,
        fontFamily: 'Arial',
    }
})

export default UniversitiesList;