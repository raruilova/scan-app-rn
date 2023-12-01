import {
    Dimensions,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import Spacing from "../constants/Spacing";
  import FontSize from "../constants/FontSize";
  import Colors from "../constants/Colors";
  import Font from "../constants/Font";
  const { height } = Dimensions.get("window");

export const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={{backgroundColor: "#061c2f"}}>
    <View>
      <ImageBackground
        style={{
          height: height / 2.5,
        }}
        resizeMode="contain"
        source={require("../assets/logo.png")}
      />
      <View
        style={{
          paddingHorizontal: Spacing * 4,
          //paddingTop: Spacing * 4,
        }}
      >
        <Text
          style={{
            fontSize: FontSize.xxLarge,
            color: Colors.primary,
            //fontFamily: Font["poppins-bold"],
            textAlign: "center",
          }}
        >
          Escanea tu codigo QR aqui
        </Text>

        <Text
          style={{
            fontSize: FontSize.small,
            color: Colors.text,
            //fontFamily: Font["poppins-regular"],
            textAlign: "center",
            marginTop: Spacing * 2,
          }}
        >
          Puedes verificar si tu invitacion ya fue registrada o registrarla
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: Spacing * 2,
          paddingTop: Spacing * 6,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("QR")}
          style={{
            backgroundColor: Colors.primary,
            paddingVertical: Spacing * 1.5,
            paddingHorizontal: Spacing * 2,
            width: "48%",
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
            flex:1,
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              //   fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              fontSize: FontSize.large,
              textAlign: "center",
            }}
          >
            Escanear
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
