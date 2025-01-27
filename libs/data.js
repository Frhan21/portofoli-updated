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

    console.log(parsedData);
    return parsedData;
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
};
