import type { NextApiRequest, NextApiResponse } from "next";
import { createTask, updateTask } from "../../../lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {id, discipline, teacher, question, response, student } =
      JSON.parse(req.body);
    await createTask(
      id,
      discipline,
      teacher,
      question,
      response,
      student
    );
    return res.status(200).json(console.log(req.body));
  }
  if (req.method === "PUT") {
    const {id, response, student } = JSON.parse(req.body)
    await updateTask(id,response, student)
    return res.status(200).json(console.log(req.body));
  }
}
