const Hapi = require('@hapi/hapi');
const baju = require('./dataset');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: 
        () => ({
            status: 'success',
            data: {
              baju
            },
          })
    },

    {
        method: 'POST',
        path: '/upload',
        handler: (request, h) => {
      const { image } = request.payload;
      const id = 16;
  const jenis = "baju"
  const warna = "pink"
  
  const newCloth = {
        id,jenis,warna,image
      };
     
      baju.push(newCloth);
     
  
  if (true) {
        const response = h.response({
          status: 'success',
          message: 'Gambar berhasil ditambahkan',
          data: {
            baju: id,
          },
        });
        response.code(201);
        return response;
      }
          
      },
    }
);
 
    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
 
}
init();