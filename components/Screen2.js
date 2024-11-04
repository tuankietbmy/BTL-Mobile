import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  CheckBox,
  Animated,
  TextInput
} from 'react-native';
import { ChevronLeftIcon,ArrowRightIcon } from '@radix-ui/react-icons';
import { useState, useRef } from 'react';
export default function Screen2({ navigation }) {


  return (
    <View style={styles.container}>
      <View
        style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{
            alignSelf: 'center',
            flex: 0.05,
            justifyContent: 'space-between',
          }}
          onPress = {()=>navigation.goBack()}
          >
          <ChevronLeftIcon style={{ height: 30, width: 30 }} />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            alignContent: 'center',
            flex: 0.85,
          }}>
          Checkout
        </Text>
      </View>
      <View style={{flex:1.5,borderWidth:1}}>
           
      </View>
      <View style={{flex:0.15,marginLeft:44}}>
           <Text style={{fontSize:22,fontWeight:'bold',margin:5,color:"#757272"}}>Voucher</Text>
      </View>
      <View style={{flex:0.2,flexDirection:'row',justifyContent:'center',marginBottom:10}}>
        <TextInput style={{borderWidth:1,width:310,borderRadius:10,fontSize:20,paddingLeft: 10,}} placeholder="Enter your code" placeholderTextColor="#CCC5C5" ></TextInput>
        <TouchableOpacity style={{justifyContent:'center',backgroundColor:"#CBCACA",marginLeft:5,borderRadius:10}}>
          <Text style={{fontSize:22,fontWeight:'bold',color:"#F1EDED",margin:5}}>Apply</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:0.3,flexDirection:'row',justifyContent:'space-between',marginLeft:44,marginRight:44}}>
        <Text style={{fontSize:28,fontWeight:'bold'}}>Total</Text>
        <Text style={{fontSize:28,fontWeight:'bold'}}>$ 2,808</Text>
      </View>
      <View style={{flex:0.6,alignItems:'center'}}><TouchableOpacity
          style={{
            backgroundColor: '#53F0F3',
            borderRadius: 10,
            width: 390,
            margin: 10,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress ={()=>navigation.navigate('Screen3')}
          >
          
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 30,
              paddingLeft: 5,
              margin: 5,
            }}>
            Next
          </Text>
          <ArrowRightIcon
            style={{ height: 28, width: 40, color:'white' }}
            
          />
        </TouchableOpacity></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
 
});
