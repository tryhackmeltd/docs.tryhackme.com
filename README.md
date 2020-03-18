
  
<h1 align="center">  
<img src="https://i.imgur.com/3HnCZjv.png" style="zoom:40%"/><br /><br />  
TryHackMe Documentation  
</h1>  
  
<p align="center">Officially maintained documentation for all TryHackMe products, services & resources.</p>  
  
<p align="center">  
  <a aria-label="Build Status" href="https://travis-ci.com/github/tryhackmeltd/docs.tryhackme.com" target="_blank">  
    <img alt="Build Status" src="https://travis-ci.com/tryhackmeltd/docs.tryhackme.com.svg?branch=master" target="_blank" /> 
</a>  
  <a aria-label="TryHackMe documentation source is free to use" href="https://github.com/tryhackmeltd/docs.tryhackme.com/blob/master/LICENSE" target="_blank">  
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-success.svg?style=flat-square&color=33CC12" target="_blank" />  
</a>  
</p>  
 
<p align="center">  
  <a aria-label="TryHackMe documentation" href="https:docs.tryhackme.com">📚 Read the documentation</a>  
  |  
  <a aria-label="contribute to the docs" href="https://github.com/TryHackMeLtd/docs.tryhackme.com/#contributing"><b>Contributing to the documentation</b></a>  
</p>  
  
<p>  
  <a aria-label="Follow @RealTryHackMe on Twitter" href="https://twitter.com/intent/follow?screen_name=realtryhackme" target="_blank">  
    <img  alt="Twitter: TryHackMe" src="https://img.shields.io/twitter/follow/tryhackme.svg?style=flat-square&label=Follow%20%40TryHackMe&logo=TWITTER&logoColor=FFFFFF&labelColor=00aced&logoWidth=15&color=lightgray" target="_blank" />  
  </a>  
  <a aria-label="TryHackMe Blog" href="https://blog.tryhackme.com">  
    <img align="right" alt="TryHackMe: Blog" src="https://img.shields.io/badge/Learn%20more%20on%20our%20blog-lightgray.svg?style=flat-square" target="_blank" />  
  </a>  
</p>  
  
## Quick Links  
  
- [📚 Documentation](https://docs.tryhackme.com)  
- [👏 Contributing](#-contributing)  
- [❓ FAQ](#-faq)  
- [💙 The Team](#-contributors)  
- [License](#-license)  
  
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
All documentation markdown files (`*.md)`, which together make up the content visible on the TryHackMe documentation site can be found within `<rootDir>/docs`.  Following the pre-existing structure all documents/articles are placed within their own sub-directories. This makes up the category URI for the request document, i.e. `/getting-started`. Inside of these sub-directories live both further nested categories and also individual markdown files which make up the resource URI. A complete example of this can be viewed as `https://docs.tryhackme.com/docs/getting-started/introduction`, which translates to `<rootDir>/docs/getting-started/introduction.md`. 

To add a new document, either find a pre-exisitng location, if appropriate, or create a new sub-directory within `<rootDir>/docs` and create the relevant structure. Each markdown file ***MUST*** include a prefix header such as:

```markdown
---  
id: introduction  
title: Getting Started Introduction  
sidebar_label: Introduction  
---
``` 
The `id` property is used by docusaurus in order to prefix the document as a unique entity. The `title` property is of course the document's title. The `sidebar_label` however is the name which is displayed when viewing any document within the documentation site. It is a navigatable sidebar and this property allows you to shorten the name to improve readability. You can see in the above example, this header prefix is taken from `/docs/getting-started/introduction`; as this lives within the sub-category `"Getting Started"` there is no need for the sidebar to contain the document's full title, as the context in which it introduces is pretty clear.

Below is a screenshot to demonstrate this:
![Example Sidebar](./static/img/thm-docs-sidebar.png)

Once you are happy with your changes, open `<rootDir>/sidebars.js` and following the predefined structure, add your new addition information to the config object. The structure is as follows:

```js
module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/welcome',
        'introduction/what-is-tryhackme',
        'introduction/why-should-i-join'
      ]
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/introduction',
        {
          type: 'category',
          label: 'Individual',
          items: [
            'getting-started/individual/creating-an-account',
            'getting-started/individual/openvpn-configuration',
            'getting-started/individual/deploying-your-first-vm'
          ]
        }

        /* ... */

      ]
    }
  ]
}
```

Lastly, if you would like to display your category on the homepage of the documentation site add your config object to `<rootDir/homepage-categories.js>`. The structure of this file is as follows:

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
  {
    id: 5,
    title: 'Introduction to Rooms',
    description: 'This article explains the concept of rooms, what they are, how to complete them and where to start.',
    uri: '/docs/rooms/introduction-to-rooms'
  }

/* ... */

]
```

Once complete, commit your changes to a branch of your choosing and open a pull request for us to review and merge.

> Note: although adding and amending documentation markdown files should not affect any of the pre-existing unit tests, please ensure you check this prior to raising a pull request. 
> 
> ***If you are making code edits, please ensure you update the relevant tests accordingly; including adding any tests to cover new functionality. Our TravisCI build expects 100% code coverage from Jest (with cirumstantial exceptions).***
  
## ❓ FAQ  
  
If you have questions about TryHackMe or this documentation and want answers, then check out our [Discord](https://discord.gg/VdCtjEg) or connect with us on [Twitter](https://twitter.com/RealTryHackMe) and [Instagram](https://instagram.com/RealTryHackMe)!  
  
Alternatively, you may also ask questions on our [forums](https://tryhackme.com/forum).  
  
## 💙 Contributors  
  
Thanks goes to all these wonderful individuals who together continue to make TryHackMe a fun, safe and enjoyable cyber security training platform.  

**TODO**
  
> Note: this section is automatically updated so please raise a pull request to add yourself if you've contributed to this project.  
  
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
