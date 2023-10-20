export class Util {
    static randomize(base: number, limit: number) {
        return Math.round(base + Math.random() * (limit - base));
    }
}