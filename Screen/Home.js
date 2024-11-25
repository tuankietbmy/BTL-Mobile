import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

export default function Home({ route, navigation }) {
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
          <Image style={{ width: 30, height: 30, marginRight: 10 }} source={require('../assets/giohang.jpg')} />
          <Image style={{ width: 30, height: 30 }} source={require('../assets/avatar.png')} />
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
        <View style={{display:'flex',flexDirection:'row',margin:20,justifyContent:'space-around'}}>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={{alignItems:'center'}} onPress={navigateToListElec}>
              <View style={{alignItems:'center',backgroundColor:'#33CCFF',borderRadius:'50%',padding:5}}>
                <Image style={{width:70,height:70}}  source={require('../assets/electronic.png')}/>
              </View>
              <Text>Electronic</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={{alignItems:'center'}} onPress={navigateToListFa}>
              <View style={{alignItems:'center',backgroundColor:'#FF6600',borderRadius:'50%',padding:5}}>
                <Image style={{width:70,height:70}}  source={require('../assets/giay.png')}/>
              </View>
              <Text>Fashion</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={{alignItems:'center'}} onPress={navigateToListBea}>
              <View style={{alignItems:'center',backgroundColor:'#FF66FF',borderRadius:'50%',padding:5}}>
                <Image style={{width:70,height:70}}  source={require('../assets/makeup.png')}/>
              </View>
              <Text>Beauty</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity style={{alignItems:'center'}} onPress={navigateToListBea}>
              <View style={{alignItems:'center',backgroundColor:'green',borderRadius:'50%',padding:5}}>
                <Image style={{width:70,height:70}}  source={require('../assets/fruit.png')}/>
              </View>
              <Text>Fruit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{width:'90%',backgroundColor:'#DDDDDD',margin:'5%',padding:20,display:'flex',flexDirection:'row'}}> 
          <View>
            <Text style={{color:'#00CCFF',fontSize:30,fontWeight:'bold'}}>Shose</Text>
            <Text style={{color:'silver',fontSize:20}}>50% off</Text>
            <TouchableOpacity style={{width:100,backgroundColor:'black',padding:10}}>
              <Text style={{color:'white',margin:'auto'}}>Buy Now</Text>
            </TouchableOpacity>
          </View>
          <Image style={{width:100,height:100,margin:'auto'}}  source={require('../assets/shose.png')}/>
        </View>
        <View style={{margin:'5%',width:'90%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <Image style={{width:'48%',maxHeight:110}}  source={require('../assets/anh1.jpg')}/>
          <Image style={{width:'48%',maxHeight:110}}  source={require('../assets/anh2.jpg')}/>
        </View>
        <View style={{marginLeft:'5%',marginRight:'5%',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontWeight:'bold',fontSize:20}}>Recommended for you</Text>
          <Text style={{fontSize:15,color:'silver'}}>View all</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{margin:'5%'}}>
          <View style={{marginTop:10,marginRight:10,marginBottom:10,padding:10,backgroundColor:'#DDDDDD'}}>
            <Image style={{width:100,height:100}}  source={require('../assets/shoes1.svg')}/>
            <Text style={{fontWeight:'bold'}}>Shoes</Text>
            <View style={{display:'flex',flexDirection:'row'}}>
              <Image style={{width:20,height:20}}  source={require('../assets/star.svg')}/>
              <Text>4.5</Text>
              <Text style={{marginLeft:'auto',color:'blue',fontWeight:'bold'}}>$ 299</Text>
            </View>
          </View>
          <View style={{margin:10,padding:10,backgroundColor:'#DDDDDD'}}>
            <Image style={{width:100,height:100}}  source={require('../assets/tablet.svg')}/>
            <Text style={{fontWeight:'bold'}}>Tablet</Text>
            <View style={{display:'flex',flexDirection:'row'}}>
              <Image style={{width:20,height:20}}  source={require('../assets/star.svg')}/>
              <Text>4.6</Text>
              <Text style={{marginLeft:'auto',color:'blue',fontWeight:'bold'}}>$ 600</Text>
            </View>
          </View>
          <View style={{margin:10,padding:10,backgroundColor:'#DDDDDD'}}>
            <Image style={{width:100,height:100}}  source={require('../assets/pear.svg')}/>
            <Text style={{fontWeight:'bold'}}>Pear</Text>
            <View style={{display:'flex',flexDirection:'row'}}>
              <Image style={{width:20,height:20}}  source={require('../assets/star.svg')}/>
              <Text>4.5</Text>
              <Text style={{marginLeft:'auto',color:'blue',fontWeight:'bold'}}>$ 79</Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',margin:20}}>
  
        <TouchableOpacity style={{alignItems:'center'}}>
          <Image style={{width:30,height:30}}  source={require('../assets/home.svg')}/>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center'}} onPress={navigateToSearch}>
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

