<style type="text/css">

  .focus {
    color: var(--theme-foreground-focus);
  }

  .invert {
    background-color: var(--theme-foreground-alt);
    color: var(--theme-background);
  }

  .crop {
    border-radius: 8px;
    margin: 1rem;
    max-width: calc(100% - 2rem);
    box-shadow: 0 0 0 0.75px rgba(128, 128, 128, 0.2), 0 6px 12px 6px rgba(0, 0, 0, 0.4);
    aspect-ratio: 3024 / 1888;
    object-fit: cover;
    object-position: 0 100%;
  }

  .wbr::before {
    content: "\200b";
  }

  .wide {
    max-width: 960px;
  }

  figcaption code {
    font-size: 90%; /* TODO move to global.css */
  }

</style>

# 0.2-Reading Code Files

Let's cover some fundamentals before we venture any further. You must first learn how to read the different types of code files in the project *and* understand how the files are organized in what's called the ***architecture*** of the project. We will focus first on files written in what's called ***Markdown***.

## 0.2.1 Configure VS Code

Let's make your reading, writing, and developing life a little easier with some VSC tools and settings.

### Default VSC settings

- **Indentation**: Change to 2 spaces.
  1. Open *Settings* and search for *detect indentation*.
  2. Ensure that *Detect indentation* is ***de***selected.
  3. In the top search bar, search for *tab size*.
  4. Under the *Tab Size* setting, change the value to **2**.
- **Word Wrap**: Switch to on setting.
  1. Open *Settings* and search for "*word wrap*".
  2. Under the *Word Wrap* dropdown menu, select ***on***.
- **Terminal**: For Mac OSX, switch to *bash*.
  1. Open Settings and search for "Terminal › Integrated › Default Profile: Osx".
  2. In the dropdown menu, select ***bash***.

## 0.2.2 Markdown: Take 10 Minutes to Learn It!

Markdown (MD) is one way to write and format content for the web, because it uses the most universal text encodings called ***plaintext***. Plaintext written in MD can be easily shared between computers, mobile phones, and people.

Formatting text in MD enables you to easily format content by making things bold, creating headers, and organizing lists. Websites like Reddit and Github, as well as writing tools like Obsidian, all use MD to style their comments. For example, here's how to use the asterisk in three different ways:

- One `*` for italics: I am *italicized*!
- Two `**` for bolded: I am **bolded**!
- Three `***` for bolded and italics: I am ***bolded and italicized***!

