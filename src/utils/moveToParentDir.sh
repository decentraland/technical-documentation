find ./src/repos -name '*.md' -execdir mv {} '../' \;
find ./src/repos -mindepth 3 -maxdepth 3 -name docs -exec rm -rf {} +