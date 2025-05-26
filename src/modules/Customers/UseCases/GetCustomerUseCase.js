import CustomerModel from '../Models/CustomerModel.js'

const GetCustomerUseCase = async (code) => {
  try {    
     
      if (code !== undefined && code !== null && !Number.isInteger(code)) {
        throw new Error("Invalid type for code! Must be an integer.");
    }
    
    
      const result = await CustomerModel.findByPk(code)

      if(!result)  throw new Error('Customer code does not exist!!')

      return result
    } catch (error) {
      throw new Error(`Error when searching for customer! (GetCustomerUseCase): ${error.message}`);
    }
}

export default GetCustomerUseCase