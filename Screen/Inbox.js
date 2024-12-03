import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function Inbox({ route, navigation }) {
  const { username } = route.params || {}; // Lấy username từ route.params
  const navigateToListElec = () => {
    navigation.navigate('Listproduct', { itemText: 'Electronic' });
  };
  const navigateToListFa = () => {
    navigation.navigate('Listproduct', { itemText: 'Fashion' });
  };
  const navigateToListBea = () => {
    navigation.navigate('Listproduct', { itemText: 'Beauty' });
  };
  const navigateToListFrui = () => {
    navigation.navigate('Listproduct', { itemText: 'Fruit' });
  };
  const navigateToSearch = () => {
    navigation.navigate('Search');
  };
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
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Biểu tượng tin nhắn to */}
        <MaterialIcons name="message" size={100} color="#1EC1DB" style={styles.messageIcon} />

        {/* Dòng chữ thông báo */}
        <Text style={styles.infoText}>Bạn chưa bắt đầu cuộc trò chuyện nào</Text>
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
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',  // Canh giữa tất cả các phần tử trong ScrollView
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  messageIcon: {
    marginBottom: 20, // Khoảng cách giữa biểu tượng và chữ
  },
  infoText: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
  },
});

