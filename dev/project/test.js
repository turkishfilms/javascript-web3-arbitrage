let buyAttempt = this.currExchange.buyToken(nameOfToken)


/** 
 * exchange objects can have multiple tokens that you can buy, 
 * but by submitting just the name to the object function,
 * it automatically references the address linked to the name 
 * in the object (calculated during object creation from Token). 
 * exchange objects cn have multiple tokens.

the token address is defined by getTokenAddress(token) on creation
**/

