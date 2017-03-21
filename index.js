var voca = require('voca');

exports.word_repetition = function( text , word ){

  var words = voca.words(text);
  var repeated_analysis = {};

  for( var i = 0 ; i < words.length ; i++ ){
    repeated_analysis[ words[i] ] = voca.countSubstrings(text,words[i]);
  }

  return repeated_analysis;


};
