import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  CheckBox,
  Animated,
} from 'react-native';
import { ChevronLeftIcon } from '@radix-ui/react-icons';
import { useState, useRef } from 'react';

export default function Screen2({ navigation }) {
  const [selectedPayment, setSelectedPayment] = useState('visa');

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
          Payment
        </Text>
      </View>
      <View style={{ flex: 0.3, margin: 10, justifyContent: 'center' }}>
        <Text
          style={{ textAlign: 'center', fontSize: 25, alignContent: 'center' }}>
          Total
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 28,
            fontWeight: 'bold',
            alignContent: 'center',
            margin: 5,
          }}>
          $3,080
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPayment === 'visa' && styles.selectedOption,
          ]}
          onPress={() => setSelectedPayment('visa')}>
          <Image
            style={{ height: 50, width: 50, marginLeft: 15 }}
            source={require('../assets/visa.png')}
          />
          <Text style={{ fontSize: 20, paddingLeft: 28 }}>*****23654</Text>
          <View
            style={
              selectedPayment === 'visa' ? styles.radioSelected : styles.radio
            }
          />
        </TouchableOpacity>
        {/* mastercard */}
        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPayment === 'mastercard' && styles.selectedOption,
          ]}
          onPress={() => setSelectedPayment('mastercard')}>
          <Image
            style={{ height: 65, width: 65, marginLeft: 10 }}
            source={require('../assets/card.png')}
          />
          <Text style={{ fontSize: 20, paddingLeft: 20 }}>*****33287</Text>
          <View
            style={
              selectedPayment === 'mastercard'
                ? styles.radioSelected
                : styles.radioMS
            }
          />
        </TouchableOpacity>

        {/* PayPal */}
        <TouchableOpacity
          style={[
            styles.paymentOption,
            selectedPayment === 'paypal' && styles.selectedOption,
          ]}
          onPress={() => setSelectedPayment('paypal')}>
          <Image
            style={{ height: 65, width: 65, marginLeft: 10 }}
            source={require('../assets/paypal.png')}
          />
          <Text style={{ fontSize: 20, paddingLeft: 20 }}>abe@gmail.com</Text>
          <View
            style={
              selectedPayment === 'paypal'
                ? styles.radioSelectedPP
                : styles.radioPP
            }
          />
        </TouchableOpacity>
      </View>
      <View
        style={{ flex: 0.6, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#53F0F3',
            borderRadius: 10,
            width: 380,
            margin: 10,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress ={()=>navigation.navigate('Screen3')}
          >
          <Image
            style={{ height: 25, width: 40 }}
            source={require('../assets/money.png')}
          />
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 30,
              paddingLeft: 5,
              margin: 5,
            }}>
            Pay now
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            borderRadius: 10,
            
            width: 380,
            justifyContent: 'center',
            borderWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#A19C9C',
            paddingRight:50,
            paddingLeft:10,
          }}
          
          >
          <Image
            style={{ height: 20, width: 20 }}
            source={require('../assets/plus.png')}
          />
          <Text
            style={{
              color: '#53F0F3',
              textAlign: 'center',
              fontSize: 28,
              paddingLeft: 5,
              margin: 5,
            }}>
            Add new card
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A19C9C',
    borderRadius: 10,
    margin: 26,
    marginVertical: 5,
    height: 80,
  },
  selectedOption: {
    borderColor: '#53F0F3',
  },
  radioSelected: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#53F0F3',
    marginLeft: 160,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#A19C9C',
    marginLeft: 160,
  },
  radioMS: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#A19C9C',
    marginLeft: 157,
  },
  radioPP: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#A19C9C',
    marginLeft: 110,
  },
  radioSelectedPP: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: '#53F0F3',
    marginLeft: 110,
  },
});
