// import "../../bootstrap/app.js"
import CollaboratorsModel from '../Models/CollaboratorsModel.js'


export default (function () {
    return {
        // GET /todos/:id
        'get': async (req, res) => {
          const id = req.params.id;

          try {
            if (isNaN(parseInt(id))) {
              return res.status(400).json({ error: 'Parâmetro ID inválido.' });
            }
            
            const result = await CollaboratorsModel.findByPk(id)
            return res.status(200).json(result);

          } catch (error) {
          
            return res.status(404).json({ error: 'Colaborador não encontrado.' });
          }

        },

     
    };
})();
