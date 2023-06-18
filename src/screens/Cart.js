import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import Constants from '../constants/Constant';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import * as TYPES from '../store/Type'
import Components from '../components';


const Cart = ({navigation}) => {

    const cartData = useSelector(state => state)

    useEffect(() => {
        console.log('cartdata ', cartData)
    }, [])

    const _renderItem = ({ item }) => {
        return (
            <Components.ProductListItem
                data={item}
                onPress={() => {
                    navigation.navigate('ProductDetails',{data: item})
                }}   
                isCart={true}
            />
        )
    }

    return (
        <View style={styles.mainContainer} >
            <FlatList
                data={cartData.cart}
                renderItem={_renderItem}
                keyExtractor={key => key.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {

    }

})

export default Cart;
