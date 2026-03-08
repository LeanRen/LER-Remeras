import type { APIRoute } from 'astro';
import { db, Producto, eq, sql } from 'astro:db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { items } = await request.json();

    for (const item of items) {
      const prod = await db.select().from(Producto).where(eq(Producto.id, Number(item.id)));
      if (!prod[0] || prod[0].stock < item.quantity) {
        return new Response(JSON.stringify({ error: `Sin stock: ${item.titulo}` }), { status: 400 });
      }
    }

    for (const item of items) {
      await db.update(Producto)
        .set({ stock: sql`${Producto.stock} - ${item.quantity}` })
        .where(eq(Producto.id, Number(item.id)));
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Error de servidor' }), { status: 500 });
  }
};