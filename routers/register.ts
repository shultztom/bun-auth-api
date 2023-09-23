// @ts-ignore
import {PrismaClient} from '@prisma/client'
import {createHash} from "../utils/auth";

const prisma = new PrismaClient()

const registerRouter = (req: Request) => {
    if (req.method === "POST") return createUser(req)

    return new Response(`404!`);
}
const createUser = async (req: Request) => {
    // See if user and password were provided
    const body = await req.json();

    if (!body.username) {
        return Response.json(`Invalid body, missing username`, 400);
    }

    if (!body.password) {
        return Response.json(`Invalid body, missing password`, 400);
    }

    // See if username is already taken
    const existingUser = await prisma.user.findUnique({
        where: {
            username: body.username
        }
    })

    if (existingUser && (existingUser.username === body.username)) {
        return Response.json(`Invalid body, username already taken`, 409);
    }

    // Create hash
    const hash = await createHash(body.password);

    // Save username and hash
    const newUser = await prisma.user.create({
        data: {
            username: body.username,
            password: hash
        }
    })

    // Return success and username
    const response = {username: newUser?.username};
    return Response.json(response);
}


export {
    registerRouter
}