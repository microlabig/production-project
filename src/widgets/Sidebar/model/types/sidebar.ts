import React from 'react';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
            title?: string;
        }
    >;
    authOnly?: boolean;
}
