declare module "*.svg" {
    import { SvgProps } from "react-native-svg";
    const content: React.StatelessComponent<SvgProps>;

    // const content: React.ComponentType<SvgProps>;
    export default content;
}