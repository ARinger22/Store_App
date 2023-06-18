import React, { useRef } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Product from '../screens/Product';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';

const Stack = createStackNavigator();
const MainNavigator = () => {

    let navigation = useRef()
    return (
        <NavigationContainer  ref = {navigation}>
            <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
                <Stack.Screen name='Products' component={Product} 
                    options={{
                        headerRight: ()=> (
                            <View style={styles.rightHeader}>
                                <Button title='Cart' onPress={()=>{
                                    navigation.current.navigate('Cart')
                                }}/>
                            </View>
                        )
                    }}
                />
                <Stack.Screen name='ProductDetails' component={ProductDetails} options={{title:'Product Details'}} 
                    
                />
                <Stack.Screen name='Cart' component={Cart} options={{ title: 'Saved Items' }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    rightHeader : {
        marginRight: 20,
    },
})

export default MainNavigator;
