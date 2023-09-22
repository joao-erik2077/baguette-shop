import { ScrollView, StyleSheet, View } from "react-native";

export default function CategoriesList(props) {
    return <>
        <View style={{height: 110}}>
            <ScrollView contentContainerStyle={styles.container} horizontal showsHorizontalScrollIndicator={false}>
                { props.children }
            </ScrollView>
        </View>
    </>;
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: '100%',
    },
});