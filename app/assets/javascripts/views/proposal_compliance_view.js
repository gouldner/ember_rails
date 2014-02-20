// for more details see: http://emberjs.com/guides/views/

EasyProposal.ProposalComplianceView = EasyProposal.ProposalBaseView.extend({
  templateName: 'proposal_compliance',
  tabs: [{ name: 'Basics', id: 'proposal_basics'},
        { name: 'People', id: 'proposal_people'},
        { name: 'Compliance', id: 'proposal_compliance', isActive: true} ],
});
