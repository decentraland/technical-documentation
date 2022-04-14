# Contribute to docs

Welcome to **Decentraland technical documentation**, the goal of this repository is to have a single point of access for  all necessary information to use, create and contribute to Decentraland.

The repository will scrap a configurable list of directories and render the content of their docs folder. Sidebar stucture can be completely configured in each repository.

Technical documentation is divided in three major areas:

- User: Everything related to the use of the platform
- Creator: Information for people wanting to create content inside Decentraland
- Contributor: Code documentation for developers wanting to contribute to the project

## How to

### **Render your own docs:**

**In this repository:**

- Simply add your repository in [repositories.json](https://github.com/decentraland/technical-documentation/blob/main/src/repositories.json).

**In your repository:**

- Create a docs folder at root level
- Push your documents as .md files
- Create a summary.json file with the sidebar wanted structure:
  - Example:

        ```jsx
        /*
         This structure renders the following sidebar inside the contributor docs
          SDK
           - Diagrams
             -- Metaverse runtime 
        */
        
        {
         "contributor": [{
          "name": "SDK",
          "children": [{
           "name": "Diagrams",
           "children": [{
             "name": "Metaverse runtime",
             "slug": "/contributor/sdk/diagrams/metaverse-runtime"
            }
           ]
          }]
         }]
        }
        ```

  - See [sample summary](https://github.com/decentraland/technical-documentation/blob/main/docs/summary.json)

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
