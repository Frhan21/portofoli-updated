import prisma from "@/libs/prisma";
import { put } from "@vercel/blob";
import { NextResponse } from "next/server";
import { z } from "zod";
import { File } from "node:buffer";
import { error } from "node:console";

const uploadSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  tech: z.array(z.string()).min(1, "Please add min one tech"),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, "Image is required")
    .refine((file) => file.type.startsWith("image/"), "Only image are allowed")
    .refine((file) => file.size <= 4000000, "Image must be smaller than 4MB"),
  linkGithub: z.string().optional(),
  linkDemo: z.string().optional(),
});

function safelyParseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Error parsing JSON:", error.message);
    return [];
  }
}

// Function GET All
export async function GET() {
  try {
    const res = await prisma.project.findMany();
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// Function Create Post
export async function POST(req) {
  try {
    const formData = await req.formData();
    const rawData = Object.fromEntries(formData.entries());

    console.log(rawData)
    // Preprocess `tech` to ensure it's always an array
    const tech =
      typeof rawData.tech === "string" ? rawData.tech.split(",") : [];

    const validationResult = uploadSchema.safeParse({
      ...rawData,
      tech, // Use the preprocessed `tech` array
      image: formData.get("image"), // Attach the file object separately
    });

    if (!validationResult.success) {
      return NextResponse.json(validationResult.error.flatten(), {
        status: 400,
      });
    }

    const {
      title,
      tech: validatedTech,
      linkGithub,
      linkDemo,
    } = validationResult.data;

    // Handle file upload
    const image = formData.get("image");
    const { url } = await put(image.name, image.stream(), {
      access: "public",
      contentType: image.type,
    });

    // Save data to the database
    const result = await prisma.project.create({
      data: {
        title,
        tech: validatedTech,
        imageUrl: url,
        linkGithub,
        linkDemo,
      },
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
