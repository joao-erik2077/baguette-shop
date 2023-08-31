import Slider from '../../components/Slider/Slider';
import Item from '../../components/Item/Item';
import ItemGradient from '../../components/Item/ItemGradient';
import Icons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text } from 'react-native';
import CategoriesList from '../../components/Category/CategoriesList';
import Category from '../../components/Category/Category';

export default function Main() {
    return <>
        <Slider />
        <Item center>
            <Icons name="truck-outline" size={24} color='#2DD36F' />
            <Text style={{color: '#2DD36F', fontWeight: 'bold', marginLeft: 5}}>
                Envio grátis
            </Text>
            <Text>
                &nbsp;para milhares de produtos!
            </Text>
        </Item>
        <ItemGradient colors={['#E68F30', '#E63054']} center leftIcon='angle-right'>
            <Text style={{color: '#ffffff', fontWeight: 'bold'}}>
                Consiga descontos em mais produtos assinando o nosso plano mensal
            </Text>
        </ItemGradient>
        <CategoriesList>
            <Category name='cat1' />
            <Category name='cat2' />
            <Category name='cat3' />
        </CategoriesList>
    </>;
}

const styles = StyleSheet.create({
});