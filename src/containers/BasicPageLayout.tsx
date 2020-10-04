import React, { useState } from "react";


import { TitleHeader } from "./components/TitleHeader";
import { DefaultBody } from "./components/DefaultBody";
import { Css } from "./styles/globalcss";


export const BasicPageLayout = (props) => {

	return (<>
		<div className={Css.tableRow}  >
			<TitleHeader />
		</div>
		<div className={Css.tableRow} style={{ border: "10px  black solid" }}>
			<DefaultBody />
		</div>
	</>
	)
}
export default BasicPageLayout;


