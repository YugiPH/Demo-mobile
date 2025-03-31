import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const coupons = [
  { id: '1', discount: '30%', type: 'New Book', validUntil: '2019-05-04', status: 'Unused' },
  { id: '2', discount: '20%', type: 'Classic Book', validUntil: '2019-03-25', status: 'Unused' },
  { id: '3', discount: '35%', type: 'New Book', validUntil: '2019-05-04', status: 'Used' },
  { id: '4', discount: '45%', type: 'Classic Book', validUntil: '2019-03-25', status: 'Used' },
  { id: '5', discount: '20%', type: 'Classic Book', validUntil: '2019-03-25', status: 'Expired' },
];

export default function CouponScreen() {
  const [selectedTab, setSelectedTab] = useState('Unused');
  const filteredCoupons = coupons.filter((item) => item.status === selectedTab);

  const renderItem = ({ item }) => (
    <View style={styles.couponCard}>
      <View style={styles.discountBox}>
        <Text style={styles.discountText}>{item.discount}</Text>
        <Text style={styles.discountLabel}>Discount</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.couponTitle}>{item.type}</Text>
        <Text style={styles.couponDesc}>{item.discount} discount on {item.type.toLowerCase()}</Text>
        <Text style={styles.validDate}>Valid until: {item.validUntil}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {['Unused', 'Used', 'Expired'].map((tab) => (
          <TouchableOpacity key={tab} style={[styles.tab, selectedTab === tab && styles.activeTab]} onPress={() => setSelectedTab(tab)}>
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList data={filteredCoupons} keyExtractor={(item) => item.id} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 10 },
  tabContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, backgroundColor: '#f0f0f0', borderRadius: 10 },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center' },
  activeTab: { backgroundColor: 'cyan', borderRadius: 10 },
  tabText: { fontSize: 16, color: 'gray' },
  activeTabText: { color: 'white', fontWeight: 'bold' },
  couponCard: { flexDirection: 'row', backgroundColor: 'white', borderRadius: 10, marginBottom: 10, elevation: 3, padding: 10 },
  discountBox: { backgroundColor: 'cyan', padding: 10, alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, width: 80 },
  discountText: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  discountLabel: { fontSize: 12, color: 'white' },
  infoBox: { flex: 1, paddingHorizontal: 10, justifyContent: 'center' },
  couponTitle: { fontSize: 18, fontWeight: 'bold' },
  couponDesc: { fontSize: 14, color: 'gray' },
  validDate: { fontSize: 12, color: 'gray', marginTop: 5 },
});
