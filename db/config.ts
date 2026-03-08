import { defineDb, defineTable, column } from 'astro:db';

const Producto = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    titulo: column.text(),
    slug: column.text({ unique: true }),
    precio: column.number(),
    imagen: column.text(),
    tag: column.text(),
    stock: column.number({ default: 0 }),
    descripcion: column.text({ optional: true }),
  }
});

export default defineDb({
  tables: { Producto }
});