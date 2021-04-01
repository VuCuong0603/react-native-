import React from "react";
import {  StyleSheet, Text, View,TextInput,TouchableHighlight,CheckBox } from "react-native";

const App = () => (
  <View style={[styles.container]}>
    <View style={{alignItems: "center",}}>
      <Text>SIGN IN</Text>
      </View>
      <View >
        <Text>Nhap  tai khoan</Text>
      <TextInput style={styles.input}
        //keyboardType='email-address'
        //placeholder='ente your email'
        //placeholderTextColor='red'
       /> 
       <Text>Nhap  tai khoan</Text>
      <TextInput style={styles.input}  />
       <TouchableHighlight style={styles.hi}>
        <View style={styles.button}>
          <Text>Đăng Nhập</Text>
        </View>
      </TouchableHighlight>
      </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },  
  input:{
    height:40,
         margin: 20,
         borderColor:'gray',
         borderWidth:1,
         padding:10
  },
  hi:{
    alignItems: "center",
  },
  button:{
    width:200,
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    borderRadius:50,
   },
});git remote add origin https://github.com/VuCuong0603/react-native-.git

export default App;