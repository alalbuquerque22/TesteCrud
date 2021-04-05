import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from'./pages/Home';
import Create from'./pages/Create';
import List from'./pages/List';


const AppStack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <AppStack.Navigator 
            headerMode='none'
            screenOptions={{
                cardStyle:{
                    backgroundColor:'#f0f0f5' 
                }
            }}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Create" component={Create}/>
                <AppStack.Screen name="List" component={List}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;