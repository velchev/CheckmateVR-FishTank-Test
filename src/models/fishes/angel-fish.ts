import { Fish } from './fish';

export class AngelFish extends Fish {
    public get RequiredFood(): number {
        return 0.2;
    }
}