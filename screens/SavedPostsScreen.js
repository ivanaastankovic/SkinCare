import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// Svi sacuvani postovi
const SavedPostsScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>Saved posts Screen</Text>
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

export default SavedPostsScreen;