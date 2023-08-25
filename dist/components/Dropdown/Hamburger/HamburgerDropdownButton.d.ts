import { ButtonOptions } from '../../../../types/ButtonProps.d';
interface Props extends ButtonOptions {
    isOpen: boolean;
    toggleIsOpen: () => void;
    dataTestid?: string;
}
declare const HamburgerDropdownButton: ({ text, isOpen, toggleIsOpen, dataTestid }: Props) => import("react/jsx-runtime").JSX.Element;
export default HamburgerDropdownButton;
//# sourceMappingURL=HamburgerDropdownButton.d.ts.map