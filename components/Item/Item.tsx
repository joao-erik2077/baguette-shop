import { View } from "react-native";
import { Dimensions, StyleSheet } from "react-native";

const screenWidth = Dimensions.get('screen').width;
export default function Item(props) {
    return <>
        <View style={[
                styles.container,
                props.center && { justifyContent: 'center'}
            ]}>
            { props.children }
        </View>
    </>;
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth - 10,
        height: 40,
        margin: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        shadowColor: '#010101',
        elevation: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
});