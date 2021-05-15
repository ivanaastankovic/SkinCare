import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform, ImageBackground } from 'react-native';

const LoginScreen = props => {
    return (

        // Test 
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: 'white' }}
            enabled={true}
        >
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/f.png')} style={styles.pozadina}>
                    <View style={styles.forma}>
                        <TextInput style={styles.mejl} placeholder={"E-mail"} placeholderTextColor='black'
                            onChangeText={() => { }} />
                        <TextInput style={styles.sifra} placeholder={"Password"} placeholderTextColor='black'
                            onChangeText={() => { }}
                            secureTextEntry={true}
                        />
                        <View style={styles.dugmeCont}>
                            <TouchableOpacity style={styles.touch} onPress={() => {props.navigation.navigate({routeName: 'Home'})}}>
                                <Text style={styles.loginText}>
                                    Log in
                    </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>

        </KeyboardAvoidingView>

    )
}

LoginScreen.navigationOptions = {

    headerTitleStyle: {
        fontFamily: 'lora-regular',
    },
    headerTitle: '#skincare',
    headerTintColor: '#272625'

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: "center",
        backgroundColor: 'white'
    },
    mejl: {
        height: 42,
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#E9967A',
        color: 'black',
        marginBottom: 10
    },
    sifra: {
        height: 42,
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#E9967A',
        marginTop: '5%',
        opacity: 1,
        color: 'black'
    },
    dugmeCont: {
        marginTop: '10%',
        width: '80%',
        opacity: 2
    },
    touch: {
        marginTop: 20,
        borderWidth: 1,
        height: 60,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: '#E9967A',
        backgroundColor: '#E9967A',
        textAlign: 'center',
        alignSelf: 'center'
    },
    pozadina: {
        width: '100%',
        height: '100%',
        opacity: 0.5
    },
    forma: {
        // justifyContent: 'center',
        marginTop: 50,
        flex: 1,
        alignItems: 'center'
    },
    loginText: { color: 'black', fontSize: 20, fontFamily: 'lora-regular' }

})

export default LoginScreen;