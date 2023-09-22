import { Image, StyleSheet, Text, View } from "react-native";

export default function Category(props) {
    return <>
        <View>
            <View style={styles.imageContainer}>
                <Image source={props.image} style={styles.image} />
            </View>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 17}}>{ props.name }</Text>
        </View>
    </>;
}

const styles = StyleSheet.create({
    imageContainer: {
        marginLeft: 10,
        marginRight : 10,
        backgroundColor: '#FFFFFF',
        height: 80,
        width: 80,
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#010101',
        elevation: 5,
        overflow: 'hidden',
    },
    image: {
        height: '100%',
        width: '100%',
    },
});