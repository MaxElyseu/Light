import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Slider from '@react-native-community/slider';

export default function App() {
  const [sliderValue, setSliderValue] = useState(2); // Inicialmente, segundo nível
  const [lightColor, setLightColor] = useState("#FFFFFF"); // Inicialmente, luz branca

  const updateLightColor = (value) => {
    let color = "#FFFFFF"; // Inicialmente, luz branca

    // Determina a cor com base no valor do Slider
    switch (value) {
      case 0:
        color = "grey"; // Nível 1: luz apagada
        break;
      case 1:
        color = "#bbb"; // Nível 2: luz fraca
        break;
      case 2:
        color = "#ccc"; // Nível 3: luz média
        break;
      case 3:
        color = "#eee"; // Nível 4: luz forte
        break;
      case 4:
        color = "#FFFFFF"; // Nível 5: luz máxima
        break;
      default:
        color = "#FFFFFF"; // Caso padrão: luz máxima
        break;
    }

    setLightColor(color);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3,
         justifyContent: "center",
          alignItems: "center",
           marginHorizontal: 20,
            marginBottom: 80 }}>
       
        
       
       <View style={{          
          borderRadius: 50,
          position: "absolute",
          top: 350,
          left: 150,
          shadowColor: lightColor, // Cor da sombra baseada no Slider
          shadowOffset: { width: 50, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 40,
          elevation: 5,
        }} />
       
        <View style={{
          borderRadius: 50,
          position: "absolute",
          top: 350,
          left: 150,
          shadowColor: lightColor, // Cor da sombra baseada no Slider
          shadowOffset: { width: 50, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 40,
          elevation: 5,}} />
        <View style={{width: 100,
          height: 100,
          backgroundColor: "white", // Cor da luz baseada no Slider
          borderRadius: 50,
          position: "absolute",
          top: 400,
          left: 135,
          shadowColor: lightColor, // Cor da sombra baseada no Slider
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 20,
          elevation: 5,}} />
        <View style={{width: 100,
          height: 100,
          backgroundColor: "white", // Cor da luz baseada no Slider
          borderRadius: 50,
          position: "absolute",
          top: 400,
          left: 135,
          shadowColor: lightColor, // Cor da sombra baseada no Slider
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 20,
          elevation: 5,}} />
        <View style={{width: 100,
          height: 100,
          backgroundColor: "white", // Cor da luz baseada no Slider
          borderRadius: 50,
          position: "absolute",
          top: 400,
          left: 135,
          shadowColor: lightColor, // Cor da sombra baseada no Slider
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 20,
          elevation: 5,}} />
         

        <Image
          style={{ width: 500, height: 500, shadowColor: "grey", shadowOffset: {width: 20, height: -30}, shadowOpacity: 1, shadowRadius: 9}}
          source={require("./src/img/pendente.png")}
        />
      </View>

      <View style={{
        width: "100%",
        flex: 2,
        backgroundColor: "white",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
      }}>
        <Text style={{ padding: 40, fontSize: 20, textAlign: "center" }}>Force Light</Text>
        <View style={{ paddingHorizontal: 40 }}>
          <Slider
            style={{ width: '100%', height: 40 }}
            minimumValue={0}
            maximumValue={4} // Definindo o máximo como 4 para representar os 5 níveis
            minimumTrackTintColor="#DD7B22"
            maximumTrackTintColor="#000000"
            thumbTintColor="#DD7B22"
            step={1} // Passo de 1 para selecionar cada nível
            value={sliderValue}
            onValueChange={(value) => {
              setSliderValue(value);
              updateLightColor(value);
            }}
          />
          <Text style={{ textAlign: 'center', marginTop: 10 }}>
            {sliderValue === 0 ? "Apagada" : sliderValue === 4 ? "Máxima" : `Nível ${sliderValue + 1}`}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  
});
