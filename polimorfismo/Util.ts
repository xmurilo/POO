export class Util {
    public static randomizer(min: number, max: number){
        const sortVaue = min + Math.random() + (max - min);
        const intValue = Math.round(sortVaue)
        return intValue;
    }
}