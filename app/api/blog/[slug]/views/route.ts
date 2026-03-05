import { NextResponse } from "next/server";
import { getViews, incrementViews } from "@/lib/blog-views";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const views = await getViews(slug);
  return NextResponse.json({ views });
}

export async function POST(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const views = await incrementViews(slug);
  return NextResponse.json({ views });
}
