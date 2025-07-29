# 1.0 Reviewing the GH Methodology & Learning to Write JS in Observable

Before we move forward, let's be sure we remember how to practice using our code-writing tools to work for us, rather than become impediments to our success.

## 1.0.1 Running your Framework environment

When you develop your OF notebooks, you'll need to remember how to setup your programming environment, i.e., the set of technologies that we need to run altogether to make our notebooks render our content.

## 1.0.3 Fundamental Observable Framework Syntax

Before we learn how to code JS in this chapter, you need to learn a few basic syntax forms that will help you write code that executes in your OF notebook versus code that you want to display in the OF notebook.

### Displaying code on the page

Sometimes you will need to display code in the OF notebook, because you want to document a process or explain what is happenning. Here are two ways to do so:

- **Inline Code**: Write code content in-between two backticks, i.e., backquotes, graves, or grave accents: <code>``</code>
    - **EXAMPLE**: `let inlineExample = "Inline code for reading display"`
- **MultiLine Code**: Write code content in-between two sequences of 3 backticks.
    1. <code>```</code>: The first sequence of 3 backticks opens what's called a "***preformatted***" element.
    2. <code>```</code>: The second sequence of 3 backticks closes the scope of the preformatted element:
    - **EXAMPLE**: You'll need to see this in your VS Code editor.
      ```
      let multilineExample1 = "A multiline codeblock for display"
      let multilineExample2 = " for display"

      let joinMultlineExample = multilineExample1 + multilineExample2
      ```



## 1.0.3 Practicing the Github development methodology

We also need to make sure that we practice our Github development methodology, which includes the following high-level steps:

1. For each chapter, create a new separate ***branch*** of work on the repo, so you isolate any new work on the repo to those specific set of files.
    - **IMPORTANT**: Always create the new branch from the ***main*** branch, when starting a new chapter of work. By doing so, you avoid creating complex differences between files organized in the repo directories.
2. Name the new branch with the following naming scheme: `CHP/x--name_of_chp`.
3. Complete the work in the chapter, committing and pushing work as needed.
4. When you are ready to submit your work for review, create a ***pull request*** (PR).
5. Solicit feedback  from your assigned peers.
6. Make any changes, as needed, based on any feedback by committing pushing those changes to the branch.
7. Notify me, Dr. Lindgren, that you are ready for a grade.
8. When I tell you that your work is complete, ***merge*** the PR into the ***main*** branch.

Here's that process again for you:

1. Open Github Desktop (GHD).
2. Select the correct ***repo***.
3. Verify that the current ***branch*** currently selected is the desired branch.
    - **TIP**: Each chapter will have its own branch.
    - **TIP**: Always start from the ***main branch***, when starting a new chapter of work.
4. After verifying the correct repo and branch are selected in GHD, select **Repository** > **Open in Visual Studio Code**.
5. In VS Code, complete each chapter of work on the correct branch.
    - **TIP**: Verify the correct branch is selected in VSC on the bottom-left corner of the UI.
6. After you complete a section of a chapter, push your changes to the correct branch for that chapter of work.
7. When the chapter is complete, make sure all of the changes are committed and pushed to the branch. When such changes are complete, create a pull request (PR) with the class template for all PRs for the textbook, which can be found at the following location in the repo: `Justice-Centered-Data-Design/src/TEMPLATE-PR.md`.
