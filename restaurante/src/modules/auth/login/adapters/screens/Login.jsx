import {} from 'react'
import {StyleSheet, View, Text} from 'react-native'


export default function Login(props){
    console.log('Propiedades: ',props);
    const {name, lastname, age} = props;
    return (
        <View style={styles.container}>
        <Text>Luis</Text>
        <Text>Meza</Text>
        <Text>Adan</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F0F0F0",
        justifyContent: "center",
        alignItems: "center",
    },

    

})