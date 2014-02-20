// for more details see: http://emberjs.com/guides/views/

EasyProposal.ProposalPeopleView = EasyProposal.ProposalBaseView.extend({
  templateName: 'proposal_people',
  tabs: [{ name: 'Basics', id: 'proposal_basics'},
        { name: 'People', id: 'proposal_people', isActive: true},
        { name: 'Compliance', id: 'proposal_compliance'} ],
});
