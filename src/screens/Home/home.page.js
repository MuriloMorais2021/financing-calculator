import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormHome } from '../../components/Forms/form.home';
import { CardEmpty } from '../../components/Cards/cardEmpty.components';
import { CardResult } from '../../components/Cards/cardResult.components';


export const Home = () => {
    const [calculatedValues, setCalculatedValues] = useState([]);

    const addInfoCalculated = (calculation) => {
        setCalculatedValues(calculation);
    }

    return (
        <>
            <FormHome onAddInfoCalculated={addInfoCalculated} />
            {
                (!calculatedValues.valueVehicle || !calculatedValues.valueTax || !calculatedValues.qtyPlots)
                    ?
                    <CardEmpty />

                    :
                    <CardResult
                        values={calculatedValues}
                    />
            }
        </>
    )
}