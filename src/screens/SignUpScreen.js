import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';

export default function SignUpScreen() {
    return (
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', padding: 20 }}>
            {/* <Image source={require('../images/signup-illustration.png')} style={{ width: 150, height: 150, alignSelf: 'center' }} /> */}

            <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center', marginTop: 20 }}>Sign up</Text>

            <View style={{ marginTop: 20 }}>
                <Text style={{ fontWeight: '700', color: 'grey' }}>Username</Text>
                <TextInput
                    placeholder="Enter username"
                    style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'cyan' }}
                />

                <Text style={{ fontWeight: '700', color: 'grey', marginTop: 15 }}>Email</Text>
                <TextInput
                    placeholder="Enter email"
                    style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'cyan' }}
                />

                <Text style={{ fontWeight: '700', color: 'grey', marginTop: 15 }}>Password</Text>
                <TextInput
                    placeholder="Enter password"
                    secureTextEntry
                    style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'cyan' }}
                />

                <Text style={{ fontWeight: '700', color: 'grey', marginTop: 15 }}>Confirm password</Text>
                <TextInput
                    placeholder="Confirm password"
                    secureTextEntry
                    style={{ height: 40, borderBottomWidth: 1, borderBottomColor: 'cyan' }}
                />
            </View>

            <TouchableOpacity style={{ alignItems: 'center', marginTop: 30, backgroundColor: 'cyan', padding: 12, borderRadius: 6 }}>
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Already have an account? <Text style={{ color: 'cyan' }} href="">Login</Text></Text>
            </TouchableOpacity>
        </View>
    );
}
