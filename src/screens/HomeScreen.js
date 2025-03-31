import React from 'react'
import { TextInput, View } from 'react-native'

export default function HomeScreen() {
    return (
        <View style={style.container}>
            <View>
                <IonIcons style={styles.iocn} name="search" color="ff0000" size={20} />
                <TextInput placeholder='Search' style={styles.searchInput} />
            </View>
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'white',
    },
    searchInput: {
        height: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        paddingLeft: 20,
        borderRadius: 10,
    },
    iconSearch: {
        position: 'absolute',
        top: 13,
        left: 10
    },
    iconMic:{
        position: 'absolute',
        top: 13,
        left: 10
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        // marginTop:
    }
})
