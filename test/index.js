var test          = require('tap').test
  , TerrorParser  = require('../index')
  , fs            = require('fs')
/*
  TESTS
*/
test('test that the parser returns nothing when no patterns match', function(t) {
  var noheader  = fs.readFileSync('./fixtures/noheader.js', 'utf8')
    , parsed    = TerrorParser(noheader)
  // 1
  t.notOk(parsed.length > 0, 'no matching returns empty')
  t.end();
})

test('test that the single header parses all sections', function(t) {
  var singleHeader  = fs.readFileSync('./fixtures/singleheader.js', 'utf8')
    , parsed        = TerrorParser(singleHeader)
  // 2
  t.type(parsed, 'Array', 'Returned a type of array')
  // 3
  t.equal(parsed.length, 1, 'Array had a length of 1')
  // 4
  t.equal(parsed[0].privPub, 'Public', 'Parsed Public')
  // 5
  t.equal(parsed[0].name, 'does_something', 'Parsed Name')
  // 6
  t.equal(parsed[0].argList.length, 2, 'Parsed 2 args')
  // 7
  t.equal(parsed[0].ret, 'return - the_return_value', 'Parsed return')
  // 8
  t.equal(parsed[0].notes, 'note - note_multi_line_requires       a_set_of_doc_markers', 'Parsed notes')
  t.end()
})

test('test that the multiple header parses all sections', function(t) {
  var multiHeader = fs.readFileSync('./fixtures/multiheader.js', 'utf8')
    , parsed      = TerrorParser(multiHeader)
  // 9
  t.equal(parsed[2].privPub, 'Public', 'Parsed Public')
  // 10
  t.equal(parsed[2].name, 'does_something', 'Parsed Name')
  // 11
  t.equal(parsed[2].argList.length, 2, 'Parsed 2 args')
  // 12
  t.equal(parsed[2].argList[0], 'arg1 - firstArgSecond', 'Parsed first arg from array')
  // 13
  t.equal(parsed[2].argList[1], 'arg2 - secondArgSecond', 'Parsed second arg from array')
  // 14
  t.equal(parsed[2].ret, 'return - the_return_value', 'Parsed return')
  // 15
  t.equal(parsed[2].notes, 'note - note_multi_line_requires       a_set_of_doc_markers', 'Parsed notes')
  t.end()
})