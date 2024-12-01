import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Pay({ route, navigation }) {
  const { product } = route.params; // Retrieve the passed product data

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" style={{ fontSize: 30 }} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Checkout</Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* Display the product details */}
        <View style={styles.productDetailsContainer}>
  {/* Hình ảnh sản phẩm bên trái */}
  <Image source={{ uri: product.image }} style={styles.productImage} />

  {/* Thông tin sản phẩm ở giữa */}
  <View style={styles.productInfo}>
    <Text style={styles.productName}>{product.name}</Text>
    
    {/* Đánh giá */}
    <View style={styles.ratingContainer}>
      {[...Array(5)].map((_, index) => (
        <Image
          key={index}
          source={
            index < product.rating
              ? require('../assets/star.svg') // Thay bằng ảnh sao đầy
              : require('../assets/star.svg') // Thay bằng ảnh sao rỗng
          }
          style={styles.starIcon}
        />
      ))}
    </View>

    {/* Giá sản phẩm */}
    <Text style={styles.productPrice}>Price: {product.price}</Text>
  </View>

  {/* Số lượng sản phẩm bên phải */}
  <View style={styles.quantityContainer}>
    <Text style={styles.quantityText}>Qty: 1</Text>
  </View>
</View>
      </ScrollView>

      <View style={styles.voucherContainer}>
        <Text style={styles.voucherLabel}>Voucher</Text>
        <View style={styles.voucherInputContainer}>
          <TextInput
            style={styles.voucherInput}
            placeholder="Enter your code"
            placeholderTextColor="#CCC5C5"
          />
          <TouchableOpacity style={styles.voucherButton}>
            <Text style={styles.voucherButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.productPrice}>{product.price}</Text>
      </View>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Screen3')}
      >
        <Text style={styles.nextButtonText}>Next</Text>
        <Icon name="arrow-right" style={{ fontSize: 28, color: 'white' }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  productDetailsContainer: {
    flexDirection: 'row', // Chia thành hàng ngang
    alignItems: 'center', // Căn giữa các phần tử theo chiều dọc
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  productImage: {
    width: 100, // Đặt kích thước cho ảnh
    height: 100,
    borderRadius: 10,
    marginRight: 20, // Khoảng cách giữa ảnh và phần còn lại
  },
  productInfo: {
    flex: 1, // Chiếm không gian còn lại
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  productPrice: {
    fontSize: 18,
    color: '#FF6347',
  },
  quantityContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
 
  voucherContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  voucherLabel: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#757272',
  },
  voucherInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  voucherInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
    padding: 10,
    borderColor: '#CCC5C5',
  },
  voucherButton: {
    backgroundColor: '#CBCACA',
    borderRadius: 10,
    marginLeft: 10,
    padding: 10,
  },
  voucherButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F1EDED',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  totalLabel: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  nextButton: {
    backgroundColor: '#53F0F3',
    borderRadius: 10,
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  nextButtonText: {
    fontSize: 22,
    color: 'white',
    marginRight: 10,
  },

  
});
