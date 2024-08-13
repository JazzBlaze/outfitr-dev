import RootLayoutScreen from '@/components/RootLayoutScreen';
import GlobalProvider from '@/context/GlobalProvider';
import 'react-native-reanimated';

import * as SystemUI from 'expo-system-ui';
SystemUI.setBackgroundColorAsync("black");

export default function RootLayout() {


  return (
    <GlobalProvider>
      <RootLayoutScreen/>
    </GlobalProvider>
  );
}
