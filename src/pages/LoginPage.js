
import React,{useState,useEffect} from 'react';
import { Text,Animated,TouchableOpacity,Tou,ScrollView,View,StyleSheet,TextInput, AsyncStorage, Button,Image, KeyboardAvoidingView, Platform, ActivityIndicator, Alert } from 'react-native';
import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
  
  login()
  {
    this.props.navigation.replace("Task");
  }
  
  render() {

       

        return ( 
          <KeyboardAvoidingView style={styles.background}>
          <View style={styles.containerLogo}>
          <Text style={styles.submitText}>Todo App</Text>
          </View>
          <Animated.View 
          style={[
            styles.container,
            {
              opacity:1,
              transform:[{
                translateY: 10
              }]
            }
          ]}
          >
            <TextInput
            style={styles.input}
            placeholder="Usuário"
            autoCorrect={false}
            onChangeText={()=>{}}>
            </TextInput>
            <TextInput
            style={styles.input}
            placeholder="Senha"
            autoCorrect={false}
            onChangeText={()=>{}}>
            </TextInput>
            <TouchableOpacity style={styles.btnSubmit}
            onPress={() => this.login()}
            >
              <Text style={styles.submitText}>Acessar</Text>
            </TouchableOpacity>
          </Animated.View>
        </KeyboardAvoidingView>
        );
      }
    }
    
const styles = StyleSheet.create(
  {
    background:{
      flex:1,
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor:'#191919'
    }, 
    containerLogo:{
      flex:1,
      justifyContent:'center'
    },
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      width:'90%'
    },
    input:{
      backgroundColor:'#fff',
      width:"90%",
      marginBottom:15,
      color:'#222',
      fontSize:17,
      borderRadius: 7,
      padding:10
    },
    btnSubmit:{
      backgroundColor:'#35aaff',
      width:'90%',
      height:45,
      marginBottom:20,
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 7
    },
    submitText:{
      color:"#fff",
      fontSize:18
    }
  }
)