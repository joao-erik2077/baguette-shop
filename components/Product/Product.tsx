import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import { formatCurrency } from "react-native-format-currency";

type ProductProps = {
    name?: string;
    image?: ImageSourcePropType;
    price?: number;
};

export default function Product(props: ProductProps) {
    const [valueFormattedWithSymbol] = formatCurrency({amount: props.price, code: 'BRL'});
    return <>
        <View style={styles.container}>
            <Image source={props.image} style={styles.image} />
            <Text style={[styles.price, styles.text]}>{valueFormattedWithSymbol}</Text>
            <Text style={[styles.name, styles.text]}>{props.name}</Text>
        </View>
    </>;
}

const styles = StyleSheet.create({
    container: {
        height: 210,
        width: 150,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#FFFFFF',
        shadowColor: '#010101',
        elevation: 5,
        borderRadius: 5,
        padding: 5,
        display: 'flex',
        overflow: 'hidden',
    },
    image: {
        height: 120,
        width: '80%',
        alignSelf: 'center',
        marginBottom: 20,
    },
    name: {
        fontSize: 13,
        lineHeight: 20,
        color: 'gray',
    },
    price: {
        textAlign: 'left',
        color: '#828C51',
        fontSize: 20,
    },
    text: {
        marginLeft: 10,
    },
});