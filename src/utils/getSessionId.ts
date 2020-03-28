/**
 * 生成会话ID
 *
 * @return 随机码
 */
export default function getSessionId(): string {
    let sessionId: string;
    const date: Date = new Date();
    // tslint:disable-next-line: max-line-length
    sessionId = String(date.getTime()) + String(1000 + date.getMilliseconds()) + String(Math.floor(Math.random() * 9000) + 1000);
    return sessionId;
}