# Week 2 Research Notes

## Topic: Styling with CSS, Mobile-Responsiveness, and Contact Page Implementation

- **Date**: 12-6-24
- **Overview**: This week, I focused on styling the website with CSS, making it mobile-responsive, and researching how to add a contact method for the portfolio website. I explored various methods for improving the design, including **CSS Flexbox**, **CSS Grid**, and **media queries**. Additionally, I researched best practices for creating a **Contact Page** and adding a contact form.

---

## Key Insights

### 1. **Mobile-First Design Approach**
   - The **mobile-first design** principle encourages building websites for small screens first and scaling up for larger screens.
   - This approach improves **performance** on mobile devices and ensures a **better user experience** across devices.
   - Key points:
     - Use **media queries** to adjust the layout for larger screens.
     - Start by designing the smallest screen size first, and then progressively enhance the design for bigger screens.

### 2. **CSS Flexbox & Grid Layouts**
   - **Flexbox** is ideal for one-dimensional layouts, whereas **CSS Grid** is better for two-dimensional layouts (rows and columns).
   - **Flexbox** helps align and distribute space between items in a container, making the layout responsive to different screen sizes.
   - **CSS Grid** is great for more complex layouts, especially when you need precise control over both columns and rows.
   - Best practices:
     - Use **Flexbox** for simpler layouts (e.g., navigation bars).
     - Use **Grid** for more complex and precise layouts (e.g., portfolio section).

### 3. **Best Practices for Structuring CSS**
   - Organize styles into **modular components** to promote reusability and maintainability.
   - Use **CSS variables** for consistency, especially for colors and spacing.
   - Adopt the **BEM (Block Element Modifier)** methodology for naming classes to avoid conflicts and improve code readability.
   - Example:
     ```css
     :root {
       --primary-color: #4CAF50;
       --secondary-color: #FF5722;
     }
     ```

### 4. **Responsive Design with Media Queries**
   - **Media queries** allow you to apply different styles depending on the screen size, ensuring a responsive design.
   - Key properties to target include:
     - **width**: For adjusting layout based on screen width.
     - **max-width**: To set upper bounds for when a style applies.
     - Example:
       ```css
       @media (max-width: 768px) {
         .container {
           display: block;
         }
       }
       ```
   - Testing for responsiveness using **Chrome DevTools** and **Responsive Design Checker**.

### 5. **Tools & Resources**
   - **Chrome DevTools** for simulating different devices and screen sizes.
   - **Responsive Web Design Tester**: Tool to quickly check how the design looks on various devices.
   - Best practices:
     - Test your website in different environments (e.g., mobile, tablet, desktop).
     - Use emulators and real devices to ensure consistent appearance.

### 6. **Adding a Contact Method (Contact Page)**
   - To implement a **Contact Page**, I explored several methods of allowing users to reach out directly:
     1. **Contact Form**:
        - I can create a form using **HTML**, **CSS**, and **JavaScript** to capture information like name, email, message, and subject.
        - A server-side language (like **Node.js**) or a service (e.g., **Formspree**, **EmailJS**) can handle form submissions.
        - Key steps:
          - Create a form with **input fields** for the user’s name, email, and message.
          - Use **JavaScript** to validate the form (e.g., check if the fields are empty).
          - Use a service like **Formspree** to collect the data and forward it to your email address.
        - Example:
          ```html
          <form action="https://formspree.io/f/mwkylbvn" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            
            <button type="submit">Send Message</button>
          </form>
          ```
     2. **Embedding Contact Information**:
        - Another option is to include **contact details** such as an email address, phone number, or links to social media accounts.
        - For example, linking to **LinkedIn**, **GitHub**, and a **business email** can be effective for portfolio visitors.

     3. **Third-Party Services**:
        - Services like **EmailJS** allow me to integrate email capabilities without the need for server-side code.
        - These services provide a simple API that connects the contact form directly to an email address.

---

## New Features Implemented

