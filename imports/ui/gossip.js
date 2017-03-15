import { Template } from 'meteor/templating';
 
import { Gossips } from '../api/gossips.js';

import { Subs } from '../api/gossips.js';
 
import './gossip.html';

import './user.html';
 
Template.gossip.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Gossips.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Gossips.remove(this._id);
  },
});

Template.user.events({
  // update the collection in case the current user subscribes to other users
  'click .toggle-checked'() {
    var cc = Subs.find({userId: Meteor.user()._id}).count();
    if (!cc) {
      Subs.insert({userId: Meteor.user()._id, subbedTo: [this._id]});
    }
    else {
      var uid = Meteor.user()._id;
      var cid = Subs.find({userId: uid}).fetch()[0];
      var ccc = Subs.find({_id: cid._id, subbedTo: this._id}).count();
      if (!ccc) {
        Subs.update({_id: cid._id}, {$push: {subbedTo: this._id}});
      }
      else {
        Subs.update({_id: cid._id}, {$pull: {subbedTo: this._id}});
      }
    }
  },
});