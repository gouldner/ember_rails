// for more details see: http://emberjs.com/guides/views/

//= require ./proposal_base_view

EasyProposal.BasicsView = EasyProposal.ProposalBaseView.extend({
  templateName: 'basic',
  tabs: [
         { name: 'Basics', id: 'basics', isActive: true},
         { name: 'People', id: 'people'},
         { name: 'Compliance', id: 'compliance'},
         { name: 'Budget', id: 'budget'},
         { name: 'Attachment', id: 'attachment'},
  ],

});
