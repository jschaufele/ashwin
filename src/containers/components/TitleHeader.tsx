import React from "react";
import { Icon } from "@fluentui/react";
import { Css } from "../styles/globalcss";
const meetingTitle = "Page Title";
interface Props {
	title?: string;
	fn?: () => void;
	obj?: {
		f1: string;
	}
}
const TitleHeader: React.FC<Props> = ({ title }) => {
	return (
		<div className={Css.tableCell + Css.bottomBorder}>
			<div className={Css.tableWide}>
				<div className={Css.pageHeaderLg + Css.pageHeaderTall + Css.tableRow}>
					<div className={Css.tableCell} style={{ width: 32 }}></div>

					<div className={Css.pageHeaderLogoCellLg}>
						<div className={Css.pageHeaderLogoLg}></div>
					</div>
					<div className={Css.pageHeaderTitleCellLg}>{title}</div>
					<div className={Css.tableCell}></div>
				</div>
				<div className={Css.pageHeaderMd + Css.pageHeaderTall + Css.tableRow} style={{ textAlign: "left" }}>
					<div className={Css.tableCell + Css.pageHeaderIconCell}>
						<Icon iconName="GlobalNavButton" className={Css.pageHeaderIcon} />
					</div>
					<div className={Css.pageHeaderLogoCellLg} style={{ verticalAlign: "middle" }}>
						<div className={Css.pageHeaderLogoLg}></div>
					</div>

					<div className={Css.pageHeaderTitleCellLg}>xxxx{title}</div>
					<div className={Css.tableCell}>sss</div>
				</div>
				<div className={Css.pageHeaderSm + Css.pageHeaderShort + Css.tableRow}>
					<div className={Css.tableCell + Css.pageHeaderIconCell}>
						<Icon iconName="GlobalNavButton" className={Css.pageHeaderIcon} />
					</div>
					<div className={Css.pageHeaderLogoCellSm}>
						<div className={Css.pageHeaderLogoSm}></div>
					</div>

					<div className={Css.pageHeaderTitleCellSm}>{title}</div>
					<div className={Css.cell}></div>
				</div>
			</div>
		</div>
	);
};
export { TitleHeader };

// <div className={Css.tableCell + Css.bottomBorder}>
// <div className={Css.tableWide}>
// 	<div className={Css.pageHeaderLg + Css.pageHeaderTall}>
// 		<div className={Css.tableCell} style={{ width: 32 }}></div>

// 		<div className={Css.pageHeaderLogoCellLg}>
// 			<div className={Css.pageHeaderLogoLg}></div>
// 		</div>
// 		<div className={Css.pageHeaderTitleCellLg}>{title}</div>
// 		<div className={Css.tableCell}></div>
// 	</div>
// 	<div className={Css.pageHeaderMd + Css.pageHeaderTall}>
// 		<div className={Css.cell + Css.pageHeaderIconCell}>
// 			<Icon iconName="GlobalNavButton" className={Css.pageHeaderIcon} />
// 		</div>
// 		<div className={Css.pageHeaderLogoCellLg} style={{ verticalAlign: "middle" }}>
// 			<div className={Css.pageHeaderLogoLg}></div>
// 		</div>

// 		<div className={Css.pageHeaderTitleCellLg}>{title}</div>
// 		<div className={Css.tableCell}></div>
// 	</div>
// 	<div className={Css.pageHeaderSm + Css.pageHeaderShort}>
// 		<div className={Css.tableCell + Css.pageHeaderIconCell}>
// 			<Icon iconName="GlobalNavButton" className={Css.pageHeaderIcon} />
// 		</div>
// 		<div className={Css.pageHeaderLogoCellSm}>
// 			<div className={Css.pageHeaderLogoSm}></div>
// 		</div>

// 		<div className={Css.pageHeaderTitleCellSm}>{title}</div>
// 		<div className={Css.cell}></div>
// 	</div>
// </div>
// </div>
