# Help with Terminal / CommandPrompt

This page includes resources to support your terminal work in class.

## Fetching & Pulling Changes from Original Textbook Repo into Your Forked Version

The following sequence of commands ensure that you can update your textbook, if necessary.

### 1. Setting up upstream checks

You are working in a **forked version** of the book, correct? Since it is not the original version of the repo, you can tell git to check if there are any changes in the original repo, which is referred to as the repo **upstream**. 

So, let's tell git/Github to check if there are any changes for you to **fetch** from the original repo **upstream** by connecting your forked version with the original. You will only need to run the following commands once.

<p class="warning">
  You will need to add the correct information for the path in Step 1, as well as the <code>.git</code> URL in Step 2.
</p>

```ini
# Step 1: Navigate to your local repository
cd path/to/your/fork

# Step 2: Add the upstream repository
git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
```

### 2. Fetching & merging upstream changes

Now that your forked repo is looking upstream for changes to the original version, you can follow the three following steps to `fetch`, `checkout`, `merge`, and `push` the **upstream** changes into your forked version.

<p class="warning">
  Be sure that I have told you to perform the following commands. Never perform these actions without my prompting you to do so.
</p>

```ini
# Step 1: Fetch the latest changes from upstream
git fetch upstream

# Step 2: Merge the changes into your main branch
git checkout main
git merge upstream/main

# Step 3: Push the updates to your fork
git push origin main
```
