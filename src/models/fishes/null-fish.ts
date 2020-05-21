import { Fish } from "./fish";

export class NullFish extends Fish {
    public get RequiredFood(): number {
        return 0.0;
    }
    constructor(){
        super();
        this.Name = "NullFish";
    }
}