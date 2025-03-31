import React, { useState } from "react";
import { Button, View, Text, TextInput } from "react-native";

const Header = (props) => {
   const [text, onChangeText] = useState('Useless text');
   
   const [color, setColor] = useState('blue');
   // const onPressSentData = () => {
   //    console.log('send data');
   //    props.getName('Cee')
   // }

   const onPressSentColor = () => {
      console.log('send color');
      props.getColor(color)
   }

   return (
      <View style={{ borderWidth: 5 }}>
         <Text style={{ fontSize: 30 }}>Header</Text>
         <TextInput style={{ color: 'black', fontSize: 30, textAlign: 'center' }}
            onChangeText={onChangeText}
            value={text}
         />
         <Button title="Click me" onPress={onPressSentColor} />
      </View>
   )
}

export default function demo() {
   const [color, setColor] = useState()

   const getColorFn = (value) => {
      console.log(value);
      setColor(value)
   }

   return (
      <View>
         <Header getColor={getColorFn} />
         <Text style={{ color: color, fontSize: 50 }}> {color}</Text>
      </View>
   )
};