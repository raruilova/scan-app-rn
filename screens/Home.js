import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";

export function Home() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [dataQr, setDataQr] = useState("");
  const [qr, setQr] = useState(null);

  //const api = "https://api.itsqmet.edu.ec/api/SISACAD?url=https://sisacad.itsqmet.edu.ec:8070/CodigosQR/c7004e4ea2a04861b6916c7b0a19f43c/Invitacion1.pdf"
  const api = "https://api.itsqmet.edu.ec/api/SISACAD?url=";

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setDataQr(data);
  };

  const getInvitation = async () => {
    const data = await fetch(`${api}${dataQr}`);
    const res = await data.json();
    if (res[0] === "0") {
      const dateRegisterHour = res.slice(11);
      const dateRegister = res.slice(3, 10);

      alert(`La invitacion ya se registro en la fecha ${dateRegister} a las ${dateRegisterHour}`);
    } else {
      alert("Ha sido registrada su invitacion");
    }
    setDataQr("");

  };

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
    if (dataQr.length > 0) {
      getInvitation();
    }
  }, [dataQr]);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        
        <TouchableOpacity
        onPress={() => setScanned(false)}
        style={{
          backgroundColor: Colors.primary,
          paddingVertical: Spacing * 1.5,
          paddingHorizontal: Spacing * 2,
          //width: "48%",
          height: "0",
          borderRadius: Spacing,
          shadowColor: Colors.primary,
          shadowOffset: {
            width: 0,
            
          },
          shadowOpacity: 0.3,
          shadowRadius: Spacing,
          
        }}
      >
        <Text
          style={{
            color: Colors.onPrimary,
            fontSize: FontSize.large,
            textAlign: "center",
          }}
        >
          Escanear Nuevamente
        </Text>
      </TouchableOpacity>
      )}
    </View>
  );
}

const opacity = "rgba(0, 0, 0, .6)";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: opacity,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "rgb(99 102 241)",
    color: "#fff",
    padding: 3,
    borderRadius: 3,
  },
});
