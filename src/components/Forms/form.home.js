import React, { useState } from "react"
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';



export const FormHome = ({ onAddInfoCalculated }) => {
    const [valueVehicle, setValueVehicle] = useState(0);
    const [valueTax, setValueTax] = useState(0);
    const [qtyPlots, setQtyPlots] = useState(0);

    const listCalculation = {
        'valueVehicle': parseFloat(valueVehicle),
        'valueTax': parseFloat(valueTax),
        'qtyPlots': parseInt(qtyPlots),
    }

    const updateObj = (key, value) => {
        listCalculation[key] = value;

        if (onAddInfoCalculated) onAddInfoCalculated(listCalculation);
    }

    const handleAddValueVehicle = (value) => {
        setValueVehicle(value);
        updateObj('valueVehicle', value);
    }

    const handleAddValueTax = (value) => {
        setValueTax(value)
        updateObj('valueTax', value);
    }

    const handleAddQtyPos = (value) => {
        setQtyPlots(value)
        updateObj('qtyPlots', value);
    }

    return (
        <>
            <View style={styles.contentMain}>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Valor do Veículo</Text>
                    <Text style={styles.valueForm}>{valueVehicle.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                </View>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={100000}
                    step={500}
                    minimumTrackTintColor="blue"
                    maximumTrackTintColor="#858585"
                    onValueChange={(value) => { handleAddValueVehicle(value) }}
                />
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Taxa de Juros</Text>
                    <Text style={styles.valueForm}>{valueTax.toFixed(2)}% a.m</Text>
                </View>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={12}
                    step={.05}
                    minimumTrackTintColor="blue"
                    maximumTrackTintColor="#858585"
                    onValueChange={(value) => { handleAddValueTax(value) }}
                />
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Qtd Parcelas</Text>
                    <Text style={styles.valueForm}>{qtyPlots}x</Text>
                </View>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={72}
                    step={12}
                    minimumTrackTintColor="blue"
                    maximumTrackTintColor="#858585"
                    onValueChange={(value) => { handleAddQtyPos(value) }}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    contentMain: {
        marginTop: 30
    },
    slider: {
        width: '100%',
        height: 40,
    },
    formGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    formLabel: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
        textAlign: 'justify',
    },
    valueForm: {
        fontSize: 12,
    },
});