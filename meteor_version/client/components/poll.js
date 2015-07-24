// attach events to our poll template
Template.poll.events({

  // event to handle clicking a choice
  'click .vote': function(event) {

    // prevent the default behavior
    event.preventDefault();
  
    // get the parent (poll) id
    var pollID = $(event.currentTarget).parent('.poll').data('id');
    var voteID = $(event.currentTarget).data('id');

    // create the incrementing object so we can add to the corresponding vote
    var voteString = 'choices.' + voteID + '.votes';
    var action = {};
    action[voteString] = 1;
    
    // increment the number of votes for this choice
    Polls.update(
      { _id: pollID }, 
      { $inc: action }
    );

  },

  'click .remove': function(event){
    console.log('clicked on remove');
    event.preventDefault();

    var pollElem = $(event.currentTarget).parent('.poll');
    var pollID = $(event.currentTarget).parent('.poll').data('id');
    console.log('pollID: '+pollID);
    console.log(pollElem);
    $(pollElem[0]).delay(5000).fadeOut(400);
    Polls.remove(
      { _id: pollID }
    );

  }

});