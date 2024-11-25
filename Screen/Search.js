import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  CheckBox,
  Animated,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useState } from 'react';

export default function Search({ navigation }) {
  const navigateToSearch = () => {
    navigation.navigate('Search');
  };
  const [rating, setRating] = useState(0);
  const [priceRange, setPriceRange] = useState([10, 1000]); // Giá trị min và max

  const handlePriceChange = (values) => {
    setPriceRange(values); // Cập nhật price range
  };

  const [options, setOptions] = useState([
    { id: 1, label: 'Instant (2 hours delivery)', checked: false },
    { id: 2, label: 'Express (2 days delivery)', checked: false },
    { id: 3, label: 'Standard (7-10 days delivery)', checked: false },
  ]);

  const toggleCheckbox = (id) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...option, checked: !option.checked } : option
      )
    );
  };

  const handleRatingPress = (star) => {
    setRating(star);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          margin: 10,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{ justifyContent: 'center' }}
          onPress={() => navigation.goBack()}>
          <Text
            style={{
              fontSize: 20,
              justifyContent: 'center',
              marginBottom: 'auto',
              fontWeight: 'bold',
            }}>
            ◀
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Filter</Text>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image
            style={{ width: 30, height: 30, marginRight: 10 }}
            source={require('../assets/giohang.jpg')}
          />
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../assets/avatar.png')}
          />
        </View>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* Shipping options */}
        <View>
          <Text style={styles.sectionTitle}>Shipping options</Text>
          <View>
            {options.map((option) => (
              <View
                key={option.id}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  margin: 8,
                }}>
                <CheckBox
                  style={{ height: 20, width: 20, marginRight: 10 }}
                  value={option.checked}
                  onValueChange={() => toggleCheckbox(option.id)}
                />
                <Text style={{ fontSize: 18, color: 'gray' }}>
                  {option.label}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Price range */}
        <View>
          <Text style={styles.sectionTitle}>Price range</Text>
          <View style={{ padding: 20, alignSelf: 'center' }}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.priceText}>${priceRange[0]}</Text>
              <Text style={styles.priceText}>${priceRange[1]}</Text>
            </View>
            <MultiSlider
              values={[priceRange[0], priceRange[1]]}
              sliderLength={280}
              min={0}
              max={2000}
              step={10}
              onValuesChange={handlePriceChange}
              selectedStyle={{ backgroundColor: 'cyan' }}
              unselectedStyle={{ backgroundColor: '#d3d3d3' }}
              containerStyle={{ height: 40 }}
              trackStyle={{ height: 10 }}
              markerStyle={{
                height: 20,
                width: 20,
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: 'cyan',
              }}
            />
          </View>
        </View>

        {/* Average review */}
        <View>
          <Text style={styles.sectionTitle}>Average review</Text>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 10,
              justifyContent: 'center',
              alignItems: 'center',
              height: 120,
            }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => handleRatingPress(star)}>
                <Icon
                  name={star <= rating ? 'star' : 'star-o'}
                  size={30}
                  color={star <= rating ? '#FFD700' : '#8c8c8c'}
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Others */}
        <View>
          <Text style={styles.sectionTitle}>Others</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}>
            <TouchableOpacity style={styles.otherOption}>
              <Image
                style={{ height: 30, width: 40 }}
                source={require('../assets/arrows.png')}
              />
              <Text style={styles.otherOptionText}>30-day Free Return</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.otherOption}>
              <Image
                style={{ height: 35, width: 37 }}
                source={require('../assets/protec.png')}
              />
              <Text style={styles.otherOptionText}>Buyer Protection</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.otherOption}>
              <Image
                style={{ height: 30, width: 40 }}
                source={require('../assets/deal.png')}
              />
              <Text style={styles.otherOptionText}>Best Deal</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.otherOption}
              onPress={() => navigation.navigate('Screen2')}>
              <Image
                style={{ height: 31, width: 29 }}
                source={require('../assets/location.png')}
              />
              <Text style={styles.otherOptionText}>Ship to Store</Text>
            </TouchableOpacity>
          </View>
        </View>
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
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
  },
  priceText: {
    borderWidth: 1,
    height: 30,
    width: 70,
    fontSize: 20,
    textAlign: 'center',
  },
  otherOption: {
    height: '48%',
    width: '48%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#8c8c8c',
    alignItems: 'center',
  },
  otherOptionText: {
    fontSize: 13,
    color: '#333',
    textAlign: 'center',
    marginTop: 8,
  },
});
