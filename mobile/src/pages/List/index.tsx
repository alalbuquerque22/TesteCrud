import React,{useEffect, useRef, useState, version} from 'react';
import {Feather as Icon} from '@expo/vector-icons'
import {View,ImageBackground, Image,StyleSheet, Text,TextInput,Platform,KeyboardAvoidingView, Modal} from 'react-native';
import {RectButton, ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import api from '../../services/api';
import { Modalize } from 'react-native-modalize';

interface Product{
  id:number;
  name:string;
  price:number;
  categories:string;
}

const List = () => {

  const modalizeRef = useRef<Modalize>(null)
  const [products,setProducts] = useState<Product[]>([])
  const navigation = useNavigation();
  const [productID,setProductId] = useState<Product[]>([])
 
  function handleNavigateToPoints(){
      navigation.navigate('Create');
  }
  const handleDelete = (propsID:any)=>{
  //  api.delete(`products:${props}`).then((response)=>{setProducts(response.data)})
     console.log('deleta o ID: ',propsID);
     alert('Você deletou o produto!')
    
  }
  const handleAlterModal = (props:any) =>{
  //chama modal 
  modalizeRef.current?.open();

  // monta produto por id 
 
  setProductId(props)

  console.log('objeto montado por id vindo do map: ',productID);

  }
  const handleAlter = () =>{
   
    
    
   // console.log('objeto completo ', props)
 
    //  api.put('products:id').then(()=>{})
    }
  useEffect(()=>{
    api.get('products').then(response =>{
      setProducts(response.data)

    console.log('coleta de dados!=> \n' ,response.data);
    })

    
  },[])

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
                <Image source={require('../../assets/logo.png')} style={{width:190,height:88}}/>
                  <View>
                    <Text style={styles.title}>Lista de Produtos</Text>
                    <Text style={styles.description}>Cadastre, pesquise e altere o estoque de produtos. </Text>
                  </View>
            </View>
          <ScrollView style={styles.scrollView}>
          
          
          
           
         
             <View style={styles.card}>

             {products.map(product =>(
             <View     key={String(product.id)}   style = {styles.board}         >
               <Text style={styles.labels}>nome: {product.name}</Text>
               <Text style={styles.labels}>preco: {product.price}</Text>
               <Text style={styles.labels}>categoria: {product.categories}</Text>
               <View style={styles.managementButton}>
                   <RectButton 
                     style={styles.buttonAlter}
                     onPress={()=>handleAlterModal(product)}
                     >
                         <View style={styles.buttonIcon}>
                           <Text>
                               <Icon name="arrow-right" color="#FFF" size={24}/>
                           </Text>
                         </View>
                         <Text style={styles.buttonText}>
                             Alterar
                         </Text>
                     </RectButton>
                     <RectButton 
                      style={styles.buttonDelete}
                      onPress={()=>handleDelete(product.id)}
                     >
                         <View style={styles.buttonIcon}>
                           <Text>
                               <Icon name="trash" color="#FFF" size={24}/>
                           </Text>
                         </View>
                         <Text style={styles.buttonText}>
                             Deletar
                         </Text>
                     </RectButton>

                        
                   
                   </View>
                       
             </View>
              

            ))}
            
          </View>



       
          </ScrollView>
        

          <Modalize ref={modalizeRef}
                    snapPoint={360}>
                        <View 
                        style={{
                          marginTop:50,
                          flex:1,
                          alignContent:'center',
                          justifyContent:'center',
                          alignItems:'center'
                        }}
                        >
                          <TextInput 
                            style={[styles.input,{backgroundColor:'#eeeeee',color:'#6C6C80',width:'80%'}]}
                            placeholder="Nome do produto: "                     
                            autoCapitalize="characters"
                            autoCorrect={false}
                          />
                            <TextInput 
                            style={[styles.input,{backgroundColor:'#eeeeee',color:'#6C6C80',width:'80%'}]}
                            placeholder= "Preço: "                      
                            autoCapitalize="characters"
                            autoCorrect={false}
                          />
                            <TextInput 
                            style={[styles.input,{backgroundColor:'#eeeeee',color:'#6C6C80',width:'80%'}]}
                            placeholder= "Categoria: "                      
                            autoCapitalize="characters"
                            autoCorrect={false}
                          />
                      
                          <RectButton 
                          style={[styles.buttonAlter, {backgroundColor:'#34CB79',marginTop:20}]}
                          onPress={handleAlter}
                          >
                              <View style={styles.buttonIcon}>
                                <Text>
                                    <Icon name="arrow-up" color="#FFF" size={24}/>
                                </Text>
                              </View>
                              <Text style={styles.buttonText}>
                                  Salvar Alterações
                              </Text>
                          </RectButton>
                  </View>
                </Modalize>
      </ImageBackground>

  </KeyboardAvoidingView>

      
)
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 32,
    },
  
    main: {
      flex: 1,
      justifyContent: 'center',
    },
    scrollView:{
      flex:2,
      
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
    board:{
      backgroundColor:'#fff',
      height:160,
      width:"100%",
      borderRadius:8,
      marginVertical:10
    },
    labels:{
      color:'#6C6C80',
      fontSize:16,
      marginTop:12,
      paddingHorizontal:8,
      fontFamily:'Roboto_400Regular'
    },
    card: {},
  
    select: {},
  
    input: {
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 10,
      marginBottom: 8,
      paddingHorizontal: 24,
      fontSize: 16,
    },
    managementButton:{
      flexDirection:'row',
      alignItems:'flex-end',
      justifyContent:'space-evenly'
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
    buttonAlter: {
      backgroundColor: '#ebdb00',
      height: 40,
      width:"46%",
      flexDirection: 'row',
      borderRadius: 10,
      overflow: 'hidden',
      alignItems: 'center',
      marginTop: 8,
    },
    buttonDelete: {
      backgroundColor: '#eb0000',
      height: 40,
      width:"46%",
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
export default List;  