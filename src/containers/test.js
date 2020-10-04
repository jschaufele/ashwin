import React, { useState } from "react";
import CSSHeader from "./styles/fluentcss";
import { Icon } from "@fluentui/react";

const Test = () => {
	return (
		<>
			<div className="table100Perc">
				<Icon iconName="Waffle" style={{ fontSize: 25 }} />
				<Icon iconName="Ringer" style={{ fontSize: 25 }} />
			</div>
		</>
	);
};
export default Test;
