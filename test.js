const { resolve } = require("path");

const data = [
  { name: 'baz', age: 29, city: "hangzhou" },
  { name: 'fiz', age: 19, city: "shanghai" },
  { name: 'bar', age: 39, city: "hangzhou" },
];

const queryDataGenerator = () => {
  let res = [];

  const queryData = (dataSet) => {
    res = [...dataSet];
    return new Promise(() => {
      resolve(queryData);
    });
  };

  queryData.orderBy = (field, desc) => {
    const newRes = res.sort((a, b) => desc ? a[field] - b[field] : b[field] - a[field]);
    res = [...newRes];
    return new Promise(() => {
      resolve(queryData);
    });
  };

  queryData.where = (callback) => {
    const newRes = res.filter(callback);
    res = [...newRes];
    return new Promise(() => {
      resolve(queryData);
    });
  };

  queryData.execute = () => {
    console.log(res);
  };

  return queryData;
};


const queryData = queryDataGenerator();

queryData(data).orderBy('age').where(item => item.age > 18).execute();
