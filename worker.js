
try {
  importScripts("https://unpkg.com/node-sql-parser/umd/mysql.umd.js")
  const parser = new NodeSQLParser.Parser()
  const ast = parser.astify("select id, name from students where age < 18")
  console.log(ast)
  const sql = parser.sqlify(ast)
  console.log(sql)
} catch (e) {
  console.error(e);
}

