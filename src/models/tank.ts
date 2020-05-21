import { Fish } from "./fishes/fish";
import { FishFactory } from "../fish-factory";
import { FishInputJsonFormat } from "./fish-input-json-format";

export class Tank {
    private _fishes: Fish[] = [];

    public AddFish(fish: Fish) {
        this._fishes.push(fish);
    }

    /** how much food to put in the tank  */
    public Feed(): number {
        let sum: number = 0;
        this._fishes.forEach(x => {
            if (x.RequiredFood) {
                sum = parseFloat((sum + x.RequiredFood).toFixed(2));// Number of places, rounded.
            }
        });

        return sum;
    }

    /** adds one fish to tank's collection */
    public AddFishFromJson(data: string) {
        let obj = <FishInputJsonFormat>JSON.parse(data);
        if (obj) {
            let factory = new FishFactory();
            this.AddFish(factory.CreateInstance(obj.fishType, obj.name));
        }
    }

    /** adds many fishes to tank's collection */
    public AddFishesFromJson(data: string) {
        let list = <FishInputJsonFormat[]>JSON.parse(data);
        if (list) {
            let factory = new FishFactory();
            list.forEach(element => {
                this.AddFish(factory.CreateInstance(element.fishType, element.name));
            });
        }
    }
}