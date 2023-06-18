import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ProductData from '../store/Data'
import Components from '../components';

const Product = ({navigation}) => {

    const _renderItem = ({item, index}) =>{ 
        return (
            <View style={styles.mainContainer}>
                <Components.ProductListItem
                    data={item}
                    onPress={()=>{
                        navigation.navigate('ProductDetails',
                        {
                            data:item
                        })
                    }}
                />
            </View>
        )
    }

    return (
        <View style={StyleSheet.mainContainer}>
            <FlatList 
                data = {ProductData}
                renderItem={_renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle = {{paddingHorizontal: 20}}
            />
        </View>
    );
};

const styles =StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor: 'black',
    },
})

export default Product;