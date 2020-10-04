import React from "react";
import { LandingPageworkArea } from "./LandingPageWorkArea";
import { Css } from "../styles/globalcss";
import { LandPageCommandBar } from "./LandingPageCommandBar"

export const LandingPageBody = (props) => {

	return (<>
		<div className={Css.tableRow} >
			<LandPageCommandBar />
		</div>
		<div className={Css.tableRow} style={{ border: "10px  black solid" }}>
			<LandingPageworkArea />
		</div>
	</>
	)
}
export default LandingPageBody;

