# Lunr learning

## Pieces left alone

- Building `Tokenset`
- `QueryLexer`
- Processing on clauses and expandedTerms, `lib/index.js:206`

  ```js
  if (expandedTerms.length === 0 && clause.presence === lunr.Query.presence.REQUIRED) {
  ```

## Notes

### Concept

- `fieldRef`
  A combination of *field name* and *id/ref* of object. E.g. `patient_last_name/3`

### TokenSet

- `constructor`
  A trie structure used to build a tree of words, e.g.

    Eric, Evan, Eve ->

    ```graph
        E
       /  \
      r    v
      |    /\
      i   a  e
      |   |
      c   n
    ```

- `#intersect`
    Checks if the `TokenSet` intersects with the search string `TokenSet`, returns a `TokenSet`

    NOTE: This is what performs the search.

### Builder

- `Builder# invertedIndex` stores the following

  ```js
  {
    alaine: {
      _index: 0,
      patient_first_name: {
        3: {} // empty object by default, potentially stores `metadataWhitelist in here`
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

### Token

- `metadata` used for storing `fields`, `position` and `index`.
  e.g.
    { fields: ['title'], position: [0, 7], index: 0 }


