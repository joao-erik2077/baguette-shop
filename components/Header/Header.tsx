import { StyleSheet, View } from "react-native";
import Cart from '../Cart/Cart';
import Searchbar from '../Searchbar/Searchbar';

export default function Header() {
    return <>
        <View style={styles.header}>
            <Searchbar />
            <Cart />
        </View>
    </>;
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: '#F08A4B',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
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