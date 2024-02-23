import chalk from 'chalk';

export enum LogLevel {
    INFO = 'INFO',
    WARNING = 'WARNING',
    ERROR = 'ERROR',
}

export class LoggerXD {
    private static getTimeStamp(): string {
        const now = new Date();
        return now.toISOString();
    }

    private static log(level: LogLevel, message: string): void {

        const logLevelColors = {
            [LogLevel.INFO]: chalk.blue,
            [LogLevel.WARNING]: chalk.yellow,
            [LogLevel.ERROR]: chalk.red,
        };

        const logLevelColor = logLevelColors[level] || chalk.white;
        const logMessage = `${LoggerXD.getTimeStamp()} [${level}]: ${message}`;

        console.log(logLevelColor(logMessage));
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
