import React from "react";
import { Css } from "../styles/globalcss";
import { useRouter } from "next/router";
import NavList from "./NavList";
import { Nav, INavLinkGroup, IRenderFunction, IRenderGroupHeaderProps, getTheme, INavLink, mergeStyles } from "@fluentui/react";
import { LayerHost } from "@fluentui/react";
const handler = ((e, v) => {
	console.log('----e,v--', e, v)
}).bind(this)


interface IProps {

	navItems?: INavLinkGroup[]
	children?: object;
}


const LandingPageworkArea = () => {
	const r = useRouter();

	const navLinkGroups: INavLinkGroup[] = [

		{
			// name: 'Pages',
			links: [
				{ name: 'Reports', url: null, onClick: () => { r.push("/attendees") }, key: 'key1', target: '_blank' },
				{ name: 'Admin', url: 'http://msn.com', key: 'key2', target: '_blank' },
				{ name: 'xActivity', url: null, onClick: () => { r.push("/attendees") }, key: 'key3', target: '_blank' },
				{ name: 'xNews', url: 'http://msn.com', key: 'key4', target: '_blank' },
			],
		},

	];

	const t: IProps = {
		navItems: navLinkGroups
	}

	return (
		<div className={Css.tableCell}>

			<div className={Css.tableWide}>
				<div className={Css.tableRow}>
					<div className={Css.leftMenu + Css.fullFrame + Css.rightBorder}>
						<NavList {...t} />
					</div>
					<div className={Css.tableCell}>
						<div className={Css.tableWide}>

							<div className={Css.tableRow}>
								<div className={Css.tableCell}>
									<div className={Css.applicationGrid} dir="ltr">
										<div className={Css.applicationGridRow}>
											<div className={Css.applicationGridCell}>Landing page work area</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export { LandingPageworkArea };

// <div className={Css.tableWide}>    	<NavList {...t} />	
// <div className={Css.tableRow}>
// 	<div className={Css.leftMenu + Css.fullFrame + Css.rightBorder}>
// 		<NavBasic />
// 	</div>
// 	<div className={Css.tableCell}>
// 		<div className={Css.tableWide}>
// 			<div className={Css.tableRow}>
// 				<div className={Css.commandLineCell}>
// 					<CommandBarDefault />
// 				</div>
// 			</div>
// 			<div className={Css.tableRow}>
// 				<div className={Css.tableCell}>
// 					<div className={Css.applicationGrid} dir="ltr">
// 						<div className={Css.applicationGridRow}>
// 							<div className={Css.applicationGridCell}>app surface</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </div>
// </div>
