import { Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import image1 from "../../assets/Slider/slider1.jpg";
import image2 from "../../assets/Slider/slider2.jpg";
import image3 from "../../assets/Slider/slider3.jpg";
import image4 from "../../assets/Slider/slider4.jpg";

const windowWidth = Dimensions.get('window').width;
export default function Slider() {
    const images = [image1, image2, image3, image4];
    return <>
        <LinearGradient colors={['#F08A4B', 'transparent']}>
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