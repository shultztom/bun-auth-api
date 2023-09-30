import {verifyToken} from "../utils/token";

const tokenRouter = (req: Request) => {
    if (req.method === "GET") return verify(req)

    return new Response(`404!`);
}
const verify = async (req: Request) => {
    const token = req.headers.get('x-auth-token');
    if (!token) {
        const errorMsg = {error: `Missing Token`};
        return Response.json(errorMsg, 401);
    }

    const isValid = await verifyToken(token);
    if (!isValid) {
        const errorMsg = {error: `Invalid Token`};
        return Response.json(errorMsg, 401);
    }

    const response = {message: "success"};
    return Response.json(response);
}

export {
    tokenRouter
}