import { NextResponse } from "next/server";
import { createClient } from "next-sanity";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

const client = createClient({
  projectId: process.env.SANITY_API_PROJECT_ID,
  dataset: process.env.SANITY_API_DATASET,
  apiVersion: "2025-02-01",
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN, // 🔒 Securely use the token
});

export async function GET() {
  try {
    const projects = await client.fetch(PROJECTS_QUERY);
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
