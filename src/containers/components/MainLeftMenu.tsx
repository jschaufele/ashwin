import * as React from "react";
import { DefaultButton } from "office-ui-fabric-react/lib/Button";
import { Panel, PanelType } from "@fluentui/react";
import { useConstCallback } from "@uifabric/react-hooks";
import { getTheme, IStyleFunctionOrObject } from "@fluentui/react";
import NavBasic from "./LeftMenu"
const explanation =
	'This panel uses "light dismiss" behavior: it can be closed by clicking or tapping ' +
	"the area outside the panel (or using the close button as usual).";

const MainLeftMenu: React.FunctionComponent = (props) => {
	console.log('--->props-->', props)

	const [isOpen, setIsOpen] = React.useState(false);

	const openPanel = useConstCallback(() => setIsOpen(true));
	const dismissPanel = useConstCallback(() => setIsOpen(false));
	const theme = getTheme();
	//const styles: IStyleFunctionOrObject<IPanelStyleProps>;// = { isOnRightSide: true, theme: getTheme() };

	return (
		<div>
			{explanation}
			<br />
			<br />
			<DefaultButton text="Open panel" onClick={openPanel} />
			<Panel
				isLightDismiss
				isOpen={isOpen}
				onDismiss={dismissPanel}
				closeButtonAriaLabel="Close"
				headerText="Light dismiss panel"
				type={PanelType.smallFixedNear}

			//style={style}
			>

				<NavBasic />
			</Panel>
		</div>
	);
};

export default MainLeftMenu;
