import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import Inicial from './pages/Inicial';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Biometria from './pages/Biometria';

const Drawer = createDrawerNavigator();


const App = () => {
 
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Inicial} />
        <Drawer.Screen name="Biometria" component={Biometria} />
      </Drawer.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  view: {        
    flex: 1,
    alignItems:"center",
    justifyContent: "center",  
    backgroundColor: "#EFEFEF",
  },
});

export default App;

