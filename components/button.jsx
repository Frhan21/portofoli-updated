import { deleteProject } from "@/libs/data";
import Link from "next/link";
import { useFormStatus } from "react-dom";

// Edit button
export const EditButton = ({ id }) => {
  return (
    <Link
      href={`/dashboard/edit/${id}`}
      className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
    >
      Edit
    </Link>
  );
};

// Delete button
export const DeleteButton = ({ id }) => {
  const deleteProjectId = deleteProject.bind(null, id);
  return (
    <form action={deleteProjectId}>
      <Btn />
    </form>
  );
};

const Btn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
      disabled={pending}
    >{pending ? "Deleting..." : "Delete"}
    </button>
  );
};
