import CustomerModel from '../Models/CustomerModel.js'

const CreateCustomerUseCase = async ({
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
}) => {
  try {
      
      if (!name) throw new Error( "Name is required! (CreateCostumerUseCase)" )    
    
      if (birth_date !== undefined && birth_date !== null) {
        if (typeof birth_date !== 'string' || !/^\d{2}-\d{2}-\d{4}$/.test(birth_date)) {
          throw new Error("Invalid type for birth_date! Must be a string in 'DD-MM-YYYY' format.");
        }
      }
    
      if (rg !== undefined && rg !== null && typeof rg !== 'string')
      throw new Error("Invalid type for rg! Must be a string.");
    
      if (cpf !== undefined && cpf !== null && typeof cpf !== 'string')
      throw new Error("Invalid type for cpf! Must be a string.");
    
      if (phone !== undefined && phone !== null && typeof phone !== 'string')
      throw new Error("Invalid type for phone! Must be a string.");
    
      if (address !== undefined && address !== null && typeof address !== 'string')
      throw new Error("Invalid type for address! Must be a string.");
    
      if (number_house !== undefined && number_house !== null && typeof number_house !== 'string')        
      throw new Error("Invalid type for number_house! Must be a string.");
    
      if (city !== undefined && city !== null && typeof city !== 'string')
      throw new Error("Invalid type for city! Must be a string.");
    
      if (uf !== undefined && uf !== null && typeof uf !== 'string')
      throw new Error("Invalid type for uf! Must be a string.");
    
      if (cep !== undefined && cep !== null && typeof cep !== 'string')
      throw new Error("Invalid type for cep! Must be a string.");

      // Converter 'DD-MM-YYYY' para 'YYYY-MM-DD', tranformaria data padrão br no front, como é só back-end fiz nessa logica:
      const [day, month, year] = birth_date.split('-');
      const isoDateString = `${year}-${month}-${day}`;

      const dateObj = new Date(isoDateString);
      if (isNaN(dateObj.getTime())) {
        throw new Error("Invalid date value for birth_date!");
      }
      birth_date = dateObj
    
      const result = await CustomerModel.create({
        name,
        birth_date: new Date(birth_date),
        rg,
        cpf,
        phone,
        address,
        number_house,
        city,
        uf,
        cep
      })

      return result
    } catch (error) {
      throw new Error(`Error inserting new customer! (CreateCostumerUseCase): ${error.message}`);
    }
}

export default CreateCustomerUseCase