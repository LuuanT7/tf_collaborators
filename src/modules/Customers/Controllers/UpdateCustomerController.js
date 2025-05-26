// import "../../bootstrap/app.js"
import UpdateCustomerUseCase from '../UseCases/UpdateCustomerUseCase.js'


export default (function () {
    return {        
      'update': async (req, res) => {
        const {code} = req.params ;

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
           

            const result = await UpdateCustomerUseCase({ 
              code: Number(code),
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
            console.error("Error updating new customer!", error);
            return res.status(500).json({ error: 'Error inserting new customer!' });
          }
        }    

    };
})();
