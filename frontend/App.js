import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import HomeScreen from './src/screens/HomeScreen'
import AddDeviceScreen from './src/screens/AddDeviceScreen'
import ContactUsScreen from './src/screens/ContactUsScreen'
import DashboardScreen from './src/screens/DashboardScreen'
import BlogScreen from './src/screens/BlogScreen'

const Stack = createStackNavigator()

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ContactUs">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddDevice"
            component={AddDeviceScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ContactUs"
            component={ContactUsScreen}
            options={{ headerShown: false, statusbar: '#fff' }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Blog"
            component={BlogScreen}
            options={{ headerShown: false, statusbar: '#111307' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <AQINotification /> */}
    </>
  )
}

export default App