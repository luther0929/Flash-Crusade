import { View, Text, StyleSheet, Image } from 'react-native';

export default function RankCard() {
    const rank = "Gold";
    return (
        <View style={styles.container}>
            <Image source={require(`../assets/images/rank/${rank}.png`)} style={styles.rankImage} />
            <Text style={styles.rankText}>{rank} Rank</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 1,
        borderRadius: 1,
        marginHorizontal: 16,
        marginVertical: 6,
    },
    rankImage: {
        width: 120,
        height: 120,
    },
    rankText: {
        color: '#fff',
        fontSize: 16,
        opacity: 0.8,
        fontWeight: 'bold',
        resizeMode: 'contain',
    },
});

