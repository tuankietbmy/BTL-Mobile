import { TouchableOpacity, View,FlatList, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
export default function Listproduct({route , navigation }) {

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => { 
    // Fetch data from the API
    fetch('https://653f4fde9e8bd3be29e03c12.mockapi.io/btl')
      .then(response => response.json())
      .then(data => {
        setTasks(data);
      })
  }, []);
 

const renderItem = ({ item }) => (
    <View >
      <ScrollView style={{marginLeft:'5%',marginBottom:10,marginRight:'5%'}}>
        <TouchableOpacity>
          <View style={{ display: 'flex', flexDirection: 'row', borderWidth:1,borderColor:'silver',padding:'2%' }}>
          
            <Image style={{width:50,height:50,marginRight:10}} source={{uri: item.image}}/>
            <View style={{justifyContent:'center'}}>
              <Text style={{ fontWeight: 'bold' ,marginBottom:10}}>{item.name}</Text>
              <View style={{display:'flex',flexDirection:'row'}}>
                <Image style={{width:10,height:10}} source={require('../assets/star.svg')}/>
                <Image style={{width:10,height:10}} source={require('../assets/star.svg')}/>
                <Image style={{width:10,height:10}} source={require('../assets/star.svg')}/>
                <Image style={{width:10,height:10}} source={require('../assets/star.svg')}/>
                <Image style={{width:10,height:10}} source={require('../assets/star.svg')}/>
              </View>
            </View>
            <View style={{marginLeft:'auto',justifyContent:'center'}}>
              <Image style={{width:30,height:30,alignSelf: 'flex-end',marginBottom:10}} source={require('../assets/add.svg')}/>
              <Text style={{color:'blue'}}>{item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
  const { itemText } = route.params;
  const filteredTasks = tasks.filter((item: any) => item.type === itemText);
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
        <Image style={{ width: '90%', height: 100, alignSelf:'center',marginBottom:10 }} source={getImageSource()} />
        <Text style={{marginLeft:'5%',fontWeight:'bold',marginBottom:10,color:'blue'}}>All Product</Text>
        <FlatList
          data={filteredTasks}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      />
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

