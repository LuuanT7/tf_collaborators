import CustomerModel from '../Models/CustomerModel.js'

const DeleteCustomerUseCase = async (code) => {
  try {    
     
      if (code !== undefined && code !== null && !Number.isInteger(code)) {
        throw new Error("Invalid type for code! Must be an integer.");
      }
    
      const result = await CustomerModel.destroy({where: {code}})

      if(!result)  throw new Error('Customer does not exist!!')

      return `Customer with code ${code} was deleted! `
    } catch (error) {
      throw new Error(`Error when searching for customer! (DeleteCustomerUseCase): ${error.message}`);
    }
}

export default DeleteCustomerUseCase