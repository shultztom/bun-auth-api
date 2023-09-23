import {loginRouter} from "./routers/login.ts";
import {registerRouter} from "./routers/register.ts";
import {tokenRouter} from "./routers/token.ts";

console.log(`Starting Bun Server on port 3000`);
Bun.serve({
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname === "/") return new Response("Hello World!");
        if (url.pathname === "/login") return loginRouter(req);
        if (url.pathname === "/register") return registerRouter(req);
        if (url.pathname === "/token") return tokenRouter(req);
        return new Response(`404!`);
    },
});