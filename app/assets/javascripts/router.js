// For more information see: http://emberjs.com/guides/routing/

EasyProposal.Router.map(function() {
  this.resource("proposals");
});

EasyProposal.Router.map(function() {
  this.resource("proposal", { path: "/proposal/:id" });
});

EasyProposal.Router.map(function() {
  this.resource("proposal_basics", { path: "/proposal/basics/:id" });
});

EasyProposal.Router.map(function() {
  this.resource("proposal_people", { path: "/proposal/people/:id" });
});

EasyProposal.Router.map(function() {
  this.resource("proposal_compliance", { path: "/proposal/compliance/:id" });
});

// redrect index route to proposals
EasyProposal.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('proposals');
  }
});

