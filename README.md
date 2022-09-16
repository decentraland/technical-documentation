# Contribute to Decentraland Documentation 🚀

Welcome to **Decentraland technical documentation**, the goal of this repository is to have a single point of access for all necessary information to use, create and contribute to Decentraland.

The repository will scrap a configurable list of directories and render the content of their docs folder. Sidebar stucture can be completely configured in each repository.

Technical documentation is divided in three major areas:

- User: Everything related to the use of the platform
- Creator: Information for people wanting to create content inside Decentraland
- Contributor: Code documentation for developers wanting to contribute to the project

## How to

**Step 1: Create and format your documentation files: :rocket:**

In your desired repository:

- Create a folder named `docs` at root level
- Inside the `docs` folder save your documentation files. Here are some important considerations:
- We render documentation from [markdown files](https://en.wikipedia.org/wiki/Markdown), so every file must include valid markdown in it's body and the `.md` extension. Unsure about `.md` syntax? Check [this awesome cheat sheet](https://www.markdownguide.org/cheat-sheet/)
- If your files include local images please place them at the same folder level as the corresponding `.md` file
- In order to render the links to the files in the documentation's site sidebar all `.md` files must include the following [frontmatter](https://middlemanapp.com/basics/frontmatter/) metadata tags at the start: `title` representing the name of the article and `slug` which will be the relative path to the documentation's site url

example:

```
---
title: "Metaverse runtime"
slug: "the relative slug to your page, ex: /contributor/sdk/diagrams/metaverse-runtime"
---
```

- If using `html` tags please close every tag, specially if they are self-closing like `<img />`
- You can find many `.md` formatters and editor online like [this one](https://stackedit.io/app#)

**Step 2: Create a summary.json file with the sidebar desired structure**
- The documentation site is completely agnostic to the internal structure of the `docs` folder. To provide a hierarchy for your content a `summary.json` file must be provided

Example:

```
{
  "contributor": [{
    "name": "SDK",
    "children": [{
	  "name": "Diagrams",
	    "children": [{
	      "name": "Metaverse runtime",
	      "slug": "/contributor/sdk/diagrams/metaverse-runtime"
	    }]
	  }]
  }]
}
```

The code above will render the following structure:
![rendered sidebar example](https://github.com/decentraland/technical-documentation/blob/main/docs/sidebar-render00.png)

Is there a problem if my category is already used? No. All summary files that share the same category will be grouped when the menu is generated:

![grouped categories](https://github.com/decentraland/technical-documentation/blob/main/docs/sidebar-render01.png)

- See [sample summary](https://github.com/decentraland/technical-documentation/blob/main/docs/summary.json)

**Step 3: Add the repository to the scrap list**

- Go to [Technical docs repository](https://github.com/decentraland/technical-documentation)
- Add your repository to the list in `repositories.json`
- Please provide the following structure:
  - name: the name of the repository, it's just a label, has no code implications
  - url: the repository url
  - zipUrl: the url to the zip version of the repository you want to add

  zipUrl format is:
  for specific commits: "https://github.com/[ORGANIZATION]/[REPOSITORY_NAME]/archive/[COMMIT].zip"
  for branches: "https://github.com/[ORGANIZATION]/[REPOSITORY-NAME]/archive/refs/heads/[BRANCH_NAME].zip"

  Why do we ask for zipUrl? To provide the ability to lock the docs to a specific commit or branch. Want to prevent this repo to scrap your latest version? Provide the zip to the commit and edit your docs without fear of breaking anything

### **Preview your docs**

Opening a pull request against decentraland/technical-documentation will trigger the test CI pipeline which deploys a test version to the CDN. Feel free to preview your docs in the PR's generated link before merging.


### Contribute to the codebase

// TO - DO

### Deploy & publish

## test-static-pipeline

Repository to test the health and integration of static pipelines

Implements all the pipeline stages of this document:

<https://docs.google.com/drawings/d/1hDa0mOk4Fb0rwzDKR8AVzLQeINlPmKqEIABeEyS_LNE/edit>

1. Every push to master generates an NPM package, it is published with the `@next` dist-tag

2. Every semver release creates and publishes a `@latest` dist tag

3. Every time a package is published, the gitlab pipeline pipelines/static-sites-pipeline is triggered. That pipeline uploads the content of the published package to `https://cdn.decentraland.org`

4. The then pipeline starts a rollout pipeline. Which is out of scope of this documentation.
