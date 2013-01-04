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
    /**///          notes_can_be_multiline

### Install

    npm install terrorparser

### Use:
    var TerrorParser  = require('terrorparser')
    // assume its being used in an express site
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
        // Now you have a array of parsed objects stored in the data var
        // If there were no TerrorDoc headers data will = null
      })
    })

### The Actual Return Array Of TerrorParser's index.js:

    [ { privPub: 'Private',
        name: 'startsWith',
        argList:
         [ 'str      - string to test against',
           'pattern  - string pattern to check at beginning of str' ],
        ret: 'return   - boolean value of pattern match result',
        notes: '' },
      { privPub: 'Private',
        name: 'buildParsed',
        argList:
         [ 'lines  - array of all lines',
           'pos    - array of positions that lines contains the pattern' ],
        ret: '',
        notes: 'note   - fills docList array by building section objects based on parsing         rules' },
      { privPub: 'Private',
        name: 'parser',
        argList: [ 'str  - string value of the entire file contents' ],
        ret: '',
        notes: 'Note - parses each line for TerrorDoc pattern and sends matching lines       to buildParsed' },
      { privPub: 'Public',
        name: 'TerrorParser',
        argList: [ 'fileContents - string of the read file' ],
        ret: 'return       - docList containing section objects',
        notes: '' }
    ]

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
