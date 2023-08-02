import type { FormikProps } from "formik";

import { useEmployeesList } from "@/hooks/api/useEmployeesList";
import type { FormAddTask } from "@/types/task";

import { ErrorMessage } from "./ErrorMessage";
import { LabelText } from "./LabelText";
import { ButtonCancel } from "../button/ButtonCancel";
import { FormButton } from "../button/ButtonForm";

interface TaskFormProps {
  formik: FormikProps<FormAddTask>;
  submitText: string;
  handleCancel: () => void;
}

export function TaskForm({ formik, submitText, handleCancel }: TaskFormProps) {
  const { data: usersList } = useEmployeesList();
  if (!usersList) {
    return null;
  }

  const blockPreviousDates = () => {
    return new Date().toISOString().split("T")[0];
  };

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
            className="min-w-[256px] border-b-2 border-gray-400 p-1 text-black focus:border-b-blue-700 
            focus:outline-none dark:border-gray-600 dark:bg-midnightBlue dark:text-white dark:focus:border-b-red-500"
            placeholder="Analyze our sales data"
            aria-required
          />
        </label>
        <ErrorMessage>
          {formik.errors.title && formik.touched.title
            ? formik.errors.title
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
            name="userId"
            value={formik.values.userId}
            onChange={formik.handleChange}
            aria-required
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
        <ErrorMessage>
          {formik.errors.userId && formik.touched.userId
            ? formik.errors.userId
            : ""}
        </ErrorMessage>
      </div>
      <div className="flex flex-col gap-2">
        <ButtonCancel handleCancel={handleCancel} />
        <FormButton>{submitText}</FormButton>
      </div>
    </form>
  );
}
