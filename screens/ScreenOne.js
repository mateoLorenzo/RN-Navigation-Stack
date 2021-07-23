import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const ScreenOne = (props) => {
   return( 
      <View style={styles.mainContainer}>
         <Text style={styles.mainTitle}>I'm screen number 1!</Text>
         <View style={styles.mainButtonContainer}>
            <Button title="Jump to screen number 2" onPress={() => props.navigation.navigate('screen two') }/>
            <Button title="Jump to screen number 3" onPress={() => props.navigation.navigate('screen three')} />
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
      fontWeight: 'bold',
   },
   mainButtonContainer: {
      height: 80,
      marginTop: 20,
      justifyContent: 'space-between',
      width: '60%',
   },
})

export default ScreenOne