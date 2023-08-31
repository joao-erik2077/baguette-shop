import Slider from '../../components/Slider/Slider';
import Item from '../../components/Item/Item';
import ItemGradient from '../../components/Item/ItemGradient';
import Icons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text } from 'react-native';

export default function Main() {
    return <>
        <Slider />
        <Item center>
            <Icons name="truck-outline" size={24} color='#2DD36F' />
            <Text style={{color: '#2DD36F', fontWeight: 'bold', marginLeft: 5}}>
                Frete grátis
            </Text>
            <Text>
                &nbsp;em milhares de produtos!
            </Text>
        </Item>
        <ItemGradient colors={['#E68F30', '#E63054']} center leftIcon='angle-right'>
            <Text style={{color: '#ffffff', fontWeight: 'bold'}}>
                Consiga frete grátis em mais produtos assinando o nosso plano mensal
            </Text>
        </ItemGradient>
    </>;
}

const styles = StyleSheet.create({
});