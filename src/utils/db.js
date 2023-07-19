import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createPool(JSON.parse(process.env.MY_CONFIG));

const executeQuery = async (sql) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, data, fil) => {
      if (err) {
        reject({ status: "error", error: err });
        console.log(err);
      } else {
        resolve({ status: "sucess", data: data });
        console.log(data);
      }
    });
  });
};

export default executeQuery;
