// For more information see: http://emberjs.com/guides/routing/

EasyProposal.Router.map(function() {
  this.resource("basics", { path: "/ep/basics/:id" });
  this.resource("attachment", { path: "/ep/attachment/:id" });
  this.resource("budget", { path: "/ep/budget/:id" });
  this.resource("people", { path: "/ep/people/:id" });
  this.resource("compliance", { path: "/ep/compliance/:id" });
  this.resource("proposals");
});


EasyProposal.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('proposals');
  }
});

