import { Mongo } from 'meteor/mongo';
 
export const Gossips = new Mongo.Collection('gossips');

export const Subs = new Mongo.Collection('Subs');