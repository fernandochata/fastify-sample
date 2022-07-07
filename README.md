# Fastify

Ejemplo simple de FASTIFY, info en https://www.fastify.io/docs/latest/Guides/Getting-Started/#your-first-server

- Instalar dependencias
- Se requiere las siguientes variables de entorno [MONGODB_URI HOST PORT], en caso de no encontrarlas se usan algunas por defecto
- Se require una instancia activa de MongoDB
- Ejecutar script en modo desarrollo

```
npm install
npm run dev
```

- El servidor correrá en http://\<HOST>:\<PORT>/products, por defecto en http://127.0.0.1:5000/products/

- El modelo de producto ocupado:
```sql
{
    product: 
    {
        name :          String
        price:          Number
        stock:          Number
        description?:   String
    }
}
```

- Las rutas (CRUD básico) para acceder a la info de la API son:
```
{
    getProducts: {
        url: '/products/',
        method: 'GET'
    },
    getProduct: {
        url: '/products/:id',
        method: 'GET'
    },
    createProduct: {
        url: '/products/',
        method: 'POST'
    },
    updateProduct: {
        url: '/products/:id',
        method: 'PUT'
    },
    deleteProduct: {
        url: '/products/:id',
        method: 'DELETE'
    }
}
```
- TODO: ✅ Comentar estados en product.controller.js
- TODO: ❌ Terminar de agregar comentarios en product.controller.js
- TODO: ❌ Crear instancia live en Heroku
