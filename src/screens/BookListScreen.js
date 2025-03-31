import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';
imp


export default function BookshelfScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 15 }}>
            {/* Thanh tìm kiếm */}
            <TextInput
                placeholder="Search"
                style={{
                    height: 40,
                    borderWidth: 1,
                    borderColor: 'grey',
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    marginBottom: 20,
                }}
            />

            {/* Mục Reading */}
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Reading</Text>
            <FlatList
                horizontal
                data={books.slice(0, 3)}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ marginRight: 10 }}>
                        <Image source={item.image} style={{ width: 100, height: 150, borderRadius: 8 }} />
                        <Text style={{ fontWeight: 'bold', marginTop: 5 }}>{item.title}</Text>
                        <Text style={{ color: 'grey', fontSize: 12 }}>{item.author}</Text>
                    </TouchableOpacity>
                )}
            />

            {/* Mục Bookshelf */}
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 15 }}>Bookshelf</Text>
            <FlatList
                numColumns={3}
                data={books}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ marginBottom: 15, marginRight: 10, width: 100 }}>
                        <Image source={item.image} style={{ width: 100, height: 150, borderRadius: 8 }} />
                        <Text style={{ fontWeight: 'bold', marginTop: 5 }}>{item.title}</Text>
                        <Text style={{ color: 'grey', fontSize: 12 }}>{item.author}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
