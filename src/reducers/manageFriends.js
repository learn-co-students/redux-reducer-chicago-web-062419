export function manageFriends(state, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            return {...state, 
                        friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let x = state.friends.filter(friend => {
                return friend.id !== action.id
            })
            return {...state, friends: x}
        default:
            return state
    }
}