Learn more about MD at [Markdownguide.org](https://www.markdownguide.org/getting-started/), and save this [cheatsheet](https://www.markdownguide.org/cheat-sheet/) as a learning aid.

Before you go any further, complete the [Markdown Tutorial](https://www.markdowntutorial.com/). Submit a screenshot of the completion screen to me on Moodle.

## 0.2.3 Project Structure

Software projects require understanding its structure: Where, How, and Why files are organized and stored in a particular way. It isn't enough to save a file anywhere. Code requires specific pointers to load and use resources at well-defined locations. So, understanding project structure, i.e., architecture, is paramount!

For example, the Observable Framework folks designed typical Framework project architecture of their own, which I have taken and modified below for this course's textbook.

```bash
/
├─ /src
│  ├─ /00-Getting-Started
│  │  └─ 00-what-is-framework.md
│  │  └─ 01-git-github.md
│  │  └─ ...
│  ├─ /01-Learning-JS
│  │  ├─ /utils
│  │  │  └─ utils.js
│  │  └─ 00-why-stats.md
│  │  └─ 01-freq-dist.md
│  │  └─ ...
│  ├─ /02-Why-Stats
│  │  └─ 00-why-stats.md
│  │  └─ 01-freq-dist.md
│  │  └─ ...
│  ├─ /...
│  ├─ /assets
│  │  ├─ /css
│  │  ├─ /images
│  │  │  ├─ /1-js
│  │  │     └─ imagefile.png
│  │  │     └─ another.jpg
│  │  ├─ ...
│  ├─ /data
│  │  ├─ /...
│  │  ├─ /nc-voters
│  │  │  └─ ...
│  │  │  └─ nc_absentee_mail_groupedby_race_gender_2024.csv
│  │  │  └─ ...
│  │  ├─ /...
│  │  ├─ launches.csv.js       # Observable data loader
│  │  └─ events.json           # a static data file
│  └─ index.md                 # the home page
├─ .gitignore
├─ observablehq.config.js      # the Observable app config file
├─ package.json
└─ README.md
```

**/** - This forward-slash represents the "root” of the Observable app project. Everything related to this project and its development resides within the directory called "`Justice-Centered-Data-Design`".

**/src** - This is the “***source root***”. This folder contains all of the *source* files. We'll leanr how additional pages go here, and how each page is a Markdown file. Observable Framework uses [file-based routing](https://observablehq.com/framework/project-structure#routing), which means that the name of the file controls where the page is served.

**/src/index.md** - This is the home page for the Observable app. Observable enables you to add as many additional pages as you’d like, but you should always have a home page named `index.md` in your project in the root of the designated ***source root*** folder.

**/src/data** - You should put static data files in here, or something Observable calls [data loaders](https://observablehq.com/framework/data-loaders), which we may learn how to write later in the class. Data files can be located anywhere in your *source root*, but it is highly recommend organizing data in this folder.

**/src/assets** - You should organize assets, i.e. file resources in this folder. If you look closely, you'all see that this project has multiple subfolders in here, such as `images` or `vids`. We can neatly organize our assets, like media files, so we can them use them in the project later and find them easily with this dedicated space.

**/src/components** - Components are reusable code modules that we can use throughout the app. We'll learn more about them later. You can put shared [JavaScript modules](https://observablehq.com/framework/imports) anywhere in your source root, but you should definitely organize them in this folder.

**/observablehq.config.js** - This is the [app configuration](https://observablehq.com/framework/config) file, such as the pages and sections in the sidebar navigation, and the app’s title.

Overall, a project's structure helps you organize and stay organized, so you can create your own mind palace for each project for easier memory retention and recall. Believe me! As someone who has worked on multiple software projects, structure matters and helps reduce the workload, when executed well.

## 0.2.4 On Filepaths: Navigating Your Project's Structure

Ok, so project's maintain a well-defined architecture, so you can organize your files. Great! But, how do we use them?! ***Enter filepaths***.

All coding projects rely on the resources of numerous other code files. Your computer needs to know where those specific files are in relationship to any code file you're working on. So, it is imperative that you learn how to point to other files from within other files of a project, or even external to a project.

Before we move forward, let's learn about 2 main types of filepaths and how to use them: ***absolute*** paths and ***relative*** paths.

### Absolute and relative paths

**Absolute paths**: A path with the complete path information from the root of the specific server/computer.

- If on *remote* internet: Uses HTTP/HTTPS internet protocol at the beginning.
    - EXAMPLE:
- If on *local* computer: Accounts for all directories from the root of your computer. Here's an example of this particular file, as it is located on my computer:<br>`/Users/calindgr/Documents/NCSU/Courses/498-Justice-Centered-Data-Design/Justice-Centered-Data-Design/src/00-Getting-Started/04-reading-files.md`

We're going to use the architecture, i.e., folder-file structure, that we reviewed above.

```bash
/
├─ /src
│  ├─ /00-Getting-Started
│  │  └─ 00-what-is-framework.md
│  │  └─ 01-git-github.md
│  │  └─ ...
│  ├─ /01-Learning-JS
│  │  ├─ /utils
│  │  │  └─ utils.js
│  │  └─ 00-why-stats.md
│  │  └─ 01-freq-dist.md
│  │  └─ ...
│  ├─ /02-Why-Stats
│  │  └─ 00-why-stats.md
│  │  └─ 01-freq-dist.md
│  │  └─ ...
│  ├─ /...
│  ├─ /assets
│  │  ├─ /css
│  │  ├─ /images
│  │  │  ├─ /1-js
│  │  │     └─ imagefile.png
│  │  │     └─ another.jpg
│  │  ├─ ...
│  ├─ /data
│  │  ├─ /nc-voters
│  │  │  └─ ...
│  │  │  └─ nc_absentee_mail_groupedby_race_gender_2024.csv
│  │  │  └─ ...
│  │  ├─ launches.csv.js       # Observable data loader
│  │  └─ events.json           # a static data file
│  └─ index.md                 # the home page
├─ .gitignore
├─ observablehq.config.js      # the Observable app config file
├─ package.json
└─ README.md
```

Filepaths are written in a syntax that follows a standard called a ***URL***: ***Uniform Resource Locator*** (see [Wikipedia entry](https://en.wikipedia.org/wiki/URL)). URLs are standardized (agreed upon) ways to write out a path to a resource on any computer. This simple standard enables others to develop programming languages that can assume a universal syntax to find all resources—even on computers somewhere across the planet!

As we move forward, I will simply say filepath, but we will use URL syntax, which involves a couple key declarations that tell computers what action to perform.

#### Declarative notation and syntax of paths

| Notation | Action |
|----------|--------|
| `/`  | **Two conditional meanings**:<br>&nbsp;&nbsp;1. **Start At Root**: If used as the first character in a path, declares you are starting at the root of a project.<br>&nbsp;&nbsp;2. **Go Forward**: Always declares the action to go forward into the next defined folder. |
| `./`  | **Start In Present Working Directory**: Used only at the very start of a filepath. Tells computer to start the path in the present working directory of the file in which the path is written. |
| `..`  | **Go Back In Working Directory**: Used only at the very start of a filepath. Tells computer to start the path in the present working directory of the file in which the path is written. |

In the video below, I demonstrate how to practice using the above syntax to write paths in your terminal.

<video onloadstart="this.playbackRate = 1.25;"
       controls
       style="width: 620px; height:620px">
  <source src="../assets/vids/getting-started/04-reading-filepath-practice.mp4" type="video/mp4" />
</video>
