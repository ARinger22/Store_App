import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from '../constants/Constant';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import * as TYPES from '../store/Type'

const ProductDetails = ({ navigation, route }) => {

    const data = route.params.data
    const dispatch = useDispatch();
    useEffect(() => {
        // console.log(data)
    }, [])

    const add_to_cart = () =>{
        dispatch({type: TYPES.ADD_TO_CART, payload: data})
        setTimeout(()=>{
            navigation.navigate('Cart')
        },1000)

    }

    return (
        <View style={styles.mainContainer}>
            <SafeAreaView>
                <ScrollView>
                    <Image
                        source={data.image}
                        resizeMode='cover'
                        style={styles.productImage}
                    />
                    <View>
                        <TouchableOpacity>
                            <Text style={styles.productImageView}>{data.name}</Text>  
                        </TouchableOpacity>
                        <TouchableOpacity>    
                            <Text style={styles.name}>Size : <Text style={styles.otherData}>{data.size}</Text></Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.name}>Brand : <Text style={styles.otherData}>{data.Brand}</Text></Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.name}>Price : <Text style={styles.otherData}>{data.price}</Text></Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.name}>Product Description : <Text style={styles.otherData}>{data.description}</Text></Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addToCart}
                            onPress={add_to_cart}
                        >
                            <Text style={styles.addToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // backgroundColor: 'black'
    },
    productImage: {
        height: Constants.SCREEN_HEIGHT * 0.3, width: '100%',
    },
    productImageView: {
        paddingHorizontal: 20,
        paddingTop: 20,
        fontWeight: 700,
        fontSize: 20,
        color: 'black',
    },
    name: {
        paddingHorizontal: 20,
        paddingTop: 20,
        fontSize: 18,
        fontWeight: '700',
        color: 'black',
    },
    otherData: {
        fontSize: 18,
        fontWeight: '400',
    },
    addToCart:{
        width:'100%',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        marginTop: 20,
    },
    addToCartText : {
        color:'white',
        fontWeight: 600,
        fontSize: 15,
    }

})

export default ProductDetails;
