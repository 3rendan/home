<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Developer's Portfolio โจ</h1>

  <p align="center">
    A personal developer portfolio deployed to Netlify using React and Bootstrap forked and adjusted based on the work of Hashir Shoaeb available <a href='https://github.com/hashirshoaeb/home.git' target='_blank'>here</a>.<br /> 
    Site URL / Demo: 
    <a href="https://brendanryan.xyz">brendanryan.xyz</a>
    <br />
    <br />
    <a href="https://brendanryan.xyz">About Me</a>
  </p>
</p>

[![Node Version](https://img.shields.io/static/v1?label=Node&message=v16.16.0&color=026e00&style=for-the-badge)](https://nodejs.org)
[![npm Version](https://img.shields.io/static/v1?label=npm&message=7.4.1&color=cb0000&style=for-the-badge)](https://nodejs.org)

[![Site preview](/public/social-image.png)](https://brendanryan.xyz)

## Table of Contents

- [Technology Stack ๐ ๏ธ](#technology-stack-)
- [Structure โ](#structure-)
- [Sharing ๐](#sharing-)
- [Prerequisites ๐ช](#prerequisites-)
- [Setup And Deployment ๐ง](#setup-and-deployment-)
- [Contributing ๐](#contributing-)
- [Issues](#issues)
- [Upcoming Features / Improvements ๐](#upcoming-features-/-improvements-)
- [Showcase ๐](#showcase-)
- [Versรฃo em Portuguรชs :brazil:](#versao-em-portugues-)

## Technology Stack ๐ ๏ธ

Dependencies defined in package.json:

[Reactjs](https://reactjs.org/)
| [Bootstrap](https://getbootstrap.com/)
| [Typist](https://github.com/jstejada/react-typist)

## Structure โ

- Navigation bar (optional)
- Body
  - Name | Profession
  - Contact / Follow / Find me / Facebook / LinkedIn / GitHub / Instagram / Email / CodePen
  - Resume | About me
- About Me
  - Display picture (optional)
  - About myself, my Interests, Goals and Hobbies
  - Things I'm good at (Skills)
  - Resume button
- Recent Projects (using GitHub API) (optional)
- Skills (optional)
  - Technical Skills
  - Soft Skills
- Footer
  - Footer Note (optional)
  - Copyrights - open source
  - Acknowledgements(

## Sharing ๐

Project is open source. Feel free to make your own version. All you need to do is to fork this repository, edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) and add resume. Mark star โญ if you like the project.

## Prerequisites ๐ช

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC. You should also own a GitHub account.

## Setup And Deployment ๐ง

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Open in editor and edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) file.

4. Add your resume as <resume.pdf> in place of [src/editable-stuff/resume.pdf](./src/editable-stuff/)

5. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).
6. Change URL in [package.json](./package.json) file:

   ```json
    "homepage": "https://<your-username>.github.io/home"
   ```

   Or for deployment at custom domain, refer [create-react-app.dev](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson)

7. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

8. To deploy website, run:

   ```bash
    npm run build
    npm run deploy
   ```

   Or for deployment at \<username>.github.io, refer [READMEdocs/custom-deployment.md](./READMEdocs/custom-deployment.md) and [pages.js](./pages.js)

9. Congrats your site is up and running. To see it live, visit:

   ```https
     https://<your-username>.github.io/home
   ```

10. To change the thumbnail image:

    - Navigate to the "public" folder.  
    - There you will see "social-image.png".  
    - Delete it.   
    - Take a screenshot of your version and rename it "social-image.png" and place it there.  
    
   Next time if you make changes, repeat from step 8.

Facing issues? Feel free to contact at hashirshoaeb@gmail.com.

## Showcase ๐

Have you changed something in the code to create your own version? Feel free to share with me, I will list them in this space.

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/justiceserv/justiceserv.github.io">
        <img src="READMEdocs/justiceserv-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Guhyun Chung</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/hamzasohail0/home/">
        <img src="READMEdocs/hamzasohail0-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Hamza Sohail</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/AymunTariq/home/">
        <img src="READMEdocs/aymuntariq-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Aymun Tariq</b></sub>
      </a>
      <br />
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/anaashrafi/home/">
        <img src="READMEdocs/anaashrafi-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Ana Ashrafi</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/jefferyjohn/home/">
        <img src="READMEdocs/jefferyjohn-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Jeffery John</b></sub>
      </a>
      <br />
    </td>
    <td align="center">
      <a href="https://github.com/remimestdagh/home/">
        <img src="READMEdocs/remimestdagh-github-io-home.gif" width="300px" alt="" />
        <br />
        <sub><b>Remi Mestdagh</b></sub>
      </a>
      <br />
    </td>
  </tr>
    <tr>
    <td align="center">
      <a href="https://github.com/xunxdd/portfolio/tree/master">
        <br />
        <sub><b>Xun Ding</b></sub>
      </a>
      <br />
    </td>    
    <td align="center">
      <a href="https://github.com/S-Philp/Shannel.philp">
        <br />
        <sub><b>Shannel Philp</b></sub>
      </a>
      <br />
    </td>    
    <td align="center">
      <a href="https://github.com/bibinvargheset/home">
        <br />
        <sub><b>Bibin Varghese</b></sub>
      </a>
      <br />
    </td>
  </tr>
</table>

## Versรฃo em Portuguรชs :brazil:

Esse projeto foi traduzido para portuguรชs! Se vocรช gostou dele e quer criar a sua prรณpria versรฃo, confira o repositรณrio do [@tashima42](https://github.com/tashima42) em [https://github.com/Tashima42/home](https://github.com/Tashima42/home).
Novas contribuiรงรตes e revisรตes na traduรงรฃo sรฃo muito bem vindas!

## Notice:

This project has been archived. Means that it is no longer actively maintained by developer. Free free to fork, use and maintain your own version. You can check my new portfolio template [here](https://github.com/hashirshoaeb/portfolio)

## Stargazers over time

[![Stargazers over time](https://starchart.cc/hashirshoaeb/home.svg)](https://starchart.cc/hashirshoaeb/home)
