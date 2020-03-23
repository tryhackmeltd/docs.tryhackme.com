<h1 align="center">  
<img src="https://i.imgur.com/3HnCZjv.png" style="zoom:40%"/><br /><br />  
TryHackMe Documentation  
</h1>  
  
<p align="center">Officially maintained documentation for all TryHackMe products, services & resources.</p>  
  
<p align="center">  
  <a aria-label="Build Status" href="https://travis-ci.com/github/tryhackmeltd/docs.tryhackme.com" target="_blank">  
    <img alt="Build Status" src="https://travis-ci.com/tryhackmeltd/docs.tryhackme.com.svg?branch=master" target="_blank" /> 
</a>  
  <a href='https://coveralls.io/github/tryhackmeltd/docs.tryhackme.com?branch=master'><img src='https://coveralls.io/repos/github/tryhackmeltd/docs.tryhackme.com/badge.svg?branch=master' alt='Coverage Status' /></a>
  <a aria-lable="All Contributors" href="#contributors-"><!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<img alt='All Contributors' src='https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square' />
<!-- ALL-CONTRIBUTORS-BADGE:END --></a>
  <a aria-label="Open Issues" href="https://github.com/tryhackmeltd/docs.tryhackme.com/issues" target="_blank">  
    <img alt="Build Status" src="https://img.shields.io/github/issues/tryhackmeltd/docs.tryhackme.com" target="_blank" /> 
</a>  
  <a aria-label="TryHackMe documentation source is free to use" href="https://github.com/tryhackmeltd/docs.tryhackme.com/blob/master/LICENSE" target="_blank">  
    <img alt="License: MIT" src="https://img.shields.io/github/license/tryhackmeltd/docs.tryhackme.com" target="_blank" />  
</a>  
</p>  
 
<p align="center">  
  <a aria-label="TryHackMe documentation" href="https://docs.tryhackme.com" target="_blank">📚 Read the documentation</a>  
  |  
  <a aria-label="contribute to the docs" href="#-contributing"><b>Contributing to the documentation</b></a>  
</p>  
  
<p>  
  <a aria-label="Follow @RealTryHackMe on Twitter" href="https://twitter.com/intent/follow?screen_name=realtryhackme" target="_blank">  
    <img  alt="Twitter: TryHackMe" src="https://img.shields.io/twitter/follow/realtryhackme.svg?style=flat-square&label=Follow%20%40RealTryHackMe&logo=TWITTER&logoColor=FFFFFF&labelColor=00aced&logoWidth=15&color=lightgray" target="_blank" />  
  </a>  
  <a aria-label="TryHackMe Blog" href="https://blog.tryhackme.com">  
    <img align="right" alt="TryHackMe: Blog" src="https://img.shields.io/badge/Learn%20more%20on%20our%20blog-lightgray.svg?style=flat-square" target="_blank" />  
  </a>  
</p>  
  
## Quick Links  
  
