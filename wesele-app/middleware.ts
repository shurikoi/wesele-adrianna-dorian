import { NextRequest, NextResponse } from 'next/server'

const allowedOrigins = ['https://ada2025dorian.pl', 'https://www.ada2025dorian.pl']

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export function middleware(request: NextRequest) {
  // Get the origin from the request
  const origin = request.headers.get('origin')
  
  // If there's no origin or the origin isn't allowed, block the request
  if (!origin || !allowedOrigins.includes(origin)) {
    return new NextResponse('CORS policy violation', { status: 403 })
  }
  
  // Handle preflighted requests
  if (request.method === 'OPTIONS') {
    const preflightHeaders = {
      'Access-Control-Allow-Origin': origin,
      ...corsOptions,
    }
    return NextResponse.json({}, { headers: preflightHeaders })
  }
  
  // Handle simple requests
  const response = NextResponse.next()
  response.headers.set('Access-Control-Allow-Origin', origin)
  
  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value)
  })
  
  return response
}

export const config = {
  matcher: '/api/:path*',
}
