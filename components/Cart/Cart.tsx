import Icons from '@expo/vector-icons/FontAwesome5';
import { StyleSheet } from 'react-native';

export default function Cart() {
    return <>
        <Icons name="shopping-cart" size={36} color="#f1f1f1" style={styles.shadow} />
    </>;
}

const styles = StyleSheet.create({
    shadow: {
        textShadowColor: 'rgba(0, 0, 0, .6)',
        textShadowOffset: {
            width: 0,
            height: 0,
        },
        textShadowRadius: 5,
    },
});