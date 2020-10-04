import React, { useState } from "react";
import { DefaultButton, PrimaryButton, Panel, getTheme, loadTheme } from "@fluentui/react";



import { mergeStyles } from "@uifabric/merge-styles";
import CSS from "csstype";
// darken suitebar #004D88

const theme = getTheme()
console.log("--->theme-->", theme)

const table = mergeStyles({
	backgroundColor: "#0078D4",
	display: "table",
	height: 50,
	width: "100%"

})
const row = mergeStyles({
	display: "table-row",

})
const cell = mergeStyles({
	display: "table-cell",



})

const suiteBarGtr640 = mergeStyles("ms-hiddenSm ms-hiddenMd  ", {

	display: "table-row",
	backgroundColor: "#8EE3EF",

})

const suiteBar640 = mergeStyles("ms-hiddenXxxl ms-hiddenXxl ms-hiddenXl  ms-hiddenLg ", {

	display: "table-row",
	backgroundColor: "purple",

})



const AppBar: React.FunctionComponent = (props) => {
	return (
		<div className={table} >
			<div className={suiteBarGtr640} >

				<div className={cell} >
					SuiteBarGtr640
				</div>

			</div>
			<div className={suiteBar640} >

				<div className={cell} >
					SuiteBar 640
				</div>

			</div>
		</div>
	);
};
export default AppBar;
