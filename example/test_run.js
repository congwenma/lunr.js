
const lunr = require('../lunr.js');
const inputPrograms = require('./input.json');

debugger
var idx = lunr(function() {
  this.ref('program_id');
  this.field('patient_first_name');
  this.field('patient_last_name');

  // removing stemmer
  this.pipeline.reset();
  debugger
  inputPrograms.forEach(doc => this.add(doc))
});

debugger
idx.search('maria')

