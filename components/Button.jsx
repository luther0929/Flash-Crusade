import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
            <Ionicons name={icon} size={36} color="#000" />

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 120,
        height: 70,
        padding: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
})