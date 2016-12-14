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

function getDependencies(tree, res) {

    res = (!res) ? [] : res;
    if (!tree || !tree.dependencies) return res;

    var ret = Object.keys(tree.dependencies).reduce(function(acc, branchName) {
        var newItem = branchName + '@' + tree.dependencies[branchName].version;
        if (acc.indexOf(newItem) === -1) acc.push(newItem);
        return getDependencies(tree.dependencies[branchName], acc);
    }, res);

    return ret.sort();
}

module.exports = getDependencies


/* official solution
function getDependencies(mod, result) {
    result = result || []
    var dependencies = mod && mod.dependencies || []
    Object.keys(dependencies).forEach(function(dep) {
        var key = dep + '@' + mod.dependencies[dep].version
        if (result.indexOf(key) === -1) result.push(key)
        getDependencies(mod.dependencies[dep], result)
    })
    return result.sort()
}

 module.exports = getDependencies
 */