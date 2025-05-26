import GetCustomerUseCase from '../UseCases/GetCustomerUseCase.js'

export default (function () {
    return {
        'get': async (req, res) => {
            const {code} = req.params ;
            
        try {
              // transformado em numero pq params vem como string
                const codeNumber = Number(code)
                const result = await GetCustomerUseCase(codeNumber);

                return res.status(200).json(result);
            } catch (error) {
                console.error(error);
                return res.status(500).json({ 
                    error: 'Erro de servidor.',
                    details: error.message 
                });
            }
        },   
    };
})();