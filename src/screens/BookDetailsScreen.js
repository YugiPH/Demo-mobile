import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

export default function BookDetailsScreen() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'white', padding: 15 }}>
            {/* Nút Back */}
            <TouchableOpacity style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 16 }}>←</Text>
            </TouchableOpacity>

            {/* Ảnh và thông tin sách */}
            <View style={{ alignItems: 'center' }}>
                <Image source={require('../images/book1.jpg')} style={{ width: 120, height: 180, borderRadius: 8 }} />
                <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10 }}>The Pieces We Keep</Text>
                <Text style={{ fontSize: 16, color: 'grey' }}>By Mary Alice</Text>

                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ backgroundColor: 'lightgrey', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 10, marginRight: 5 }}>Historical Fiction</Text>
                    <Text style={{ backgroundColor: 'lightgrey', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 10 }}>Sisters</Text>
                </View>

                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'orange', marginTop: 5 }}>* 4.5 (268)</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'green', marginTop: 5 }}>$7.50</Text>
            </View>

            {/* Giới thiệu sách */}
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Introduction</Text>
            <Text style={{ color: 'grey', marginTop: 5 }}>
                In this richly emotional novel inspired by extraordinary true accounts, New York Times bestselling author Kristina McMorris evokes the depth...
            </Text>

            {/* Mục lục */}
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Catalog: The 235 chapters</Text>
            <TouchableOpacity style={{ marginTop: 10 }}>
                <Text style={{ color: 'cyan', fontWeight: 'bold' }}>Add to bookshelf</Text>
            </TouchableOpacity>

            {/* Bình luận */}
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>Comments</Text>
            <TouchableOpacity>
                <Text style={{ color: 'cyan', fontWeight: 'bold' }}>Write a comment</Text>
            </TouchableOpacity>

            {/* Danh sách bình luận */}
            <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Image source={require('../images/user1.jpg')} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} />
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Irina Iriser</Text>
                        <Text style={{ color: 'grey' }}>This book, right off the bat, has two of my favourite things going for it...</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Image source={require('../images/user2.jpg')} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} />
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Maryellen</Text>
                        <Text style={{ color: 'grey' }}>This book takes two stories from different decades...</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../images/user3.jpg')} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} />
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Nancy Sartor</Text>
                        <Text style={{ color: 'grey' }}>The Pieces We Keep is a fascinating tale of the pain of loss...</Text>
                    </View>
                </View>
            </View>

            {/* Nút hành động */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                <TouchableOpacity style={{ backgroundColor: 'lightgrey', padding: 10, borderRadius: 5, flex: 1, marginRight: 10 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Free Trials</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'cyan', padding: 10, borderRadius: 5, flex: 1 }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'white' }}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
