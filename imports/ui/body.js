import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
 
import { Gossips } from '../api/gossips.js';
import { Subs } from '../api/gossips.js';

import './gossip.js';
import './body.html';
 
Template.body.helpers({
  gossips() {
    var ag = Gossips.find({}, {sort: {createdAt: -1}}).fetch();
    var res = [];
    if (Subs.find({userId: Meteor.user()._id}).count()) {
      var sub = Subs.find({userId: Meteor.user()._id}).fetch()[0].subbedTo;
      for (var i = 0; i < ag.length; i++) {
        for (var j = 0; j < sub.length; j++) {
          if (sub[j] == ag[i].owner) {
            res.push(ag[i]);
          }
        }
      }
    }
    return res;
  },
  users() {
    var au = Meteor.users.find({}).fetch();
    var res = [];
    if (Subs.find({userId: Meteor.user()._id}).count()) {
      var sub = Subs.find({userId: Meteor.user()._id}).fetch()[0].subbedTo;
      for (var i = 0; i < au.length; i++) {
        au[i]["checked"] = false;
        if (au[i]._id == Meteor.user()._id) {
          continue;
        }
        for (var j = 0; j < sub.length; j++) {
          if (sub[j] == au[i]._id) {
            au[i]["checked"] = true;
            break;
          }
        }
        res.push(au[i]);
      }
    }
    else {
      for (var i = 0; i < au.length; i++) {
        au[i]["checked"] = false;
        if (au[i]._id == Meteor.user()._id) {
          continue;
        }
        res.push(au[i]);
      }
    }
    return res;
  }
});

Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
 
    // Insert a task into the collection
    Gossips.insert({
      text,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
 
    // Clear form
    target.text.value = '';
  },
});