import chalk from 'chalk';

enum LogLevel {
    INFO = 'info',
    WARN = 'warn',
    ERROR = 'error',
}
class Log {
    private logLevel: LogLevel;

    constructor(logLevel: LogLevel = LogLevel.INFO) {
        this.logLevel = logLevel;
    }

    public log(message: string, color: chalk.Chalk): void {
        // time stamp with this format: [DD/MM/YYYY HH:MM:SS]
        const time = chalk.gray(`[${new Date().toLocaleString()}]`);
        console.log(`${time} ${color(message)}`);
    }

    info(message: string): void {
        if (this.logLevel === LogLevel.INFO) {
            this.log(message, chalk.blue);
        }
    }

    warn(message: string): void {
        if (this.logLevel === LogLevel.INFO || this.logLevel === LogLevel.WARN) {
            this.log(message, chalk.yellow);
        }
    }

    error(message: string): void {
        this.log(message, chalk.red);
    }
}

export default {
    warn: (message: string) => new Log(LogLevel.WARN).warn(message),
    error: (message: string) => new Log(LogLevel.ERROR).error(message),
    info: (message: string) => new Log().info(message),
    log: (message: string) => new Log().log(message, chalk.hex(`#${Math.floor(Math.random()*16777215).toString(16)}`) )


}
