import * as React from 'react';
import { SearchBar } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export default function Searchbar() {
    const [value, setValue] = React.useState('');
    return <>
        <SearchBar 
            round 
            lightTheme 
            placeholder='Pesquisar...' 
            containerStyle={styles.container} 
            inputContainerStyle={styles.inputContainer}
            onChangeText={value => setValue(value)}
            value={value}
        />
    </>;
}

const styles = StyleSheet.create({
    container: {
        width: 280,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },
    inputContainer: {
        backgroundColor: '#f1f1f1',
    },
});
