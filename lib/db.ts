import { prisma } from "./prisma"

export interface Task {
    id: number
    discipline : string
    teatcher_name: string
    post_id: number
    question: string
    response: string
    student_name: string
}

export interface Teatcher {
    teatcher_id: number
    name: string
}

export interface Student {
    id: number
    name: string
    period: string
}

export async function getTask () {
    const data = await prisma?.task.findMany()
    return data
}

export async function createTask(
  discipline: string,
  teatcher_name: any,
  post_id: number,
  question: string,
  response: string,
  student_name: string
) {
  await prisma.task.create({
    data: {
      discipline,
      teatcher_name,
      question,
      response,
      post_id,
      student_name,
    },
  });
}

export async function updateTask(response: string) {
    await prisma.task.update({
        where: {
           response,
        },
        data: {
            response
        }
    })
}

 