// import "../../bootstrap/app.js"
import CollaboratorsModel from '../Models/CollaboratorsModel.js'


export default (function () {
    return {

        
        // POST /todos
        'insert': async (req, res) => {
          const { name, role, can_develop } = req.body || {};

          try {
            if (!name || !role) {
              return res.status(400).json({ error: 'Name and role are required.' });
            }

            const result = await CollaboratorsModel.create({ 
              name,
              role,
              can_develop: can_develop ?? false, // valor padrão se não enviado
            });

            return res.status(201).json(result);

          } catch (error) {
            console.error("Erro ao inserir:", error);
            return res.status(500).json({ error: 'Erro ao inserir novo colaborador.' });
          }
        }    

    };
})();
