import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Read the uploaded file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a unique filename
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;

    // Save location
    const uploadDir = path.join(process.cwd(), "public", "uploads", "resumes");

    // Ensure directory exists
    await fs.mkdir(uploadDir, { recursive: true });

    // Save file
    await fs.writeFile(path.join(uploadDir, filename), buffer);

    return NextResponse.json({
      url: `/uploads/resumes/${filename}`,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
