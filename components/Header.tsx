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
        backgroundColor: '#FFED66',
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
        color: '#342C2E',
    },
});