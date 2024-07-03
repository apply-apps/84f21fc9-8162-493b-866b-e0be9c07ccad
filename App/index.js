// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

const alphabet = [
    { letter: 'A', image: 'https://picsum.photos/100/100?random=1' },
    { letter: 'B', image: 'https://picsum.photos/100/100?random=2' },
    { letter: 'C', image: 'https://picsum.photos/100/100?random=3' },
    { letter: 'D', image: 'https://picsum.photos/100/100?random=4' },
    { letter: 'E', image: 'https://picsum.photos/100/100?random=5' },
    { letter: 'F', image: 'https://picsum.photos/100/100?random=6' },
    { letter: 'G', image: 'https://picsum.photos/100/100?random=7' },
    { letter: 'H', image: 'https://picsum.photos/100/100?random=8' },
    { letter: 'I', image: 'https://picsum.photos/100/100?random=9' },
    { letter: 'J', image: 'https://picsum.photos/100/100?random=10' },
    { letter: 'K', image: 'https://picsum.photos/100/100?random=11' },
    { letter: 'L', image: 'https://picsum.photos/100/100?random=12' },
    { letter: 'M', image: 'https://picsum.photos/100/100?random=13' },
    { letter: 'N', image: 'https://picsum.photos/100/100?random=14' },
    { letter: 'O', image: 'https://picsum.photos/100/100?random=15' },
    { letter: 'P', image: 'https://picsum.photos/100/100?random=16' },
    { letter: 'Q', image: 'https://picsum.photos/100/100?random=17' },
    { letter: 'R', image: 'https://picsum.photos/100/100?random=18' },
    { letter: 'S', image: 'https://picsum.photos/100/100?random=19' },
    { letter: 'T', image: 'https://picsum.photos/100/100?random=20' },
    { letter: 'U', image: 'https://picsum.photos/100/100?random=21' },
    { letter: 'V', image: 'https://picsum.photos/100/100?random=22' },
    { letter: 'W', image: 'https://picsum.photos/100/100?random=23' },
    { letter: 'X', image: 'https://picsum.photos/100/100?random=24' },
    { letter: 'Y', image: 'https://picsum.photos/100/100?random=25' },
    { letter: 'Z', image: 'https://picsum.photos/100/100?random=26' },
];

const AlphabetList = () => {
    return (
        <View style={styles.list}>
            {alphabet.map((item, index) => (
                <View key={index} style={styles.item}>
                    <Text style={styles.letter}>{item.letter}</Text>
                    <Image source={{ uri: item.image }} style={styles.image} />
                </View>
            ))}
        </View>
    );
};

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Alphabet for Kids</Text>
            <ScrollView>
                <AlphabetList />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF0F5', // Light pink background to make it kid-friendly
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#FF69B4', // Pink color for the title
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    item: {
        width: '30%',
        alignItems: 'center',
        marginBottom: 20,
    },
    letter: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FF69B4',
        marginBottom: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
});