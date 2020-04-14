export default function getTimer(timeStamp: number): number {
    return Date.now() - timeStamp;
}