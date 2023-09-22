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
            <View style={styles.imageContainer}>
                <Image source={props.image} style={styles.image} />
            </View>
            <View>
                <Text style={[styles.price, styles.text]}>{valueFormattedWithSymbol}</Text>
                <Text style={[styles.name, styles.text]}>{props.name}</Text>
            </View>
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
    imageContainer: {
        height: '65%',
        width: '100%',
        marginBottom: 10,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        borderColor: '#F1F1F1',
        borderWidth: 1,
    },
    image: {
        height: '80%',
        width: '80%',
        alignSelf: 'center',
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