export const validateEmail: (email: string) => boolean = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}