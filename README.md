Keyboard Submit
======================

Disables or enables the browser's default behaviour of submitting a form when the enter key is pressed on any of it's children input elements.

Please note that this plugin requires [jQuery](http://jquery.com).

## Usage
 The plugin can be used in the following ways:
 1. through the presence of a form's `data-` attribute.
 2. through the jQuery interface `$.keyboardSubmit()`


#### Using Data attributes
You can disable form submit by simply adding the data attribute in the following way:
 ```html
 <form data-keyboard-submit>
    ...
</form>
 ```
 You can also pass any valid action into the data attribute as shown below
 ```html
<form data-keyboard-submit="disable">
    ...
</form>
 ```

#### Using the jQuery interface
You can also activate the plugin it's defined jQuery method

 ```js
 $(form).keyboardSubmit()
 ```
 Like using data attributes, you can also pass a valid action into the method.

  ```js
  $(form).keyboardSubmit(true)
  ```

## Valid Actions
The following are valid actions that can be used with the plugin


| Actions                               | Type              | Description                                                                                                                             |
|---------------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| `true`, `'true'`, `'enable'`          | Boolean or String | Forms can be submitted using the enter/return key. This is the browser's default.                                                       |
| `false`, `'false'`, `'disable'`, `''` | Boolean or String | Disable submitting forms using the keyboard. The empty string ('') here handles scenarios of forms with data attributes without a value |
