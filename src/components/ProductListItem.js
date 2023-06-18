import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const ProductListItem = (props) => {
    const {data, onPress, isCart = false}  = props;
    return (
        <TouchableOpacity   
        onPress={onPress} 
        activeOpacity={0.4}
        style={styles.mainContainer} >
            <View style={styles.productImageView}>
                <Image
                    source={data.image}
                    resizeMode='cover'
                    style={styles.productImage}
                />
            </View>
            <View>
                <Text style={[styles.name ,{ color: 'black' }]}> {data.name}</Text>
                <Text style={[styles.otherData, { color: 'black' }]}> Brand : {data.Brand}</Text>
                <Text style={[styles.otherData, { color: 'black' }]}> Size : {data.size}</Text>
                <Text style={[styles.otherData, { color: 'black' }]}> Price : {data.price}</Text>
                {
                    isCart && 
                    <Text style={[styles.otherData, { color: 'black' }]}> Quantity : {data.QTY}</Text>

                }
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        marginVertical: 10,
        width: '100%',
        paddingVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
    },
    productImage: {
        height: 70, width: 70,
        marginHorizontal:10,
    },
    productImageView: {
        overflow: 'hidden',
        borderRadius: 8,
        marginRight:10,
    },
    name:{
        fontSize: 18,
        fontWeight: '500',
    },
    otherData:{
        fontSize:18,
        fontWeight:'200',
    }
})

export default ProductListItem;
