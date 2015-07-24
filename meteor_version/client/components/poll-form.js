Template.pollForm.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newPoll = {
      RecipeName: event.target.RecipeName.value,
      choices: [
        {  text: event.target.MealType.value },
        {  text: event.target.PrepTime.value },
        {  text: event.target.CookTime.value },
        {  text: event.target.Servings.value },
        {  text: event.target.Ingredients.value },
        {  text: event.target.Instructions.value }
      ]
    };    
     
    // create the new poll
    Polls.insert(newPoll);
  }

});