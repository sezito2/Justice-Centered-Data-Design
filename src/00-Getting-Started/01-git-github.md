# 01-Install git and Github

We need a way to work together online and asynchronously without "stepping on each others' toes", i.e., overwriting and breaking changes to our project's code and content. In this chapter, you will learn about a very prominent set of technologies used across scientific and technical domains that do just that: git and Github.

## 0.1.1 What is Git?

Git is a version control system, which helps you keep track of the changes that you make in a project. It's a bit like Google Docs or MS Word's Track Changes, except it's typically used for code.

## 0.1.2 Why is Git Useful?

Even though Git is mostly used for code, it's useful to think about Git in relationship to writing projects, which you might be more familiar with.

Let's say you're halfway through writing an essay when suddenly you come up with a brilliant idea for a different opening paragraph. Maybe you're tempted to delete the opening paragraph that you've already written and start a new one, but you're scared that the new paragraph won't be quite as brilliant as it seems in your head.

With a version control system like Git, you would be able to save the current version of the essay, create another version of the essay with the seemingly brilliant new opening paragraph, and compare them. If you ended up liking the version with the new opening paragraph better, you could easily merge it into the main version of the essay. Even if you changed your mind the next day, you could still revert back to the version with the original opening paragraph. All the changes and updates would be carefully tracked and easily navigable.

These are some of the things that make Git so useful, especially when you start working on bigger projects and complicated code.

## 0.1.3 What is GitHub?

GitHub is a website/social network that's built on top of the Git version control software. It allows you to store and easily publish projects. GitHub has become a primary place for people to publish datasets and share code. For example, The Pudding's film dialogue data is published [on GitHub](https://github.com/matthewfdaniels/scripts/)!

## 0.1.4 Negative Critiques of GitHub

<a href="https://www.theatlantic.com/technology/archive/2020/01/ice-contract-github-sparks-developer-protests/604339/" ><img src="../assets/images/getting-started/gh-protest.png" style="float:left;margin-right:1.5rem;width:300px" ></a >

It's also important to foreground backlash against GitHub. In 2020, they decided to renew a contract with U.S. Immigrations and Customs Enforcement (ICE). This decision has motivated some employees, developers, and GitHub users to protest and/or boycott the platform.

You can read more about the controversy in ["The Schism at the Heart of the Open-Source Movement"](https://www.theatlantic.com/technology/archive/2020/01/ice-contract-github-sparks-developer-protests/604339/) and [Dear GitHub](https://github.com/drop-ice/dear-github-2.0/blob/master/README.md).

## 0.1.5 Anatomy of a GitHub Page

<img src="../assets/images/getting-started/GitHub-Anatomy.png" />

## 0.1.6 Install git

To use git, you first need to install it. Instructions for [installing git can be found here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

To install git on a Windows computer, you need to install something called git for Windows (which comes with something called git Bash). The Digital Humanities Research Institute offers [helpful step-by-step instructions](https://github.com/DHRI-Curriculum/install/blob/v2.0/guides/git.md#windows) here.

To test if everything works, do the following:

### Mac

1. Open a Terminal application.
2. Write the following verbatim: `!git --version`

### Windows

1. Open Comand Prompt.
2. Write the following verbatim: `!git --version`

## 0.1.7 Install Github Desktop

GH Desktop is a nice GUI for git/Github technology. Github Desktop will allow us all to share our work with each other via this book which is a code repository.

1. Go to [Github's installation page for Desktop](https://desktop.github.com/).
2. Click download, since it should know which OS you're using, and
3. Follow the instructions.

## 0.1.8 Practice using Github

To learn how to start working with a GitHub repository, proceed to [Fork and clone a repo](./02-Fork-and-Clone-Course-Repo)
