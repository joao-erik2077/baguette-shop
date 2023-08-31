import { Text } from "react-native";
import { Dimensions, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Icons from '@expo/vector-icons/FontAwesome5';

const screenWidth = Dimensions.get('screen').width;
export default function Item(props) {
    return <>

            <LinearGradient
                start={[0, 1]} end={[1, 0]}
                style={[
                    styles.container,
                    props.center && { justifyContent: 'center'},
                ]} 
                colors={[
                    props.colors[0],
                    props.colors[1],
            ]}>
                <Text>{ props.children }</Text>
                {
                    props.leftIcon && 
                    <Icons 
                        name={props.leftIcon} 
                        size={24} 
                        color={props.iconColor || '#FFFFFF'} 
                        style={{marginLeft: 10}}
                    />
                }
            </LinearGradient>
    </>;
}

const styles = StyleSheet.create({
    container: {
        width: screenWidth - 10,
        minHeight: 40,
        margin: 5,
        borderRadius: 5,
        shadowColor: '#010101',
        elevation: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
});