import React from "react";
import { StyleSheet, Text, View } from "react-native";


export const CardResult = ({ values }) => {

    const { valueVehicle, valueTax, qtyPlots } = values;


    const tax = parseFloat(parseFloat(valueVehicle) * (parseFloat(valueTax) / 100) * parseInt(qtyPlots));
    const valuePlots = ((parseFloat(valueVehicle) + tax) / parseInt(qtyPlots));
    const totalValue = (parseFloat(valueVehicle) + tax)

    return (
        <View style={styles.content}>
            <Text style={styles.text}>Taxa de Juros ao mês: {valueTax.toFixed(2)}%</Text>
            <Text style={styles.text}>Prestações:  {qtyPlots}x de {valuePlots.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
            <Text style={styles.text}>Valor total: {totalValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: 200,
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#858585',
        borderRadius: 15,
        padding: 20,
        textAlign: 'justify',
        justifyContent: 'space-around',
    },
    text: {
        fontSize: 16,
    }
})  