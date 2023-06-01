

# Version

## step to run locally
1. clone repo
2. npm install on root folder
3. npm install on lib/product-library folder (Here npm published packages are added as dependency)

## NX Nextjs Versioning Documentation

Implementing library versioning in Next.js and React components with Nx involves a few steps. Nx provides tooling and guidelines for managing monorepos and creating reusable libraries. Here's a high-level overview of the process: 

Set up an Nx Workspace: Start by creating an Nx workspace using the Nx CLI. This workspace will serve as the container for your projects, including the library and the Next.js application. 

Create a Library: Use the Nx CLI to generate a new library within the workspace. For example, you can run nx generate @nrwl/react:library my-library to create a new Versioning: Next, you need to configure versioning for the library. Nx uses semantic versioning (SemVer) to manage package versions. By default, Nx automatically increments the library version when changes are made. 

Define Library API: Design the public API of your library by specifying the exported components, functions, and types. This will determine what consumers of the library can use. 

Build the Library: Use the build command provided by Nx to compile your library. For example, you can run nx build my-library to build the library. 

Publish the Library: Once the library is built, you can publish it to a package registry, such as npm or a private package registry. Use the appropriate command provided by the package manager you are using, such as npm publish or yarn publish. 

Consume the Library: In your Next.js application, you can add the library as a dependency. Use the package manager to install the library by running npm install my-library or yarn add my-library. Import and use the library components or functions in your Next.js components. 

Update Library Version: Whenever you make changes to the library, you need to increment the library version and publish a new version to the package registry. Nx provides commands to help with version management. For example, you can run nx version my-library to increment the version. 

Update Library in Next.js Application: After publishing a new version of the library, you can update the library version in your Next.js application's package.json file. Use the package manager to update the library by running npm update my-library or yarn upgrade my-library. 

By following these steps, you can effectively version and manage your libraries within an Nx workspace, allowing you to develop and consume reusable components in your Next.js applications. 

 

To configure versioning for your library in an Nx workspace, you can follow these steps: 

Locate the library configuration: In your Nx workspace, navigate to the directory where your library is located. The library's configuration is typically stored in a file called workspace.json or nx.json. 

Find the library configuration entry: Within the workspace.json or nx.json file, locate the entry that corresponds to your library. It should be listed under the "projects" section. 

Set the versioning configuration: Within the library configuration entry, add or modify the "version" field. You can specify a versioning strategy by providing an object with the desired configuration options. For example: 

 
````
```
"my-library": { 
  "root": "libs/my-library", 
  "projectType": "library", 
  "architect": { 
    "build": { 
      "builder": "@nrwl/node:package", 
      "options": { 
        // Other build options 
      } 
    } 
  }, 
  "version": { 
    "defaultVersion": "0.1.0", 
    "outputPath": "libs/my-library/src/version.ts", 
    "bumpDeps": "none" 
  } 
} 
````
```
 

configuration options: 

"defaultVersion": Specifies the initial version of the library. This is typically set to "0.1.0" or another starting point. 

"outputPath": Specifies the file path where a generated version file will be created. This file can be used within the library or by other applications that consume it. 

"bumpDeps": Determines how dependencies are handled when incrementing the library version. Options include "none" (no dependency version changes), "explicit" (only bump explicitly defined dependencies), and "all" (bump all dependencies). 

Save the configuration: After making the necessary changes to the library configuration, save the file. 

Build and publish the library: Following the steps mentioned in the previous response, build and publish the library using the Nx CLI or your preferred package manager. 

With the versioning configuration in place, Nx will automatically handle version increments when you make changes to the library and build new versions. 

 
