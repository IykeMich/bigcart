import { RouteType } from "@/router/routes";
import { RouteConstant } from "@/utility/constant/RouteConstant";
import { NavigationTypeConstant } from "@/utility/constant/NavigationTypeConstant";
import React from "react";

// icons
import ProfileIcon from "@/assets/icons/Profile.svg";
import ProfileScreen from "@/view/screens/profile/ProfileScreen";
// Placeholder components
const EditProfileScreen = () => React.createElement('View', null, React.createElement('Text', null, 'Edit Profile Screen'));
const SettingsScreen = () => React.createElement('View', null, React.createElement('Text', null, 'Settings Screen'));
const EditPersonalInformationScreen = () => React.createElement('View', null, React.createElement('Text', null, 'Edit Personal Information Screen'));

export const profileRoutes: RouteType[] = [
    {
        path: RouteConstant.profile.main.path,
        name: RouteConstant.profile.main.name,
        component: ProfileScreen,
        metadata: { 
            type: NavigationTypeConstant.tab, 
            title: "Profile", 
            activeIcon: ProfileIcon, 
            inactiveIcon: ProfileIcon,
            userType: 'both',
            isAuthenticated: true
        }
    },
    {
        path: RouteConstant.profile.edit.path,
        name: RouteConstant.profile.edit.name,
        component: EditProfileScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            isAuthenticated: true
        }
    },
    {
        path: RouteConstant.profile.settings.path,
        name: RouteConstant.profile.settings.name,
        component: SettingsScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            isAuthenticated: true
        }
    },
    {
        path: RouteConstant.profile.editPersonalInformation.path,
        name: RouteConstant.profile.editPersonalInformation.name,
        component: EditPersonalInformationScreen,
        metadata: { 
            type: NavigationTypeConstant.stack,
            isAuthenticated: true
        }
    }
];
