import { NextRequest, NextResponse } from "next/server";
import { getBlogViews, incrementBlogViews } from "@/lib/blog-views-db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const views = getBlogViews(slug);
    
    return NextResponse.json({ views });
  } catch (error) {
    console.error("Error fetching blog views:", error);
    return NextResponse.json(
      { error: "Failed to fetch views", views: 0 },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const views = incrementBlogViews(slug);
    
    return NextResponse.json({ views });
  } catch (error) {
    console.error("Error incrementing blog views:", error);
    return NextResponse.json(
      { error: "Failed to increment views", views: 0 },
      { status: 500 }
    );
  }
}
