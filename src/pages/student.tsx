import { GetServerSideProps, NextPage } from "next";
import { Task, getTask } from "../../lib/db";

export const getServerSideProps: GetServerSideProps = async () => {
    const tasks = await getTask()
    return {
        props: {
            tasks
        }
    }
}

interface PostTask {
    tasks: Task[]
}

const Student = ({ tasks }: PostTask) => {
    return (
        <div>

        </div>
    )
}

export default Student