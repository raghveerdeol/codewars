// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]))

function friend(friends){
    let output = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === 4 ) {
            output.push(friends[i]);
        }
    }
    return output;
}