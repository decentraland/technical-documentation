
find ./src/repos -name 'summary.json' -execdir mv {} './src/static-data/' \;
find ./src/repos/static-data/* -name \*json cat {} |  jq -s 'flatten' > 'menu.json'
