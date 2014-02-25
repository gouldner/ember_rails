
//= require ./proposal_base_view

EasyProposal.BudgetView = EasyProposal.ProposalBaseView.extend({
  templateName: 'budget',
  tabs: [
    { name: 'Basics', id: 'basics'},
    { name: 'People', id: 'people'},
    { name: 'Compliance', id: 'compliance'},
    { name: 'Budget', id: 'budget', isActive: true},
    { name: 'Attachment', id: 'attachment'},
  ],

});
