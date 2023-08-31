import { ScrollView, StyleSheet, View } from "react-native";

export default function CategoriesList(props) {
    return <>
        <ScrollView contentContainerStyle={styles.container} horizontal>
            { props.children }
        </ScrollView>
    </>;
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        minWidth: '100%',
    },
});