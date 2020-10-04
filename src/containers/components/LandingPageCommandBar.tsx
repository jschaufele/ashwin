import React from "react";
import { Css } from "../styles/globalcss";
import CommandBarDefault from "./CommandBar";

import { trans } from "../../i8n";

const items = [
	{
		key: "newItem",
		text: trans(`MEETING.CREATE_MEETING`),
		iconProps: { iconName: "Add" },
	},



];

const LandPageCommandBar = () => {
	return (
		<div className={Css.tableCell}>
			<div className={Css.commandLineCell}>
				<CommandBarDefault items={items} />
			</div>
		</div>
	);
};
export { LandPageCommandBar };

