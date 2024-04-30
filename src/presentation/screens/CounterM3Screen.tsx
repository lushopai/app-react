import React, { useState } from 'react'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import { PrimaryButton } from '../components/shared/PrimaryButton'
import { Button, FAB } from 'react-native-paper'
import { globalStyles } from '../theme/global.styles'

import Icon from 'react-native-vector-icons/Ionicons'

export const CounterM3Screen = () => {
    const [count, setCount] = useState(10)

    return (
        <View style={globalStyles.centerContainer}>
            <Text style={globalStyles.title}>{count}</Text>

            {/* <Icon name='accessibility-outline' size={25}></Icon> */}
            <FAB
            onPress={() => setCount(count + 1)}
            onLongPress={() => setCount(0)}
            style={globalStyles.fab}
            icon="add-outline">
                


            </FAB>
            

        </View >
    )
}


