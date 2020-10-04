import React, { useContext } from "react";
import { CommandBar, ICommandBarItemProps, memoizeFunction, IContextualMenuStyles } from "@fluentui/react";
import {
	IButtonProps,
	IButtonStyles,
	IContextualMenuItemStyles,
	getTheme,
	CommandBarButton,
	concatStyleSets,
} from "@fluentui/react";
import { langVar } from "../../apollo/cachevars";
import { trans } from "../../i8n";


//onst trans = useContext(i18nContext);
const theme = getTheme();
interface IProps {
	overflow?: ICommandBarItemProps[],
	items?: ICommandBarItemProps[]
}
const CommandBarDefault: React.FunctionComponent<IProps> = (props) => {
	console.log('---props--->', props)//buttonAs={CustomButton}
	return (
		<div>
			<CommandBar
				buttonAs={CustomButton}
				items={props.items}
				styles={{ root: { backgroundColor: theme.palette.neutralLighter } }}
				overflowItems={props.overflow}
				overflowButtonProps={overflowProps}
				farItems={_farItems}
				ariaLabel="Use left and right arrow keys to navigate between commands"
			/>
		</div>
	); //backgroundColor: theme.palette.neutralLighter
};

const itemStyles: Partial<IContextualMenuItemStyles> = {
	label: { fontSize: 14 },
	//	icon: { fontSize: 14, color: theme.palette.neutralPrimary },
	//	iconHovered: { fontSize: 14, color: theme.palette.neutralPrimary },
};
const bstyle: Partial<IButtonStyles> = {
	rootHovered: { fontSize: 14, color: theme.palette.neutralPrimary, backgroundColor: theme.palette.neutralLight },
	root: { fontSize: 14, color: theme.palette.neutralPrimary, backgroundColor: theme.palette.neutralLighter },
};

const getCommandBarButtonStyles = memoizeFunction(
	(originalStyles: IButtonStyles | undefined): Partial<IContextualMenuItemStyles> => {
		if (!originalStyles) {
			return concatStyleSets(itemStyles, bstyle);
		}

		return concatStyleSets(originalStyles, itemStyles, bstyle);
	}
);

const CustomButton: React.FunctionComponent<IButtonProps> = (props) => {
	const buttonOnMouseClick = () => alert(`${props.text} clicked`); //onClick={buttonOnMouseClick} 
	return (
		<CommandBarButton {...props} styles={getCommandBarButtonStyles(props.styles)} />
	);
};

const menuStyles: Partial<IContextualMenuStyles> = {
	subComponentStyles: { menuItem: itemStyles, callout: {} },
};
const overflowProps: IButtonProps = {
	ariaLabel: "More commands",
	styles: bstyle,
	menuProps: {
		styles: menuStyles,
		items: [],
	},
};
const _items: ICommandBarItemProps[] = [
	{
		key: "newItem",
		text: trans(`BASE.NEW`, langVar()),
		cacheKey: "myCacheKey", // changing this key will invalidate this item's cache
		iconProps: { iconName: "Add" },
		//styles: bstyle,
		subMenuProps: {
			styles: menuStyles,
			items: [
				{
					key: "emailMessage",
					text: "Email message",

					["data-automation-id"]: "newEmailButton", // optional
				},
				{
					styles: menuStyles,
					key: "calendarEvent",
					text: "Calendar event",
					iconProps: { iconName: "Calendar" },
				},
			],
		},
	},
	{
		key: "upload",
		text: "Upload",

		iconProps: { iconName: "Upload" },
		href: "https://developer.microsoft.com/en-us/fluentui",
	},
	{
		key: "share",
		text: "Share",
		iconProps: { iconName: "Share" },
		onClick: () => console.log("Share"),
	},
	{
		key: "download",
		text: "Download",
		iconProps: { iconName: "Download" },
		onClick: () => console.log("Download"),
	},
];

const _overflowItems: ICommandBarItemProps[] = [
	{ key: "move", text: "Move to...", onClick: () => console.log("Move to"), iconProps: { iconName: "MoveToFolder" } },
	{ key: "copy", text: "Copy to...", onClick: () => console.log("Copy to"), iconProps: { iconName: "Copy" } },
	{ key: "rename", text: "Rename...", onClick: () => console.log("Rename"), iconProps: { iconName: "Edit" } },
];

const _farItems: ICommandBarItemProps[] = [
	{
		key: "tile",
		text: "Grid view",
		// This needs an ariaLabel since it's icon-only
		ariaLabel: "Grid view",
		iconOnly: true,
		iconProps: { iconName: "Tiles" },
		onClick: () => console.log("Tiles"),
	},
	{
		key: "info",
		text: "Info",
		// This needs an ariaLabel since it's icon-only
		ariaLabel: "Info",
		iconOnly: true,
		iconProps: { iconName: "Info" },
		onClick: () => console.log("Info"),
	},
];
export default CommandBarDefault;
