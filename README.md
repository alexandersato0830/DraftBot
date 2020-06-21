# DraftBot
DraftBot is a Discord Bot built using Javascript and Discord's API. It allows players in custom lobbies to add players to a pool, then drafts them onto teams, and shows them the updated team status.

Setup: https://discordpy.readthedocs.io/en/latest/discord.html to initialize the discord bot.
Initialize the bot folder using nodejs. Extract the Discord API from node_modules, then copy and paste the contents into the folder. Grab the token from the bot page on the discord developer portal and paste it into the marked line in index.js. Enter ```node .``` into the terminal. If "Beep, boop. Draftbot is online!" displays on the terminal, you are good to go!

Use: '$' is used to signal a command. For example $help will prompt the bot to display the help message which lists each command and explains how to use them. Players can be added to the general pool in one of 3 ways: reacting to the $start message, $join to add themselves, and $add 'name' to add players by name. Players can leave the queue using $leave to remove themselves. $remove 'name' will remove players by name. Players can then be moved to attackers team with $a then the number corresponding to their position in the pool. For example $a 1 will add the first player in the pool. The same process can be applied to the defending team using the $d command. $removea then the number corresponding to the attacker will remove that player from the attacking team, then move them to the pool. The same can be applied to defenders using $removed. $clear will remove all players from all pools.

Commands: 
$join - Adds the player who entered the command to the pool.
$start - Sends a message to the server, anyone who reacts with :eggplant: will be added to the pool.
$add name - Adds player to the pool using the name entered.
$leave - Removes the player who entered the command from the pool.
$remove name - Removes the player from the pool using the name entered.
$display - Shows the current status of the players in the pool, attacker's pool, and defender's pool. 
$a number - Adds the player to the attacking team corresponding with the number entered.
$d number - Adds the player to the defending team corresponding with the number entered.
$removea number - Removes the player from the attacking team and emplaces them back into the pool corresponding with the number entered.
$removed number - Removes the player from the attacking team and emplaces them back into the pool corresponding with the number entered.
$help - Displays the help message detailing all the commands.
$clear - Clears all players from all pools.
