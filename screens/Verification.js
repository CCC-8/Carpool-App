import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";

const VerificationScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>Your mobile number</Text>
                </View>
                <TextInput
                    type="text"
                    placeholder="Enter your mobile number"
                    name="verification"
                    required={false}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonTxt}>Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        display: "flex",
        maxWidth: 480,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        alignItems: "stretch",
        textAlign: "center",
        margin: "0 auto",
        padding: 50,
    },
    header: {
        color: "#00BFA6",
        alignSelf: "center",
        marginTop: 20,
        fontWeight: "700",
        fontSize: 22,
        fontFamily: "Montserrat, sans-serif",
    },
    input: {
        marginTop: 45,
        borderRadius: 15,
        borderWidth: 0.8,
        borderStyle: "solid",
        borderColor: "rgba(81, 81, 85, 1)",
        fontSize: 16,
        fontWeight: "700",
        padding: 15,
        paddingHorizontal: 20,
    },
    button: {
        borderRadius: 3,
        backgroundColor: "#00BFA6",
        marginTop: 430,
        justifyContent: "center",
        alignItems: "center",
        color: "#EFEFF0",
        padding: 16,
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "700",
        fontSize: 16,
        whiteSpace: "nowrap",
    },
    buttonTxt: {
        color: "#EFEFF0"  
    },
});

export default VerificationScreen;