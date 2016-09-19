# Semantic rules for your CSS

Code should always be written in such a way that makes it look like a single
person wrote it, no matter how many people have contributed and that is the
purpose of this set of rules powered by
[stylelint](https://github.com/stylelint/stylelint).

## Installation

You need to have `stylelint` and this config as part of your `devDependencies`.

`npm i stylelint stylelint-rokit -D`

## Usage

### Load everything

To use all the rules all at once add `stylelint-rokit` to your
`extends` property in `.stylelintrc`.

```json
{
  "extends": [
    "stylelint-rokit"
  ]
}
```

### Override specific rules

To override the rules set by `stylelint-rokit` you need to define your
own rules and set them as shown below.

```json
{
  "extends": [
    "stylelint-rokit"
  ],
  "rules": {
    "indentation": 2
  }
}
```
