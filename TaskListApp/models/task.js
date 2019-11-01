const connection = require('../connection')

module.exports = {
  async save(description, status) {
    let results = await connection.query(`insert into task
    (description, status) values ($1, $2)`, [description, status])
    return results
  },
  async findAll() {
    const results = await connection.query(`select id, description, status
    from task`)
    return results.row
  },
  async findById(id) {
    const results = await connection.query(`select id, description, status
    from task where id = $1`, [id])
    return results.rows[0]
  },
  async update(id, status) {
    let results = await connection.query(`update task set status = $1
    where id = $2`, [status, id])
    return results
  },
  async delete(id) {
    let results = await connection.query(`delete from task
    where id = $1`, [id])
    return results
  }
}