---
title: "About Decentraland documentation"
slug: "contributor/sdk/documentation/about"
---

Welcome to **Decentraland technical documentation**, the goal of this repository is to have a single point of access for  all necessary information to use, create and contribute to Decentraland.

The repository will scrap a configurable list of directories and render the content of their docs folder. Sidebar stucture can be completely configured in each repository.

Technical documentation is divided in three major areas:

- User: Everything related to the use of the platform
- Creator: Information for people wanting to create content inside Decentraland
- Contributor: Code documentation for developers wanting to contribute to the project

## How to

### **Render your own docs:**

In your repository:

- Create a docs folder
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

  - See samples summary

### Contribute to the docs codebase

// TO-DO
