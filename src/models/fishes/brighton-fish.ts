import { Fish } from "./fish";

export class BrightonFish extends Fish{
    public get RequiredFood(): number {
        return 3.3;
    }
}