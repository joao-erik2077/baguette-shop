import { StyleSheet, Text, View } from "react-native";
import Cart from './Cart';

export default function Header() {
    return <>
        <View style={styles.header}>
            <Text style={styles.title}>BAGUETTES DE FRANCE</Text>
            <Cart />
        </View>
    </>;
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: '#FF7F11',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        
        shadowColor: '#000000',
        elevation: 10,
    },
    title: {
        fontSize: 27,
        fontWeight: '700',
        color: '#f1f1f1',
        textShadowColor: 'rgba(0, 0, 0, .3)',
        textShadowOffset: {
            width: 0,
            height: 0,
        },
        textShadowRadius: 10,
    },
});