import { NextRequest, NextResponse } from "next/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const VIEWS_FILE = join(process.cwd(), "lib", "blog-views.json");

interface BlogViews {
  [slug: string]: number;
}

function getViews(): BlogViews {
  try {
    const fileContent = readFileSync(VIEWS_FILE, "utf-8");
    return JSON.parse(fileContent);
  } catch (error) {
    return {};
  }
}

function saveViews(views: BlogViews) {
  try {
    writeFileSync(VIEWS_FILE, JSON.stringify(views, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving views:", error);
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const views = getViews();
  const viewCount = views[slug] || 0;
  
  return NextResponse.json({ views: viewCount });
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const views = getViews();
  
  // Increment view count
  views[slug] = (views[slug] || 0) + 1;
  saveViews(views);
  
  return NextResponse.json({ views: views[slug] });
}
