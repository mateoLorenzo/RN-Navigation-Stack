import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ScreenOne from '../screens/ScreenOne'
import ScreenTwo from '../screens/ScreenTwo'
import ScreenThree from '../screens/ScreenThree'

const stack = createStackNavigator()

const Stack = () => {
   return(
      <stack.Navigator screenOptions={{
         headerShown: false
      }}>
         <stack.Screen name="screen one" component={ScreenOne} />
         <stack.Screen name="screen two" component={ScreenTwo} />
         <stack.Screen name="screen three" component={ScreenThree} />
      </stack.Navigator>
   )
}

export default Stack