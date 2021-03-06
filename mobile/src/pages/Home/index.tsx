import React,{useState} from 'react';
import {Feather as Icon} from '@expo/vector-icons'
import {View,ImageBackground, Image,StyleSheet, Text,TextInput,Platform,KeyboardAvoidingView} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

// import auth from 'service'
// comecar com funcao de autenticacao 

const Home = () => {
  const[cpf,setCpf]= useState('');
  const[password,setPassword]= useState('');
 
const navigation = useNavigation();

function handleNavigateToPoints(){
    navigation.navigate('Create' ,{
      cpf,
      password,
    });
}
    return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding':undefined}>
        <ImageBackground 
        source={require('../../assets/home-background.png')} 
        style={styles.container}
        imageStyle={{
          width:274,
          height:368}
        }>
          <View style={styles.main}>
            <Image source={require('../../assets/logo.png')}style={{width:190,height:88}}/>
              <View>
                <Text style={styles.title}>Realize Login para começarmos</Text>
                <Text style={styles.description}>Cadastre, pesquise e altere o estoque de produtos. </Text>
              </View>
         </View>

            <View style={styles.footer}>
                    <TextInput 
                      style={styles.input}
                      placeholder= "Digite seu CPF"
                      value={cpf}
                      maxLength={2}
                      autoCapitalize="characters"
                      autoCorrect={false}
                      onChangeText={text => setCpf(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder= "Digite sua Senha"
                        value={password}
                        autoCorrect={false}
                        
                        onChangeText={text => setPassword(text)}
                    />

                <RectButton 
                style={styles.button}
                onPress={handleNavigateToPoints}
                >
                    <View style={styles.buttonIcon}>
                      <Text>
                          <Icon name="arrow-right" color="#FFF" size={24}/>
                      </Text>
                    </View>
                    <Text style={styles.buttonText}>
                        Entrar
                    </Text>
                </RectButton>
            </View>
        </ImageBackground>

    </KeyboardAvoidingView>

        
)};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
  
    title: {
      color: '#322153',
      fontSize: 32,
      fontFamily: 'Ubuntu_700Bold',
      maxWidth: 260,
      marginTop: 64,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
  
    footer: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
  
    button: {
      backgroundColor: '#34CB79',
      height: 60,
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
  
    buttonIcon: {
      height: 60,
      width: 60,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    buttonText: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      color: '#FFF',
      fontFamily: 'Roboto_500Medium',
      fontSize: 16,
    }
  });
export default Home;  