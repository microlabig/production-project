// Модуль добавления алиаса `@` для всех FSD-путей

import { Project } from 'ts-morph';

// initialize
const project = new Project({
    // Optionally specify compiler options, tsconfig.json, in-memory file system, and more here.
    // If you initialize with a tsconfig.json, then it will automatically populate the project
    // with the associated source files.
    // Read more: https://ts-morph.com/setup/
});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const layers = ['shared', 'entities', 'features', 'widgets', 'pages', 'app'];

function isAbsolute(value: string) {
    return layers.some(layer => value.startsWith(layer));
}

files.forEach(sourceFile => {
    const importDeclarations = sourceFile.getImportDeclarations();

    importDeclarations.forEach(importDeclaration => {
        const value = importDeclaration.getModuleSpecifierValue();

        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
