import { useEmployeesList } from "@/hooks/api/useEmployeesList";

import { ErrorMessage } from "./ErrorMessage";
import { LabelText } from "./LabelText";
import { ButtonCancel } from "../button/ButtonCancel";
import { ButtonForm } from "../button/ButtonForm";
import { useUpdateTaskForm } from "@/hooks/form/useUpdateTaskFrom";
import { useUpdateTask } from "@/hooks/api/useUpdateTask";
import { Task } from "@/types/task";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { blockPreviousDates } from "@/lib/getNowPlus15Minutes";


export function UpdateTaskForm({taskData, closeModal} : {taskData: Task ,closeModal: () => void}) {
  const { data: usersList } = useEmployeesList();

  const {
    mutate: handleUpdateTask,
    error: taskError,
    reset: resetApiResponseErrors,
  } = useUpdateTask(taskData.id, closeModal);

  const responseError = getErrorMessage(taskError)
  const { formik } = useUpdateTaskForm(
    taskData,
    handleUpdateTask,
    resetApiResponseErrors
  );

  if (!usersList) {
    return null;
  }



  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex w-full flex-col gap-8 text-left lg:max-w-xl"
    >
      <div>
        <label className="flex flex-col gap-1">
          <LabelText required>Title</LabelText>
          <input
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 
            focus:outline-none dark:border-gray-600 dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500"
            placeholder="Analyze our sales data"
            aria-required
          />
        </label>
        <ErrorMessage>
          {formik.errors.title && formik.touched.title
            ? formik.errors.title
            : responseError
            ? responseError.message ?? ""
            : ""}
        </ErrorMessage>
      </div>
      <div>
        <label className="flex flex-col gap-1">
          <LabelText>Description</LabelText>
          <textarea
            className="min-w-[256px] resize-none border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 
            focus:outline-none dark:border-gray-600 dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500"
            name="description"
            cols={30}
            rows={5}
            placeholder="The sales data analysis should..."
            value={formik.values.description || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </label>
        <ErrorMessage>
          {formik.errors.description && formik.touched.description
            ? formik.errors.description
            : ""}
        </ErrorMessage>
      </div>
      <div>
        <label className="flex flex-col gap-1">
          <LabelText required>End Date</LabelText>
          <input
            type="date"
            name="endDate"
            value={formik.values.endDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 
            focus:outline-none dark:border-gray-600 dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500"
            min={blockPreviousDates()}
            aria-required
          />
        </label>
        <ErrorMessage>
          {formik.errors.endDate && formik.touched.endDate
            ? formik.errors.endDate
            : ""}
        </ErrorMessage>
      </div>
      <div>
        <label className="flex flex-col gap-1">
          <LabelText required>Assign task to:</LabelText>
          <select
            className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 
            focus:outline-none dark:border-gray-600 dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500"
            name="assignedTo"
            value={formik.values.assignedTo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            aria-required
          >
            <option value={0} hidden>
              -- Please choose an employee --
            </option>
            {usersList &&
              usersList.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.firstName} {user.lastName}
                </option>
              ))}
          </select>
        </label>
        <ErrorMessage>
          {formik.errors.assignedTo && formik.touched.assignedTo
            ? formik.errors.assignedTo
            : ""}
        </ErrorMessage>
      </div>
      <div className="flex flex-col gap-2">
        <ButtonCancel handleCancel={closeModal} />
        <ButtonForm>Create Task</ButtonForm>
      </div>
    </form>
  );
}
