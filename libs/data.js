import { del } from "@vercel/blob";

const cleanTechArray = (techArray) => {
  return techArray
    .map((item) => item.replace(/[\[\]"]/g, "").trim()) // Hapus tanda kurung dan tanda kutip, serta hilangkan spasi tambahan
    .filter((item) => item !== ""); // Hapus elemen kosong jika ada
};

export const getData = async () => {
  try {
    const res = await fetch("/api/project", { method: "GET" });

    if (!res.ok) {
      throw new Error("Failed to fetch projects");
    }

    const data = await res.json();

    const parsedData = data.map((project) => ({
      ...project,
      tech: cleanTechArray(project.tech), // Bersihkan data `tech`
    }));
    return parsedData;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};

// Get Project by Id
export const getProjectById = async (id) => {
  try {
    const res = await fetch(`/api/project/${id}`, { method: "GET" });
    if (!res.ok) throw new Error("Failed to fetch project");

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching project:", error);
  }
};

// Delete data
export const deleteProject = async (id) => {
  try {
    const data = getProjectById(id); // Ambil data project terlebih dahulu
    del(data.imageUrl)
    const res = await fetch(`/api/project/${id}`, { method: "DELETE" });
    if (!res.ok) {
      throw new Error("Failed to delete project");
    }

    revalidatePath('/dashboard')
  } catch (error) {
    console.error("Error deleting project", error);
  }
};
