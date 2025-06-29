import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Course({ course }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={styles.container}
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
        width: '45%',
        height: 195,
        marginTop: 12,
        marginBottom: 12,
        borderRadius: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    titleContainer: {
        padding: 6,
    },
    title: {
        height: 40,
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
    },
    code: {
        height: 20,
        color: 'black',
        fontSize: 12,
        fontWeight: 'semi-bold',
        marginVertical: 4,
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 16,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        resizeMode: 'stretch',
    },
});

