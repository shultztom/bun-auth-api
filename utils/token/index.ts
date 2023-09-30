import nJwt from 'njwt';

const SECRET = 'my_secret' // TODO move to env var
const createToken = async (user: string, req: Request): Promise<string> => {
    const issuer = req.headers.get('host')

    const claims = {
        iss: issuer,  // The URL of your service
        sub: user,    // The UID of the user in your system
    }

    const jwt = nJwt.create(claims, SECRET);

    jwt.setExpiration(new Date().getTime() + ((60 * 60 * 1000) * 8)); // 8 hours

    return jwt.compact();
}

const verifyToken = async (token: string): Promise<boolean> => {
    let verifiedJwt = null;
    try {
        verifiedJwt = nJwt.verify(token, SECRET);
        console.log(`Successfully verified token`);
        return true;
    } catch (e: any) {
        console.log(`Error validating token for ${e.message}`);
        return false;
    }
}

export {
    createToken,
    verifyToken
}