import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
    FlatList,
    ScrollView,
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native";

const OTPScreen = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <View>
            <Text style={styles.header}>Verification Code</Text>
        </View>
        <View style={styles.subHeader}>
            <Text>Please type verification code sent to +60 xxxxxxxxxx</Text>
        </View>
        <View style={styles.codeContainer}>
            <View style={styles.code}>
                <TextInput style={styles.codeInput} placeholder="5" />
            </View>
            <View style={styles.code}>
                <TextInput style={styles.codeInput} placeholder="5" />
            </View>
            <View style={styles.code}>
                <TextInput style={styles.codeInput} placeholder="5" />
            </View>
            <View style={styles.code}>
                <TextInput style={styles.codeInput} placeholder="5" />
            </View>
        </View>
        <View>
            <Text style={styles.timer}>0:30</Text>
        </View>
        <TouchableOpacity style={styles.resend}>
            <Text>
                <Text style={styles.link}>Didn't receive any code?</Text>{" "}
                <Text style={styles.link}>Resend</Text>
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.verifyButton} onPress={() => navigation.navigate('ThanksForRegistering')}>
            <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        display: "flex",
        maxWidth: 480,
        width: "100%",
        flexDirection: "column",
        alignItems: "stretch",
        fontSize: 16,
        fontWeight: "700",
        margin: "0 auto",
        padding: 50,
    },
    header: {
        color: "#00BFA6",
        textAlign: "center",
        alignSelf: "center",
        marginTop: 20,
        fontSize: 22,
        fontFamily: "Montserrat, sans-serif",
    },
    subHeader: {
        color: "#515155",
        textAlign: "center",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "500",
        alignSelf: "center",
        marginTop: 62,
    },
    codeContainer: {
        display: "flex",
        marginTop: 36,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#515155",
        fontWeight: "600",
        whiteSpace: "nowrap",
        textAlign: "center",
    },
    code: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "rgba(81, 81, 85, 0.20)",
        aspectRatio: 0.83,
        justifyContent: "center",
        alignItems: "stretch",
        padding: 18,
    },
    codeInput: {
        fontFamily: "Montserrat, sans-serif",
        textAlign: "center",
    },
    timer: {
        fontFamily: "Montserrat, sans-serif",
        marginTop: 17,
        textAlign: "right",
    },
    resend: {
        color: "rgba(81, 81, 85, 0.80)",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "600",
        marginTop: 23,
    },
    link: {
        color: "rgba(81, 81, 85, 1)",
    },
    verifyButton: {
        borderRadius: 3,
        backgroundColor: "#00BFA6",
        marginTop: 200,
        justifyContent: "center",
        alignItems: "center",
        color: "#EFEFF0",
        whiteSpace: "nowrap",
        textAlign: "center",
        paddingVertical: 15,
        paddingHorizontal: 60,
    },
    verifyButtonText: {
        fontFamily: "Montserrat, sans-serif",
        color: "#EFEFF0",
    },
});

export default OTPScreen;