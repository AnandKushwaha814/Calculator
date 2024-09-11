# UI
![Screenshot 2024-09-11 134457](https://github.com/user-attachments/assets/b6d0615d-8d05-495a-857f-57b4cb9ef68b)

## Calculator App Using React and Tailwind CSS
This repository contains a simple calculator built using React. The app demonstrates the use of functional components and hooks (useState), along with Tailwind CSS for styling and layout. Below is a breakdown of the key components and functionality:
## Key Components:
1. App Component:- The main component that holds the application state `(calVal)` and manages button click logic. It imports and uses the `Display` and `Button` components.

* `onButtonClick`: Handles different actions based on button clicks `(clear, evaluate, square, etc.)`. The `eval` function is used to perform basic arithmetic operations.
Conditional logic determines what happens when buttons like 'C', 'CE', 'sqr', and '=' are pressed.
2. Display Component:

* Displays the current value of the calculation `(calVal)` in a styled input field.
* It uses `Tailwind CSS` for styling with responsiveness and modern UI design.
3. Button Component:
* Renders the calculator buttons dynamically from a predefined array of button names.
Each button has an `onClick` handler that triggers the `onButtonClick` function in the `App` component to update the displayed value or perform operations.
* The buttons are styled using Tailwind CSS, with hover effects for better UX.
## Features:
* Basic Operations: Supports basic arithmetic operations like addition, subtraction, multiplication, and division.
* Square Function: A special button (sqr) allows the user to square the current value.
* Clear Functionality: Includes C (clear all) and CE (clear entry) functionality.
* Responsive Design: Uses Tailwind CSS for styling, ensuring the calculator looks good on various screen sizes.
* Button Layout: The buttons are organized in a 4x5 grid using Tailwind's grid classes, making it easy to adjust for different devices.

This simple yet effective React app serves as a great example of how to use hooks, component-based architecture, and Tailwind CSS for building modern web applications.
