import {prisma} from "./prisma"

export interface Task {
    id: number
    discipline : string
    teatcher_name: string
    date: Date
    post_id: number
    question: string
    response: string 
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

export async function createTask (
    discipline : string,
    teatcher_name: any,
    date: Date,
    post_id: number,
    question: string,
    response: string
) {
    await prisma.task.create({
        data: {
            discipline,
            teatcher_name,
            date,
            question,
            response,
            post_id
        },
    })
}

 