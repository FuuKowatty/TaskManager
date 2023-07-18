import type { FormikProps } from "formik";

import { useUserList } from "@/hooks/api/useUserList";

import { ButtonCancel } from "../button/ButtonCancel";
import { FormButton } from "../button/ButtonForm";

interface TaskFormProps {
  formik: FormikProps<Task>;
  submitText: string;
  handleCancel: () => void;
}

export function TaskForm({ formik, submitText, handleCancel }: TaskFormProps) {
  const { data: usersList } = useUserList();

  if (!usersList) {
    return null;
  }

  const blockPreviousDates = () => {
    return new Date().toISOString().split("T")[0];
  };

  return (
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
            value={formik.values.description || ""}
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
      <ButtonCancel handleCancel={handleCancel} />
      <FormButton>{submitText}</FormButton>
    </form>
  );
}
