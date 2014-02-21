


EasyProposal.ProposalsController = Ember.ArrayController.extend({
  sortProperties: ['title'],
  sortAscending: true,
  sortImageClass: 'glyphicon glyphicon-sort-by-alphabet',
  actions: {
    sort: function(colName) {
      if (this.get('sortProperties')[0] == colName) {
        this.toggleProperty('sortAscending');
        if (this.sortAscending == true) {
          this.set('sortImageClass', 'glyphicon glyphicon-sort-by-alphabet');
        } else {
          this.set('sortImageClass', 'glyphicon glyphicon-sort-by-alphabet-alt');
        }
      } else {
        this.set('sortImageClass', 'glyphicon glyphicon-sort-by-alphabet');
        this.set('sortProperties', [colName]);
        this.set('sortAscending', true);
      }
    }
  }

});



