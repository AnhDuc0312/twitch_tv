export const validateAvatarUrl = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ *]+$/;

    return regex.test(url)
}

export const avatatUrlValidationMessage = "Please enter a valid URL"