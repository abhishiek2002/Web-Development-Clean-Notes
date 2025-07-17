import { List } from "../Models/index.js";

async function addExpense(req, res) {
  const { amount, description, category } = req.body;
  try {
    const expense = await List.create({ amount, description, category });
    res.status(200).json({
      success: true,
      message: `${expense.category} expense is created successfully`,
      data: expense,
    });
  } catch (error) {
    res.json(error.message);
  }
}

async function getExpenses(req, res) {
  try {
    const expenses = await List.findAll();
    res.status(200).json({
      success: true,
      data: expenses,
    });
  } catch (error) {
    res.json(error.message);
  }
}

async function removeExpense(req, res) {
  const { id } = req.params;
  try {
    const expense = await List.destroy({ where: { id: id } });
    res.status(200).json({
      success: true,
      data: expense,
    });
  } catch (error) {
    res.json(error.message);
  }
}

async function editExpense(req, res) {
  const { id } = req.params;
  const { amount, description, category } = req.body;

  try {
    const expense = await List.update(
      { amount, description, category },
      { where: { id: id } }
    );

    const updatedExpense = await List.findByPk(id);
    res.status(200).json({
      success: true,
      data: updatedExpense,
    });
  } catch (error) {
    res.json(error.message);
  }
}

export { addExpense, getExpenses, removeExpense, editExpense };
