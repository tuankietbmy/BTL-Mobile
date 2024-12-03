import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Search({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerText}>◀</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Filter</Text>
        <Ionicons name="cart-outline" size={30} color="black" />
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Shipping options */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shipping options</Text>
          <View style={styles.option}>
            <Text style={styles.optionText}>Instant (2 hours delivery)</Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.optionText}>Express (2 days delivery)</Text>
          </View>
          <View style={styles.option}>
            <Text style={styles.optionText}>Standard (7-10 days delivery)</Text>
          </View>
        </View>

        {/* Price range */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Price range</Text>
          <Text style={styles.range}>$10 - $1000</Text>
        </View>

        {/* Average review */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Average review</Text>
          <View style={styles.rating}>
            <Ionicons name="star" size={30} color="#FFD700" />
            <Ionicons name="star" size={30} color="#FFD700" />
            <Ionicons name="star" size={30} color="#FFD700" />
            <Ionicons name="star" size={30} color="#FFD700" />
            <Ionicons name="star-outline" size={30} color="#FFD700" />
          </View>
        </View>

        {/* Others */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Others</Text>
          <View style={styles.otherOptions}>
            <View style={styles.optionItem}>
              <Image style={styles.icon} source={require('../assets/arrows.png')} />
              <Text style={styles.optionText}>30-day Free Return</Text>
            </View>
            <View style={styles.optionItem}>
              <Image style={styles.icon} source={require('../assets/protec.png')} />
              <Text style={styles.optionText}>Buyer Protection</Text>
            </View>
            <View style={styles.optionItem}>
              <Image style={styles.icon} source={require('../assets/deal.png')} />
              <Text style={styles.optionText}>Best Deal</Text>
            </View>
            <View style={styles.optionItem}>
              <Image style={styles.icon} source={require('../assets/location.png')} />
              <Text style={styles.optionText}>Ship to Store</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={30} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Search')}>
          <Ionicons name="search" size={30} color="black" />
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Favorites')}>
          <Ionicons name="heart-outline" size={30} color="black" />
          <Text>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Inbox')}>
          <Ionicons name="chatbubble-outline" size={30} color="black" />
          <Text>Inbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Account', { username })}>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  section: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  option: {
    marginLeft: 10,
    marginVertical: 5,
  },
  optionText: {
    fontSize: 16,
    color: 'gray',
  },
  range: {
    fontSize: 16,
    color: 'gray',
    paddingLeft: 10,
  },
  rating: {
    flexDirection: 'row',
    marginLeft: 10,
    marginVertical: 10,
  },
  otherOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  optionItem: {
    width: '48%', // 2 items per row
    marginVertical: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  footerButton: {
    alignItems: 'center',
  },
});
