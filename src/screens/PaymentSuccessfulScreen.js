import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentSuccessScreen = () => {
    return (
        <View style={styles.container}>
            {/* Nút quay lại */}
            <TouchableOpacity style={styles.backButton}>
                <Text style={styles.backText}>{'←'}</Text>
            </TouchableOpacity>

            {/* Icon thành công */}
            <View style={styles.successIcon}>
                <Text style={styles.checkmark}>✓</Text>
            </View>

            {/* Tiêu đề */}
            <Text style={styles.successText}>Payment Successful !</Text>
            <Text style={styles.transactionId}>Transaction ID: 201805313215469874</Text>

            {/* Khung thông tin giao dịch */}
            <View style={styles.infoBox}>
                <View style={styles.row}>
                    <Text style={styles.label}>DATE</Text>
                    <Text style={styles.label}>TIME</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.value}>22 July 2019</Text>
                    <Text style={styles.value}>12:35:42</Text>
                </View>

                {/* Tổng tiền */}
                <View style={styles.totalContainer}>
                    <Text style={styles.totalLabel}>Sub Total</Text>
                    <Text style={styles.totalValue}>11.50$</Text>
                </View>

                {/* Phương thức thanh toán */}
                <View style={styles.paymentMethod}>
                    <Image source={{ uri: 'https://i.imgur.com/8zBoU3h.png' }} style={styles.cardIcon} />
                    <Text style={styles.cardText}>Bank Card  **** 1768  HSBC</Text>
                </View>
            </View>

            {/* Nút Done */}
            <TouchableOpacity style={styles.doneButton}>
                <Text style={styles.doneText}>Done</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
        alignItems: 'center',
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    backText: {
        fontSize: 24,
        color: '#333',
    },
    successIcon: {
        marginTop: 80,
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#00BFA6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkmark: {
        fontSize: 40,
        color: 'white',
    },
    successText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#00BFA6',
        marginTop: 15,
    },
    transactionId: {
        fontSize: 14,
        color: '#888',
        marginBottom: 20,
    },
    infoBox: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 10,
        padding: 20,
        marginVertical: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    label: {
        fontSize: 14,
        color: '#999',
        fontWeight: 'bold',
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        borderTopWidth: 1,
        borderColor: '#EEE',
        paddingTop: 10,
    },
    totalLabel: {
        fontSize: 16,
        color: '#555',
    },
    totalValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00BFA6',
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    cardIcon: {
        width: 40,
        height: 25,
        marginRight: 10,
    },
    cardText: {
        fontSize: 14,
        color: '#555',
    },
    doneButton: {
        backgroundColor: '#00BFA6',
        paddingVertical: 12,
        paddingHorizontal: 80,
        borderRadius: 8,
        marginTop: 20,
    },
    doneText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default PaymentSuccessScreen;
