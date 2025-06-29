import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FlashSetCard from '../flashSetCard';

export default function FlashcardSetPage() {
    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
        >
            {/* need to put this in sql */}
            <FlashSetCard module={1} title="Introduction to Python" cards={35} bestStreak={22} author="John Doe" />
            <FlashSetCard module={2} title="Data Types" cards={42} bestStreak={34} author="John Doe" />
            <FlashSetCard module={3} title="Concurrency" cards={15} bestStreak={14} author="John Doe" />
            <FlashSetCard module={4} title="Variables" cards={29} bestStreak={27} author="John Doe" />
            <FlashSetCard module={5} title="Functions" cards={45} bestStreak={37} author="John Doe" />
            <FlashSetCard module={6} title="Flow" cards={60} bestStreak={57} author="John Doe" />
            <FlashSetCard module={7} title="OOP" cards={8} bestStreak={4} author="John Doe" />
            <FlashSetCard module={8} title="Inheritance" cards={18} bestStreak={0} author="John Doe" />
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