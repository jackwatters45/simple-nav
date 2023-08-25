import { ReactNode } from 'react';
interface NavButtonProps {
    text: string;
    onClick: () => void;
    icon?: ReactNode;
    iconSize?: number;
    className?: string;
}
declare const NavButton: ({ text, onClick, icon, className }: NavButtonProps) => import("react/jsx-runtime").JSX.Element;
export default NavButton;
//# sourceMappingURL=NavButton.d.ts.map