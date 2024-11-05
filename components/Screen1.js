import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  CheckBox,
  Animated,
} from 'react-native';
import CloseIcon from '@rsuite/icons/Close';
import ArrowDownLineIcon from '@rsuite/icons/ArrowDownLine';
import ArrowUpLineIcon from '@rsuite/icons/ArrowUpLine';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState, useRef } from 'react';

import MultiSlider from '@ptomasroos/react-native-multi-slider';
export default function Screen1({navigation}) {
  const [isExpand, setIsExpand] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [isAvg, setIsAvg] = useState(false);
  const [isOther, setIsOther] = useState(false);
  // const animation = useRef(new Animated.Value(0)).current;
  const [rating, setRating] = useState(0);
  const [priceRange, setPriceRange] = useState([10, 1000]); // Khởi tạo giá trị min và max

  const handlePriceChange = (values) => {
    setPriceRange(values); // Cập nhật giá trị price range
  };


  const handlePressExpand = () => {
    setIsExpand((prev) => !prev);
    Animated.timing(animation, {
      toValue: isExpand ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handlePressPrice = () => {
    setIsPrice(!isPrice);
  };

  const handlePressAVG = () => {
    setIsAvg(!isAvg);
  };

  const handlePressOthers = () => {
    setIsOther(!isOther);
  };

  // const animatedHeight = animation.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, 150], // chiều cao khi thu gọn và mở rộng
  // });

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
      <View
        style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'center',alignItems:'center' }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Filter</Text>
        <TouchableOpacity style={{ left: 120 }}>
          <CloseIcon style={{ height: 40, width: 18 }} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          borderBottomColor: '#8c8c8c',
          borderBottomWidth: 1,
          opacity: 0.2,
        }}></View>
      <View style={{ flex: 0.8 }}>
        {' '}
        {/*---------View của shipping option ---------- */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
          onPress={handlePressExpand}>
          {' '}
          {/*---------Nút của shipping option ---------- */}
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Shipping options
          </Text>
          {isExpand ? (
            <ArrowUpLineIcon style={{ height: 28, width: 48, right: 3 }} />
          ) : (
            <ArrowDownLineIcon style={{ height: 28, width: 48, right: 3 }} />
          )}
        </TouchableOpacity>
        {isExpand && (
          <View>
            {options.map((option) => (
              <View
                key={option.id}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'stretch',
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
        )}
      </View>
      <View
        style={{
          borderBottomColor: '#8c8c8c',
          borderBottomWidth: 1,
          opacity: 0.2,
        }}></View>

      <View style={{ flex: 0.7 }}>
        {' '}
        {/*---------View của price ---------- */}
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
          onPress={handlePressPrice}>
          {' '}
          {/*---------Nút của  price ---------- */}
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Price range</Text>
          {isPrice ? (
            <ArrowUpLineIcon style={{ height: 28, width: 48, right: 3 }} />
          ) : (
            <ArrowDownLineIcon style={{ height: 28, width: 48, right: 3 }} />
          )}
        </TouchableOpacity>

        {isPrice && (
          <View style={{ padding: 20,alignSelf:'center'}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{borderWidth:1,height:30,width:70,fontSize:20}}>${priceRange[0]}</Text>
              <Text style={{borderWidth:1,height:30,width:70,fontSize:20}}>${priceRange[1]}</Text>
            </View>

            <MultiSlider
              
              values={[priceRange[0], priceRange[1]]}
              sliderLength={280}
              min={0}
              max={2000}
              step={10}
              onValuesChange={handlePriceChange}
              selectedStyle={{
                backgroundColor: 'cyan',
              }}
              unselectedStyle={{
                backgroundColor: '#d3d3d3',
              }}
              containerStyle={{
                height: 40,
              }}
              trackStyle={{
                height: 10,
                
              }}
              markerStyle={{
                height: 20,
                width: 20,
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: 'cyan',
              }}
            />
          </View>
        )}
      </View>
      <View
        style={{
          borderBottomColor: '#8c8c8c',
          borderBottomWidth: 1,
          opacity: 0.2,
        }}></View>
      <View style={{ flex: 0.7 }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
          onPress={handlePressAVG}>
          {' '}
          {/*---------Nút của  Average review ---------- */}
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Average review
          </Text>
          {isAvg ? (
            <ArrowUpLineIcon style={{ height: 28, width: 48, right: 3 }} />
          ) : (
            <ArrowDownLineIcon style={{ height: 28, width: 48, right: 3 }} />
          )}
        </TouchableOpacity>
        {isAvg && (
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
                  color={star <= rating ? '#FFD700' : '#8c8c8c'} // Màu vàng cho sao đã chọn
                  style={{ marginRight: 10 }}
                />
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <View
        style={{
          borderBottomColor: '#8c8c8c',
          borderBottomWidth: 1,
          opacity: 0.2,
        }}></View>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
          onPress={handlePressOthers}>
          {' '}
          {/*---------Nút của Others ---------- */}
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Others</Text>
          {isOther ? (
            <ArrowUpLineIcon style={{ height: 28, width: 48, right: 3 }} />
          ) : (
            <ArrowDownLineIcon style={{ height: 28, width: 48, right: 3 }} />
          )}
        </TouchableOpacity>

        {isOther && (
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}>
                {/*---------Nút của Return ---------- */}
            <TouchableOpacity
              style={{
                height:'48%',
                width: '48%',
                padding: 10,
                marginVertical: 5,
               
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#8c8c8c',
                alignItems: 'center',
              }}>
              <Image style={{height:30,width:40}}  source={require('../assets/arrows.png')}/>
              <Text
                style={{ fontSize: 13, color: '#333', textAlign: 'center',marginTop:8 }}>
                30-day Free Return
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={{
                width: '48%',
                padding: 10,
                marginVertical: 5,
  
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#8c8c8c',
                alignItems: 'center',
              }}>
              <Image style={{height:35,width:37}}  source={require('../assets/protec.png')}/>
              <Text
                style={{ fontSize: 13, color: '#333', textAlign: 'center' ,marginTop:7 }}>
                Buyer Protection
              </Text>
            </TouchableOpacity>

        
            <TouchableOpacity
              style={{
                height:'40%',
                width: '48%',
                padding: 10,
                marginVertical: 5,
              
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#8c8c8c',
                alignItems: 'center',
              }}>
              <Image style={{height:30,width:40}}  source={require('../assets/deal.png')}/>
              <Text
                style={{ fontSize: 13, color: '#333', textAlign: 'center' ,marginTop:3}}>
                Best Deal
              </Text>
            </TouchableOpacity>
             
            <TouchableOpacity
              style={{
                height:'40%',
                width: '48%',
                padding: 10,
                marginVertical: 5,
          
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#8c8c8c',
                alignItems: 'center',
              }}
              onPress ={()=>navigation.navigate('Screen2')}
              
              >
              <Image style={{height:31,width:29}}  source={require('../assets/location.png')}/>
              <Text
                style={{ fontSize: 13, color: '#333', textAlign: 'center',marginTop:2 }}>
                Ship to Store
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    flex: 1,
  },
});
