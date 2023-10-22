import React, { useState } from "react"
import { StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';



export const FormHome =  ({ onAddInfoCalculated }) => {
    const [valueVehicle, setValueVehicle] = useState(0);
    const [valueTax, setValueTax] = useState(0);
    const [qtyPlots, setQtyPlots] = useState(0);

    const  handleAddInfoCalculated = () => {

        // if (!valueVehicle || !valueTax || !qtyPlots) return;/*  */


        const listCalculation = {
            'valueVehicle': parseFloat(valueVehicle.toFixed(2)),
            'valueTax': parseFloat(valueTax.toFixed(2)),
            'qtyPlots': parseInt(qtyPlots),
        }

        onAddInfoCalculated(listCalculation);
    }

    return (
        <>
            <View style={styles.contentMain}>
                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Valor do Veículo</Text>
                    <Text style={styles.valueForm}>R$ {valueVehicle.toFixed(2)}</Text>
                </View>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={100000}
                    step={500}
                    minimumTrackTintColor="blue"
                    maximumTrackTintColor="#858585"
                    onValueChange={(number) => { setValueVehicle(number);  handleAddInfoCalculated() }}
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
                    onValueChange={(number) => { setValueTax(number); handleAddInfoCalculated() }}
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
                    onValueChange={(number) => { setQtyPlots(number); handleAddInfoCalculated() }}
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