// for more details see: http://emberjs.com/guides/views/

//= require ./proposal_base_view

EasyProposal.PeopleView = EasyProposal.ProposalBaseView.extend({
  templateName: 'people',
  tabs: [
    { name: 'Basics', id: 'basics'},
    { name: 'People', id: 'people', isActive: true},
    { name: 'Compliance', id: 'compliance'},
    { name: 'Budget', id: 'budget'},
    { name: 'Attachment', id: 'attachment'},
  ],

});