- [📚 Documentation](https://docs.tryhackme.com)  
- [👏 Contributing](#-contributing)  
- [❓ FAQ](#-faq)  
- [✨ Contributors](#contributors-)  
- [License](#license)  
  
## 📚 Documentation  
  
<p>The documentation can be accessed at <a aria-label="TryHackMe documentation" href="https://docs.tryhackme.com">https://docs.tryhackme.com</a>.</p>  
  
- [Cloning the repository for offline use](#-contributing)  
- [File a bug report](https://github.com/tryhackmeltd/docs.tryhackme.com/issues/new)  
- [Suggest a feature](https://github.com/tryhackmeltd/docs.tryhackme.com/issues/new)  
  
  
## 👏 Contributing  
  
If you like the TryHackMe documentation and want to help make it better then check out our guidelines below! If you are simply interested in adding a new article, amending an existing article, or fixing any grammatical/formatting errors, then you can follow the instructions below.  
  
> Note: in order to contribute to the project you must have **Node.js** & **NPM** installed. The Node.js binaries come with NPM bundled together, which can be downloaded at [https://nodejs.org/download](https://nodejs.org/download).  
  
#### 1. Clone repository and install dependencies  
You can execute the commands below into your local terminal window.  
```  
$ git clone https://github.com/tryhackmeltd/docs.tryhackme.com.git  
$ cd ./docs.tryhackme.com-master  
$ npm i  
```  
  
#### 2. Start development server to run locally  
Run the following in your local terminal window to start the local Node.js development server.   
*Ensure you are at the project's root directory (where package.json is located)*.  
```  
$ npm start  
```  
  
#### 3. Editing `<rootDir>/docs`  
All documentation markdown files (`*.md)`, which together make up the content visible on the TryHackMe documentation site can be found within `<rootDir>/docs`.

Directories are treated as categories, and the markdown files are treated as articles, each belonging to a category. As an example, take `docs/general/welcome`; the `general` directory contains multiple markdown files (articles), which are treated as all belong to the category `general`, which is their parent directory.

If you're adding a new article and feel it can be placed in an existing category, simply create a new markdown file `My Article.md` and drop it in the relevant directory. You need to make sure that you add the following header to any markdown file you add:

```markdown
---  
id: article-id  
title: My Article Title  
sidebar_label: My Sidebar Label
---
``` 

As an example, let's say you want to add the article `My Awesome Room` to the existing category **Rooms**. First, you'd navigate to `<rootDir>/docs/rooms`. You are now in the **Rooms** category. Now, you'd create a markdown file in this directory called `My Awesome Room.md` and add the following header to the very top of the file:

```markdown
---  
id: my-awesome-room  
title: My Awesome Room 
sidebar_label: My Awesome Room 
---
```

| key            | description |
|---------------|---------------------------------------------------------------------------------------------------|
| id           | The article ID, ideally just a kebab-case version of the article's title, i.e.  `my-awesome-room` | 
| title         | The article's title, i.e. `My Awesome Room`                                                       |
| sidebar_label | The title displayed in the sidebar, either the same as title or a shorter alternative             |

Now, save your changes, and if running the local development server you should be able to directly navigate to the document passing the URI `docs/rooms/my-awesome-room`. Note how the `ID` property is treated as the resource URI.

On the left of the document, there is the documentation sidebar, which looks something like this:

![Example Sidebar](./static/img/thm-docs-sidebar.png)

In order to add your new article to this sidebar, open `<rootDir>/sidebars.js` and locate the **Rooms** category. Then add the article to the `items` list, like so:

```js
{
  type: 'category',
  label: 'Rooms',
  items: [
    'rooms/introduction-to-rooms',
    'rooms/room-difficulty-levels',
    'rooms/my-awesome-room' // ADD YOUR NEW ARTICLE REFERENCE HERE!
  ]
}
```

Once you are happy with your changes, save the file and re-visit the article in your browser. You will notice it should now appear on the sidebar! You can now open a pull-request to add your article to the live documentation site!

If you wish to create a new category, the process above is the same, except you add your articles to your newly created category directory! The only difference is you will need to create the category object within the `<rootDir>/sidebars.js`, rather than just appending the article to an existing one.

For example, let's say you wanted `My Awesome Room` to live inside a new **Misc** category, you'd create a directory called 
`misc` under `<rootDir>/docs/`, which would give you `<rootDir>/docs/misc`. Then, you'd add your `my-awesome-room.md` file inside this directory, ensuring you include the header as discussed before. Now, when editing `<rootDir>/sidebars.js`, you'd add a new object for the `misc` category, and then add your article as the first item in the `items` list, like so:

```js
{
  type: 'category',
  label: 'Rooms',
  items: [
    'rooms/introduction-to-rooms',
    'rooms/room-difficulty-levels',
    'rooms/my-awesome-room'
  ]
},

/**
* ADD NEW MISC CATEGORY
*/
{
  type: 'category',
  label: 'Misc',
  items: [
    'misc/my-awesome-room' // ADDED NEW CATEGORY AND ARTICLE!
  ]
}
```

Lastly, if you would like to display your category (*only for categories not articles*) on the homepage of the site, add your config object to `<rootDir/homepage-categories.js>`. Simply open the file and append your category to the end of the array, ensuring you bump the `id` up 1 from the previous item. To add the `misc` category, you'd add the following:



```js
module.exports = [
  {
    id: 1,
    title: 'Introduction',
    description: 'Just getting started with TryHackMe? Start here for a detailed introduction to our platform.',
    uri: '/docs/introduction/welcome'
  },
  {
    id: 2,
    title: 'What is TryHackMe?',
    description: 'Not entirely sure what TryHackMe is all about? This article will explain the core concepts behind what we offer.',
    uri: '/docs/introduction/what-is-tryhackme'
  },
  {
    id: 3,
    title: 'Why should I Join?',
    description: 'We know the reasons why you should join, but if you\'re still a bit sceptical then why not have a read.',
    uri: '/docs/introduction/why-should-i-join'
  },
  {
    id: 4,
    title: 'Getting Started',
    description: 'Want to get started with learning or teaching cyber security? This article is for you.',
    uri: '/docs/getting-started/introduction'
  },
  
  /**
  * ADDED THE MISC CATEGORY TO THE END OF THE LIST, INCREMENTING THE ID BY 1.
  */
  
  {
    id: 5,
    title: 'Misc',
    description: 'This is my new category that houses a lot of miscellaneous things.',
    uri: '/docs/misc/my-awesome-room' // THIS WILL BE THE URI TO THE FIRST ARTICLE IN THE CATEGORY, IN THIS CASE IT'S THE ONLY ARTICLE
  }

]
```

Once complete, commit your changes and open a pull request for us to review and merge.

> Note: although adding and amending documentation markdown files should not affect any of the pre-existing unit tests, please ensure you check this prior to raising a pull request. 
> 
> ***If you are making code edits, please ensure you update the relevant tests accordingly; including adding any tests to cover new functionality. Our TravisCI build expects 100% code coverage from Jest (with cirumstantial exceptions).***
  
## ❓ FAQ  
  
If you have questions about TryHackMe or this documentation and want answers, then check out our [Discord](https://discord.gg/VdCtjEg) or connect with us on [Twitter](https://twitter.com/RealTryHackMe) and [Instagram](https://instagram.com/RealTryHackMe)!  
  
Alternatively, you may also ask questions on our [forums](https://tryhackme.com/forum).  
  

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/Matt_Kent9"><img src="https://avatars1.githubusercontent.com/u/5375354?v=4" width="100px;" alt=""/><br /><sub><b>Matt Kent</b></sub></a><br /><a href="#infra-Kent55" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/tryhackmeltd/docs.tryhackme.com/commits?author=Kent55" title="Tests">⚠️</a> <a href="https://github.com/tryhackmeltd/docs.tryhackme.com/commits?author=Kent55" title="Code">💻</a> <a href="#design-Kent55" title="Design">🎨</a></td>
    <td align="center"><a href="https://twitter.com/0x8445"><img src="https://avatars0.githubusercontent.com/u/23476599?v=4" width="100px;" alt=""/><br /><sub><b>Ben Spring</b></sub></a><br /><a href="https://github.com/tryhackmeltd/docs.tryhackme.com/commits?author=benspring" title="Code">💻</a> <a href="https://github.com/tryhackmeltd/docs.tryhackme.com/commits?author=benspring" title="Documentation">📖</a> <a href="#design-benspring" title="Design">🎨</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
  
> Note: To add a new contributor to this table, including yourself, comment on the following open issue: https://github.com/tryhackmeltd/docs.tryhackme.com/issues/3
  
## License  
  
The TryHackMe documentation source code is boilerplated from the Docusaurus OSS, and is made available under the [MIT license](LICENSE). Please check nested dependencies for their relevant licenses; some may be BSD etc.  
  
<!-- Footer -->  
  
---  
  
<p>  
<center>
    <a aria-label="TryHackMe documentation source is free to use" href="https://github.com/tryhackmeltd/docs.tryhackme.com/blob/master/LICENSE" target="_blank">  
        <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-success.svg?style=for-the-badge&color=33CC12" target="_blank" />  
    </a>
    </center>  
</p>
