import React, { useState, useReducer } from "react";
import { Icon } from "@fluentui/react";
import { Css } from "../styles/globalcss";
import { IFocusTrapZoneProps } from '@fluentui/react';
import { useId, useBoolean } from '@uifabric/react-hooks';
import { urlRedirect } from "../../helpers/utilities";
import { PagesInfo } from "../../helpers/constants/pagenames";
import { Loadingthrobber } from "../../blocks/loadingthrobber";
import UserProfilePanel from "./UserProfilePanel"
import { useRouter } from "next/router";
import { userVar } from "../../apollo/cachevars";
import { LayerHost } from "@fluentui/react";
export const SuiteBar = () => {
	const onLogoutClick = (e) => {
		urlRedirect(PagesInfo.Logout);
		return (
			<>
				<Loadingthrobber />
			</>
		)
	};
	var r = useRouter()
	const onGoto = (e) => {

		r.push(PagesInfo.Attendees.Relative)

		return (
			<>
				<Loadingthrobber />
			</>
		)
	};
	const focusTrapZoneProps: IFocusTrapZoneProps = {
		isClickableOutsideFocusTrap: true,
		forceFocusInsideTrap: true,
	};

	const contactOnclick = ((e) => { e.preventDefault(); openPanel ? setOpenPanel(false) : setOpenPanel(true); e.stopPropagation; }).bind(this)

	const [openPanel, setOpenPanel] = useState(false)
	return (<>
		<div className={Css.tableCell}>
			<div className={Css.tableWide}>
				<div className={Css.suiteBar}>
					<div className={Css.suiteBarIconCell}>
						<Icon iconName="Waffle" className={Css.suiteBarIcon} style={{ fontSize: 25 }} onClick={() => { r.push(PagesInfo.Dashboard.Relative) }} />
					</div>
					<div className={Css.tableCell} style={{ verticalAlign: "middle" }}>
					</div>
					<div className={Css.suiteBarIconCellEmpty}></div>
					<div className={Css.tableCell + Css.suiteBarIconCell} onClick={onLogoutClick}>
						<Icon iconName="Ringer" className={Css.suiteBarIcon} />
					</div>
					<div className={Css.suiteBarIconCell} onClick={onGoto}>
						<Icon iconName="Settings" className={Css.suiteBarIcon} />
					</div>
					<div className={Css.suiteBarIconCell}>
						<Icon iconName="Help" className={Css.suiteBarIcon} />
					</div>
					<div className={openPanel ? Css.suiteBarIconCellActive : Css.suiteBarIconCell} onClick={contactOnclick}>
						<Icon iconName="Contact" className={openPanel ? Css.suiteBarIconActive : Css.suiteBarIcon} />
					</div>
				</div>
			</div>

		</div>

		<UserProfilePanel userId={userVar} panelState={openPanel} />
	</>
	);
};
export default SuiteBar;

// suiteBarIconCellActive  suiteBarIconCell<div className={Css.suiteBarIconCell} onClick={() => state.isPanelOpen ? dispatchPanel({ type: "hide" }) : dispatchPanel({ type: "show" })}>
// <Icon iconName="Contact" className={Css.suiteBarIcon} />
// </div>

