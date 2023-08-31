import { StyleSheet, Text, View } from "react-native";

export default function Product(props) {
    return <>
        <View style={styles.container}>
            <Text>{props.name}</Text>
            <Text>{props.name}</Text>
            <Text>{props.name}</Text>
            <Text>{props.name}</Text>
            <Text>{props.name}</Text>
            <Text>{props.name}</Text>
            <Text>{props.name}</Text>
            <Text>{props.name}</Text>
        </View>
    </>;
}

const styles = StyleSheet.create({
    container: {
        height: 190,
        width: 150,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'red',
    },
});