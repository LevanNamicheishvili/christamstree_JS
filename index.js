


function getPyramid(number) {
    for(let i=1; i <= number; i++){
      let space = ' '
      .repeat(number-i);

      let patern = '*'
      .repeat(i*2-1);
 
      console.log(space + patern );
    }
  }
  getPyramid(prompt('hello:'));
