import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For rating stars
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // For home and success icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'; // For visa card

export default function DonePay({ navigation, route }) {
  const { selectedPayment, price } = route.params;  // Destructure the passed parameters
  const validPrice = parseFloat(price); 

  const tax = validPrice * 0.1; // Tính thuế 10%
  const total = validPrice + tax; // Tính tổng (price + tax)
  const [rating, setRating] = useState(0);

  const handleRatingPress = (star) => {
    setRating(star);
  };

  return (
    <View style={styles.container}>
      {/* Success Message */}
      <View style={styles.successContainer}>
        <MaterialIcons name="check-circle" size={80} color="#1EC1DB" />
        <Text style={styles.successText}>Order placed successfully!</Text>
      </View>

      {/* Order Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Subtotal</Text>
          <Text style={styles.detailValue}> ${validPrice.toFixed(2)} </Text> 
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Tax (10%)</Text>
          <Text style={styles.detailValue}>${tax.toFixed(2)}</Text> 
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Fees</Text>
          <Text style={styles.detailValue}>$0</Text>
        </View>
        <View style={styles.separator} />
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Card</Text>
          <View style={styles.cardInfo}>
            <FontAwesome5 name="cc-visa" size={35} color="#1EC1DB" />
            <Text style={styles.cardText}>{selectedPayment}</Text>
          </View>
        </View>
        <View style={styles.separator} />
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Total</Text>
          <Text style={styles.detailValue}>${total.toFixed(2)}</Text>
        </View>
      </View>

      {/* Experience Rating */}
      <View style={styles.experienceContainer}>
        <Text style={styles.experienceText}>How was your experience?</Text>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => handleRatingPress(star)}>
              <Icon
                name={star <= rating ? 'star' : 'star-o'}
                size={30}
                color={star <= rating ? '#FFD700' : '#8c8c8c'}
                style={styles.starIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Back to Home Button */}
      <View style={styles.homeButtonContainer}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name="home" size={35} color="white" />
          <Text style={styles.homeButtonText}>Back to Home</Text>
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
  successContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    fontSize: 26,
    color: '#1EC1DB',
    fontWeight: 'bold',
    marginTop: 10,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF3F3',
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 8,
  },
  detailLabel: {
    fontSize: 17,
    color: 'gray',
  },
  detailValue: {
    fontSize: 22,
  },
  separator: {
    borderBottomColor: '#8c8c8c',
    borderBottomWidth: 1,
    opacity: 0.2,
    width: '100%',
    marginVertical: 8,
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 22,
    marginLeft: 5,
  },
  experienceContainer: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  experienceText: {
    fontSize: 17,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  starIcon: {
    marginRight: 10,
  },
  homeButtonContainer: {
    flex: 0.25,
    alignItems: 'center',
  },
  homeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1EC1DB',
    padding: 15,
    borderRadius: 10,
    width: '90%',
    justifyContent: 'center',
  },
  homeButtonText: {
    fontSize: 28,
    color: 'white',
    marginLeft: 10,
  },
});
