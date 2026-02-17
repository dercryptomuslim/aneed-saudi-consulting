import { NextRequest, NextResponse } from "next/server";
import { getBlogViews, incrementBlogViews } from "@/lib/blog-views-db";

// Extrahiere IP-Adresse aus dem Request
function getClientIp(request: NextRequest): string {
  // Prüfe verschiedene Header für die echte IP-Adresse
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const cfConnectingIp = request.headers.get("cf-connecting-ip"); // Cloudflare

  if (cfConnectingIp) {
    return cfConnectingIp.split(",")[0].trim();
  }
  
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  
  if (realIp) {
    return realIp.split(",")[0].trim();
  }

  // Fallback: Verwende eine generische IP oder generiere eine Session-ID
  // In Production sollte immer einer der Header vorhanden sein
  return "unknown";
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const views = await getBlogViews(slug);
    console.log(`[API] GET /api/blog/${slug}/views -> ${views}`);
    
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
    const ip = getClientIp(request);
    
    // Erhöhe Views nur wenn IP nicht blockiert ist
    const result = await incrementBlogViews(slug, ip);
    
    return NextResponse.json({ 
      views: result.views,
      counted: result.counted 
    });
  } catch (error) {
    console.error("Error incrementing blog views:", error);
    return NextResponse.json(
      { error: "Failed to increment views", views: 0, counted: false },
      { status: 500 }
    );
  }
}
