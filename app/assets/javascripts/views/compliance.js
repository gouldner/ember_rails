// for more details see: http://emberjs.com/guides/views/

//= require ./proposal_base_view

EasyProposal.ComplianceView = EasyProposal.ProposalBaseView.extend({
  templateName: 'compliance',
  tabs: [
         { name: 'Basics', id: 'basics'},
         { name: 'People', id: 'people'},
         { name: 'Compliance', id: 'compliance', isActive: true},
         { name: 'Budget', id: 'budget'},
         { name: 'Attachment', id: 'attachment'},
  ],

});
