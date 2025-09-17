import { RouteItem } from "@/utility/type/RouteType"

export type RouteConstantType = {
    [key: string]: {
        [key: string]: RouteItem
    }
}

export const RouteConstant = {
    auth: {
        login: {
            path: "stack/auth/login",
            name: "Login"
        },
        signup: {
            path: "stack/auth/signup",
            name: "SignUp"
        },
        onboarding: {
            path: "stack/auth/onboarding",
            name: "AuthOnboarding"
        },
        forgotPassword: {
            path: "stack/auth/forgot-password",
            name: "ForgotPassword"
        },
        resetPassword: {
            path: "stack/auth/reset-password",
            name: "ResetPassword"
        }
    },
    onboarding: {
        splash: {
            path: "stack/onboarding/splash",
            name: "splash"
        },
        initiate: {
            path: "stack/onboarding/initiate",
            name: "initiate"
        },
        complete: {
            path: "stack/onboarding/complete",
            name: "complete"
        }
    },
    dashboard: {
        home: {
            path: "tab/dashboard/home",
            name: "home"
        },
        history: {
            path: "stack/dashboard/history",
            name: "history"
        },
        notifications: {
            path: "stack/dashboard/notifications",
            name: "notifications"
        },
        favorites: {
            path: "tab/dashboard/favorites",
            name: "favorites"
        },
        categories: {
            path: "stack/dashboard/categories",
            name: "categories"
        }
    },
    cart: {
        main: {
            path: "tab/cart/main",
            name: "cart"
        },
        checkout: {
            path: "stack/cart/checkout",
            name: "checkout"
        }
    },
    favorites: {
        main: {
            path: "tab/favorites/main",
            name: "favoritesMain"
        }
    },
    profile: {
        main: {
            path: "tab/profile/main",
            name: "profile"
        },
        edit: {
            path: "stack/profile/edit",
            name: "editProfile"
        },
        settings: {
            path: "stack/profile/settings",
            name: "settings"
        },
        editPersonalInformation: {
            path: "stack/profile/edit-personal-information",
            name: "editPersonalInformation"
        }
    },
    earning: {
        main: {
            path: "tab/earning/main",
            name: "earning"
        },
        details: {
            path: "stack/earning/details",
            name: "earningDetails"
        },
        withdraw: {
            path: "stack/earning/withdraw",
            name: "withdraw"
        }
    },
    funding: {
        main: {
            path: "tab/funding/main",
            name: "funding"
        },
        addCard: {
            path: "stack/funding/add-card",
            name: "addCard"
        },
        paymentMethods: {
            path: "stack/funding/payment-methods",
            name: "paymentMethods"
        }
    },
    drawer: {
        menu: {
            path: "drawer/menu",
            name: "drawerMenu"
        }
    },
    main: {
        app: {
            path: "MainApp",
            name: "MainApp"
        }
    }
} as const