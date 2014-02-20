// for more details see: http://emberjs.com/guides/views/

EasyProposal.ProposalBaseView = Ember.View.extend({
  tabs: [{ name: 'Basics', id: 'proposal_basics', isActive: true},
        { name: 'People', id: 'proposal_people'},
        { name: 'Compliance', id: 'proposal_compliance'} ],
});
