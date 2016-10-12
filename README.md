###Javascript

Consider each and every '.js' file and snippet in the repository as
part of my Javascript codebase or my Javascript empire. Essentially
this is my Js playground.

###Syntax and Programming Style

I follow the comma first style so basically declarations of the code
base would be different to the standard style. Apart from that there
are some other things to be noted:

- Declarations and initializations

```javascript
        // bad
        var a = "string";
        var b = 23;
        var c = true;

        // good
        var a = "string",
            b = 23,
            c = true;

        // bad
        var arr = new Array();
        var str = new String();
        var num = new Number();
        var boo = new Boolean();
        var obj = new Object();
        var reg = new RegExp();
        var fun = new function();

        // good
        var arr = [],
            str = "",
            num = 0,
            boo = false,
            obj = {},
            reg = /()/,
            fun = function(){};
```

- If interested and want to know more with my coding conventions and
good practices then [open this](https://github.com/AkhilHector/Js-Playground/blob/master/misc/LearnJS.js) and refer from L333 to L550.

- Indentation is strict and I use 4 spaces.

### Dir Structure

- `algorithms/` is about various data structures and implementations
in Js.
- `data-scraping/` was a data scraping project which mostly involed
with `cheerio` and `d3.js`.
- `irc/` is me trying to write an irc server in Node.js.
- `misc/` as the name suggests is the secret chamber for all of my Js
experiements. In an attempt to say more about Javascript i wrote a self
explanatory script named [LearnJS.js](https://github.com/AkhilHector/Js-Playground/blob/master/misc/LearnJS.js) do give it a read if interested.
- `problems/` is just me trying to solve different interesting problems listed on  various online websites.
- `es6` is just me trying to write ES6 [Javascript]
- `tweaks` are just a collection of cool javascript hacks

#### Akhil Pandey
