const yaml = require('js-yaml');
const fs   = require('fs');

export function yamlToJson(file, output, options?) {
  try {
    const doc = yaml.load(fs.readFileSync(file, 'utf8'), {json: true, ...options});
    fs.writeFile(output, JSON.stringify(doc), err => {
      if (err) {
        console.error(err);
      }
    });
  } catch (e) {
    console.log(e);
  }
}