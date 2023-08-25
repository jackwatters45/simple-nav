import { AnchorHTMLAttributes, ReactNode } from 'react';
interface CustomNavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    text: string;
    showText?: boolean;
    to: string;
    icon?: ReactNode;
    className?: string;
    dataTestid?: string;
    isActive?: boolean;
    end?: boolean;
}
declare const NavLink: ({ text, showText, to, icon, className, dataTestid, isActive, end, ...props }: CustomNavLinkProps) => import("react/jsx-runtime").JSX.Element;
export default NavLink;
//# sourceMappingURL=NavLink.d.ts.map