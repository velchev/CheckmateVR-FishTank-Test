import { Tank } from "../src/models/tank";
import { BabelFish } from "../src/models/fishes/babel-fish";
import { AngelFish } from "../src/models/fishes/angel-fish";
import { GoldFish } from "../src/models/fishes/gold-fish";

describe("Required Food Calculation when 3 angle fish", () => {
    let fishTank = new Tank();
    let af = new AngelFish();
    af.Name = "AngelFish";
    fishTank.AddFish(af);
    fishTank.AddFish(af);
    fishTank.AddFish(af);

    it("should require 0.6 mg food.", () => {
        var feed = fishTank.Feed();
        expect(feed).toBe(0.6);
    });
}
);

describe("Required Food Calculation when all types of fish", () => {
    let fishTank = new Tank();

    let af = new AngelFish();
    af.Name = "AngelFish1";
    let bf = new BabelFish();
    bf.Name = "BabelFish";
    let gf = new GoldFish();
    gf.Name = "GoldFish";

    fishTank.AddFish(af);
    fishTank.AddFish(bf);
    fishTank.AddFish(gf);

    it("should require 0.6 mg food.", () => {
        var feed = fishTank.Feed();
        expect(feed).toBe(0.6);
    });
}
);

describe("When Using JSON with 1 fish of type Angel", () => {
    let fishTank = new Tank();
    fishTank.AddFishFromJson(`{ "fishType":"af", "name":"Fiko"}`);
    it("the returned required food should be 0.2.", () => {
        var feed = fishTank.Feed();
        expect(feed).toBe(0.2);
    });
}
);

describe("When Using JSON with all types of fishes in it", () => {
    let fishTank = new Tank();
    fishTank.AddFishesFromJson(`[
        { "fishType":"af", "name":"Fiko"},
        { "fishType":"bf", "name":"Damian"},
        { "fishType":"gf", "name":"Lyubomir"}
    ]`);
    it("the returned required food should be 0.6.", () => {
        var feed = fishTank.Feed();
        expect(feed).toBe(0.6);
    });
}
);

describe("When Using JSON with 1 fish of type which is not supported", () => {
    let fishTank = new Tank();
    fishTank.AddFishFromJson(`{ "fishType":"some type", "name":"Fiko"}`);
    it("the returned required food should be 0.", () => {
        var feed = fishTank.Feed();
        expect(feed).toBe(0);
    });
}
);