export function manageFriends(
  state = {
    friends: []
  },
  action
) {
  switch (action.type) {
    // If the action type is add friend
    case "ADD_FRIEND":
      // Add into state, in state.friends, the friend from the action
      return { ...state, friends: [...state.friends, action.friend] };

    case "REMOVE_FRIEND":
      const remove = state.friends.findIndex(friend => friend.id === action.id);
      return {
        ...state,
        friends: [
          ...state.friends.slice(0, remove),
          ...state.friends.slice(remove + 1)
        ]
      };

    default:
      return state;
  }
}
