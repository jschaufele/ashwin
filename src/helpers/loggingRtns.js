import log from "loglevel";
import prefix from "loglevel-plugin-prefix";
import chalk from "chalk";
const colors = {
	TRACE: chalk.magenta,
	DEBUG: chalk.cyan,
	INFO: chalk.blue,
	WARN: chalk.yellow,
	ERROR: chalk.red,
};
prefix.reg(log);
prefix.apply(log, {
	format(level, name, timestamp) {
		return `${chalk.gray(`[${timestamp}]`)} ${colors[level.toUpperCase()](level)} ${chalk.green(`${name}:`)}`;
	},
});

log.enableAll();

// log.disableAll()
// log.getLevel()
// log.setDefaultLevel(level)
export const TRACE = (...args) => {
	log.trace(...args);
};
export const DEBUG = (...args) => {
	log.debug(...args);
};
export const ERROR = (...args) => {
	log.error(...args);
};
export const WARN = (...args) => {
	log.warn(...args);
};
export function INFO(...args) {
	log.info(...args);
}
