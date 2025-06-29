import { View, Text, StyleSheet, ScrollView } from 'react-native';
import LeaderBoardCard from '../LeaderBoardCard';

export default function LeaderboardPage() {
    return (
        <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}>
            <LeaderBoardCard name="Alfred Hills" bestStreak={80} point={247} avatar="avatar4" rank={1} />
            <LeaderBoardCard name="Jonas Johnson" bestStreak={80} point={247} avatar="avatar7" rank={2} />
            <LeaderBoardCard name="Jane Doe" bestStreak={80} point={247} avatar="avatar3" rank={3} />
            <LeaderBoardCard name="Mary Johnson" bestStreak={80} point={247} avatar="avatar1" rank={4} />
            <LeaderBoardCard name="Juan Doe" bestStreak={80} point={247} avatar="avatar5" rank={5} />
            <LeaderBoardCard name="Rina Doe" bestStreak={80} point={247} avatar="avatar6" rank={6} />
            <LeaderBoardCard name="Rodrigo Doe" bestStreak={80} point={247} avatar="avatar2" rank={7} />
            <LeaderBoardCard name="Vivian Doe" bestStreak={80} point={247} avatar="avatar8" rank={8} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '70%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 12,
        marginHorizontal: 16,
        marginVertical: 8,
    },
    contentContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 16,
        padding: 16,
    },
})