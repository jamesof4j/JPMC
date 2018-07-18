function DeleteMatrix ( matrix, rowsToDelete, columnsToDelete ) {
   for (i=0; i < matrix.length; i++){
        for (j=0; j < matrix[i].length; j++){
          if (columnsToDelete.includes(j)){ matrix[i].splice(j,1); }
      }
 if (rowsToDelete.includes(i)){ matrix.splice(i,1); } 
   }
}