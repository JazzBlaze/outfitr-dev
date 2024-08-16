import RootLayoutScreen from '@/components/RootLayoutScreen';
import GlobalProvider from '@/context/GlobalProvider';
import 'react-native-reanimated';

import * as SystemUI from 'expo-system-ui';
import { MagicProductProvider } from '@/context/MagicMatchProvider';
import { WishlistProvider } from '@/context/WishlistContext';
import { ScannerProductProvider } from '@/context/ScannerProvider';
import { CartProvider } from '@/context/CartContext';
SystemUI.setBackgroundColorAsync("black");

export default function RootLayout() {


  return (
    <GlobalProvider>
      <MagicProductProvider>
        <WishlistProvider>
          <ScannerProductProvider>
            <CartProvider>
            <RootLayoutScreen/>
            </CartProvider>
          </ScannerProductProvider>
        </WishlistProvider>
      </MagicProductProvider>
    </GlobalProvider>
  );
}
