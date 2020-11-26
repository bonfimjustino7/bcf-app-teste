import React from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { Container, Button } from './styles'

const Inicial = ({ navigation }) => {
 
  return (
    <>
      <StatusBar barStyle="#fff" />
        <Container>
            <Image 
                source={ require('../../assets/Logo.png') }                                                        
                
            />
            <View>
                <Button color='#0064A9' underlayColor="#1153b9" onPress={() => navigation.navigate('Biometria')}>
                    <Text style={{ color: '#fff', fontSize: 17 }}>Iniciar Monitoramento</Text>
                </Button>
                <Button color='#F65B4D'>
                    <Text style={{ color: '#fff', fontSize: 17 }}>Finalizar Monitoramento</Text>
                </Button>
            </View>
        </Container>
    </>
  );

}

export default Inicial;