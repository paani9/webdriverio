var xlsx=require("xlsx")
var wb=xlsx.readFile("./test/specs/Testdata/jsexcel.xlsx")
let totalsheets=wb.SheetNames
let ws=wb.Sheets['Sheet1']
let excelData=xlsx.utils.sheet_to_json(ws)
console.log(excelData[0].admin)
let exceltxt=xlsx.utils.sheet_to_txt(ws)
console.log(exceltxt)
let excelcsv=xlsx.utils.sheet_to_csv(ws)
console.log(excelcsv)

