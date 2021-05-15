import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';

const PostItem = props => {
    return (
        <TouchableOpacity onPress={props.onSelectPost} style={styles.postItem}>
            <View style={styles.post}>
                <View style={styles.rowTitle}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                
                <View style={styles.rowDescription}>
                    <ImageBackground source={{ uri: props.image }} style={styles.image} />
                    <Text style={styles.description}>{props.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    postItem: {
        height: 500,
        width: '100%',
        backgroundColor: '#FFFAF0',
        marginBottom: 30
    },
    row: {
        flexDirection: 'row',
        margin: 10
    },
    rowTitle: {
        height: '10%',
        justifyContent:'center',
        alignItems:'center'
    },
    title: {
        fontFamily: 'lora-regular',
        fontSize: 20
    },
    rowDescription: {
        height:'90%'
    },
    description: {
        fontFamily: 'lora-regular-italic',
        fontSize: 15
    },
    image: {
        width: '100%',
        height: '80%'
    },
    post:{
        marginBottom:15
    }
})
export default PostItem;