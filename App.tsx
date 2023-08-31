import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';

export default function App() {
  return <>
    <ScrollView>
      <SafeAreaView style={{
          backgroundColor: '#F1F1F1', 
          minHeight: '100%'
        }}>
        <StatusBar />
        <Header />
        <Main />
      </SafeAreaView>
    </ScrollView>
  </>;
}
