import { ReactNode } from 'react';
export declare const StyledNavLi: import("styled-components").IStyledComponent<"web", "li", {}, never>;
interface NavLinkProps {
    text: string;
    to: string;
    icon?: ReactNode;
    className?: string;
}
declare const NavLink: ({ text, to, icon, className }: NavLinkProps) => JSX.Element;
export default NavLink;
//# sourceMappingURL=NavLink.d.ts.map