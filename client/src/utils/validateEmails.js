const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// from emailregex.com
export default (emails) => {
    const invalidEmails = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => re.test(email) === false)

    if(invalidEmails.length){
        return `These emails are invalid: ${invalidEmails}`; 
    }
}