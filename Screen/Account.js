import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // For message icon
import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
export default function Account({ route, navigation }) {
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
   const handleLogout = () => {
    // Chuyển hướng tới trang LoginScreen
    navigation.navigate('Login');
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
        {/* Avatar lớn ở trung tâm */}
        <View style={styles.avatarContainer}>
          <FontAwesome name="user-circle" size={120} color="#1EC1DB" />
        </View>

        {/* Tên tài khoản */}
        <Text style={styles.username}>{username}</Text>

        {/* Nút đăng xuất */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Đăng xuất</Text>
        </TouchableOpacity>
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
        
        <TouchableOpacity style={{alignItems:'center'}} onPress={() => navigation.navigate('Account')}>
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
    backgroundColor: 'white',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#1EC1DB',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
