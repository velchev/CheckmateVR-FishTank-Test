import { BrightonFish } from './models/fishes/brighton-fish';
import { NullFish } from './models/fishes/null-fish';
import { BabelFish } from './models/fishes/babel-fish';
import { Fish } from "./models/fishes/fish";
import { AngelFish } from './models/fishes/angel-fish';
import { GoldFish } from './models/fishes/gold-fish';

export class FishFactory{
    private _fishMap = new Map<string, Fish>();
    constructor(){
        this._fishMap.set("bf", new BabelFish());
        this._fishMap.set("af", new AngelFish());
        this._fishMap.set("gf", new GoldFish());
        this._fishMap.set("brightonf", new BrightonFish());
    }

    public CreateInstance(fishType:string, fishName:string):Fish{
        let newFish = this._fishMap.get(fishType);
        if(newFish)
        {
            newFish.Name = fishName;
            return newFish;
        }
        return new NullFish();
    }
}