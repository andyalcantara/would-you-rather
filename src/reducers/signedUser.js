import { SIGN_IN_USER } from '../actions/signedUser';

export default function(state = null, action) {
    switch (action.type) {
        case SIGN_IN_USER:
            return action.id;
        default:
            return state;
    }
}