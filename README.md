<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="">
    <img src="images/laravel_logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Edmachina Vue.js Challenge</h3>

  <p align="center">
    <br />
    <a href="https://github.com/EzequielW/edmachina_challenge"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="https://github.com/EzequielW/SteticNews">View Demo</a> -->
    ·
    <a href="https://github.com/EzequielW/edmachina_challenge/issues">Report Bug</a>
    ·
    <a href="https://github.com/EzequielW/edmachina_challenge/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#fake-server">Fake server</a></li>
    <li><a href="#component-documentation">Component documentation</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Solution to Edmachina Vue challenge, it's a frontend mockup based on the design file provided.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Vue][Vue.js]][Vue-url]
* [![Quasar][Quasar]][Quasar-url]
* [![Docker][Docker.com]][Docker-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* [Docker install](https://docs.docker.com/get-docker/)

### Installation

1. Clone the repository
    ```sh
    git clone https://github.com/EzequielW/edmachina_challenge.git
    ```
2. Start up services with docker compose, make sure ports 9000, 9001 and 9002 are free or change it in the compose yml file
    ```sh
    docker-compose up -d
    ```

If everything went well you should see the main dashboard running on port 9000

![Dashboard Page][dashboard-screenshot]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- FAKE SERVER INFO -->
## Fake Server

The fake API uses json-server package to run, and is fed data by the db.json file, you can modify user information there and it should reflect on the main dashboard. You can find information about what endpoints are available by going to port 9001

[![Fake Api Screenshot][fake-server-screenshot]](http://localhost:9001/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- STORYBOOK DOCS INFO -->
## Component Documentation

To document vue components I used the library [Storybook](https://storybook.js.org) which allows to create stories for each component and display a series on use cases as samples. You can check the docs up at port 9002 and play with it.

[![Storybook docs][storybook-screenshot]](http://localhost:9002/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Ezequiel Baez Wokraczka - ezequielwokraczka@gmail.com

Project Link: [https://github.com/EzequielW/edmachina_challenge](https://github.com/EzequielW/edmachina_challenge)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Quasar Components](https://quasar.dev/components/)
* [Storybook Documentation](https://storybook.js.org/docs/writing-stories)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/EzequielW/SteticNews.svg?style=for-the-badge
[contributors-url]: https://github.com/EzequielW/SteticNews/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/EzequielW/SteticNews.svg?style=for-the-badge
[forks-url]: https://github.com/EzequielW/SteticNews/network/members
[stars-shield]: https://img.shields.io/github/stars/EzequielW/SteticNews.svg?style=for-the-badge
[stars-url]: https://github.com/EzequielW/SteticNews/stargazers
[issues-shield]: https://img.shields.io/github/issues/EzequielW/SteticNews.svg?style=for-the-badge
[issues-url]: https://github.com/EzequielW/SteticNews/issues
[license-shield]: https://img.shields.io/github/license/EzequielW/SteticNews.svg?style=for-the-badge
[license-url]: https://github.com/EzequielW/SteticNews/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ezequiel-baez-149319190
[Express.js]: https://img.shields.io/badge/Express.js-35495E?style=for-the-badge&logo=express&logoColor=4FC08D
[Express-url]: https://expressjs.com/
[Docker.com]: https://img.shields.io/badge/Docker-FFFFFF?style=for-the-badge&logo=docker&logoColor=0769AD
[Docker-url]: https://www.docker.com/
[MySQL.com]: https://img.shields.io/badge/MySQL-0769AD?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://mysql.com 
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Quasar]: https://img.shields.io/badge/Quasar-000?style=for-the-badge&logo=quasar&logoColor=0769AD
[Quasar-url]: https://quasar.dev/
[dashboard-screenshot]: public/dashboard.png
[fake-server-screenshot]: public/api.png
[storybook-screenshot]: public/storybook.png