export const getAllQueryParams = (fieldInArray: string[] = []) => {
    const query = new URLSearchParams(window.location.search);
    const params: any = {};

    query.forEach((value, key) => {
        if (params[key]) {
            if (typeof params[key] === 'string') {
                params[key] = [params[key], value];
            } else {
                params[key] = [...params[key], value];
            }
        } else {
            if (fieldInArray.includes(key)) {
                params[key] = [value];
            } else {
                params[key] = value;
            }
        }
    })

    return params;
}