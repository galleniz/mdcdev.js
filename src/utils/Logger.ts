import chalk from 'chalk';

export enum LogLevel {
    INFO = 'INFO',
    WARNING = 'WARNING',
    ERROR = 'ERROR',
}

export class LoggerXD {
    private static getTimeStamp(): string {
        const now = new Date();
        return now.toLocaleString();
    }

    private static log(level: LogLevel, message: string): void {

        const logLevelColors = {
            [LogLevel.INFO]: chalk.blue,
            [LogLevel.WARNING]: chalk.yellow,
            [LogLevel.ERROR]: chalk.red,
        };

        const logLevelColorsBg = {
            [LogLevel.INFO]: chalk.bgBlue,
            [LogLevel.WARNING]: chalk.bgYellow,
            [LogLevel.ERROR]: chalk.bgRed,
        };


        const logLevelColor = logLevelColors[level] || chalk.white;
        const logLevelColorBg = logLevelColorsBg[level] || chalk.white;
        // [${chalk.green(LoggerXD.getTimeStamp())}${chalk.reset()}] ${logLevelColorBg(chalk.white(`[${level}]`))} ${chalk.reset()}${level === LogLevel.ERROR || level === LogLevel.WARNING?logLevelColor(message) : message}
        //
        
        console.log(`[${chalk.green(LoggerXD.getTimeStamp())}] [${logLevelColor(`${level}`)}]: ${["ERROR", "WARNING"].includes(level) ? logLevelColor(message) : message}`);
    }
    
    static info(message: string): void {
        LoggerXD.log(LogLevel.INFO, message);
    }

    static warning(message: string): void {
        LoggerXD.log(LogLevel.WARNING, message);
    }

    static error(message: string): void {
        LoggerXD.log(LogLevel.ERROR, message);
    }
}
export default LoggerXD