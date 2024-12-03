import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import icon library

export default function ConfirmPay({ navigation ,route}) {
  const [selectedPayment, setSelectedPayment] = useState('visa');
  const { price } = route.params;
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment</Text>
      </View>

      {/* Total */}
      <View style={styles.total}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalAmount}> {price}</Text>
      </View>

      {/* Payment Options */}
      <View style={{ flex: 1 }}>
        {/* Visa */}
        <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'visa' && styles.selectedOption]}
        onPress={() => setSelectedPayment('visa')}>
        <Image style={styles.paymentIcon} source={require('../assets/visa.png')} />
        <Text style={styles.paymentText}>*****23654</Text>
        <Ionicons
          name={selectedPayment === 'visa' ? 'checkmark-circle' : 'ellipse-outline'}
          size={24}
          color={selectedPayment === 'visa' ? '#53F0F3' : '#A19C9C'}
          style={styles.paymentCheck}
        />
      </TouchableOpacity>

      {/* Mastercard Option */}
      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'mastercard' && styles.selectedOption]}
        onPress={() => setSelectedPayment('mastercard')}>
        <Image style={styles.paymentIcon} source={require('../assets/card.png')} />
        <Text style={styles.paymentText}>*****33287</Text>
        <Ionicons
          name={selectedPayment === 'mastercard' ? 'checkmark-circle' : 'ellipse-outline'}
          size={24}
          color={selectedPayment === 'mastercard' ? '#53F0F3' : '#A19C9C'}
          style={styles.paymentCheck}
        />
      </TouchableOpacity>

      {/* PayPal Option */}
      <TouchableOpacity
        style={[styles.paymentOption, selectedPayment === 'paypal' && styles.selectedOption]}
        onPress={() => setSelectedPayment('paypal')}>
        <Image style={styles.paymentIcon} source={require('../assets/paypal.png')} />
        <Text style={styles.paymentText}>abe@gmail.com</Text>
        <Ionicons
          name={selectedPayment === 'paypal' ? 'checkmark-circle' : 'ellipse-outline'}
          size={24}
          color={selectedPayment === 'paypal' ? '#53F0F3' : '#A19C9C'}
          style={styles.paymentCheck}
        />
      </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        {/* Pay Now */}
        <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('DonePay', { selectedPayment, price })}>
          <Ionicons name="cash-outline" size={25} color="white" style={styles.payIcon} />
          <Text style={styles.payText}>Pay now</Text>
        </TouchableOpacity>

        {/* Add New Card */}
        <TouchableOpacity style={styles.addCardButton}>
          <Ionicons name="add-circle-outline" size={25} color="#53F0F3" />
          <Text style={styles.addCardText}>Add new card</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  backButton: {
    flex: 0.1,
    justifyContent: 'center',
  },
  headerText: {
    flex: 0.9,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  total: {
    alignItems: 'center',
    marginVertical: 20,
  },
  totalLabel: {
    fontSize: 25,
  },
  totalAmount: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A19C9C',
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
  },
  selectedOption: {
    borderColor: '#53F0F3',
  },
  paymentIcon: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  paymentText: {
    flex: 1,
    fontSize: 20,
  },
  paymentCheck: {
    marginLeft: 10,
  },
  footer: {
    alignItems: 'center',
    padding: 20,
  },
  payButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#53F0F3',
    borderRadius: 10,
    padding: 15,
    width: '90%',
    marginVertical: 10,
  },
  payIcon: {
    marginRight: 10,
  },
  payText: {
    fontSize: 18,
    color: 'white',
  },
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A19C9C',
    borderRadius: 10,
    padding: 15,
    width: '90%',
  },
  addCardText: {
    fontSize: 18,
    color: '#53F0F3',
    marginLeft: 10,
  },
});
