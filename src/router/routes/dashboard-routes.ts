import { RouteType } from "@/router/routes";
import { RouteConstant } from "@/utility/constant/RouteConstant";
import { NavigationTypeConstant } from "@/utility/constant/NavigationTypeConstant";
import React from "react";
import HomeScreen from "@/view/screens/dashboard/HomeScreen";
import FavoritesScreen from "@/view/screens/favorites/FavoritesScreen";

// icons
import { HomeIcon, FavoritesIcon } from "@/assets/icons";
import CategoriesScreen from "@/view/screens/categories/CategoriesScreen";

export const dashboardRoutes: RouteType[] = [
    {
        path: RouteConstant.dashboard.home.path,
        name: RouteConstant.dashboard.home.name,
        component: HomeScreen,
        metadata: { 
            type: NavigationTypeConstant.tab,
            title: "Home", 
            activeIcon: HomeIcon, 
            inactiveIcon: HomeIcon,
            userType: 'both',
            isAuthenticated: true
        }
    },
    {
        path: RouteConstant.dashboard.favorites.path,
        name: RouteConstant.dashboard.favorites.name,
        component: FavoritesScreen,
        metadata: { 
            type: NavigationTypeConstant.tab, 
            title: "Favorites", 
            activeIcon: FavoritesIcon, 
            inactiveIcon: FavoritesIcon,
            userType: 'both',
            isAuthenticated: true
        }
    },
    // {
    //     path: RouteConstant.dashboard.history.path,
    //     name: RouteConstant.dashboard.history.name,
    //     component: HistoryScreen,
    //     metadata: { 
    //         type: NavigationTypeConstant.stack,
    //         title: "History",
    //         userType: 'both',
    //         // isAuthenticated: true
    //     }
    // },
    // {
    //     path: RouteConstant.dashboard.notifications.path,
    //     name: RouteConstant.dashboard.notifications.name,
    //     component: NotificationsScreen,
    //     metadata: { 
    //         type: NavigationTypeConstant.stack,
    //         title: "Notifications",
    //         userType: 'both',
    //         // isAuthenticated: true
    //     }
    // },
    {
        path: RouteConstant.dashboard.categories.path,
        name: RouteConstant.dashboard.categories.name,
        component: CategoriesScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            title: "Categories",
            userType: 'both',
            // isAuthenticated: true
        }
    }
];
