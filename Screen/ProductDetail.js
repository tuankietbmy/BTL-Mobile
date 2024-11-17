import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Alert, FlatList } from 'react-native';

export default function ProductDetail({ route, navigation }) {
  const { product } = route.params;
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Hàm xử lý khi nhấn vào nút "Mua ngay" 
  const handleBuyNow = () => {
    Alert.alert('Thành công', 'Sản phẩm đã được thêm vào giỏ hàng!', [{ text: 'OK' }]);
  };
 
  // Fetch sản phẩm liên quan dựa trên loại sản phẩm
  useEffect(() => {
    fetch('https://653f4fde9e8bd3be29e03c12.mockapi.io/btl')
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter((item) => item.type === product.type && item.id !== product.id);
        setRelatedProducts(filteredProducts);
      });
  }, [product]);

  // Hàm render cho sản phẩm liên quan
  const renderRelatedProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.relatedItem}
      onPress={() => navigation.push('ProductDetail', { product: item })}
    >
      <Image source={{ uri: item.image }} style={styles.relatedImage} />
      <Text style={styles.relatedName}>{item.name}</Text>
      <Text style={styles.relatedPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Nút quay lại */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>◀ Back</Text>
      </TouchableOpacity>

      {/* Hình ảnh sản phẩm */}
      <Image source={{ uri: product.image }} style={styles.image} />

      {/* Thông tin sản phẩm */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>Price: {product.price}</Text>

        {/* Phần đánh giá */}
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingTitle}>Rating:</Text>
          <View style={styles.stars}>
            {[...Array(5)].map((_, index) => (
              <Image
                key={index}
                source={
                  index < product.rating
                    ? require('../assets/star.svg')
                    : require('../assets/star.svg')
                }
                style={styles.starIcon}
              />
            ))}
          </View>
        </View>

        {/* Mô tả sản phẩm */}
        <Text style={styles.description}>{product.description}</Text>

        {/* Nút mua hàng */}
        <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
          <Text style={styles.buyButtonText}>Mua ngay</Text>
        </TouchableOpacity>
      </View>

      {/* Đề xuất sản phẩm */}
      <View style={styles.relatedContainer}>
        <Text style={styles.relatedTitle}>Sản phẩm liên quan</Text>
        <FlatList
          data={relatedProducts}
          renderItem={renderRelatedProduct}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  backText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    color: '#FF6347',
    marginBottom: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  ratingTitle: {
    fontSize: 16,
    marginRight: 10,
  },
  stars: {
    flexDirection: 'row',
  },
  starIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buyButtonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  relatedContainer: {
    marginTop: 30,
  },
  relatedTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007AFF',
  },
  relatedItem: {
    width: 150,
    marginRight: 15,
    alignItems: 'center',
  },
  relatedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  relatedName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  relatedPrice: {
    fontSize: 14,
    color: '#FF6347',
  },
});
