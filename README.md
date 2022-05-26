This is my project exam 2, made with [Next.js](https://nextjs.org/).

## Getting Started

First, install the development server:

```bash
npm install
# then
npm run dev
```

If you are using Next, don't forget that the component you pass the props to from getServerSideProps or getStaticProps also needs prop type checks.

https://artisansweb.net/how-to-use-application-passwords-in-wordpress-for-rest-api-authentication/#:~:text=Head%20over%20to%20the%20Users,password%20with%20or%20without%20spaces.

https://jasonwatmore.com/post/2020/07/17/react-axios-http-post-request-examples

https://jasonwatmore.com/post/2020/07/17/react-axios-http-post-request-examples

https://developer.wordpress.org/rest-api/using-the-rest-api/authentication/

https://react-hook-form.com/api/usecontroller/controller/

https://michaelsoriano.com/create-a-file-uploader-with-react-and-wordpress-rest-api-media/

https://www.edmundcwm.com/uploading-media-using-the-wp-rest-api-and-javascript/

https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/

https://medium.com/@650egor/react-30-day-challenge-day-2-image-upload-preview-2d534f8eaaa

javascript.plainenglish.io/custom-hook-in-react-js-for-calling-api-useapi-7de24b42729c

https://developer.wordpress.org/rest-api/

http://wp-api.org/node-wpapi/guides/2016/08/15/create-a-post-with-featured-media.html

https://axios-http.com/docs/post_example

https://react-icons.github.io/react-icons

https://blog.logrocket.com/best-styling-options-nextjs/

https://medium.com/nerd-for-tech/using-next-js-with-styled-components-easy-dfff3849e4f1

searchbar: https://www.youtube.com/watch?v=QtJiQXfAqPg

https://github.com/withspectrum/spectrum

https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks

cards:

https://stackoverflow.com/questions/34189370/how-to-repeat-an-element-n-times-using-jsx-and-loadsh

https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript

https://bobbyhadz.com/blog/javascript-remove-first-word-from-string

https://www.kindacode.com/article/passing-data-via-a-link-component-in-next-js/

https://medium.com/web-dev-survey-from-kyoto/how-to-customize-the-file-upload-button-in-react-b3866a5973d8

https://stackoverflow.com/questions/63406435/how-to-detect-window-size-in-next-js-ssr-using-react-hook

https://github.com/react-icons/react-icons/issues/509

https://codesandbox.io/s/react-hook-form-js-forked-rezdf8?file=/src/App.js:277-302

---

If you get this warning in the console:
DeprecationWarning: Invalid 'main' field in '.../node_modules/react-icons/package.json' of 'lib'. Please either fix that or report it to the module author.

You can remove it by changing this in react-icons package.json:

Replace this:
"main": "lib",
"types": "./lib/esm/index.d.ts",

With this:
"main": "lib/cjs/index.js",
"module": "lib/esm/index.js",
"types": "lib/esm/index.d.ts",

---

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Login details

Username: Admin
Password: Project_exam2

# Project Exam 2

There are two options with this Project Exam.
You need to only choose one and please follow the deliveries carefully.

## Goal

To take the skills learned over the last two years and take on an extensive project where the finished product should reflect the candidate's general development capabilities, in addition to visual and technical skills.

## Brief

For this assignment you have the choice between getting a real world client that you will manage and build a website for, or a case study to make a hotel booking website.

Whatever project you choose, the final submission must have the following:

- A Gantt chart planning the project
- A style guide
- An Adobe XD prototype
- Use a CSS Pre-processor and BEM if not using CSS Modules, Styled Components, etc
- Use a React.js or Next.js
- You can use regular JS or TypeScript
- Please use create-react-app or create-next-app to generate a skeleton project for yourself
- A fully working website that fulfils the brief

## Option 1: Real World Client

Make a website or application for a real world client. The project should offer a significant enough scope to be able to show off your skills as a developer, and hopefully the project can form a central part of your portfolio for when you start applying for jobs.

The process followed for the project will differ depending on the client and the requirements of their project.

Note: The project has to have a big enough scope to show off the skills learned over your studies. An example of the level we’re expecting would be a website where administrators can add, update, remove products, and users can search, filter, and contact administrators. If you are unsure if your potential client’s brief is strong enough for the Project Exam 2, please message your tutors. Use of a JavaScript Framework is a requirement.

### Recommended Process

Week 1 to 3: Finding client, Planning and Design
Week 4 to 6: Coding
Week 7: Bug Fixing

### Level 1 Process

- Use your networks and connections to find a client that needs a website or application built.
- Understand their requirements and come up with a functional specification for the project. You can write the functional specification using “System shall” statements. For example, “The system shall allow visitors to search for an article”
- Create a Gantt chart for the project, planning out your deliverables for the client.
- Make a design style guide and then take this style guide and create an Adobe XD prototype. Present to the client for feedback.
- Develop the site ensuring you deliver all that is listed in your functional specification.
- Test the website on various platforms and browsers. Ensure the site is bug-free and working before presenting to the client.
- Go through a final round of changes before going live with the website.
- Write a report on your process and decisions for the project. Please use the report template provided.

### Submission

End of week 3: Functional specification, Gantt chart, style guide, and Adobe XD prototype
End of week 7: Report with link to website, and all files in a compressed ZIP

## Option 2: Hotel Booking Website

A local tourism agency in Bergen is launching a new website called ‘Holidaze’ for visitors to the area to be able to find hotels, B&Bs and guesthouses, and for the accommodation owners to receive enquiries.

The project requires you to create the visitor side of the website where users can search accommodation and make enquiries, as well as the administration side where properties can be added and enquiries managed.

You will need to create an API to store the data for the establishments, enquiries and contact submissions. You can choose to use WordPress or Strapi as a Headless CMS, but it is very important that the API is deployed and publicly available. Please do not submit any files for your API. Only submit the website you have created.

## Requirements for the Website

### Visitor Side

- Homepage
- Search bar typeahead (auto dropdown with hotel names that match what has been typed)
- A results page with all hotels
- The hotel specific page which displays all details about the hotel
- An enquiry page either modal or separate page
- A contact page (different to enquiry page) which goes to the admin for Holidaze

### Admin side

- Create a login section that makes use of JWT tokens
- List of enquiries and new enquiries appear when user submits the form on the enquiry page
- List of messages from contact form
- The admin can create a new establishment

### Recommended Process

Week 1 and 2: Planning and Design
Week 3 to 6: Coding
Week 7: Bug Fixing

### Level 1 Process

- Start by planning out the project.
- Next begin your research of likely users and browse competitor websites for ideas.
- Create a style guide
- Build an Adobe XD prototype (or you can use Sketch or Figma).
- Start coding.
- Once you’ve finished development, start looking for bugs and ensure the site functions well on all viewports. Test the code on different devices. Because your API is public, the code shouldn’t rely on a local API.
- Refactor your code.
- Ask another student to look over your code and ask them if they can see how it might be better implemented. This is important to get an outside view on your code. Please attach this feedback to your report.
- Add the login details for your admin side at the top of this README.md file so that it's easy for the marker to spot.

### Submission

End of week 7: Report with link to website or a Github link and feedback from code review, and all files in a compressed ZIP. Login details added to the README.md.

### Resources

Report template included in the repo.
