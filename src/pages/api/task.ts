import type { NextApiRequest, NextApiResponse } from "next";
import { createTask, updateTask } from "../../../lib/db";
import { prisma } from "../../server/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {discipline, teacher, question, response, student } =
      JSON.parse(req.body);
    await createTask(
      discipline,
      teacher,
      question,
      response,
      student
    );
    return res.status(200).json(console.log(req.body));
  }
  if (req.method === "PATCH") {
    const { discipline, teacher, question, response, student } = req.body;

    try {
      await prisma.task.create({
        data: {
          discipline,
          teacher,
          question,
          response,
          student,
        },
      });
      res.status(200).json({ message: "Note Created" });
    } catch (error) {
      console.log("Failure");
    }
  }
}
