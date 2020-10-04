import React from "react";
import { Css } from "../styles/globalcss";
import CommandBarDefault from "./CommandBar";
import NavBasic from "./LeftMenu";

const handler = ((e, v) => {
	console.log('----e,v--', e, v)
}).bind(this)

const overflow = [
	{ key: "move", text: "Move to...", onClick: (e) => handler(e, "xxx"), iconProps: { iconName: "MoveToFolder" } },
	{ key: "copy", text: "Copy to...", onClick: () => console.log("Copy to"), iconProps: { iconName: "Copy" } },
	{ key: "rename", text: "Rename...", onClick: () => console.log("Rename"), iconProps: { iconName: "Edit" } },
];
const DefaultBody = () => {
	return (
		<div className={Css.tableCell}>

			<div className={Css.tableWide}>
				<div className={Css.tableRow}>
					<div className={Css.leftMenu + Css.fullFrame + Css.rightBorder}>
						<NavBasic />
					</div>
					<div className={Css.tableCell}>
						<div className={Css.tableWide}>
							<div className={Css.tableRow}>
								<div className={Css.commandLineCell}>
									<CommandBarDefault />
								</div>
							</div>
							<div className={Css.tableRow}>
								<div className={Css.tableCell}>
									<div className={Css.applicationGrid} dir="ltr">
										<div className={Css.applicationGridRow}>
											<div className={Css.applicationGridCell}>app surface</div>
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
export { DefaultBody };

// <div className={Css.tableWide}>
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
