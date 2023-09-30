// @ts-ignore
import {PrismaClient} from '@prisma/client'
import {verifyHash} from "../utils/auth";
import {createToken} from "../utils/token";

const prisma = new PrismaClient();

const loginRouter = (req: Request) => {
    if (req.method === "POST") return attemptLogin(req)

    return new Response(`404!`);
}

const attemptLogin = async (req: Request) => {
    // See if user and password were provided
    const body = await req.json();

    if (!body.username) {
        return Response.json(`Invalid body, missing username`, 400);
    }

    if (!body.password) {
        return Response.json(`Invalid body, missing password`, 400);
    }

    // See if username is already taken
    const user = await prisma.user.findUnique({
        where: {
            username: body.username
        }
    })

    if (!user) {
        return Response.json(`Invalid body, user not found`, 404);
    }

    const isValid = await verifyHash(body.password, user.password)
    if (!isValid) {
        const errorMsg = {error: `Invalid login, please try again`};
        return Response.json(errorMsg, 401);
    }

    // Generate JWT
    const token = await createToken(user.username, req);

    const response = {token: token};
    return Response.json(response);
}


export {
    loginRouter
}