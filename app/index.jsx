import  React from "react";
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
 


export default function login(){
  return (
    <View style={style.container}>
      <View style={style.contentLogo}>
        <Image source={require("../assets/logotipo.png")} style={style.img} />
      </View>
      <View style={style.title}>
        <Text style={style.textLogin}>Login</Text>
      </View>

      <View style={style.contentLogin}>
        <Text style={style.titleInput}>Usuário</Text>
        <TextInput placeholder="..." style={style.inputLogin}></TextInput>
        <Text style={style.titleInput}>Senha</Text>
        <TextInput placeholder="..." style={style.inputLogin}></TextInput>
        <TouchableOpacity style={style.buttonEnter}>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};


const style = StyleSheet.create({
  container: {
    // borderColor: "black",
    // borderStyle: "solid",
    // borderWidth: 1,
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  contentLogo: {
    // borderColor: "black",
    // borderStyle: "solid",
    // borderWidth: 1,
    width: "100%",
    height: "35%",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    // borderColor: "black",
    // borderStyle: "solid",
    // borderWidth: 1,
    height: "10%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  textLogin: {
    fontSize: 34,
  },

  img: {
    height: 180,
    width: 180,
  },

  contentLogin: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    height: "30%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  titleInput: {
    fontSize: 16,
    fontWeight: "300",
  },

  inputLogin: {
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    marginLeft:15,
  },
});