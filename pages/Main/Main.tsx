import Slider from '../../components/Slider/Slider';
import Item from '../../components/Item/Item';
import ItemGradient from '../../components/Item/ItemGradient';
import Icons from '@expo/vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native';
import CategoriesList from '../../components/Category/CategoriesList';
import Category from '../../components/Category/Category';
import ProductList from '../../components/Product/ProductList';
import Product from '../../components/Product/Product';
import { ImageCake, ImageBread, ImageCandy, ImageRefri, ImageSalgado } from '../../assets/Categories/categories';

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
            <Category name='Pães' image={ImageBread} />
            <Category name='Bolos' image={ImageCake} />
            <Category name='Salgados' image={ImageSalgado} />
            <Category name='Doces' image={ImageCandy} />
            <Category name='Bebidas' image={ImageRefri} />
        </CategoriesList>

        <ProductList>
            <Product name='teste1' />
            <Product name='teste2' />
            <Product name='teste3' />
            <Product name='teste4' />
            <Product name='teste5' />
        </ProductList>
        <ProductList>
            <Product name='teste6' />
            <Product name='teste7' />
            <Product name='teste8' />
            <Product name='teste9' />
            <Product name='teste10' />
        </ProductList>
    </>;
}
