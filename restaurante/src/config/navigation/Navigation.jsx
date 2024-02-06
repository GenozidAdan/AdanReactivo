import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginStack from '../stack/LoginStack';
import RestaurantsStack from '../stack/RestaurantsStack';
import FavoritesStack from '../stack/FavoritesStack';




const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='RestaurantsStack' screenOptions={{headerShown: false}}>
        <Tab.Screen name="RestaurantsStack" component={RestaurantsStack} options={{ title: "Inicio"}}/>
        <Tab.Screen name="FavoritesStack" component={FavoritesStack} options={{ title: "Favoritos"}}/>
        <Tab.Screen name="LoginStack" component={LoginStack} options={{ title: "Cuenta"}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

