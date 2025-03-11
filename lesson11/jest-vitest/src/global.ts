/* eslint-disable */
declare global {
    var age: number;
    var testContext: Record<string, unknown>;
}

export function initGlobal(): void {
    globalThis.age = 18;
    globalThis.testContext = {};
}