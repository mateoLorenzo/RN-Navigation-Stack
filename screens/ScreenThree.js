import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const ScreenThree = (props) => {
   return (
      <View style={styles.mainContainer} >
         <Text style={styles.mainTitle}> I'm screen number 3 </Text>
         <View style={styles.buttonsContainer}>
            <Button title="Back to screen 1" onPress={() => props.navigation.navigate('screen one')} />
            <Button title="Back to screen 2" onPress={() => props.navigation.navigate('screen two')} />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   mainContainer: {
      backgroundColor: 'black',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },
   mainTitle: {
      color: 'white',
      fontSize: 20,
      fontWeight: "bold"
   },
   buttonsContainer: {
      height: 80,
      marginTop: 20,
      justifyContent: 'space-between',
      width: '60%',
   }
})

export default ScreenThree