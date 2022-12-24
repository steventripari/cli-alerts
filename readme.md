# `npx cli-alerts-stripari`

> original cli-alerts tutorial by AhmadAwais

## Install

```sh
npm install cli-alerts-stripari
```

<br>

[insert github link]

## Usage

```js
const alert = require('cli-alerts-stripari');
```
<br>

``` 
// Provide the type, msg, and name options.
alert({type: `success`, msg: `Everything finished!`});
// Prints: ✔ SUCCESS Everything finished!

alert({type: `success`, msg: `Everything finished!`, name: `Done`});
// Prints: ✔ DONE Everything finished!

alert({type: `warning`, msg: `You didn't addd something!`});
// Prints: ⚠ WARNING You didn't add something!

alert({type: `info`, msg: `Steven is awesome!`});
// Prints: ℹ INFO Steven is awesome!

alert({type: `error`, msg: `Something went wrong!`});
// Prints: ✖ ERROR Something went wrong!
```

<br />

[insert github link] (./../../)

## API 

### alert(options)

#### > options

Type: `object` <br>
Default: `{}`

You can specify the options below. 

#### > type 

Type: `string` <br>
Default: `error`

#### > msg 

Type: `string` <br>
Default: `You forgot to define all options.`
(Error message)

#### > name 

Type: `string` <br>
Default: `''` (Empty string)

<br>

## Changelog
