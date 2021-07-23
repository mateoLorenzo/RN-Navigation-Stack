import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const ScreenTwo = (props) => {
   return (
      <View style={styles.mainContainer}>
         <Text style={styles.mainTitle}>I'm screen number 2</Text>
         <View style={styles.buttonsContainer}>
            <Button title="Jump to screen number 3" onPress={() => props.navigation.navigate("screen three")} />
            <Button title="Back to screen number 1" onPress={() => props.navigation.navigate("screen one")} />
         </View>
      </View>
      )
}

const styles = StyleSheet.create({
   mainContainer: {
      backgroundColor: "black",
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
   },
   mainTitle: {
      color: "white",
      fontSize: 20,
      fontWeight: 'bold'
   },
   buttonsContainer: {
      height: 80,
      marginTop: 20,
      justifyContent: "space-between",
      width: "60%",
   }
})

export default ScreenTwo