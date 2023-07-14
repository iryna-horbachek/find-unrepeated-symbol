# find-unrepeated-symbol

This repository contains code that finds the first non-repeated symbol in a given input string.

## Overview

The code provided includes an HTML file (`index.html`) and a JavaScript file (`index.js`) that allow users to enter a string and find the first non-repeated character.

## How It Works

1. The user interface includes an input field and a button with the class name "btn".

2. The `getInputValue` function is triggered when the button is clicked.

3. Inside the `getInputValue` function, the value of the input field is retrieved using `document.querySelector('.text-field').value`.

4. The input value is split into an array of words using the space (' ') as the delimiter, stored in the `dividedToWords` variable.

5. A `for` loop is used to iterate over each word in the `dividedToWords` array.

6. For each word (`el`), another `for` loop is used to iterate over each character in the word.

7. The current character is stored in the `letter` variable.

8. The code checks if the current character appears only once in the word by comparing its index of the first occurrence (`indexOf`) with the index of the last occurrence (`lastIndexOf`).

9. If the character is non-repeated, it is added to the `newArray` using `newArray.push(letter)`.

10. After iterating over all words and characters, the `find` method is used on `newArray` to find the first non-repeated character stored in the `result` variable.

11. If the input value is empty, an alert is shown prompting the user to enter text.

12. Otherwise, an alert is shown displaying the first non-repeated character found in the input string.

## Usage

To use the code, follow these steps:

1. Open the `index.html` file in a web browser.

2. Enter a string of text in the input field.

3. Click the "Get symbol" button.

4. An alert will display the first non-repeated character in the input string.

5. To clear the input field, click the "Clear" button.

