import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

// Function Update
export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const data = await req.json();
    const res = await prisma.project.update({
      where: { id: parseInt(id) },
    });

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// Function Delete
export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    const res = await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// Funciton Get by id
export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const res = await prisma.project.findUnique({
      where: { id },
    });

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
