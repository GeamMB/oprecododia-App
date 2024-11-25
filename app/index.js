import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default function initial(){
  return(
    <View style={styles.container}>
      <Image source={require('../assets/images/logotipo.png')} style={styles.logo}/>
    </View>
  )
}

const styles = StyleSheet.create ({
 container:{
  backgroundColor: "#fff",
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 },
 
 
  logo: {
    width: 280,
    height: 280,
  }
})