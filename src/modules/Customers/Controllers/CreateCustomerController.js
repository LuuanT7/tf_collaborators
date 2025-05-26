// import "../../bootstrap/app.js"
import CreateCustomerUseCase from '../UseCases/CreateCustomerUseCase.js'


export default (function () {
    return {

        
        // POST /todos
        'insert': async (req, res) => {
          const {
            name,
            birth_date,
            rg,
            cpf,
            phone,
            address,
            number_house,
            city,
            uf,
            cep
          } = req.body || {};

          try {
           

            const result = await CreateCustomerUseCase({ 
              name,
              birth_date,
              rg,
              cpf,
              phone,
              address,
              number_house,
              city,
              uf,
              cep 
            });

            return res.status(201).json(result);

          } catch (error) {
            console.error("Error inserting new customer!", error);
            return res.status(500).json({ error: 'Error inserting new customer!' });
          }
        }    

    };
})();
