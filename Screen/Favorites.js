import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, TextInput, ScrollView ,FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState, useEffect } from 'react';
export default function Favorites({ route, navigation }) {
  const { username } = route.params || {}; // Lấy username từ route.params
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://653f4fde9e8bd3be29e03c12.mockapi.io/btl')
      .then(response => response.json())
      .then(data => {
        // Shuffle the data and pick 10 random items
        const randomItems = data.sort(() => 0.5 - Math.random()).slice(0, 5);
        setTasks(randomItems);
      });
  }, []);

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
  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row', margin: 10, justifyContent: 'space-between', marginBottom: 20 ,marginTop:20}}>
        <TouchableOpacity style={{justifyContent:'center'}} onPress={() => navigation.goBack()}>
          <Text style={{fontSize:20, justifyContent:'center',marginBottom:'auto',fontWeight:'bold'}}>◀</Text>
        </TouchableOpacity>
        
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Welcome {username}</Text>   
        
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          {/* Cart Icon */}
          <TouchableOpacity onPress={() => navigation.navigate('Cart', { cart })}>
            <Ionicons name="cart-outline" size={30} color="black" style={{ marginRight: 10 }} />
          </TouchableOpacity>
          
          {/* Avatar Icon */}
          <Ionicons name="person-circle-outline" size={30} color="black" />
        </View>
      </View>
      
      {/* ScrollView mới hiển thị danh sách yêu thích */}
      <ScrollView style={{ marginTop: 20 }}>
        <View style={{ padding: 10, marginTop: 10 }}>
          <FlatList
        data={tasks}  // Sử dụng tasks (10 sản phẩm ngẫu nhiên)
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
        </View>
      </ScrollView>

      {/* Bottom navigation bar */}
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',margin:20}}>
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={30} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.navigate('Search')}>
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
