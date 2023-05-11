# @kumarshanu/string-to-boolean

A lightweight npm package that provides a function `stringToBoolean` for converting a string value to a boolean value.

## Installation

```shell
npm install @kumarshanu/string-to-boolean
```

## Usage

```javascript
const stringToBoolean = require('@kumarshanu/string-to-boolean');

const result = stringToBoolean('true');
console.log(result); // Output: true

const result2 = stringToBoolean('no');
console.log(result2); // Output: false
```

## API

### `stringToBoolean(stringValue)`

This function takes a string value as input and returns a boolean value based on the following rules:

- If the string value is one of 'true', 'True', 'TRUE', 'yes', or '1', it returns `true`.
- If the string value is one of 'false', 'False', 'FALSE', 'no', '0', `null`, or `undefined`, it returns `false`.
- For any other string value, it attempts to parse it using `JSON.parse` and returns the parsed boolean value. If parsing fails, it throws a `SyntaxError`.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to use this npm package, `@kumarshanu/string-to-boolean`, to easily convert string values to boolean in your JavaScript projects. Contributions and feedback are always welcome!