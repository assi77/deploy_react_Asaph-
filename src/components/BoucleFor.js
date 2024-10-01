
const BoucleFor = () => {
let count = [];
   for(let i = 0; i<=18; i++) {
    count.push(i*10);
   }
   return(
   <div>
   <select name="degre_d">
         {count.map((counts) =>(
            <option key= {counts} value={counts}>{counts} ¤</option>
         ))}
    </select>      
   </div>
);
}

export default BoucleFor;
