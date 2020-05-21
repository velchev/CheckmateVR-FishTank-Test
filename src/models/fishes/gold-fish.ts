import { Fish } from './fish';

export class GoldFish extends Fish{
    public get RequiredFood(): number {
        return 0.1;
    }
}