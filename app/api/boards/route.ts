import { prisma } from "../db-client";


export async function GET() {
  try {
    const users = await prisma.board.findMany();
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error fetching users', { status: 500 });
  }
}