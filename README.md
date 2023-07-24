<a name="readme-top"></a>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
        <ol>
          <li>
            <a href="#built-with">Built With</a>
          </li>
          <li>
            <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#Installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <!-- <li><a href="#roadmap">Roadmap</a></li> -->
    <li><a href="#accounts">Test Accounts</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <!-- <li><a href="#contact">Contact</a></li> -->
        </ol>
      </a>
    </li>

</details>


# About The Project

This project is a Task Manager Dashboard with a login option, designed to help organizations efficiently manage their tasks and projects. It provides a user-friendly interface where authorized users can log in and perform various actions based on their assigned roles. The system consists of three main roles: Admin, Manager, and Employee, each having specific functionalities and access levels.bout both Pokémon and berries, allowing you to access and explore their specific details.

[Online](https://task-manager-gamma-seven.vercel.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a name="built-with"></a>
## Built With

  ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) </br>
  [![Typescript][Typescript.js]][Typescript-url] </br>
  ![Prisma](https://img.shields.io/badge/Prisma-1B222D?style=for-the-badge&logo=prisma&logoColor=white) </br>
  ![Formik](https://img.shields.io/badge/Formik-3178C6?style=for-the-badge&logo=formik&logoColor=white) </br>
  ![React Query](https://img.shields.io/badge/React_Query-000000?style=for-the-badge&logo=react-query&logoColor=white) </br>
  ![Recharts](https://img.shields.io/badge/Recharts-000000?style=for-the-badge&logo=recharts&logoColor=white)  </br>
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Getting Started

This is an example of how you may give instructions on setting up your project locally. To get a local copy up and running follow these simple example steps.

### Prerequisites

Make sure you have the following software installed:
  <ol>
    <li>Node.js - You can download and install Node.js from the official website: https://nodejs.org</li>
    <li>TypeScript (Global): TypeScript is used in the project for type-checking and compilation. If you don't have TypeScript installed globally, you can do so by running the following command in your terminal:</li>
  </ol>

  ```sh
    npm install -g typescript  
  ```





### Installation

Follow these steps to set up the project:

1. Clone the repo
```sh
  git clone https://github.com/FuuKowatty/TaskManager.git
```
2. Navigate to your project directory
```sh
  cd taskmanager
```

3. Install npm
```sh
  npm install
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<a name="usage"></a>
## Usage

To run the project locally, use the following command:

```sh
  npm run dev
```
This will start the development server and the project will be accessible at http://localhost:3000 in your web browser.

Upon running the project, you will be presented with a user interface displaying two buttons: "Login" and "View Demo."

If you prefer not to go through the login process and simply want to explore the project's functionalities, click on the "View Demo" button. This option provides instant access to the admin account, bypassing the need for manual login.

![homepage](https://i.imgur.com/K8rLKOz.png) 

Upon logging in, you'll see a dashboard panel with a chart. This chart shows data about the chosen user's tasks across the current year, grouped by month. If logged in as an employee, you'll only see your own data on the chart. Easily track your productivity and task completion progress using the chart!

All users will have access to the tasks page, where they can view a list of tasks. Employees will only see their own tasks on the table, while managers and admins will have additional privileges. Managers and admins can create, edit, and delete tasks from the table as needed.

In addition to the tasks page, admins will also have access to the team page. On the team page, admins can manage the roster of managers and employees. They have the authority to create, edit, and delete managers or employees to ensure the team is up-to-date and well-organized.




<!-- <p align="right">(<a href="#readme-top">back to top</a>)</p>



## Roadmap

- [x] Optimazed image size
- [x] Add filtered reseult
- [ ] Add slider with pokemons regions in Home page
- [ ] Light Theme -->

## Accounts
<table>
    <tr>
        <th>email</th>
        <th>password</th>
        <th>role</th>
    </tr>
    <tr>
        <td>admin@gmail.com</td>
        <td>qwe123</td>
        <td>admin</td>
    </tr>
        <tr>
        <td>liam.harrison@example.com</td>
        <td>ManagerP@ssword1</td>
        <td>manager</td>
    </tr>
    <tr>
        <td>ella.bennett@example.com</td>
        <td>pa$$word1</td>
        <td>employee</td>
    </tr>
        <tr>
        <td>oliver.foster@example.com</td>
        <td>SecretPass1</td>
        <td>employee</td>
    </tr>
</table>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ## Contact

Email: <a href = "mailto: bartoszmech0@gmail.com">bartoszmech0@gmail.com</a> -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Typescript.js]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[Typescript-url]: https://www.typescriptlang.org/
[Styled-components.js]: https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white
[Styled-components-url]: https://styled-components.com/
[React-router-dom.js]: https://img.shields.io/badge/react--router--dom-CA4245?style=for-the-badge&logo=react-router-dom&logoColor=white
[React-router-dom-url]: https://reactrouter.com/
[LRU-cache.js]: https://img.shields.io/badge/LRU--cache-FF6C37?style=for-the-badge&logo=javascript&logoColor=white
[LRU-cache-url]: https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)
[React-spring.js]: https://img.shields.io/badge/react--spring-88CE02?style=for-the-badge&logo=react&logoColor=white
[React-spring-url]: https://www.react-spring.io/




