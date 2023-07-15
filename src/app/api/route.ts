import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res) {
    throw new Error('The api endpoint not responded')
  }
  const data = await res.json();
  return NextResponse.json({ data })
}