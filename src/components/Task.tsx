import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

export function Task({ title, description, isCompleted }: Partial<Task>) {
  return (
    <div className="max-w-[350px] rounded-md bg-black/60 p-4 text-white">
      <h1 className="font-golos-text text-lg font-bold">{title}</h1>
      <p className="text-md w-[80%] text-gray-300">{description}</p>
      <div className="flex justify-end text-right">
        {isCompleted ? (
          <ImCheckboxChecked size={24} />
        ) : (
          <ImCheckboxUnchecked size={24} />
        )}
      </div>
    </div>
  );
}
