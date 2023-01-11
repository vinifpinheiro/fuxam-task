import { prisma } from "./prisma";

export interface Task {
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
  id: number,
  discipline: string,
  teacher: string,
  question: string,
  response: string,
  student: string
) {
  await prisma.task.create({
    data: {
      id,
      discipline,
      teacher,
      question,
      response: "",
      student: "",
    },
  });
}

export async function updateTask(id:number, student: string, response:string) {
  await prisma.task.update({
    where: {
      id: id
    },
    data: {
      response,
      student,
    },
  });
}
