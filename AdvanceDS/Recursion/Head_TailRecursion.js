   function colors() {
        let data = 20;
        console.warn(data);
        if(true){
            console.warn(data*20)
        }else{
            console.warn(data/20) 
        }
      }
      function days() {
        colors();
      }
      function fruits() {
        days();
      }
      function topFunction() {
        fruits();
      }
      topFunction();

    function test(x)
   {
    console.warn(x)
    if(x>0){
        test(x-1)
    }
    console.warn(x)
   }


   let data=5
   test(data)