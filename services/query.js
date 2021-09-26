import excuteQuery from './db';

const insertQuery = async (myquery, value) => {
  try {
    const result = await excuteQuery({
      query: `INSERT INTO ${myquery}`,
      values: value,
    });

    return result;
  } catch (error) {
    return error;
  }
};

const getConditionQuery = async (table, myquery, value) => {
  try {
    const result = await excuteQuery({
      query: `SELECT * FROM ${table} WHERE ${myquery}`,
      values: value,
    });

    return {data: result};
  } catch (error) {
    return {data: 'error'};
  }
};

const updateQuery = async (tablename, query, value) => {
  try {
    const result = await excuteQuery({
      query: `Update ${tablename} SET ${query}`,
      values: value,
    });

    return {data: '', message: 'success'};
  } catch (error) {
    return {data: 'error', message: 'error'};
  }
};

export {insertQuery, getConditionQuery, updateQuery};
