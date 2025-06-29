import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { scale, verticalScale, isWeb, screenWidth, getResponsiveValue } from '../utils/responsive';

export default function Course({ course }) {
    const navigation = useNavigation();

    // Responsive width calculation
    const getCourseWidth = () => {
        if (isWeb) {
            if (screenWidth > 1200) return '20%'; // 4 columns - reduced from 22%
            if (screenWidth > 768) return '28%';  // 3 columns - reduced from 30%
            return '42%'; // 2 columns - reduced from 45%
        }
        return '42%'; // Mobile 2 columns - reduced from 45%
    };

    return (
        <TouchableOpacity 
            style={[styles.container, { width: getCourseWidth() }]}
            onPress={() => navigation.navigate('CoursePage')}
        >
            <Image source={course.image} style={styles.image} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{course.title}</Text>
                <Text style={styles.code}>{course.code}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: getResponsiveValue({ 
            small: verticalScale(160), 
            medium: verticalScale(195), 
            large: verticalScale(220) 
        }),
        marginTop: getResponsiveValue({ small: scale(8), medium: scale(12), large: scale(16) }),
        marginBottom: getResponsiveValue({ small: scale(8), medium: scale(12), large: scale(16) }),
        marginHorizontal: getResponsiveValue({ small: scale(4), medium: scale(6), large: scale(8) }),
        borderRadius: getResponsiveValue({ small: scale(12), medium: scale(16), large: scale(20) }),
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    titleContainer: {
        padding: getResponsiveValue({ small: scale(4), medium: scale(6), large: scale(8) }),
    },
    title: {
        height: getResponsiveValue({ small: verticalScale(32), medium: verticalScale(40), large: verticalScale(48) }),
        color: '#000',
        fontSize: getResponsiveValue({ small: scale(12), medium: scale(14), large: scale(16) }),
        fontWeight: 'bold',
        lineHeight: getResponsiveValue({ small: scale(16), medium: scale(18), large: scale(20) }),
    },
    code: {
        height: getResponsiveValue({ small: verticalScale(16), medium: verticalScale(20), large: verticalScale(24) }),
        color: 'black',
        fontSize: getResponsiveValue({ small: scale(10), medium: scale(12), large: scale(14) }),
        fontWeight: '600',
        marginVertical: getResponsiveValue({ small: scale(2), medium: scale(4), large: scale(6) }),
    },
    image: {
        width: '100%',
        height: getResponsiveValue({ small: verticalScale(90), medium: verticalScale(120), large: verticalScale(140) }),
        borderRadius: getResponsiveValue({ small: scale(12), medium: scale(16), large: scale(20) }),
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        resizeMode: 'stretch',
    },
});

