// http://stackoverflow.com/questions/11088303/how-to-convert-to-d3s-json-format
d3.csv("/datasets/sexual-harrassment/positions.csv", function(error, data) {
  if (error) throw error;

  const BASE = 'position';
  const COLLEGES = ["UCB","UCD","UCI","UCLA","UCM","UCR","UCSB","UCSC","UCSD","UCSF"];

  let ret = "data:text/csv;charset=utf-8,";
  ret += '\n' + 'id, value' + '\n' + BASE + ',\n';

  data.forEach(d => {
    COLLEGES.forEach(c => {
      let total = d[c];
      let type = d.Position;

      let row = BASE + '.' + type + '.' + c.toLowerCase() + ',' + total + '\n';
      ret += row;
    })
  });
  console.log(ret);
  console.log(encodeURI(ret));
});
