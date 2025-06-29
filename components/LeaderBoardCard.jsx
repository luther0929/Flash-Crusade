import { View, Text, StyleSheet, Image } from 'react-native';

// Static mapping for avatar images
const avatarImages = {
    'avatar1': require('../assets/images/avatar/Chloe.png'),
    'avatar2': require('../assets/images/avatar/Efron.png'),
    'avatar3': require('../assets/images/avatar/Jane.png'),
    'avatar4': require('../assets/images/avatar/Jonas.png'),
    'avatar5': require('../assets/images/avatar/Juan.png'),
    'avatar6': require('../assets/images/avatar/Rina.png'),
    'avatar7': require('../assets/images/avatar/Rodrigo.png'),
    'avatar8': require('../assets/images/avatar/Vivian.png'),
    // Add more avatars as needed
};

export default function LeaderBoardCard({name, bestStreak, point, avatar, rank}) {
    return (
        <View style={styles.container}>
            <View style={[styles.rankContainer, {backgroundColor: rank === 1 ? '#EBC800' : rank === 2 ? '#C0C0C0' : rank === 3 ? '#CD7F32' : 'rgba(0, 0, 0, 0.5)'}]}>
                <Text style={styles.rankText}>{rank}</Text>
            </View>
            <View style={styles.profileContainer}>
                <Image source={avatarImages[avatar] || avatarImages['avatar1']} style={styles.profile} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.bestStreak}>Best Streak: {bestStreak}</Text>
                <Text style={styles.point}>Point: {point}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {    
        width: '100%',
        padding: 16,
        gap: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 12,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    rankContainer: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderColor: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{ rotate: '45deg' }],
    },
    rankText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        transform: [{ rotate: '-45deg' }],
        textAlign: 'center',
    },
    profileContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    profile: {
        width: 60,
        height: 60,
        borderRadius: 25,
    },
    textContainer: {
        width: '60%',
        flexDirection: 'column',
        gap: 8,
    },
    name: {
        fontSize: 18,
        fontWeight: 'semi-bold',
        color: '#fff',
    },
    bestStreak: {
        fontSize: 14,
        color: '#fff',
    },
    point: { 
        fontSize: 14,
        color: '#fff',
    },
})
