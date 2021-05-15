import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Konkretan post, ovde moze da sacuva post za kasnije citanje -> SavedPostsScreen
const PostScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Post Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default PostScreen;