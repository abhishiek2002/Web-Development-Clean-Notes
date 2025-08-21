import { DataTypes, QueryTypes } from "sequelize";
import sequelize from "../Utils/db-connection.js";

async function getTableData(req, res) {
  const table = req.params.table;
  const getQuery = `Select * From ${table}`;
  try {
    const result = await sequelize.query(getQuery, {
      type: QueryTypes.SELECT,
    });
    res.status(200).json({
      success: true,
      message: `${result.length} rows found`,
      data: result,
    });
  } catch (error) {
    res.status(502).json({ error: error.message });
  }
}

async function createTable(req, res) {
  // tableAttributes = {
  //   attributeName: datatype
  // }
  const table = req.params.table;
  let tableAttributes = req.body;

  for (const attribute in tableAttributes) {
    tableAttributes[attribute] = {
      type: DataTypes[tableAttributes[attribute]],
    };
  }

  tableAttributes = {
    ...tableAttributes,
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  };

  try {
    const model = await sequelize.define(table, tableAttributes, {
      tableName: table,
    });
    await model.sync();

    res.status(200).json({
      success: true,
      message: `table created successfully`,
      tableName: `${table}`,
      data: model,
    });
  } catch (error) {
    res.status(502).json({
      error: error.message,
    });
  }
}

async function insertRow(req, res) {
  const table = req.params.table;
  let rowData = req.body; // rows data

  rowData = { ...rowData, createdAt: new Date(), updatedAt: new Date() };

  const columns = Object.keys(rowData);
  const values = Object.values(rowData);

  const placeholder = columns.map(() => "?").join(" ,");

  try {
    const row = await sequelize.query(
      `INSERT INTO ${table} (${columns.join(" ,")}) VALUES (${placeholder})`,
      {
        replacements: values,
      }
    );

    const insertedRow = await sequelize.query(
      `SELECT * FROM ${table} WHERE id = ${row[0]}`,
      { type: QueryTypes.SELECT }
    );

    res.status(200).json({
      success: true,
      message: `record inserted successfully`,
      tableName: `${table}`,
      data: insertedRow[0],
    });
  } catch (error) {
    res.status(502).json({
      error: error.message,
    });
  }
}

async function getTablesName(req, res) {
  const query = `SHOW TABLES`;
  try {
    const [result] = await sequelize.query(query);
    res.status(200).json({
      success: true,
      message: `tablea name retrieve successfully`,
      data: result,
    });
  } catch (error) {
    res.status(502).json({
      error: error.message,
    });
  }
}

async function getColumnsName(req, res) {
  const table = req.params.table;
  const dbName = sequelize.config.database;

  const query = `
  SELECT column_name
  FROM information_schema.columns
  WHERE table_schema = '${dbName}' AND table_name = '${table}' ORDER BY ordinal_position;
`;

  try {
    const [result] = await sequelize.query(query);
    res.status(200).json({
      success: true,
      message: `columns name retrieve successfully`,
      data: result,
    });
  } catch (error) {
    res.status(502).json({
      error: error.message,
    });
  }
}

async function deleteRecord(req, res) {
  const{ table, id} = req.params;

  const query = `DELETE FROM ${table} WHERE id = ${id}`;
  try {
    const [result] = await sequelize.query(query);
    res.status(200).json({
      success: true,
      message: `Record deleted successfully`,
      data: result,
    });
  } catch (error) {
    res.status(502).json({
      error: error.message,
    });
  }
}

export { getTableData, createTable, insertRow, getTablesName, getColumnsName, deleteRecord };
