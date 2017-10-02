nextPlayer = variable
    initialize: true
    behavior: boolian for function
    purpose: to determine which turn it is

** Play: function **
<br>        args: 1
<br>                box: html object
<br>                Purpose: location of user input
<br>            
<br>            is it next players turn? 
<br>                -->true = write 'o' on box location
<br>            else 
<br>                --> false = write 'x' on box location       
<br>            return: next players turn
<br>            behavior: sets either x or o on box location
<br>            purpose: determins user turns either x's or o's
<br>
<br>        return: string
<br>        behavior: sets an id for the html boxes for the user to interact
<br>        purpose: so users can enter x or o on board

