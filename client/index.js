if (Meteor.isClient) {

  var time = 0;
  var stopwatch = function () {
    if (time == 60) {
      time = 0;
      Session.set("time", time);
    } else {
      time++;
      Session.set("time", time);
    }
  };

  var interval = Meteor.setInterval(stopwatch, 1000);

  Template.taskactive.helpers({
    timer: function () {
      // console.log("ticking:", Session.get("time"));
      if (time < 10) {
        return "0" + Session.get("time");
      } else {
        return Session.get("time");
      }
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
