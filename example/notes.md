# Lunr learning

## What is

### Concept

- `fieldRef`
  A combination of *field name* and *id/ref* of object. E.g. `patient_last_name/3`

- `metadata` used for?

- `TokenSet`
  A trie structure used to build a tree of words, e.g.

    Eric, Evan, Eve ->

    ```
        E
       /  \
      r    v
      |    /\
      i   a  e
      |   |
      c   n
    ```

### Builder

- `#stack`
Holds processors like stemmers.

- `#fieldTermFrequencies`
  Stores frequencies of terms for a particular `fieldRef`, E.g.

  ```js
  {
    [FieldRef]: Record<tokenString, number>,
    'patient_last_name/3':  { raynor: 1 },
  }
  ```

- `#fieldVectors`
  Stores an `lunr.Vector` for a particular `fieldRef`,
  E.g.

  ```js
  {
    [FieldRef]: Record<
      lunr.Vector,
      {
        _magnitude: number,
        elements: [
          someIndex extends number,
          vectorCalculated extends number
        ]
      }
    >,
    'patient_last_name/3': {
      _magnitude: 0,
      elements: [0, 4.138]
    }
  }
  ```

- `#elements`

## Example of contents

`Builder# invertedIndex` stores the following

```js
{
  alaine: {
    _index: 0,
    patient_first_name: {
      3: {} // empty object
    },
    patient_last_name: {}, // empty object
  },
  kerluke: {
    _index: 0,
    patient_first_name: {}, // empty object
    patient_last_name: {
      3: {} // empty object
    },
  },
}
```
