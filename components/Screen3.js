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
export default function Screen3({navigation}) {
  const [rating, setRating] = useState(0);

  const handleRatingPress = (star) => {
    setRating(star);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.6,

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{ height: 80, width: 80 }}
          source={require('../assets/Accept.png')}
        />
        <Text
          style={{
            fontSize: 26,
            color: '#1EC1DB',
            fontWeight: 'bold',
            marginTop: 10,
          }}>
          Order placed successfully!
        </Text>
      </View>

      {/*---------Nút của Detail ---------- */}
      <View
        style={{
          flex: 1,

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 310,
            width: 340,
            backgroundColor: '#EDF3F3',
            padding: 5,
          }}>
          {/*---------View của subtotal ---------- */}
          <View
            style={{
              flex: 0.2,

              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 5,
            }}>
            <Text style={{ fontSize: 17, color: 'gray' }}>Subtotal</Text>
            <Text style={{ fontSize: 22 }}>$230</Text>
          </View>
          {/*---------View của tax ---------- */}
          <View
            style={{
              flex: 0.2,

              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 8,
            }}>
            <Text style={{ fontSize: 17, color: 'gray' }}>Tax (10%)</Text>
            <Text style={{ fontSize: 22 }}>$230</Text>
          </View>
          {/*---------View của fee ---------- */}
          <View
            style={{
              flex: 0.2,

              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 8,
            }}>
            <Text style={{ fontSize: 17, color: 'gray' }}>Fees</Text>
            <Text style={{ fontSize: 22 }}>$0</Text>
          </View>
          {/*---------View của Card ---------- */}
          <View
            style={{
              borderBottomColor: '#8c8c8c',
              borderBottomWidth: 1,
              width: 318,
              left: 10,
              opacity: 0.2,
            }}></View>
          <View
            style={{
              flex: 0.2,
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 8,
            }}>
            <Text style={{ fontSize: 17, color: 'gray' }}>Card</Text>
            <View style={{flexDirection:'row'}}>
              <Image style={{height:35,width:35}} source={require('../assets/visa.png')}/>
              <Text style={{ fontSize: 22,marginLeft:5 }}>*****234</Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: '#8c8c8c',
              borderBottomWidth: 1,
              width: 318,
              left: 10,
              opacity: 0.2,
            }}></View>
          {/*---------View của Total ---------- */}
          <View
            style={{
              flex: 0.2,
              margin: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{ fontSize: 17, color: 'gray' }}>Total</Text>
            <Text style={{ fontSize: 22 }}>$3,080</Text>
          </View>
        </View>
      </View>

      {/*---------Nút của Experience ---------- */}
      <View
        style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 17 }}>How was your experience?</Text>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
          }}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity
              key={star}
              onPress={() => handleRatingPress(star)}>
              <Icon
                name={star <= rating ? 'star' : 'star-o'}
                size={25}
                color={star <= rating ? '#FFD700' : '#8c8c8c'} // Màu vàng cho sao đã chọn
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/*---------Nút của Back to Home ---------- */}
      <View style={{ flex: 0.25, alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1EC1DB',
            width: 360,
            borderRadius: 10,
          }}
          onPress ={()=>navigation.goBack()}
          >
          <Image
            style={{ height: 35, width: 35, margin: 10, color: 'white' }}
            source={require('../assets/Home.png')}
          />
          <Text style={{ fontSize: 28, color: 'white' }}>Back to Home</Text>
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
});
