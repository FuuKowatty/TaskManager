import { AddTask } from "@/components/AddTask";
import { TasksList } from "@/components/TasksList";
import axios from "axios";


export default async function Page() {


    return(
        <main>
            <AddTask/>
            <TasksList />
        </main>
    )
}