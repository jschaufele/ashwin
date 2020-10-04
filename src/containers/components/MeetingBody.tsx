import React from "react";
import { DefaultBody } from "./DefaultBody";
import { Css } from "../styles/globalcss";
import { MeetingTitle } from "./MeetingTitle";

export const MeetingBody = (props) => {

	return (<>
		<div className={Css.tableRow}  >
			<MeetingTitle />
		</div>
		<div className={Css.tableRow} style={{ border: "10px  black solid" }}>
			<DefaultBody />
		</div>
	</>
	)
}
export default MeetingBody;
