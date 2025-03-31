import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Checkbox } from 'react-native-paper';

const books = [
    { id: 1, title: 'Orphan Train Trials', author: 'Rachel Wesson', price: 7.5, image: require('../images/book1.jpg') },
    { id: 2, title: 'Daughters of War', author: 'Lizzie Page', price: 6.0, image: require('../images/book2.jpg') },
    { id: 3, title: 'A Mother Like Mine', author: 'Kate Hewitt', price: 5.5, image: require('../images/book3.jpg') },
    { id: 4, title: 'A Family Affair', author: 'Mary Campisi', price: 4.0, image: require('../images/book4.jpg') },
];

export default function CartScreen() {
    const [selectedItems, setSelectedItems] = useState < Array < number >> ([]);


    const toggleSelect = (id) => {
        setSelectedItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };


    const toggleSelectAll = () => {
        setSelectedItems(selectedItems.length === books.length ? [] : books.map((book) => book.id));
    };

    const subtotal = books
        .filter((book) => selectedItems.includes(book.id))
        .reduce((sum, book) => sum + book.price, 0)
        .toFixed(2);

    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 15 }}>
            {/* Nút Back */}
            <TouchableOpacity style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 16 }}>←</Text>
            </TouchableOpacity>

            <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>My Cart</Text>

            {/* Chọn tất cả */}
            <TouchableOpacity onPress={toggleSelectAll} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                <Checkbox
                    status={selectedItems.length === books.length ? 'checked' : 'unchecked'}
                    onPress={toggleSelectAll}
                />
                <Text style={{ fontSize: 16 }}>Select All</Text>
            </TouchableOpacity>

            {/* Danh sách sản phẩm */}
            <FlatList
                data={books}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
                        <Checkbox
                            status={selectedItems.includes(item.id) ? 'checked' : 'unchecked'}
                            onPress={() => toggleSelect(item.id)}
                        />
                        <Image source={item.image} style={{ width: 50, height: 75, borderRadius: 5, marginHorizontal: 10 }} />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                            <Text style={{ color: 'grey' }}>By {item.author}</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'cyan' }}>${item.price.toFixed(2)}</Text>
                        </View>
                    </View>
                )}
            />

            {/* Tổng cộng */}
            <View style={{ borderTopWidth: 1, borderColor: 'lightgrey', paddingTop: 15, marginTop: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={{ fontSize: 16 }}>Sub Total</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'cyan' }}>${subtotal}</Text>
                </View>

                <TouchableOpacity
                    style={{ backgroundColor: 'cyan', padding: 12, borderRadius: 5, alignItems: 'center' }}
                    disabled={selectedItems.length === 0}
                >
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
