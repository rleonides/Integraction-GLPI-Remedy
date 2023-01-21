//'FFFHJJF' => '3F1H2J1F'
//'ZXCVZZ' => '1Z1X1C1V2Z'

console.log('FFFHJJF'.match(/(\w)\1*/g).reduce((ac,e)=>ac + e.length + e[0],'' ))