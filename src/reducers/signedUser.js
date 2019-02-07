import { SIGN_IN_USER, SIGN_OUT } from '../actions/signedUser';

export default function(state = null, action) {
    switch (action.type) {
        case SIGN_IN_USER:
            return action.id;
        case SIGN_OUT:
            return null;
        default:
            return state;
    }
}