import React from "react";
import { StyleSheet, Text, View } from "react-native";


export const CardEmpty = ()=>{
    return (
        <View style={styles.content}>
            <Text style={styles.text}>Preencha todos os valores para que seja realizada a simulação</Text>
        </View>
    )
} 


const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: 250,
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#858585',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
    }
})  