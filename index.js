/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const fs = require("fs")
const { rmdir } = require('fs')

module.exports = (on, config) => {
on("task", {
downloadFile: downloadFile,
readFile: readFile,
deleteFolder: deleteFolder,
});
return config;
};


function downloadFile(testFolder) {
  // add array
  const fileNameArray = []
  fs.readdirSync(testFolder).forEach(file => {
  console.log(file);
  // add each file to array (a push?)
  fileNameArray.push(file)
  })
// assert length of array is 1 - Need to figure out
  console.log(fileNameArray)
  // take just first object in array
  const firstArrayElement = fileNameArray[0]
  console.log(firstArrayElement)
// return first object of array
  return firstArrayElement
}

function readFile(filePath) {
  const content = fs.readFileSync(filePath, {encoding: "utf8"})
  return content
}

function deleteFolder(folderName) {
  console.log('deleting folder %s', folderName)

  return new Promise((resolve, reject) => {
    rmdir(folderName, { maxRetries: 10, recursive: true }, (err) => {
      if (err) {
        console.error(err)
        return reject(err)
      }
      resolve(null)
    })
  })
}

// index.js inside plugin folder
// const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
// const exec = require('child_process').execSync;
// module.exports = (on) => {
//   on('before:run', async (details) => {
//     console.log('override before:run');
//     await beforeRunHook(details);
//     //If you are using other than Windows remove below two lines
//     await exec("IF EXIST cypress\\screenshots rmdir /Q /S cypress\\screenshots")
//     await exec("IF EXIST cypress\\reports rmdir /Q /S cypress\\reports")
//   });

// on('after:run', async () => {
//     console.log('override after:run');
//     //if you are using other than Windows remove below line starts with await exec
//     await exec("npx jrm ./cypress/reports/junitreport.xml ./cypress/reports/junit/*.xml");
//     await afterRunHook();
//   });
// };
