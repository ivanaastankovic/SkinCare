import React from 'react';
import { View, Text, StyleSheet, Alert, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
// pocetna stranica nakon sto se korisnik uloguje ovde moze videti sve razlicite kategorije postova (koza, lice, telo, kosa, stopala, sake, zubi...)
import { CATEGORIES } from '../data/dummy-data.js';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton.js';
// const image = { uri: "https://image.freepik.com/free-photo/shades-foundation-white-background_93675-37016.jpg" };
const HomeScreen = props => {
    const renderListItem = (category) => {
        return (
            <TouchableOpacity

                style={styles.screen}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'SkinCategory',
                        params: {
                            categoryId: category.item.id  //props.navigation.getParam da uzmemo ovaj categoryId
                        }
                    })
                }}>
                <View style={{
                    flex: 1,
                    margin: 15,
                    height: 250,
                    width: 250,
                    borderRadius: 150,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 5,
                    borderColor: category.item.color,
                    opacity: 2,
                    backgroundColor: category.item.color,
                }
                } >
                    <Text style={styles.text}>{category.item.title}</Text>
                </View>
                {/* <ImageBackground
                    source={{ uri: 'https://image.freepik.com/free-photo/shades-foundation-white-background_93675-37016.jpg' }} /> */}

            </TouchableOpacity>
        )
    }
    return (
        <FlatList
            style={styles.list}
            data={CATEGORIES}
            renderItem={renderListItem}
        />
    )
}

HomeScreen.navigationOptions = props => {
    return {
        headerTitle: 'homepage',
        headerTitleStyle: {
            fontFamily: 'lora-regular',
        },
        headerTintColor: '#272625',
        headerRight: ()=>(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    iconName="ios-log-out"
                    onPress={() => {
                        Alert.alert(
                            '',
                            'Do you want to leave skincare?',
                            [
                                { text: 'Yes', onPress: () => props.navigation.navigate('Login') },
                                { text: 'No', onPress: () => props.navigation.navigate('Home') }
                            ]
                        )
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    // listItem: {
    //     flex: 1,
    //     margin: 15,
    //     height: 250,
    //     width: 250,
    //     borderRadius: 150,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderWidth: 5,
    //     borderColor: '#FFF5EE',
    //     opacity: 2


    // },
    text: {
        fontFamily: 'lora-regular',
        fontSize: 25,
    }
});

export default HomeScreen;