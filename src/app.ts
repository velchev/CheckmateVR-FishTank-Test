import { GoldFish } from './models/fishes/gold-fish';
import { BabelFish } from './models/fishes/babel-fish';
import express = require('express');
import { Tank } from './models/tank';
import { AngelFish } from './models/fishes/angel-fish';

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {

  let fishTank = new Tank();

  let bf = new AngelFish();
  let bf2 = new BabelFish();
  bf2.Name = 'BabelFish2';
  let gf1 = new GoldFish();
  gf1.Name = 'GoldFish1';
  fishTank.AddFish(bf);
  fishTank.AddFish(bf2);
  fishTank.AddFish(gf1);

  fishTank.AddFishFromJson(`{ "fishType":"af", "name":"Fiko"}`);
  fishTank.AddFishFromJson(`{ "fishType":"gf", "name":"Lyubomir"}`);
  fishTank.AddFishesFromJson(`[{ "fishType":"brightonf", "name":"Veselin"}]`);
  
  var feed = fishTank.Feed();
  res.send(`Calculated Feed is ${feed}`);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});