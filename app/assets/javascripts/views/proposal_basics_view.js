// for more details see: http://emberjs.com/guides/views/

EasyProposal.ProposalBasicsView = Ember.View.extend({
  templateName: 'proposal_basics',
  tabs: [{ name: 'Basics', id: 'proposal_basics', 'active': 'yes'},
        { name: 'People', id: 'proposal_people'},
        { name: 'Compliance', id: 'proposal_compliance'} ],
  tab: 'proposal_basics'
});
