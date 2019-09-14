export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND":
        // spread operator to make a nondesctrive copy of the friends array and add the new object denoted by action.friend
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            // iterates over the friends array and keeps all the objects that do NOT equal the id of the friend that the action was made on.
            return {friends: state.friends.filter(friend => friend.id !== action.id)}
        default: 
            return {friends: state.friends}
      }
      
}


// switch (action.type) {
//     case 'INCREASE':
//       return {numberOfPresents: state.numberOfPresents + 1}
//     default:
//       return state;
//   }


  