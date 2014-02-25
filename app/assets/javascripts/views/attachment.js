
//= require ./proposal_base_view

EasyProposal.AttachmentView = EasyProposal.ProposalBaseView.extend({
  templateName: 'attachment',
  tabs: [
    { name: 'Basics', id: 'basics'},
    { name: 'People', id: 'people'},
    { name: 'Compliance', id: 'compliance'},
    { name: 'Budget', id: 'budget'},
    { name: 'Attachment', id: 'attachment', isActive: true},
  ],

});
