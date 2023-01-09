import { GetServerSideProps, NextPage } from "next";
import { Task, getTask } from "../../lib/db";

interface PostTask {
    tasks: Task[]
}

export const getServerSideProps: GetServerSideProps = async () => {
    const tasks = await getTask()
    return {
        props: {
            tasks
        }
    }
}

const Student = ({ tasks }: PostTask) => {
    return (
        <div>
            {JSON.stringify(tasks, null, 4)}
        </div>
    )
}

export default Student