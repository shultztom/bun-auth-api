// import {db} from '../db';

const tokenRouter = (req: Request) => {
    if (req.method === "GET") return getAll()
    if (req.method === "POST") return createItem(req)
    if (req.method === "PUT") return updateItem(req)
    if (req.method === "DELETE") return deleteItem(req)

    return new Response(`404!`);
}

const getAll = () => {
    const response = {data: "yo"};

    return Response.json(response);
}

const createItem = async (req: Request) => {
    const response = {data: "yo"};

    return Response.json(response);
}

const updateItem = async (req: Request) => {
    const response = {data: "yo"};

    return Response.json(response);
}

const deleteItem = (req: Request) => {
    const response = {data: "yo"};

    return Response.json(response);
}


export {
    tokenRouter
}