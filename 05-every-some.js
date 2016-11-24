/**
 * Solution created by https://github.com/maynagashev on 24.11.2016.
 */
/*
 # Task

 Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

 You only need to check that the ids match.

 ## Example

 var goodUsers = [
 { id: 1 },
 { id: 2 },
 { id: 3 }
 ]

 // `checkUsersValid` is the function you'll define
 var testAllValid = checkUsersValid(goodUsers)

 testAllValid([
 { id: 2 },
 { id: 1 }
 ])
 // => true

 testAllValid([
 { id: 2 },
 { id: 4 },
 { id: 1 }
 ])
 // => false
 */

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        // return true if every submitted user ...
        return submittedUsers.every(function (submittedUser) {
            // ... if it found at least once in goodUser
            return goodUsers.some(function (goodUser) {
                return goodUser.id === submittedUser.id || undefined;
            });
        });
    };
}

module.exports = checkUsersValid