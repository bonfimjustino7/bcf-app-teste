import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import { Icon, Header } from 'react-native-elements';


const Biometria = ( {navigation} ) => {  
  
  const [isBiometria, setBiometria] = useState(false);
  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      
      const ws = new WebSocket('ws://192.168.2.98:8080');
      setBiometria(false);                  
      ws.onopen = () => console.log('Conexão estabelicida');
      ws.onclose = () => console.log('Fechou a conexão');
      
      ws.onmessage = res => {
        const data = JSON.parse(res.data);
  
        if(data.test_id) {
          console.log(data.test_id);
          setBiometria(true); 
          ws.close();                 
        }
        else {
          console.log(data.msg);
        }
      }
      
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);


  return (
    <>
      <StatusBar barStyle="#fff" />
      <Header
          centerComponent={{ text: 'Biometria', style: { color: '#fff' } }}
          leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.openDrawer() }}          
      />                
      <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {isBiometria ? <Text>Permissão consedida</Text>:
            <>
              <Text style={{ fontSize: 18, paddingBottom: 20 }} >Aguradando biometria</Text>
              <ActivityIndicator size={100} color="#0000ff" />
            </>
          }
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  
});

export default Biometria;
