import React from "react";
import { SuiteBar } from "./components/SuiteBar";
import { LandingPageBody } from "./components/LandingPageBody"
import { Css } from "./styles/globalcss";
import { LayerHost } from "@fluentui/react";


export const BaseLayout = (props) => {
	console.log('----props children--->', props.children)
	const PageBody = props.children ? props.children : LandingPageBody
	return (


		<div className={Css.tableFull} >
			<div className={Css.tableRow} >
				<SuiteBar />
			</div>

			<div className={Css.tableRow} id="main_layerxx" >
				<div className={Css.tableCell} >

					<LayerHost id="main_layer" className={Css.tableWide} style={{ position: "relative" }}>
						<div className={Css.tableWide} >
							<PageBody />
						</div>
					</LayerHost>
				</div>
			</div>
		</div>
	)
}
export default BaseLayout;


