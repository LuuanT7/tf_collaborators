// import "../../bootstrap/app.js"
import CollaboratorsModel from '../Models/CollaboratorsModel.js'


export default (function () {
    return {

        // GET /todos
        'list': async (req, res) => {

          const limit = parseInt(req.query.limit) || 10;
          const offset = parseInt(req.query.offset) || 0;
          const field = req.query.field || 'id'; // campo padrão
          const direction = req.query.direction?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

          try {
              if (limit > MAX_LIMIT) {
                  return res.status(400).json({ error: 'Limite máximo: 100.' });
              }

              if (isNaN(limit) || isNaN(offset)) {
                  return res.status(400).json({ error: 'Parâmetros inválidos.' });
              }

              // Verifique se o campo existe no modelo
              const validFields = Object.keys(CollaboratorsModel.rawAttributes);
              if (!validFields.includes(field)) {
                  return res.status(400).json({ error: `Campo '${field}' inválido para ordenação.` });
              }

              const result = await CollaboratorsModel.findAll({
                  limit,
                  offset,
                  order: [[field, direction]]
              });

              return res.status(200).json(result);

          } catch (error) {
              console.error(error);
              return res.status(500).json({ error: 'Erro de servidor.' });
          }

        },   

    };
})();
