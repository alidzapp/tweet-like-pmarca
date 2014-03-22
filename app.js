App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return Ember.Object.create({text: "I love beez"});
  }
});

App.IndexController = Ember.Controller.extend({
  tweets: Ember.computed(function(){
    return this.splitText(this.get('model.text'));
  }).property('model.text'),

  splitText: function(text){
    var text = this.get('model.text'),
      fragments = text.split(' '),
      length = text.length,
      tweets = [],
      newTweet = fragments.shift(),
      tweetNumber;
    fragments.forEach(function(fragment, i){
      tweetNumber = tweets.length + 1
      if (newTweet.length + fragment.length < 140) {
        newTweet += " " + fragment;
      } else {

        tweets.push(tweetNumber.toString() + "/ " + newTweet);
        newTweet = fragment;
      }
      if (i === fragments.length-1) {
        tweets.push(tweetNumber.toString() + "/ " + newTweet);
      }
    });
    return tweets;
  }
});
