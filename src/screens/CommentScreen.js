import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CommentScreen() {
    const [rating, setRating] = useState(4);

    return (
        <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <TouchableOpacity>
                    <Icon name="arrow-left" size={20} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Write a comment</Text>
                <TouchableOpacity>
                    <Text style={{ color: 'cyan', fontSize: 16 }}>Publish</Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 15 }}>
                {[1, 2, 3, 4, 5].map((index) => (
                    <TouchableOpacity key={index} onPress={() => setRating(index)}>
                        <Icon name="star" size={30} color={index <= rating ? 'orange' : 'lightgray'} style={{ marginRight: 5 }} />
                    </TouchableOpacity>
                ))}
            </View>

            <TextInput
                placeholder="write a comment..."
                placeholderTextColor="gray"
                multiline
                style={{
                    height: 200,
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    borderRadius: 8,
                    padding: 10,
                    textAlignVertical: 'top',
                    fontSize: 16,
                }}
            />
        </View>
    );
}
