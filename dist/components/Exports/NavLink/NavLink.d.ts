import { ReactNode } from 'react';
interface NavLinkProps {
    text: string;
    showText?: boolean;
    to: string;
    icon?: ReactNode;
    className?: string;
}
declare const NavLink: ({ text, showText, to, icon, className }: NavLinkProps) => JSX.Element;
export default NavLink;
//# sourceMappingURL=NavLink.d.ts.map