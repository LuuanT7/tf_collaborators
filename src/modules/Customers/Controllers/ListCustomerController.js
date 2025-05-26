import ListCustomerUseCase from '../UseCases/ListCustomerUseCase.js'

export default (function () {
    return {
        'list': async (req, res) => {
            const {
                name,
                birth_date,
                rg,
                cpf,
                city,
                uf,
                cep,
                page = 1,
                pageSize = 10,               
            } = req.query || {};
            
            try {
                const result = await ListCustomerUseCase({
                    name,
                    birth_date,
                    rg,
                    cpf,
                    city,
                    uf,
                    cep,
                    page: parseInt(page),
                    pageSize: parseInt(pageSize),
                   
                });

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