### 1. **CSS Styling**:
   - Applied a cohesive **color scheme** to the website, using soft, cool tones (beige, cream, green, etc.).
   - Used **CSS Flexbox** to create a **responsive layout** for the header, footer, and content sections.
   - Introduced a **background image** to the home page and added a **white, semi-transparent middle section** to make text more readable.

### 2. **Mobile-Responsive Layout**:
   - Implemented **media queries** to adjust the layout for small screens and ensure proper scaling for larger screens.
   - Ensured **mobile-first design** by styling for mobile first, then adding larger-screen adjustments.

### 3. **Text Centering & Interactive Elements**:
   - Ensured the title **"Welcome to My Portfolio!"** is centered and visually prominent.
   - Added **hover effects** to interactive elements like buttons and links to enhance the user experience.

### 4. **Improved Navigation**:
   - The **Header** component now includes a navigation bar with links to **About Me** and **Projects** pages.
   - The website features a **Home button** for easy navigation, creating a better user experience.

### 5. **Contact Page Research**:
   - Researched the **Contact Page** implementation options, considering a **contact form** using **Formspree** or **EmailJS** for seamless submission.
   - Plan to integrate a simple **contact form** with the option to submit inquiries via email, while also including links to social media platforms (GitHub, LinkedIn).

---

## Resources & References

- [MDN Web Docs - Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design) – Guide to building responsive layouts
- [CSS-Tricks - Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) – In-depth guide to Flexbox
- [Formspree](https://formspree.io/) – Service for handling form submissions to your email address without server-side code
- [EmailJS](https://www.emailjs.com/) – Service for integrating email functionality into websites
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) – Tool for testing responsiveness across various screen sizes

---

## Summary & Next Steps

- **Summary**: This week focused on styling the website with CSS and ensuring responsiveness across multiple devices. I also explored methods for implementing a **Contact Page**, including **contact forms** and third-party services like **Formspree** and **EmailJS**.
  
- **Next Steps**:
  1. Implement the **Contact Page** with a **contact form** using **Formspree** or **EmailJS**.
  2. Continue improving **responsive layouts** for more complex components.
  3. Test and improve **performance** on mobile devices, ensuring fast load times.
  4. Begin working on the **About Me** and **Projects** pages, with more detailed content and styling.

## Topic: Wireframing for Portfolio Website
## Key Insights

### 1. **What is Wireframing?**
   - A **wireframe** is a low-fidelity, visual representation of a web page layout, used to outline the structure and functionality of a website.
   - Wireframes allow you to plan the positioning of key elements like headers, navigation, images, buttons, and content sections before beginning development.
   - Benefits of wireframing:
     - **Visualizes User Flow**: Helps to design and test how users will interact with the site.
     - **Clarifies Layout Structure**: Allows for quick revisions and feedback on design.
     - **Saves Time**: Reduces design iterations during the development process by creating a clear blueprint.

### 2. **Wireframing Tools**
   - **Pen and Paper**:
     - One of the quickest ways to sketch out ideas, especially in the early stages of the design process.
     - Great for brainstorming or during client meetings.
   - **Figma**:
     - A popular cloud-based design tool for creating both low and high-fidelity wireframes.
     - Allows collaboration with teammates, real-time feedback, and easy sharing.
     - Best for creating interactive wireframes and prototypes.
   - **Adobe XD**:
     - Powerful tool for creating detailed wireframes, prototypes, and user flows.
     - Supports interactive wireframes with animations and transitions, making it ideal for UI/UX design.
   - **Sketch**:
     - A vector-based design tool used for creating wireframes, mockups, and prototypes.
     - Commonly used for high-fidelity wireframes and user interface design.

### 3. **Best Practices for Wireframing**
   - **Consistency**: Keep elements like buttons, navigation, and text boxes consistent throughout the wireframe to maintain clarity.
   - **Focus on Functionality**: Wireframes should represent how the website works, not how it looks. Avoid getting distracted by design details.
   - **Simple and Clear**: The goal of a wireframe is to communicate structure. Use simple shapes and lines to depict layout elements, focusing on usability.
   - **Annotations**: Include notes and explanations on your wireframes to provide additional context for developers and stakeholders. This can clarify interactions or highlight special functionality.