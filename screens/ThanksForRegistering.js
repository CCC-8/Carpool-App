import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    FlatList,
    ScrollView,
    View,
    StyleSheet,
    Image,
    Text,
} from "react-native";

const TFRScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>
                    Thanks For <Text style={styles.registerText}>Registering</Text>
                </Text>
            </View>
            <View>
                <Text style={styles.message}>
                    The verifying process may take up to{" "}
                    <Text style={styles.daysText}>3 days</Text>
                </Text>
            </View>
            <View>
                <Text style={styles.question}>?</Text>
            </View>
            <View style={styles.homeButton}>
                <Text style={styles.goHomeTxt}>Go to Home Page</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#00BFA6",
        display: "flex",
        maxWidth: 480,
        width: "100%",
        flexDirection: "column",
        alignItems: "stretch",
        fontWeight: "700",
        textAlign: "center",
        margin: "0 auto",
        padding: 50,
    },
    header: {
        color: "#EFEFF0",
        alignSelf: "center",
        marginTop: 88,
        width: 317,
        fontSize: 30,
        fontFamily: "montserrat-bold",
        textAlign: "center",
    },
    registerText: {
        color: "rgba(81,81,85,1)",
    },
    message: {
        color: "#EFEFF0",
        marginTop: 71,
        fontSize: 18,
        fontFamily: "montserrat-medium",
        fontWeight: "600",
        textAlign: "center",
    },
    daysText: {
        color: "rgba(221,185,103,1)",
    },
    question: {
        color: "#EFEFF0",
        alignSelf: "center",
        marginTop: 80,
        fontSize: 50,
        fontFamily: "montserrat-bold",
    },
    homeButton: {
        borderRadius: 3,
        backgroundColor: "#EFEFF0",
        marginTop: 100,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        fontSize: 16,
    },
    goHomeTxt: {
        fontFamily: "montserrat-bold",
        color: "#00BFA6",
    },
});

export default TFRScreen;