import excuteQuery from './db';

const insertQuery = async (myquery, value) => {
  try {
    const result = await excuteQuery({
      query: `INSERT INTO ${myquery}`,
      values: value,
    });

    return {data: 'success'};
  } catch (error) {
    return {data: 'error'};
  }
};

export {insertQuery};
