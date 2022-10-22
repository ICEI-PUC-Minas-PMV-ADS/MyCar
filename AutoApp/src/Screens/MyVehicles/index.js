import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image} from "react-native";
import { FAB } from "react-native-paper";
import NavBar from "../../Components/NavBar/index";
import { styles } from "./styles";

const MyVehicles = () => {
     const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <ScrollView>
    <NavBar />
    <View style={styles.container}>
      
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}>
      <Image source={require('../../../assets/images/pulse.png',)} 
      style={styles.buttonImageIconStyle} 
      />
      <View style={styles.buttonIconSeparatorStyle} />
      <Text style={styles.buttonTextStyle}>Pulse</Text>
      
          <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log('Pressed')}
               />
                    </TouchableOpacity>
       <TouchableOpacity
        style={styles.button}
        activeOpacity={0.5}>
      <Image source={require('../../../assets/images/car.png',)} 
      style={styles.buttonImageIconStyle} 
      />
      <View style={styles.buttonIconSeparatorStyle} />
      <Text style={styles.buttonTextStyle}>Argo</Text>
      
          <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log('Pressed')}
               />
                    </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

export default MyVehicles;