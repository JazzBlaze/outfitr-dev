import RootLayoutScreen from '@/components/RootLayoutScreen';
import GlobalProvider from '@/context/GlobalProvider';
import 'react-native-reanimated';

export default function RootLayout() {


  return (
    <GlobalProvider>
      <RootLayoutScreen/>
    </GlobalProvider>
  );
}
