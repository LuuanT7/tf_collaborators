import CustomerModel from '../Models/CustomerModel.js'
import { Op } from 'sequelize'

const ListCustomerUseCase = async ({
  name,
  birth_date,
  rg,
  cpf,
  city,
  uf,
  cep,
  page = 1,       // Página inicial (default: 1)
  pageSize = 10,    // Itens por página (default: 10) 
}) => {
  try {
    // Cálculo de offset para paginação
    const offset = (page - 1) * pageSize
    
    // Construção do WHERE para filtros usar como filtro
    const where = {}
    
    // OP = operação do sequelize, ajuda nas contruções SQL
    // iLike = comparação case-insensitive
    // eq = comparação estrita, utilizado para dados unicos e datas

    if (name) {        
      where.name = { [Op.iLike]: `%${name}%` }
    }
    if (birth_date) {        
      where.birth_date = { [Op.eq]: birth_date }
    }
    if (rg) {        
      where.rg = { [Op.iLike]: `%${rg}%` }
    }
    if (cpf) {        
      where.cpf = { [Op.iLike]: `%${cpf}%` }
    }
    if (cep) {        
      where.cep = { [Op.iLike]: `%${cep}%` }
    }
    if (city) {
      where.city = { [Op.iLike]: `%${city}%` }
    }
    if (uf) {
      where.uf = { [Op.iLike]: `%${uf.toUpperCase()}%` }
    }

    // resultado da consulta principal com paginação e ordenação
    const result = await CustomerModel.findAndCountAll({
      where,
      limit: pageSize,
      offset,
      order: [['name', 'ASC']],
    })

    return {
      // Retorno dos dados
      data: result.rows,
      // Retorno da paginação
      pagination: {
        totalItems: result.count,
        totalPages: Math.ceil(result.count / pageSize),
        currentPage: page,
        pageSize,      
      }
    }
  } catch (error) {
    throw new Error(`Error finding all customers! (ListCostumerUseCase): ${error.message}`)
  }
}

export default ListCustomerUseCase