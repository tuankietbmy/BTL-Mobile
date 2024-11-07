import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

export default function Listproduct({route , navigation }) {
  const { itemText } = route.params;
  const getImageSource = () => {
    switch (itemText) {
      case 'Electronic':
        return require('../assets/elec.jpg');
      case 'Fruit': 
        return require('../assets/fruit.jpg');
      case 'Fashion':
        return require('../assets/fashion.jpg');
      case 'Beauty':
        return require('../assets/beauty.jpg'); 
      
      default:
        return require('../assets/elec.jpg'); // ảnh mặc định
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', margin: 10, justifyContent: 'space-between', marginBottom: 20 ,marginTop:20}}>
        <View style={{display:'flex',flexDirection:'row'}}>
          <TouchableOpacity style={{justifyContent:'center'}} onPress={() => navigation.goBack()}>
          <Text style={{fontSize:20, justifyContent:'center',marginBottom:'auto',fontWeight:'bold'}}>◀</Text>
          </TouchableOpacity>
          <Text style={{ marginLeft: '10%', fontSize: 20, fontWeight: 'bold' }}>{itemText}</Text>   
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image style={{ width: 30, height: 30, marginRight: 10 }} source={require('../assets/giohang.svg')} />
          <Image style={{ width: 30, height: 30 }} source={require('../assets/avatar.svg')} />
        </View>
      </View>
      <View style={{display:'flex',flexDirection:'row',marginBottom:10}}>
        <View  style={{marginLeft:'5%',backgroundColor:'#DDDDDD' ,height:30,display:'flex',flexDirection:'row' ,width:'70%'}}>
          <Image style={{marginLeft:10, marginRight:10,width:20,height:20 ,alignSelf:'center'}}  source={require('../assets/search.svg')}/>
          <TextInput  placeholder="Search for product"></TextInput>
        </View>
        <View  style={{marginLeft:'10%' ,backgroundColor:'#DDDDDD' ,height:30,display:'flex',flexDirection:'row' ,width:'10%',marginRight:'10%'}}>
          <TouchableOpacity>
            <Image style={{width:30,height:30}}  source={require('../assets/list.svg')}/>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <Image style={{ width: '90%', height: 100, alignSelf:'center' }} source={getImageSource()} />
      </ScrollView>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',margin:20}}>
  
        <TouchableOpacity style={{alignItems:'center'}}>
          <Image style={{width:30,height:30}}  source={require('../assets/home.svg')}/>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}}>
          <Image style={{width:30,height:30}}  source={require('../assets/search.svg')}/>
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}}>
          <Image style={{width:30,height:30}}  source={require('../assets/heart.svg')}/>
          <Text>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}}>
          <Image style={{width:30,height:30}}  source={require('../assets/chat.svg')}/>
          <Text>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}}>
          <Image style={{width:30,height:30}}  source={require('../assets/account.svg')}/>
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

