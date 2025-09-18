import { RouteType } from "@/router/routes";
import { RouteConstant } from "@/utility/constant/RouteConstant";
import { NavigationTypeConstant } from "@/utility/constant/NavigationTypeConstant";
import InitiateOnboardingScreen from "@/view/screens/onboarding/InitiateOnboardingScreen";
import SplashScreen from "@/view/screens/onboarding/SplashScreen";
import CompleteOnboardingScreen from "@/view/screens/onboarding/CompleteOnboardingScreen";
import HomeScreen from "@/view/screens/dashboard/HomeScreen";
import ProductDetailsScreen from "@/view/screens/products/ProductDetailsScreen";
import ProductsByCategoryScreen from "@/view/screens/products/ProductsByCategoryScreen";

export const productRoutes: RouteType[] = [
    {
        path: RouteConstant.product.details.path,
        name: RouteConstant.product.details.name,
        component: ProductDetailsScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            isAuthenticated: false 
        }
    },
    {
        path: RouteConstant.product.productsByCategory.path,
        name: RouteConstant.product.productsByCategory.name,
        component: ProductsByCategoryScreen,
        metadata: {
            type: NavigationTypeConstant.stack,
            isAuthenticated: false
        }
    }
];