# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
puts "Seeding..."

Proposal.create ([{doc_id: '12345', title: "Why Zebras dont get uclers", proposal_type: "New", lead_unit: "Civil Engineering", activity_type: "Research", sponsor_code: "Air Force", project_start_date: DateTime.new(2014,2,5,19), project_end_date: DateTime.new(2015,2,5,19)}, {doc_id: '45678', title: "Sequencing platypus venom"}])

puts "Complete!"
