import React, { useState } from 'react'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '../components/shared/PrimaryButton'
import { Button } from 'react-native-paper'



export const CounterScreen = () => {
    const [count, setCount] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{count}</Text>
            {/* <PrimaryButton
                label='Incrementar'
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}></PrimaryButton> */}
          

            <Button onPress={ () => setCount( count + 1)}
            onLongPress={ () => setCount(0)}
            mode='contained'>
                Press me
            </Button>

        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    title: {
        fontSize: 80,
        textAlign: 'center',
        color: 'black',
        fontWeight: '300'
    }
})