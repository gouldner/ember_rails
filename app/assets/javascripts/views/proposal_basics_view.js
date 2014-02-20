// for more details see: http://emberjs.com/guides/views/

EasyProposal.ProposalBasicsView = EasyProposal.ProposalBaseView.extend({
  templateName: 'proposal_basics',
  tabs: [{ name: 'Basics', id: 'proposal_basics', isActive: true},
        { name: 'People', id: 'proposal_people'},
        { name: 'Compliance', id: 'proposal_compliance'} ],
});
