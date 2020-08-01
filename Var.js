{
    {
        {
            {
                {
                 var B = 'really' 
                }
            }
        }
    }
}
/* we can acess the variable
 even though the variable is out of the block
 like the code below */
console.log(B)

/* but in the other hand
 through a function we couldn't */

 function text(){
     var location = 345
 }
 text()
 console.log(location)