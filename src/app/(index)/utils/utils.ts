export function genNodeId(): string {
    return Math.random().toString(36).slice(-8);
}

export function transformUtcDateToJstWithMinutes() {
    let date: Date = new Date();
    let year: number = date.getFullYear();
    let month: string = ('0' + (date.getMonth() + 1)).slice(-2);
    let day: string = ('0' + date.getDate()).slice(-2);
    let hours: string = ('0' + date.getHours()).slice(-2);
    let minutes: string = ('0' + date.getMinutes()).slice(-2);
    let seconds: string = ('0' + date.getSeconds()).slice(-2);
    return {
        year: year,
        month: month,
        day: day,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}
