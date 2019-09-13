export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { friends: [...state.friends, action.friend] }
    case "REMOVE_FRIEND":
      let removeFriendArr = state.friends.filter(
        friend => {
          // console.log(friend.id !== action.id)
          return action.id !== friend.id
        }
      )
      // console.log(removeFriendArr)
      return { friends: removeFriendArr }
    default:
      return state
  }
}

// let state = {
//   friends: [
//     {
//       name: "Avi",
//       hometown: "NYC",
//       id: 100
//     },
//     {
//       name: "Joe",
//       hometown: "Boston",
//       id: 101
//     },
//     {
//       name: "Steven",
//       hometown: "Philadephia",
//       id: 102
//     }
//   ]
// }

// console.log(manageFriends(state, {
//   type: "REMOVE_FRIEND",
//   id: 101
// }))

