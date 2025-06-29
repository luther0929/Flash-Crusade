import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Course from '../Course';
import { courses } from '../../data/courses';
import { scale, verticalScale, isWeb, screenWidth, getResponsiveValue } from '../../utils/responsive';
import WebLayout from '../WebLayout';

export default function HomePage() {
    const renderCourse = ({ item }) => (
        <Course course={item} />
    );

    // Responsive grid columns
    const getNumColumns = () => {
        if (isWeb) {
            if (screenWidth > 1200) return 4;
            if (screenWidth > 768) return 3;
            return 2;
        }
        return 2;
    };

    const content = (
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
                numColumns={getNumColumns()}
                columnWrapperStyle={getNumColumns() === 2 ? styles.row : null}
                contentContainerStyle={styles.coursesContainer}
                showsVerticalScrollIndicator={false}
            />
        </LinearGradient>
    );

    return (
        <WebLayout maxWidth={1200}>
            {content}
        </WebLayout>
    );
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: getResponsiveValue({ small: scale(12), medium: scale(16), large: scale(20) }),
    },
    titleContainer: {
        padding: getResponsiveValue({ small: verticalScale(16), medium: verticalScale(24), large: verticalScale(32) }),
    },
    title: {
        color: '#fff',
        fontSize: getResponsiveValue({ small: scale(20), medium: scale(24), large: scale(28) }),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    coursesContainer: {
        paddingHorizontal: getResponsiveValue({ small: scale(12), medium: scale(16), large: scale(20) }),
        paddingBottom: getResponsiveValue({ small: verticalScale(16), medium: verticalScale(20), large: verticalScale(24) }),
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: getResponsiveValue({ small: scale(12), medium: scale(16), large: scale(20) }),
    },
});