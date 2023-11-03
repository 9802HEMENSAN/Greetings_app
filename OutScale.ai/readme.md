Dynamic Greeting Based on Time and Country

Objective

Create a static and responsive HTML page similar to a blog post with a heading, some content, and an image with basic formatting. Write a separate JavaScript file to change the heading text based on the time of day and the country determined by a query parameter in the URL after the page has loaded. For example, for the URL `http://example.com/post.html?ip=67`, the heading should display "Good Morning India" if the current time is between 5 AM and 12 Noon.

Requirements

1.1 HTML Page:
Create a basic static and responsive HTML page with:
   - A heading (give it an `id` so it can be selected later)
   - Some content
   - An image

1.2 JavaScript file:

Write a JavaScript function in a separate file and link it to the HTML page. This function should:
   - Change the text of the heading to one of the following messages based on the current time:
      - 5 AM to 12 Noon: "Good Morning [Country Name]"
      - 12 Noon to 6 PM: "Good Afternoon [Country Name]"
      - 6 PM to 5 AM: "Good Night [Country Name]"
   - Execute after the page has loaded to ensure the greeting is dynamic.


Determine the country name based on a query parameter in the URL with the key `ip`, which is always a positive integer. The rules for mapping IP to country are as follows:
   - If `ip` is an odd number, the country is India (e.g., 1, 67, 5603, ...)
   - If `ip` is an even number, the country is England (e.g., 2, 88, 3404, ...)
   - If `ip` ends with 0, the country is America (e.g., 0, 20, 540, ...)

Evaluation Criteria
- Code clarity (comments and readability)
- Code organization (functions and decoupling of logics) 
- Correct implementation of time and country logic
- Proper use of HTML and JavaScript
- Responsiveness of the HTML page

Submission

- Code using an online code collaboration tool of your choice like CodePen, CodeShare, CodeSandbox etc.
- Provide the HTML file and a separate JavaScript file that accomplishes the above tasks. Ensure the JavaScript file is properly linked in the HTML file.
