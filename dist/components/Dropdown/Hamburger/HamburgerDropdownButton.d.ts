/// <reference types="react" />
import { ButtonOptions } from '../../../../types/ButtonProps.d';
interface Props extends ButtonOptions {
    isOpen: boolean;
    toggleIsOpen: () => void;
}
declare const HamburgerDropdownButton: ({ className, text, isOpen, toggleIsOpen }: Props) => JSX.Element;
export default HamburgerDropdownButton;
//# sourceMappingURL=HamburgerDropdownButton.d.ts.map