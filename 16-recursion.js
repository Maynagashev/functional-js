/**
 * Created by https://github.com/maynagashev on 14.12.2016.
 */
/*
 # Task

 Implement a recursive function that returns all of the unique dependencies, and sub-dependencies of a module, sorted alphabetically. Dependencies should be printed as dependency@version e.g. 'inflection@1.2.6'.

 Multiple versions of the same module are allowed, but duplicates modules of the same version should be removed.

 ## Arguments:

 * tree: A dependency tree. See below for an example of the structure.

 ## Example

 var loremIpsum = {
 "name": "lorem-ipsum",
 "version": "0.1.1",
 "dependencies": {
 "optimist": {
 "version": "0.3.7",
 "dependencies": {
 "wordwrap": {
 "version": "0.0.2"
 }
 }
 },
 "inflection": {
 "version": "1.2.6"
 }
 }
 }

 getDependencies(loremIpsum) // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]

 ## Conditions:

 * Do not use any for/while loops.

 * */

function getDependencies(tree, initVal) {
    console.log(tree, '----');
    initVal = (!initVal) ? [] : initVal;
    if (!tree || !tree.dependencies) return initVal;
    
    //console.log(Object.keys(tree.dependencies));
    var ret = Object.keys(tree.dependencies).reduce(function(res, branchName) {
        res.push(branchName+'@'+tree.dependencies[branchName].version);
        initVal = getDependencies(tree.branchName, res);
       return res;
    }, initVal);
    console.log(ret);

    return ret.sort();
}

module.exports = getDependencies