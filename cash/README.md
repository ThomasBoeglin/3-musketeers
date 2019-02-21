# cash

CASH PROGRAM

#Goal : Convert one currency to other ones in real time

## Intall :
Fork and clone the project in your workspace 
cmd -> cd path/to/workspace ->  
---
npm i
--- 

### Commands to make it work :

	Usage
		$ cash <amount> <from> <to>
		$ cash <options>
	Options
		--set -s 			Set default currencies
	Examples
		$ cash 10 usd eur pln
		$ cash --set usd aud

#### Program steps : 
First, the program is looking to the API adress in the constants.js file. So it's going to check the actual currencies rate on internet in real time.
It is also setting currency goal default in an array.
After loading those informations, the program is using the convert method in node libraries to convert the currency.
In the end, if you havn't specified  any currency goal or/and origin, it will convert you 1 USD in Euro, Britsh Pound, and Japanese Yen.

