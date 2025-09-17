export const themeColors = {
    DEFAULT: {
        palette: {
            primary: {
                main: "rgba(11, 122, 95, 1)",
                light: "rgba(11, 122, 95, 0.5)",
                lighter: "rgba(11, 122, 95, 0.4)",
                dark: "rgba(11, 122, 95, 1)"
            },
            text: {
                main: "#333333",
                light: "#8E8E93",
                dark: "#000000",
                accent: "#546F9E"
            },
            bg: {
                body: "#F7F7F7",
                card: "#FFFFFF",
                input: "#F3F5F8"
            }
        }
    }
};

export const getThemeColors = () => {
    const appType = process.env.EXPO_PUBLIC_APP_TYPE;
    return  themeColors.DEFAULT;
};