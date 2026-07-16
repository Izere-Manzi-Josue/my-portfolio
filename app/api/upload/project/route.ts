import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a unique filename
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;

    // Save into public/uploads/projects
    const filePath = path.join(
      process.cwd(),
      "public",
      "uploads",
      "projects",
      fileName,
    );

    await writeFile(filePath, buffer);

    return NextResponse.json({
      success: true,
      imageUrl: `/uploads/projects/${fileName}`,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
