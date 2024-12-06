## Milestone 1
⚙️ **Overview - What I worked on this past week**:
This week, I made significant progress on the foundation of my personal portfolio website. Key accomplishments included:

Creating the GitHub repository and initializing the project using create-react-app.
Setting up React Router for navigation between multiple pages (Home, About Me, Projects).
Creating and adding some content in Home, About Me, and Projects pages.
Installing gh-pages for deployment to GitHub Pages, in Milestone 4.
Structuring the project with the initial components and layout, preparing the website for further styling and content population.
Conducted research on best practices for responsive design and CSS styling. 
Also researching how to implement an email-contact method in a future Contact page.

🌵 **Challenges- What problems did I have & how I'm addressing them**:
One of the main challenges I faced was an issue with React Router not working properly. The routing didn’t work as expected, which led to navigation issues. To resolve this, I took the following steps based on research:

Cleared npm cache with npm cache clean --force to ensure no cached data was causing the issue.
Deleted node_modules and the package-lock.json file to remove any conflicting or corrupted dependencies.
Reinstalled the dependencies with npm install.
Uninstalled and reinstalled React and React-DOM to make sure I was using the latest versions:
npm uninstall react react-dom
npm install react@latest react-dom@latest
Finally, I rebuilt the project to clear any issues caused by old build data, running:
npm run build
After completing these steps, the routing issue was resolved, and the React Router worked as expected.

🏆 **Accomplishments - What is something I "leveled up" on this week**:
I leveled up in debugging React and package management issues. Resolving the React Router issue helped me become more comfortable with handling dependency management, clearing cache, and rebuilding projects to ensure a clean slate. This has improved my troubleshooting skills and deepened my understanding of how React and package managers like npm work together.

🔮 **Next Steps - What I plan to prioritize and do next**:
In the upcoming week, I plan to:

Advance styling the website, focusing on making it mobile-responsive and ensuring the layout looks great across all devices.
Implement React Router fully across all pages (Home, About Me, Projects) and refine the navigation system.
Start populating the About Me and Projects sections with more content and add interactivity (e.g., hover effects, smooth scrolling).
Begin focusing on design polish, ensuring the website is visually cohesive and aligned with my brand.
Review feedback from instructor and peers from Week 1 progress.
