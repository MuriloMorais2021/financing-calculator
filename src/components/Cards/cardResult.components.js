import React from "react";
import { StyleSheet, Text, View } from "react-native";


export const CardResult = ({ values }) => {

    const { valueVehicle, valueTax, qtyPlots } = values;


    const tax = parseFloat(parseFloat(valueVehicle) * (parseFloat(valueTax) / 100) * parseInt(qtyPlots));
    const valuePlots = ((parseFloat(valueVehicle) + tax) / parseInt(qtyPlots));
    const totalValue = (parseFloat(valueVehicle) + tax)

    return (
        <View style={styles.content}>
            <Text>Taxa de Juros ao mês: {valueTax }%</Text>
            <Text>Prestações:  {qtyPlots}x de R$ {valuePlots.toFixed(2)}</Text>
            <Text>Valor total: R$ {totalValue.toFixed(2)}</Text>
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

        textAlign: 'justify'
    },
    text: {
        fontSize: 14,
    }
})  