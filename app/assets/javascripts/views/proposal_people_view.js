// for more details see: http://emberjs.com/guides/views/

EasyProposal.ProposalPeopleView = Ember.View.extend({
  templateName: 'proposal_people',
  tabs: [{ name: 'Basics', id: 'proposal_basics'},
        { name: 'People', id: 'proposal_people', 'active': 'yes' },
        { name: 'Compliance', id: 'proposal_compliance'} ],
  tab: 'proposal_people'
});
