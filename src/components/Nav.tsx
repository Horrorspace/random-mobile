import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export const Nav = () => {
    return (
        <View style={styles.nav}>
            <Text style={styles.text}>Random App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        height: 80,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#A43820',
        paddingBottom: 15
    },
    text: {
        color: '#fff'
    }
})