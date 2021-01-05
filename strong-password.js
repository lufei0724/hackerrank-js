//https://www.hackerrank.com/challenges/strong-password/problem?isFullScreen=true

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const lengthReq = 6;
    const numberReq = password.search(/\d/) === -1 ? 1 : 0;
    const lowerCaseReq = password.search(/[a-z]/) === -1 ? 1 : 0;
    const upperCaseReq = password.search(/[A-Z]/) === -1 ? 1 : 0;
    const specialCharReq = password.search(/[!@#\$%\^&*()\-+]/) === -1 ? 1 : 0;
    
    const charReq = numberReq + lowerCaseReq + upperCaseReq + specialCharReq;
    if (n + charReq < lengthReq) {
        return lengthReq - n;
    }
    return charReq;
}
