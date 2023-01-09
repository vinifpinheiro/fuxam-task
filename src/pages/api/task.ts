import type { NextApiRequest , NextApiResponse } from "next";
import { createTask } from "../../../lib/db";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
){
    if(req.method === "POST") {
        const data = JSON.parse(req.body)
        await createTask(data,data,data,data,data)
        return res.status(200).json({mensage: "Sucess"})
    }

    res.status(200).json({name: "Vinicius"})
}