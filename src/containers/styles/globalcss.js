import Head from "next/head";
import { getTheme, loadTheme } from "@fluentui/react";

// loadTheme({
// 	palette: {
// 		themePrimary: "#d40031",
// 		themeLighterAlt: "#fdf3f5",
// 		themeLighter: "#f8d0da",
// 		themeLight: "#f2a9ba",
// 		themeTertiary: "#e55c7c",
// 		themeSecondary: "#d91a47",
// 		themeDarkAlt: "#be002c",
// 		themeDark: "#a10026",
// 		themeDarker: "#77001c",
// 		neutralLighterAlt: "#faf9f8",
// 		neutralLighter: "#f3f2f1",
// 		neutralLight: "#edebe9",
// 		neutralQuaternaryAlt: "#e1dfdd",
// 		neutralQuaternary: "#d0d0d0",
// 		neutralTertiaryAlt: "#c8c6c4",
// 		neutralTertiary: "#a19f9d",
// 		neutralSecondary: "#605e5c",
// 		neutralPrimaryAlt: "#3b3a39",
// 		neutralPrimary: "#323130",
// 		neutralDark: "#201f1e",
// 		black: "#000000",
// 		white: "#ffffff",
// 	},
// });
//setTheme(theme, "test");
const theme = getTheme();

const GlobalCssString = `
html,
body {
	padding: 0;
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
		Helvetica Neue, sans-serif;
}

a {
	color: inherit;
	text-decoration: none;
}

* {
	box-sizing: border-box;
}
.table {
	display:table
}

.table-full {
    display:table;
	width: 100%;
	heightx:100vh;
	
}
.table-wide {
    display:table;
	width: 100%;
	height:0;

}
.table-row{
	display:table-row;
	vertical-align:top;
	height:0;
	
}
.table-cell{
	display:table-cell;
	height:0;
	
}
.application-grid-row{
	padding-left:32px;
}

.application-grid-cell{
	display:table-cell;
	margin:0 0 auto;
	height:100vh;
	width:100%;
}

.page-header-tall{
	background-color:${theme.semanticColors.bodyBackground};
	display:table-row;
	height:110px;
	vertical-align:middle;
}
.page-header-logo-lg{
	height:65px;
	width:65px;
	background-color:orange;
	display:inline-block;
	vertical-align:middle;
}
.page-header-logo-sm{
	height:40px;
	width:40px;
	background-color:orange;
	display:inline-block;
	vertical-align:middle;
}
.page-header-logo-cell-lg{
	display:table-cell;
	vertical-align:middle;
	width:110px;
}
.page-header-logo-cell-sm{
	display:table-cell;
	vertical-align:middle;
	width:65px;
}
.page-header-title-cell-lg{
	display:table-cell;
	vertical-align:middle;
	font-size:28;
	color:${theme.palette.neutralPrimary};
}
.page-header-title-cell-sm{
	display:table-cell;
	vertical-align:middle;
	font-size:18;
	color:${theme.palette.neutralPrimary};
}
.page-header-icon-cell{
	vertical-align:middle;
	text-align:center;
	width:40px;
	padding-left:4px;
	padding-right:4px;
}
.page-header-icon-cell-sm{
	vertical-align:middle;
	text-align:center;
	width:40px;
	padding-left:4px;
	padding-right:4px;
}
.page-header-short{
	background-color:${theme.semanticColors.bodyBackground};
	display:table-row;
	height:65;
	vertical-align:middle;
}


.suitebar{
	display:table-row;
	width:100%;
	height:50px;
	background-color:${theme.palette.themePrimary};
}
.suitebar-icon-cell{
	vertical-align:middle;
	text-align:center;
	width:50px;
	height:50px;
	cursor:default
}
.suitebar-icon-cell-active{
	background-color:${theme.semanticColors.bodyBackground}!important;
	
}
.suitebar-icon{
	vertical-align:middle;
	text-align:center;
	font-sise:18;
	color:${theme.semanticColors.bodyBackground};

}
.suitebar-icon-active{
	vertical-align:middle;
	text-align:center;
	font-sise:18;
	color:${theme.palette.themePrimary}!important;
	
}
.suitebar-icon-rollover:hover {
	background: rgba(0,0,0, 0.2);
	transition: .15s;
  
}
.left-menu{
	display:table-cell;
	width:200px;
	background-color:${theme.semanticColors.menuBackground};
	vertical-align:top;
}
.right-border{
	border-right-width:1px;
	border-right-style:solid;
	border-right-color:${theme.palette.neutralLight};
}
.bottom-border{
	border-bottom-width:1px;
	border-bottom-style:solid;
	border-bottom-color:${theme.palette.neutralLight};
}
.command-line-cell{
	background-color:${theme.palette.neutralLighter};
	display:table-cell;
	height:40px;
}

`;

export const Css = {
	tableFull: " table-full ",
	tableWide: " table-wide ",
	tableRow: " table-row ",
	tableCell: " table-cell ",
	applicationGrid: " ms-grid ",
	applicationGridRow: " ms-grid-row application-grid-row",
	applicationGridCell: " ms-Grid-col ms-sm12 application-grid-cell ",
	fullFrame: " ms-hiddenLg  ms-hiddenMd ms-hiddenSm ",
	mediumFrame: " ms-hiddenSm ms-hiddenMd ",
	pageHeaderLg: " ms-hiddenLg  ms-hiddenMd ms-hiddenSm ",
	pageHeaderMd: " ms-hiddenXxxl ms-hiddenXxl ms-hiddenXl ms-hiddenMd ms-hiddenSm ",
	pageHeaderSm: " ms-hiddenXxxl ms-hiddenXxl ms-hiddenXl  ms-hiddenLg ",
	pageHeaderTall: " page-header-tall ",
	pageHeaderShort: " page-header-short ",
	pageHeaderIconCell: " page-header-icon-cell ",
	pageHeaderLogoCellLg: " page-header-logo-cell-lg ",
	pageHeaderLogoCellSm: " page-header-logo-cell-sm",
	pageHeaderLogoLg: " page-header-logo-lg ",
	pageHeaderLogoSm: " page-header-logo-sm ",
	pageHeaderTitleCellLg: " page-header-title-cell-lg ",
	pageHeaderTitleCellSm: " page-header-title-cell-sm ",
	suiteBar: " suitebar ",
	suiteBarIconCell: " table-cell  suitebar-icon-cell suitebar-icon-rollover ",
	suiteBarIconCellEmpty: " table-cell  suitebar-icon-cell ",
	suiteBarIconCellActive: " table-cell  suitebar-icon-cell suitebar-icon-cell-active",
	suiteBarIcon: " suitebar-icon ",
	suiteBarIconActive: " suitebar-icon-active ",
	suiteBarIconRollover: " suitebar-icon-rollover ",
	leftMenu: " left-menu ",
	rightBorder: " right-border ",
	bottomBorder: " bottom-border ",
};

export const GlobalCss = () => {
	console.log("----GlobalCss---->");
	return (
		<Head>
			<style>{GlobalCssString}</style>
		</Head>
	);
};
export default GlobalCss;
