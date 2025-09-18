import { CommonActions, createNavigationContainerRef } from '@react-navigation/native';
import { RouteKeys, RootStackParamList } from './type/RouteType';
import { RouteConstant } from './constant/RouteConstant';
import { routes } from '../router/routes';
import { NavigationTypeConstant } from './constant/NavigationTypeConstant';

export type RouteItem = {
    path: string;
    name: string;
}

// Navigation reference
export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export class RouterUtil {
    /**
     * Get route information by path
     */
    static getRouteInfo(path: string): RouteItem | null {
        const route = routes.find(r => r.path === path);
        if (route) {
            return {
                path: route.path,
                name: route.name
            };
        }
        return null;
    }

    /**
     * Get current route name
     */
    static getCurrentRoute(): string | undefined {
        return navigationRef.getCurrentRoute()?.name;
    }

    /**
     * Navigate back
     */
    static goBack(): void {
        if (navigationRef.isReady() && navigationRef.canGoBack()) {
            navigationRef.goBack();
        }
    }

    /**
     * Check if can go back
     */
    static canGoBack(): boolean {
        return navigationRef.isReady() ? navigationRef.canGoBack() : false;
    }

    /**
     * Navigate to a screen by name
     */
    static navigateByName<T extends RouteKeys>(name: T, params?: RootStackParamList[T]): void {
        if (navigationRef.isReady()) {
            navigationRef.navigate(name as string, params);
        }
    }

    /**
     * Navigate to a screen by path
     */
    static navigateByPath(path: string, params?: any): void {
        if (!navigationRef.isReady()) return;
        
        const routeInfo = this.getRouteInfo(path);
        if (!routeInfo) {
            console.warn(`Route not found for path: ${path}`);
            return;
        }

        // Navigate directly to the screen - no special MainApp handling needed
        navigationRef.navigate(routeInfo.name as string, params);
    }

    /**
     * Push a new screen onto the stack
     */
    static push<T extends RouteKeys>(name: T, params?: RootStackParamList[T]): void {
        if (navigationRef.isReady()) {
            navigationRef.dispatch(
                CommonActions.navigate({
                    name: name as string,
                    params,
                })
            );
        }
    }

    /**
     * Reset navigation stack
     */
    static reset(routeName: string, params?: any): void {
        if (navigationRef.isReady()) {
            navigationRef.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: routeName, params }],
                })
            );
        }
    }

    /**
     * Navigate to a specific route by constant (path-based)
     */
    static navigateToRoute(routeKey: string, params?: any): void {
        const path = this.getRoutePath(routeKey);
        if (path) {
            this.navigateByPath(path, params);
        } else {
            console.warn(`Route path not found for key: ${routeKey}`);
        }
    }

    /**
     * Get route path by key
     */
    static getRoutePath(routeKey: string): string | null {
        const [category, route] = routeKey.split('.');
        const routeConstant = (RouteConstant as any)[category]?.[route];
        return routeConstant?.path || null;
    }

    private static getRouteInfoFromKey(routeKey: string): RouteItem | null {
        const [category, route] = routeKey.split('.');
        const routeConstant = (RouteConstant as any)[category]?.[route];
        if (routeConstant && typeof routeConstant.path === 'string') {
            return { path: routeConstant.path, name: routeConstant.name } as RouteItem;
        }
        return null;
    }

    /**
     * Check if route exists
     */
    static routeExists(routeKey: string): boolean {
        return this.getRoutePath(routeKey) !== null;
    }

    /**
     * Main navigation method - uses path-based navigation
     * Usage: RouterUtil.navigate("stack/auth/signup") or RouterUtil.navigate("auth.signup")
     */
    static navigate(pathOrKey: string, params?: any): void {
        if (!navigationRef.isReady()) return;

        // If direct path like "stack/..." or "tab/..."
        if (pathOrKey.includes('/')) {
            this.navigateByPath(pathOrKey, params);
            return;
        }

        // Dotted key like "dashboard.home"
        const routeInfo = this.getRouteInfoFromKey(pathOrKey);
        if (!routeInfo) {
            console.warn(`Route path not found for key: ${pathOrKey}`);
            return;
        }

        // Navigate directly to the screen - simplified approach
        navigationRef.navigate(routeInfo.name as string, params);
    }
}
