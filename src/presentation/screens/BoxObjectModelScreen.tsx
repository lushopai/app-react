import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <View style = {styles.purpleBox}>
        <Text>Hola mundo</Text>
      </View>

      {/* <Text style={styles.title}>Box</Text> */}
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
    
    


  },
  title: {
    fontSize:30,
    borderWidth:10,
    paddingHorizontal: 30,
    paddingVertical: 10

  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    marginHorizontal: 20,
    marginVertical : 50,
    padding: 5
    
  }
})