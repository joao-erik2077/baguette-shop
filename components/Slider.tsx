import { Image, ScrollView, StyleSheet } from "react-native";
import image1 from "../assets/Slider/slider1.jpg";
import image2 from "../assets/Slider/slider2.jpg";
import image3 from "../assets/Slider/slider3.jpg";
import image4 from "../assets/Slider/slider4.jpg";

export default function Slider() {
    const images = [image1, image2, image3, image4];
    return <>
        <ScrollView horizontal snapToInterval={400}>
            { images.map((image, index) => <Image source={image} style={styles.image} key={index} />) }
        </ScrollView>
    </>;
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 200,
    },
});