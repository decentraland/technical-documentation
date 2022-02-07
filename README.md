# test-static-pipeline
Repository to test the health and integration of static pipelines

Implements all the pipeline stages of this document:
https://docs.google.com/drawings/d/1hDa0mOk4Fb0rwzDKR8AVzLQeINlPmKqEIABeEyS_LNE/edit

1. Every push to master generates an NPM package, it is published with the `@next` dist-tag
2. Every semver release creates and publishes a `@latest` dist tag
3. Every time a package is published, the gitlab pipeline https://dcl.tools/pipelines/static-sites-pipeline is triggered. That pipeline uploads the content of the published package to `https://cdn.decentraland.org`
4. The then pipeline starts a rollout pipeline. Which is out of scope of this documentation.

