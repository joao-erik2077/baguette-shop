import { SafeAreaView, StatusBar } from 'react-native';
import Main from './pages/Main/Main';
import Header from './components/Header/Header';

export default function App() {
  return <>
    <SafeAreaView>
      <StatusBar />
      <Header />
      <Main />
    </SafeAreaView>
  </>;
}
