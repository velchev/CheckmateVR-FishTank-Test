export abstract class Fish {
    private _name: string;
    public abstract RequiredFood: number;

    constructor(){
        this._name = '';
    }
    /**Set the name of the fish */
    public set Name(value: string) {
        this._name = value;
    }

    public get Name(): string {
        return this._name;
    }
}