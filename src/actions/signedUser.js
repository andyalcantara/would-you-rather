export const SIGN_IN_USER = 'SIGN_IN_USER';

export function handleSignUser(id) {
    return {
        type: SIGN_IN_USER,
        id
    }
}