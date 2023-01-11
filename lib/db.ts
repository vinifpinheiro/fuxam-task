import { prisma } from "./prisma";

export interface Task {
  id:string
  discipline: string;
  teacher: string;
  question: string;
  response: string;
  student: string;
}

export async function getTask() {
  const data = await prisma?.task.findMany();
  return data;
}

export async function createTask(
  discipline: string,
  teacher: string,
  question: string,
  response: string,
  student: string
) {
  await prisma.task.create({
    data: {
      discipline,
      teacher,
      question,
      response: "",
      student: "",
    },
  });
}

