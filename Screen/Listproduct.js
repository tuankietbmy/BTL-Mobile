import { TouchableOpacity, View,FlatList, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

const navigateToSearch = () => {
    navigation.navigate('Search');
  };
const renderItem = ({ item }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('ProductDetail', { product: item })}
  >
    <View style={{ marginLeft: '5%', marginBottom: 10, marginRight: '5%' }}>
      <View style={{ display: 'flex', flexDirection: 'row', borderWidth: 1, borderColor: 'silver', padding: '2%' }}>
        {/* Image */}
        <Image style={{ width: 50, height: 50, marginRight: 10 }} source={{ uri: item.image }} />

        {/* Product Info */}
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>{item.name}</Text>
          
          {/* Rating Stars */}
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            {[...Array(5)].map((_, index) => (
              <Ionicons
                key={index}
                name={index < item.rating ? 'star' : 'star-outline'}
                size={10}
                color="#FFD700"
              />
            ))}
          </View>
        </View>

        {/* Price and Add to Cart */}
        <View style={{ marginLeft: 'auto', justifyContent: 'center' }}>
          <TouchableOpacity>
            <Ionicons
              name="cart-outline"
              size={30}
              color="black"
              style={{ alignSelf: 'flex-end', marginBottom: 10 }}
            />
          </TouchableOpacity>
          <Text style={{ color: 'blue' }}>{item.price}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
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
          {/* Cart Icon */}
          <TouchableOpacity onPress={() => navigation.navigate('Cart', { cart })}>
            <Ionicons name="cart-outline" size={30} color="black" style={{ marginRight: 10 }} />
          </TouchableOpacity>
          
          {/* Avatar Icon */}
          <Ionicons name="person-circle-outline" size={30} color="black" />
        </View>
      </View>
      <View style={{display:'flex',flexDirection:'row',marginBottom:10}}>
        <View  style={{marginLeft:'5%',backgroundColor:'#DDDDDD' ,height:30,display:'flex',flexDirection:'row' ,width:'70%'}}>
          <Image style={{marginLeft:10, marginRight:10,width:30,height:30 ,alignSelf:'center'}}  source={require('../assets/search.png')}/>
          <TextInput style={{width:'100%',placeholderTextColor:"#8a8a8a"}} placeholder="Search for product"></TextInput>
        </View>
        <View  style={{marginLeft:'10%' ,height:30,display:'flex',flexDirection:'row' ,width:'10%',marginRight:'10%'}}>
          <TouchableOpacity>
            <Image style={{width:30,height:30}}  source={require('../assets/list.jpg')}/>
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
  
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={30} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{alignItems:'center'}} onPress={navigateToSearch}>
          <Ionicons name="search" size={30} color="black" />
          <Text>Search</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.navigate('Favorites')}>
          <Ionicons name="heart-outline" size={30} color="black" />
          <Text>Favorites</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.navigate('Inbox')}>
          <Ionicons name="chatbubble-outline" size={30} color="black" />
          <Text>Inbox</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.navigate('Account', { username })}>
          <Ionicons name="person-outline" size={30} color="black" />
          <Text>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

