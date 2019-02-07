export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT = 'SIGN_OUT';

export function handleSignUser(id) {
    return {
        type: SIGN_IN_USER,
        id
    }
}

export function handleSignOut() {
    return {
        type: SIGN_OUT,
    }
}