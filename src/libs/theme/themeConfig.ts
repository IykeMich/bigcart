// import ServeaseIcon from "@/assets/icon/logo-sm.svg"
// import ServeaseLogo from "@/assets/icon/logo-lg.svg"
// import {getThemeColors, themeColors} from "@/libs/theme/themeColors";

import bigCartIcon from "@/assets/icons/BigCart.svg"
import bigCartLogo from "@/assets/icons/BigCart.svg"

import { getThemeColors } from "./themeColors";


export const themeConfig= ()=>{

    let logoUrl = ""
    switch (process.env.EXPO_PUBLIC_APP_TYPE){
        default:
            return {
                ...getThemeColors(),
                logo: bigCartLogo,
                icon: bigCartIcon,
                name: "",
                logoSource: logoUrl ? {uri: logoUrl} : require("@/assets/images/bigCart.png")
            };
    }

}


export const getThemeConfig = themeConfig()