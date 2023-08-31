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
import {
    Beijinho, BoloDeChocolate, BoloDeLimao, Brigadeiro, CocaCola, 
    Coxinha, PaoDeQueijo, PaoFrances, Pepsi, SanduicheDeFrango,
} from '../../assets/Products/products';
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
            <Product name='Beijinho' image={Beijinho} price={2.49} />
            <Product name='Pão de Queijo' image={PaoDeQueijo} price={7.99} />
            <Product name='Pão Francês' image={PaoFrances} price={1.89} />
            <Product name='Bolo de Limão' image={BoloDeLimao} price={40.19} />
            <Product name='Coca Cola' image={CocaCola} price={11.99} />
        </ProductList>
        <ProductList>
            <Product name='Bolo de Chocolate' image={BoloDeChocolate} price={49.98} />
            <Product name='Sanduíche de Frango' image={SanduicheDeFrango} price={9.78} />
            <Product name='Brigadeiro' image={Brigadeiro} price={1.99} />
            <Product name='Coxinha' image={Coxinha} price={5.97} />
            <Product name='Pepsi' image={Pepsi} price={10.99} />
        </ProductList>
    </>;
}
