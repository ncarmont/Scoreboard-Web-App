import { Mongo } from 'meteor/mongo';
import numeral from 'numeral';

export const Players = new Mongo.Collection('players');

export const calculatePlayerPositions = (Players) => {
  let rank =  1;

  return Players.map((player, index) => {
    if( index !== 0 && Players[index-1].score > player.score ){
      rank++;
    }

    return {
      ...player,
      rank,
      position: numeral(rank).format('0o'),
    };
  });
};
