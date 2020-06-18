const Discord = require('discord.js');
const bot = new Discord.Client();

//insert token for DiscordBot, removed from source for privacy
const token = '';

const PREFIX  = '$';
var pool = [];
var apool = [];
var dpool = [];

function queuePlayer(name, chan){
    pool.push(name);
    displayDraft(chan);
}

function removePlayer(name, chan){
    var temp;
    var i;
    var found = false;

    for(i = 0; i < pool.length; i++){
        if(pool[i] === name)
        {
            temp = pool[i];
            pool[i] = pool[pool.lastIndexOf];
            pool[pool.lastIndexOf] = temp;
            found = true;
            break;
        }
    }
    if(found === true){
        pool.pop(name);
        chan.send(name + ' has been removed!');
        displayDraft(chan);
    }
    else{
        chan.send(name + ' has not been found!');
    }
}
function displayDraft(chan){
    let table = "```  Pool                                   Attackers                              Defenders                              \n";
    let largest = pool.length;

    if(apool.length > largest){
        largest = apool.length;
    }
    if(dpool.length > largest){
        largest = dpool.length;
    }

    for(let i = 0; i < largest; i++){
        table += i + 1 + " ";
        if(pool.length > i){
            table += pool[i];
            for(x = 0; x < 39 - pool[i].length; x++){
                table += ' ';
            }
        }
        else
            table += "                                       ";
        if(apool.length > i){
            table += apool[i];
            for(x = 0; x < 39 - apool[i].length; x++){
                table += ' ';
            }
        }
        else
            table += "                                       ";
        if(dpool.length > i){
            table += dpool[i];
        }
        table += '\n';
    }
    table += "```";
    chan.send(table);
 
}
function pick(team, from, player, chan)
{
    if (player >= 0 && player < from.length)
    {
        team.push(from[player]);
        from.splice(player, 1);
    }
    else
        chan.send("Error: Player ID not found!");

    displayDraft(chan);
}

bot.on('ready', () => {
    console.log('Beep, boop. DraftBot is online');
})

bot.on('message', message=>{
   let args = message.content.substring(PREFIX.length).split(" ");

   switch(args[0]){
    case 'join':
       queuePlayer(message.author.username, message.channel);
        break;
    case 'start':
        message.channel.send("Queueing up, react :eggplant: to join the queue!");
        message.client.on('messageReactionAdd', (reaction, user) => {
            if(reaction.emoji.name === "🍆") {
                console.log(reaction.users);
                queuePlayer(message.author.username, message.channel);
            }
        });
        break;
    case 'add':
        queuePlayer(args[1],message.channel);
        break;
    case 'leave':
        removePlayer(message.author.username, message.channel);
        break;
    case 'remove':
        removePlayer(args[1], message.channel);
        break;
    case 'display':
        displayDraft(message.channel);
        break;
    case 'a':
        pick(apool, pool, args[1] - 1, message.channel);
        break;
    case 'd':
        pick(dpool, pool, args[1] - 1, message.channel);
        break;
    case 'removea':
        pick(pool, apool, args[1] - 1, message.channel);
        break;
    case 'removed':
        pick(pool, dpool, args[1] - 1, message.channel);
        break;
    case 'help':
        message.channel.send("These are my commands-\n$join -add yourself to the pool\n$start -sends message to start\n$add name -adds player to pool by name" + 
        "\n$leave -removes yourself from pool\n$remove name -removes player by name\n$display -shows the current draft status\n$a 1-10 -adds the corresponding player to attacker" +
        " side\n$d 1-10 -adds the corresponding player to defender side\n$removea 1-10 -returns the corresponding player from attacker side to pool\n$removed 1-10 -" +
        "returns the corresponding player from defender side to pool\n$help -shows this message");
        break;
    }
})

bot.login(token);
