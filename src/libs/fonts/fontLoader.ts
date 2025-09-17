import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light': require('../../../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../../../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('../../../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('../../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../../../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Black': require('../../../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Thin': require('../../../assets/fonts/Poppins-Thin.ttf'),
    'Poppins-ExtraLight': require('../../../assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Italic': require('../../../assets/fonts/Poppins-Italic.ttf'),
    'Poppins-LightItalic': require('../../../assets/fonts/Poppins-LightItalic.ttf'),
    'Poppins-MediumItalic': require('../../../assets/fonts/Poppins-MediumItalic.ttf'),
    'Poppins-SemiBoldItalic': require('../../../assets/fonts/Poppins-SemiBoldItalic.ttf'),
    'Poppins-BoldItalic': require('../../../assets/fonts/Poppins-BoldItalic.ttf'),
    'Poppins-ExtraBoldItalic': require('../../../assets/fonts/Poppins-ExtraBoldItalic.ttf'),
    'Poppins-BlackItalic': require('../../../assets/fonts/Poppins-BlackItalic.ttf'),
    'Poppins-ThinItalic': require('../../../assets/fonts/Poppins-ThinItalic.ttf'),
    'Poppins-ExtraLightItalic': require('../../../assets/fonts/Poppins-ExtraLightItalic.ttf'),
  });
};
