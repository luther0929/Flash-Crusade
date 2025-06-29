import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { scale, verticalScale, getResponsiveValue } from '../utils/responsive';

export default function Button({ icon, onPress, style, color }) {
    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={[
                styles.button, 
                { backgroundColor: color || '#667eea' },
                style
            ]}
        >
            <Ionicons 
                name={icon} 
                size={getResponsiveValue({ small: scale(28), medium: scale(36), large: scale(40) })} 
                color="#000" 
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: getResponsiveValue({ small: scale(90), medium: scale(120), large: scale(140) }),
        height: getResponsiveValue({ small: verticalScale(55), medium: verticalScale(70), large: verticalScale(80) }),
        padding: getResponsiveValue({ small: scale(8), medium: scale(10), large: scale(12) }),
        borderRadius: getResponsiveValue({ small: scale(6), medium: scale(8), large: scale(10) }),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: getResponsiveValue({ small: 2, medium: 3, large: 4 }),
        },
        shadowOpacity: 0.1,
        shadowRadius: getResponsiveValue({ small: 4, medium: 6, large: 8 }),
        elevation: getResponsiveValue({ small: 3, medium: 5, large: 7 }),
    },
})