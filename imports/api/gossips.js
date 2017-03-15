import { Mongo } from 'meteor/mongo';

// Collection to store gossips
export const Gossips = new Mongo.Collection('gossips');

// Collection to store the list of users a user has subscribed to following one to many relationship
export const Subs = new Mongo.Collection('Subs');