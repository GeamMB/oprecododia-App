import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

export default function login(){
  return(
    <View style = {styles.containerLogin}>
      <Image source={require("../assets/images/logotipo.png")} style = {style.logologin}/>
    </View>
  )
}

const style = StyleSheet.create({
  containerLogin:{
    backgroundColor: 'green'
  }
})