import { View, Text, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Course from '../Course';
import { courses } from '../../data/courses';

export default function HomePage() {
    const renderCourse = ({ item }) => (
        <Course course={item} />
    );

    return (
        <LinearGradient
            colors={['#667eea', '#764ba2']}
            style={styles.container}
        >
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Courses</Text>
            </View>
            <FlatList
                data={courses}
                renderItem={renderCourse}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.coursesContainer}
                showsVerticalScrollIndicator={false}
            />
        </LinearGradient>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    titleContainer: {
        padding: 24,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    coursesContainer: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
});