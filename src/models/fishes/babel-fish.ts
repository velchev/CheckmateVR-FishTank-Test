import { Fish } from './fish';

export class BabelFish extends Fish {
    public get RequiredFood(): number {
        return 0.3;
    }
}