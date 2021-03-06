import React from 'react';
import { Nav, INavLinkGroup, IRenderFunction, IRenderGroupHeaderProps, getTheme, INavLink, mergeStyles } from "@fluentui/react";
const theme = getTheme()
const navLinkGroups: INavLinkGroup[] = [

    {
        // name: 'Pages',
        links: [
            { name: 'Activity', url: '#', key: 'key1', target: '_blank' },
            { name: 'News', url: 'http://msn.com', key: 'key2', target: '_blank' },
        ],
    },
    // {
    //     name: 'More pages',
    //     links: [
    //         { name: 'Settings', url: 'http://msn.com', key: 'key3', target: '_blank' },
    //         { name: 'Notes', url: 'http://msn.com', key: 'key4', target: '_blank' },
    //     ],
    // },
];

const NavBasic: React.FunctionComponent = () => {
    return (
        <Nav
            // styles={{ link: { backgroundColor: '#232b2b', selectors: { ":hover": { backgroundColor: "red" } } } }}
            styles={{

                linkText: {
                    color: theme.palette.neutralPrimary,
                    fontSize: 14

                },
                link: {
                    selectors: {
                        "::after": { borderLeftColor: theme.palette.neutralSecondary }
                    }
                },
                // chevronButton: {},
                // chevronIcon: { color: theme.semanticColors.bodyBackground }
            }}

            onRenderGroupHeader={_onRenderGroupHeader}
            ariaLabel="Nav example with custom group headers"
            groups={navLinkGroups}
            selectedKey="key1"
        />
    );
};


const _onRenderGroupHeader: IRenderFunction<IRenderGroupHeaderProps> = props => {
    const n = props?.name;
    const groupClass = mergeStyles({
        display: "block",
        paddingLeft: 28,
        paddingRight: 6,
        paddingTop: 1,
        paddingBottom: 1,
        margin: "0 0 auto",

        borderBottomWidth: 1,
        borderBottomColor: theme.palette.neutralLight,
        borderBottomStyle: "solid",
        fontSize: 18,
        // fontStretch: "normal",
        height: 44,
        position: "relative",


    })
    return (
        <div className={groupClass}><div style={{ paddingTop: 5, display: "inline-block", margin: 0, verticalAlign: "middle" }}  >{n}</div></div>
    )

}

export default NavBasic