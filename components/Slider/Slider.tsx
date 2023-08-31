import { Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Slider1, Slider2, Slider3, Slider4 } from "../../assets/Slider/slider";

const windowWidth = Dimensions.get('window').width;
export default function Slider() {
    const images = [Slider1, Slider2, Slider3, Slider4];
    return <>
        <LinearGradient colors={['#F07A32', 'transparent']}>
            <ScrollView horizontal snapToInterval={windowWidth}>
                { images.map((image, index) => <Image source={image} style={styles.image} key={index} />) }
            </ScrollView>
        </LinearGradient>
    </>;
}

const styles = StyleSheet.create({
    image: {
        width: windowWidth - 10,
        height: 200,
        margin: 5,
        borderRadius: 5,
    },
});