import { Text, View } from "react-native";

export default function Category(props) {
    return <>
        <View>
            <Text>{ props.name }</Text>
        </View>
    </>;
}