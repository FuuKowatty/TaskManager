"use client";

import { FormButton } from "@/components/button/ButtonForm";

import { useCreateTask } from "@/hooks/api/useCreateTask";
import { useUserList } from "@/hooks/api/useUserList";
import { useCreateTaskForm } from "@/hooks/formik/useCreateTaskForm";

export default function CreateTask() {
  const { data: usersList } = useUserList();
  const { mutate: handleCreateTask } = useCreateTask();
  const { formik } = useCreateTaskForm(handleCreateTask);

  const blockPreviousDates = () => {
    return new Date().toISOString().split("T")[0];
  };

  return (
    <div className="focus-within: rounded-md bg-white px-16 pb-8 pt-24 text-darkGray shadow-md shadow-gray-300">
      <h1 className="text-center text-3xl font-bold">Create Task</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="flex max-w-xl flex-col gap-8"
      >
        <fieldset>
          <label className="flex flex-col gap-1">
            Title
            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 focus:outline-none"
              placeholder="Analyze our sales data"
            />
          </label>
          <p className="min-h-[30px] text-sm text-red-500" role="alert">
            {formik.touched.title && formik.errors.title && (
              <>{formik.errors.title}</>
            )}
          </p>
        </fieldset>
        <fieldset>
          <label className="flex flex-col gap-1">
            Description
            <textarea
              className="resize-none border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 focus:outline-none"
              name="description"
              cols={30}
              rows={5}
              placeholder="The sales data analysis should..."
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </label>
          <p className="min-h-[30px] text-sm text-red-500" role="alert">
            {formik.touched.description && formik.errors.description && (
              <>{formik.errors.description}</>
            )}
          </p>
        </fieldset>
        <fieldset>
          <label className="flex flex-col gap-1">
            End Date
            <input
              type="date"
              name="endDate"
              value={formik.values.endDate}
              onChange={formik.handleChange}
              className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 focus:outline-none"
              min={blockPreviousDates()}
            />
          </label>
          <p className="min-h-[30px] text-sm text-red-500" role="alert">
            {formik.touched.endDate && formik.errors.endDate && (
              <>{formik.errors.endDate}</>
            )}
          </p>
        </fieldset>
        <fieldset>
          <label className="flex flex-col gap-1">
            Assign task to:
            <select
              className="min-w-[256px] border-b-2 border-gray-400 bg-white p-2 focus:border-blue-700 focus:outline-none"
              name="userId"
              value={formik.values.userId}
              onChange={formik.handleChange}
            >
              <option value={0} hidden>
                -- Please choose an employee --
              </option>
              {usersList &&
                usersList.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name} {user.surname}
                  </option>
                ))}
            </select>
          </label>
          <p className="min-h-[30px] text-sm text-red-500" role="alert">
            {formik.touched.userId && formik.errors.userId && (
              <>{formik.errors.userId}</>
            )}
          </p>
        </fieldset>
        <FormButton>Create Task</FormButton>
      </form>
    </div>
  );
}
