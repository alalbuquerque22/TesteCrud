import React,{FormEvent, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Feather as Icon} from '@expo/vector-icons'
import {View,ImageBackground, Image,StyleSheet, Text,TextInput,Platform,KeyboardAvoidingView, Picker} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import api from '../../services/api'




function Create() {
  const[name,setName]= useState('');
  const[price,setPrice]= useState('');
  const [selectedValue, setSelectedValue] = useState("Telecom");
  const navigation = useNavigation();

  const handleCreateProduct = () =>{
  
    const data = new FormData()

    data.append('name',String(name))
    data.append('price',price)
    data.append('categories',String(selectedValue))

    
    console.log({name,price,selectedValue});
    
    const requestBody = JSON.stringify({
      name, price, categories:selectedValue
    })
    
    const response = api.post('products',{name,price,selectedValue})
      .then(()=>{
        navigation.navigate('List')
        alert('Produto cadastrado')
      })
          .catch((error)=>{
          console.log(error,'!!!!!!!!!!!!!')
          return alert('Houve um erro no cadastramento!')
    
        })

    
  
  }

  function handleNavigateToList(){
    navigation.navigate('List')
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
                <Text style={styles.title}>Cadastre um produto</Text>
                <Text style={styles.description}>Cadastre o primeiro produto para iniciarmos</Text>
              </View>
         </View>


            <View style={styles.footer}>
                    <TextInput 
                      style={styles.input}
                      placeholder= "Digite o nome / descrição"
                      value={name}
                      maxLength={150}
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={text => setName(text)}   
                    />
                            <TextInput 
                      style={styles.input}
                      placeholder= "Digite o preço"
                      value={price}
                      maxLength={8}
                      autoCapitalize="characters"
                      autoCorrect={false}
                      keyboardType="numbers-and-punctuation"
                      onChangeText={text => setPrice(text)}   
                    />
                    <Text style={styles.label}>
                      Selecione uma categoria:
                    </Text>
                   
                   <Picker 
                   style={styles.onePicker} itemStyle={styles.onePickerItem}
                      selectedValue={selectedValue}
                      onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item  label="Telecom" value="telecom" />
                        <Picker.Item label="Cama, Mesa E Banho" value="cama" />
                        <Picker.Item label="Eletroeletronicos" value="eletro" />
                        <Picker.Item label="Cozinha" value="cozinha" />
                        <Picker.Item label="Manutenção" value="manutencao" />
                        <Picker.Item label="Alimentação" value="alimentos" />
                  </Picker>

                    <RectButton 
                style={styles.button}
                  onPress ={handleCreateProduct}
                >
                    <View style={styles.buttonIcon}>
                      <Text>
                          <Icon name="arrow-up" color="#FFF" size={24}/>
                      </Text>
                    </View>
                    <Text style={styles.buttonText}>
                        Cadastrar
                    </Text>
                </RectButton>

                <RectButton 
                style={styles.buttonList }
                onPress={handleNavigateToList}
                >
                    <View style={styles.buttonIcon}>
                      <Text>
                          <Icon name="search" color="#FFF" size={24}/>
                      </Text>
                    </View>
                    <Text style={styles.buttonText }>
                        Visualizar cadastrados
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
      marginTop: 32,
    },
  
    description: {
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 16,
      fontFamily: 'Roboto_400Regular',
      maxWidth: 260,
      lineHeight: 24,
    },
    label:{
      color: '#6C6C80',
      fontSize: 16,
      marginTop: 8,
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
    onePicker: {
      width: '100%',
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      borderWidth: 0,
    },
    onePickerItem: {
      height: '100%',
      fontSize:16,
      textAlign:'left',
      marginLeft:24,
      color: '#8f8e8e'
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
    buttonList: {
      backgroundColor: '#727ae2',
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

export default Create;
