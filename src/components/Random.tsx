import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'

export const Random = () => {
    const [result, setResult] = useState(0);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);

    const handleGenerate = () => {
        setResult(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    const handleMinChange = () => {

    }
    const handleMaxChange = () => {
        
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.titleWrap}>
                <Text style={styles.title}>Enter the diapason</Text>
            </View>
            <View style={styles.inputsWrap}>
                <View style={styles.inputWrap}>
                    <Text style={styles.text}>
                        Min
                    </Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder={'0'}
                        placeholderTextColor={'#808080'}
                        onChange={handleMinChange}
                    />
                </View>
                <View style={styles.inputWrap}>
                    <Text style={styles.text}>
                        Max
                    </Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder={'100'}
                        placeholderTextColor={'#808080'}
                        onChange={handleMaxChange}
                    />
                </View>
            </View>
            <View style={styles.resultWrap}>
                <Text style={styles.result}>{result}</Text>
            </View>
            <View style={styles.btn}>
                <Button
                    color='#fff'
                    title={'Generate'}
                    onPress={handleGenerate}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 200,
        maxHeight: 400,
        width: '80%',
        flex: 1,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#A43820',
        paddingBottom: 15
    },
    title: {
        color: '#fff',
        paddingTop: 20,
        
    },
    titleWrap: {
        height: 40,
        marginBottom: 20,  
    },
    text: {
        marginTop: 'auto',
        marginBottom: 15,
        color: '#fff',
    },
    btn: {
        backgroundColor: '#02bbfd',
    },
    input: {
        minWidth: 100,
        maxWidth: '30%',
        height: 30,
        backgroundColor: '#693D3D',
        color: '#fff',
        textAlign: 'center',
    },
    inputsWrap: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
    },
    inputWrap: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
    },
    result: {
        fontSize: 56,
        color: '#fff'
    },
    resultWrap: {
        marginTop: 'auto',
        marginBottom: 'auto'
    }
})