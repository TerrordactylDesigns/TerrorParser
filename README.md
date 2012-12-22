# TerrorParser
### A Document Generator For My Flavor Of Comments

### You will most likely never need this in your life.....

[![Build Status](https://secure.travis-ci.org/TerrordactylDesigns/TerrorParser.png)](http://travis-ci.org/TerrordactylDesigns/TerrorParser)

### My Comment Style:
    /**/// Public: function_name
    /**///
    /**/// Args
    /**/// arg1   - the_arg_value
    /**/// arg2   - the_arg_value
    /**///
    /**/// Returns
    /**/// return - the_return_value
    /**///
    /**/// Notes
    /**/// note   - note_about_the_function

### Use:
    var TerrorParser  = require('./index') // Or wherever you sit this
    // assume its an express site
    /*
     * POST home page.
     */
    app.post('/', function(req, res) {
      var postData = ''
      req.addListener("data", function(postDataChunk) {
        postData += postDataChunk
      })
      req.addListener("end", function() {
        console.log('[ POST EVENT RECEIVED ]')
        var data = TerrorParser(postData)
        // Now you have a array of parsed objects
      })
    })

### The Actual Return Array Of TerrorParser's index.js:

    [ { privPub: 'Private',
        name: 'startsWith Function',
        argList:
         [ 'str      - string to test against',
           'pattern  - string pattern to check at beginning of str' ],
        ret: 'return   - boolean value of startsWith',
        notes: '' },
      { privPub: 'Private',
        name: 'Filters TerrorDoc lines into the correct object locations',
        argList:
         [ 'lines  - array of all lines',
           'pos    - array of positions that lines contains the pattern' ],
        ret: '',
        notes: 'note   - fills docList array by building section objects' },
      { privPub: 'Private',
        name: 'parses each line for TerrorDoc pattern',
        argList: [ 'str  - string value of the entire file contents' ],
        ret: '',
        notes: 'Note - sends matching lines to buildParsed' },
      { privPub: 'Public',
        name: 'Parser Class',
        argList: [ 'fileContents - string of the read file' ],
        ret: 'return       - docList containing section objects',
        notes: '' } ]

## Tests

    npm install
    npm test

## F.A.Q.

* Q: Why not just use JsDoc?
* A: I didn't know it existed before I started using my style...... I'm new....

* Q: Do I need this?
* A: No. Not unless you happen to think my /**/// is pretty sweet looking like I do....

##License

HAHAHAHAHA

MIT