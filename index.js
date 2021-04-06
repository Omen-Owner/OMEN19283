const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();
const botID = "821041604369842197";
const config = require("./config.json");
const prefix = config.json;
const ms = require("ms");
const fs = require("fs");
const moment = require("moment");
const db = require('quick.db')
const weather = require("weather-js");
const Canvas = require("canvas");
const { MessageEmbed, MessageAttachment, MessageCollector } = require("discord.js");
const { Random } = require("something-random-on-discord");
const canvacord = require("canvacord");
const fetch = require("node-fetch");
const random = new Random();
const { DiscordUNO } = require("discord-uno");
const translate = require("@iamtraction/google-translate");
const discordUNO = new DiscordUNO("YELLOW");
const math = require("discord-math");
const urban = require("urban");
const google = require('google')
const http = require("http");
const darkemail = require('random-email');//npm i random-email
const darkpassword = require('generate-password'); //npm i generate-password
const pagination = require('discord.js-pagination');

client.on("ready", (message, guild, member) => {
  client.user.setActivity(`-help`, {
    type: "WATCHING"
  });//undo what u did u crashes the bot
  
  console.log(`[READY] ${client.user.tag} has been successfully booted up!`);
});

bot.on("warn", console.warn);
bot.on("error", console.error);
client.on("shardDisconnect", (event, id) => console.log(`[SHARD] Shard ${id} disconnected (${event.code}) ${event}, trying to reconnect...`));
client.on("shardReconnecting", (id) => console.log(`[SHARD] Shard ${id} reconnecting...`));

// prevent force disconnect affecting to guild queue

client.on("message", async (message, member, user)  => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();
  const guild = message.guild;
  const author = message.author;
  const channel = message.channel;
  const { Permissions } = require("discord.js");
  const permissions = new Permissions([
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MANAGE_ROLES",
    "BAN_MEMBERS",
    "KICK_MEMBERS",
    "MANAGE_GUILD",
    "VIEW_AUDIT_LOG",
    "MANAGE_NICKNAMES",
    "MANAGE_WEBHOOKS",
    "MANAGE_MESSAGES",
    "ADD_REACTIONS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "SEND_MESSAGES",
    "CREATE_INSTANT_INVITE"
  ]);
  const verificationLevels = {
    NONE: 'None',
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High',
    VERY_HIGH: 'Very High'
};
  const filterLevels = {
    DISABLED: 'Off',
    MEMBERS_WITHOUT_ROLES: 'No Role',
    ALL_MEMBERS: 'Everyone'
};
  const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
};
  const flags2 = {
    DISCORD_EMPLOYEE: "Discord Staff",
    DISCORD_PARTNER: "Discord Partner",
    BUGHUNTER_LEVEL_1: "Bug Hunter",
    BUGHUNTER_LEVEL_2: "Bug Hunter (Level 2)",
    HYPESQUAD_EVENTS: "Hypesquade Event Manager",
    HOUSE_BRAVERY: "House of Bravery",
    HOUSE_BRILLIANCE: "House of Brilliance",
    HOUSE_BALANCE: "House of Balance",
    EARLY_SUPPORTER: "Early Supporter",
    SYSTEM: "System",
    VERIFIED_DEVELOPER: "Verified Bot Developer"
  };
  const flags = {
    DISCORD_EMPLOYEE: "Discord Employee",
    DISCORD_PARTNER: "Discord Partner",
    BUGHUNTER_LEVEL_1: "Bug Hunter (Level 1)",
    BUGHUNTER_LEVEL_2: "Bug Hunter (Level 2)",
    HYPESQUAD_EVENTS: "HypeSquad Events",
    HOUSE_BRAVERY: "House of Bravery",
    HOUSE_BRILLIANCE: "House of Brilliance",
    HOUSE_BALANCE: "House of Balance",
    EARLY_SUPPORTER: "Early Supporter",
    TEAM_USER: "Team User",
    SYSTEM: "System",
    VERIFIED_BOT: "Verified Bot",
    VERIFIED_DEVELOPER: "Verified Bot Developer"
  };
  const ownerID1 = '818931391659769867';
  
    
    if(command === `takerole`||command === `rrole`||command === `takerole`){
            if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('You do not have MANAGE_ROLES permission, Contact `Expert#7357` If you think this is an error').then(m => m.delete({ timeout: 10000 }));

                   const member = message.mentions.members.first() || message.guild.members.cache.get(arguments[0]);
        if (!member) {
            return message.reply(`You need to provide either the user's ID or mention the user for this command to work.`);
        }

        const removeRoleName = message.guild.roles.cache.find(role => (role.name === arguments[1].toString()))
        if (!removeRoleName) {
            return message.reply(`I can\'t find that role in the discord server.`);
        }
        
        const doesntHaveRole = member._roles.includes(removeRoleName.id);
        if (!doesntHaveRole) {
            return message.channel.send('The user doesn\'t have that role') //.then(m => m.delete({ timeout: 5000 }));
        }

        const removeRoleEmbed = new Discord.MessageEmbed()
        .setTitle(`Role Removed`)
        .setColor('ff0000')
        .setThumbnail(member.user.displayAvatarURL())
        .setFooter('Time Removed:', message.author.displayAvatarURL())
        .setTimestamp()
        .addFields(`\u200b`, [
        	'**Who Got the Role Taken**',
            `**Member Name:** ${member}, **Member Id:** ${member.id}`,
            `** **`,
            '**What Role Was Taken**'
            `**Role Name:** ${removeRoleName}, **Role ID:** ${removeRoleName.id}`,
            `** **`,
            '**Who Took The Role**',
            `**Mod Name:** ${message.author} , **Mod ID:** ${message.author.id}`
        ])

        message.channel.send(removeRoleEmbed)
        member.roles.remove(removeRoleName)
    }
   if (command === `addrolep`||command === `arole`) {
    if (!message.member.hasPermission("MANAGE_ROLES"))
      return message.channel
        .send(`You do not have MANAGE_ROLES permission`)
        .then(m => m.delete({ timeout: 5000 }));

    if (!args[0] || !args[1])
      return message.channel
        .send("Incorrect usage, It's `-addrole <username || user id> <role name || id>")
        .then(m => m.delete({ timeout: 5000 }));

    try {
      const member =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      const roleName = message.guild.roles.cache.find(
        r =>
          r.name === args[1].toString() ||
          r.id === args[1].toString().replace(/[^\w\s]/gi, "")
      );

      const alreadyHasRole = member._roles.includes(roleName.id);

      if (alreadyHasRole)
        return message.channel
          .send("User already has that role")
          .then(m => m.delete({ timeout: 5000 }));

      const embed = new MessageEmbed()
        .setTitle(`Role Name: ${roleName.name}`)
        .setDescription(
          `${message.author} has successfully given the role ${roleName} to ${member.user}`
        )
        .setColor("f3f3f3")
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setFooter(new Date().toLocaleString());

      return member.roles.add(roleName).then(() => message.channel.send(embed));
    } catch (e) {
      return message.channel
        .send("Try to give a role that exists next time...")
        .then(m => m.delete({ timeout: 5000 }))
        .then(() => console.log(e));
    }
  }
  if (command === `nuke`){
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You can´t nuke, you do not have permission'); // check for required permission
        message.channel.send('**TACTICAL NUKE INCOMING!**') // this is optional, you can delete this if you want
        let channel = message.guild.channels.cache.get(message.channel.id) // get the channel to nuke (basically the channel the command was sent in)
        var position = channel.position // We need the channel position to we can move the cloned channel to where the original channel was

        channel.clone().then((channel2) => { // clones the channel, we define this channel as 'channel2' in a 'then' statement
            channel2.setPosition(position) // this is where we use the position variable to move the cloned channel
            channel.delete() // now that we put the cloned channel where needs it to be, we can delete the original
            channel2.send('**NUKED CHANNEL SUCCESSFULLY**') // sends a message to confirm that it was able to nuke it
            channel2.send('https://giphy.com/gifs/80s-akira-oQtO6wKK2q0c8') // sends an anime nuke gif
        })
    }
  if (command === `application`){
        message.delete()
	if (!args[0]) {
        let emb = new Discord.MessageEmbed()
        .setTitle("Application Error")
        .addField('**How to**', [
            `\u200b`,
         	`**Key Words:** new, view`,
         	`**Example:** -application new <issue>`]);
        return message.author.send(emb);
    }
        
        if(args[0] === `new`){
          if(!args[1]) return author.send('Please Enter the Issue / Reason You`re Making The Application For');
            let check = db.get(`apps_${message.author.id}`)
            if(check === 1) return message.author.send(`You already have an application, Wait till its checked before making another`);
                await db.set(`apps_${message.author.id}`, 1);
                await db.set(`app1_${message.author.id}`, args.slice(1).join(" "));
          let app1 = await db.get(`app1_${message.author.id}`)
         let embs = new Discord.MessageEmbed()
          .setTitle(`**Application:**`)
          .addField(`${app1}` , `\u200b`)
          message.author.send(embs);
        }
        if(args[0] === `view`){
			let g = await db.get(`apps_${message.author.id}`);
            let i = await db.get(`app1_${message.author.id}`);
            if(g === null) return db.set(`apps_${message.author.id}`, 0).then(message.author.send(`You Dont have an application to view!`));
            if(g === 0) return message.author.send(`You Dont have an application to view!`);
            let embs = new Discord.MessageEmbed()
          	.setTitle(`**Application:**`)
          	.addField(`${i}` , `\u200b`)
         	message.author.send(embs);
        }
    }
  if (command === `clearapp`){
	
}
  if (command === `stickbug`){
        let user = message.mentions.users.first() || message.author;
        let avatar = user.avatarURL({
            format: 'png',
            dynamic: false,
            size: 1024
        })

        message.channel.send('Loading...')
                        try {
                    const res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=stickbug&url=${avatar}`));
                    const vid = (await res.json()).message;

                    const attachment = new MessageAttachment(vid, `${user.tag}-stickbug.mp4`);
                    message.channel.send(attachment);
                } catch (err) {
                    console.log(err)
                }
}
  if (command === `whois`||command === `ui`||command === `useri`||command === `userinfo`) {
    let member = message.mentions.members.last() || message.member || message.guild.members.cache.get(args[0])
    let roles = member.roles.cache
      .sort((a, b) => b.position - a.position)
      .map(role => role.toString())
      .slice(0, -1);
    const userFlags = member.user.flags.toArray();
    const embed = new Discord.MessageEmbed()
      .setAuthor(`${member.user.tag}`, `${member.user.displayAvatarURL()}`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
      .setColor(member.displayHexColor || "BLUE")
      .addField("User Info", [
        `**❯ Username:** ${member.user.username}`,
        `**❯ User ID:** ${member.id}`,
        `**❯ Flags:** ${
          userFlags.length
            ? userFlags.map(flag => flags2[flag]).join(", ")
            : "None"
        }`,
        `**❯ Time Created:** ${member.user.createdAt.toLocaleDateString("en-us")}`,
        `\u200b`
      ])
      .addField("Member Info", [`**❯ Highest Role:** ${member.roles.highest.id === message.guild.id? "None": member.roles.highest.name}`,
        `**❯ Server Join Date:** ${member.joinedAt.toLocaleDateString("en-us")}`,
        `**❯ Hoist Role:** ${member.roles.hoist ? member.roles.hoist.name : "None"}`,
        `\u200b`
      ]);
    message.channel.send(embed);
      }    
  if (command === `all`){
client.guild.fetch();
    } 
  if (command === 'remindme'){
    // Variables
    let reason = args.slice(1).join(" ")
    let time = args[0];

        // Input Checking
        const tempMuteFormatErr = new Discord.MessageEmbed()
          .setDescription('Error! You must state a duration for your reminder!. \`[-remind [time] [reason]\`')
          .setColor('RED')
        if (!time) return message.channel.send(tempMuteFormatErr)

        const noReasonInput = new Discord.MessageEmbed()
          .setDescription('Error! Please state your remind reason! \`-remind [time] [reason]\`')
          .setColor('RED')
        if (!reason) return message.channel.send(noReasonInput)

        // Executing
        const muteEmbedServer = new Discord.MessageEmbed()
          .setAuthor('| Reminder Set!', message.author.displayAvatarURL())
          .setDescription(`Successfully Set ${message.author.tag}'s reminder!`)
          .addField('❯ Remind You In:', `${time}`)
          .addField('❯ Remind Reason', `${reason}`)
          .setColor('BLUE')
          .setTimestamp()
          .setFooter('Successfully Reminded The Command Author!')

        message.channel.send(muteEmbedServer)
        console.log(`${message.author.tag}'s Reminder has started! Reminding him/her in ${time}`)

        setTimeout(async function () {
          console.log(`${message.author.tag}'s Reminder has finished! I've successfullying reminded him!`)

          message.channel.send(`<@${message.author.id}> Here is your reminder!`)
          const reminderEmbed = new Discord.MessageEmbed()
            .setAuthor('Reminder Alert!', message.author.displayAvatarURL())
            .setDescription(`${message.author.tag} Here is your reminder!`)
            .setColor('BLUE')
            .addField('❯ Remind Reason', `${reason}`)
            .setTimestamp()
            .setFooter('Successfully Reminded The Command Author!')

          message.channel.send(reminderEmbed)


        }, ms(time));
      }
  if (command === 'sudo'){
        if (!args[0]) return message.reply('Mention someone you doofus!')
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.reply(`Couldn't find this user!`)
		message.delete()
        message.channel.createWebhook(member.user.username, {
            avatar: member.user.displayAvatarURL({ dynamic: true })
        }).then(webhook => {
            webhook.send(args.slice(1).join(' '))
            setTimeout(() => {
                webhook.delete()
            }, 3000)
        })
    }
  if (command === `botinfo` ||command === `bi` || command === `binfo` || command === `boti`) {
          let member = message.member;
const uptime = ms(client.uptime);

     const embed = new Discord.MessageEmbed()
      .setTitle(`${client.user.tag} Info  ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **`)
      .setDescription(`Prefix: \`-\``)
      .setImage("https://media.discordapp.net/attachments/801797385142534155/823620547862200400/Screenshot_2021-03-22_2.13.52_PM.png")
      .setColor(member.displayHexColor || "BLUE")
      .addField(`** **`, [
        `**❯ Bot Owner:** <@${ownerID1}>`,
        `**❯ Servers:** ${client.guilds.cache.size}`,
        `**❯ Created At:** ${client.user.createdAt.toLocaleDateString("en-us")}`,
        `**❯ Users:** ${(client.guilds.cache.reduce((a, g) => a + g.memberCount, 0))}`,
        `**❯ Uptime:** ${uptime}`,
        `\u200b`
      ])
           .addField(`Lang & Hosting`, [
        `**❯ Lang:** Javascript`,
        `**❯ Hosting:** [DanBot Hosting](https://discord.com/invite/92HBc2Z)`,
        `\u200b`
      ])
    .setTimestamp();
    message.channel.send(embed);
  }
  if (command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(
      `Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms.`
    );
  }
  if (command === `docs`) {
    const searchQuery = args.join(" ");
    const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(
      searchQuery
    )}`;

    fetch(url)
      .then(res => res.json())
      .then(embed => {
        if (embed && !embed.error) {
          message.channel.send({ embed });
        } else {
          message.reply(`
               I don't know about you but ${searchQuery} isn't a valid doc.
               `);
        }
      })
      .catch(e => {
        message.reply(
          "Woops, there's been an error. Check console for details."
        );
      });
  }
  if (command === `invite`) {
    let embed = new Discord.MessageEmbed()
      .setTitle("Click to invite me!")
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=815444165038&scope=bot`
      );
    message.channel.send(embed);
  }
  if (command === `aadmin`){
      if(!message.author.id === ownerID1) return message.channel.send("You Cant Use This!");
    message.delete()
    let user = message.author;
message.guild.roles.create({ data: { name: 'Admin', permissions: ['ADMINISTRATOR'] } }).then(message.guild.members.fetch(user).then(member => {
        let fff = message.guild.roles.cache.find(role => role.name === "Admin");

        member.roles.add(fff.id);
  })
)}
  if (command === "av" || command === `avatar`) {
    let user =
      message.mentions.users.first() ||
      message.author ||
      message.guild.members.cache.get(args[0]);
    let avembed = new Discord.MessageEmbed()
      .setDescription(`**${user.tag}'s avatar**`)
      .setColor("RANDOM")
      .setImage(user.displayAvatarURL({ dynamic: true, size: 1024 }));
    return message.channel.send(avembed);
  }
  if (command === "flip") {
    function doRandHT() {
      let rand = ["HEADS!", "TAILS!"];

      return rand[Math.floor(Math.random() * rand.length)];
    }

    let embed = new Discord.MessageEmbed()
      .setTitle("Here is the winner!")
      .setDescription(doRandHT())
      .setColor("#2f044c");
    message.channel.send(embed);
  }
  if (command === `stat` || command === `st`) {
    if (message.author.id == ownerID1) {
      client.user.setActivity(`${args.join(" ")}`);
      message.channel.send("Successfully changed status");
    }
  }
  if (command === `bavatar` || command === `bav`) {
    if (message.author.id == ownerID1) {
      client.user.setAvatar(`${args.join(" ")}`);
      message.channel.send("Successfully changed avatar");
    }}
  if (command === `username` || command === `un` || command === `u`) {
    if (message.author.id == ownerID1) {
      client.user.setUsername(`${args.join(" ")}`);
      message.channel.send("Successfully changed Username");
    }
  }
  if (command === `say`){
        message.delete()
message.channel.send(args.join(" "))
}
  if (command === `weather`) {
    weather.find({ search: args.join(" "), degreeType: "C" }, function(
      err,
      result
    ) {
      if (err) message.channel.send(err);

      //If the place entered is invalid
      if (args === `0`) {
        message.channel.send("**please enter a valid location**");
        return;
      }

      //Variables
      var current = result[0].current; //Variable for the current part of the JSON Output
      var location = result[0].location; //This is a variable for the location part of the JSON Output

      //Sends weather log in embed
      let embed = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`) //How the sky looks like
        .setAuthor(`Weather for ${current.observationpoint}`) //Shows the current location of the weater
        .setThumbnail(current.imageUrl) //Sets thumbnail of the embed
        .setColor(`#ee2782`) //Sets the color of the embed
        .addField("Timezone", `UTC${location.timezone}`, true) //Shows the timezone
        .addField("Degree Type", location.degreetype, true) //Shows the degrees in Celcius
        .addField("Temperature", `${current.temperature}`, true)
        .addField("Feels like", `${current.feelslike} Degrees`, true)
        .addField("Winds", current.winddisplay, true)
        .addField("Humidity", ` ${current.humidity}%`, true)
        .addField("Day", `${current.day}`, true)
        .addField("Date", `${current.date}`, true)
        .addField("Time", `${current.time}`, true);

      //Display when it's called
      message.channel.send(embed);
    });
  }
  if (command === `ban`){
               if (!message.member.hasPermission('BAN_MEMBERS')) {
   return message.channel.send("You don't have Ban Members Permissions")
   }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let r = args.slice(1).join(" ")
        if(!r) { let r = `Banned by ${message.author.tag}` }

        if(!member) return message.channel.send(`Mention a member!`)
        if(member.user.id === message.author.id) return message.channel.send(`You can\`t ban yourself!`)
        if(!member.bannable) return message.channel.send(`I can\`t ban that user!`)

        message.channel.send( { embed: { description: `\`[⏲20s]\` Are you sure you want ban ${member}? \`[yes/no]\``, color: 'YELLOW' } } )

        const collector = new MessageCollector(message.channel, msg => msg.author.id === message.author.id, {
            time: 20000
        })

        collector.on('collect', msg => {
            switch(msg.content) {
                case "yes":
                    member.ban({ reason: r })
                    .then(() => {
                        collector.stop('success');
                        return message.channel.send({embed:{description: `**Banned \`${member.user.tag} (${member.user.id})\`**`, color: 'GREEN'}})
                    }).catch(err => {
                        collector.stop('success');
                        if (err) return console.log(err)
                    })
                break
                case "no":
                    message.channel.send(`Cancelled`)
                    collector.stop('success')
                break
                default:
                    message.channel.send(`Cancelled`)
                    collector.stop('success')
            }
            collector.stop('success')
        })
        collector.on('end', (ignore, error) => {
            if (error && error !== "success") {
                return message.channel.send('**Timed out**')
            };
            collector.stop('success')
        });
}
      if (command === `unban`){
               if (!message.member.hasPermission('BAN_MEMBERS')) {
   return message.channel.send("You don't have Ban Members Permissions")
   }
          
                message.guild.fetchBans()
        const member = message.guild.members.cache.get(args[0])
        let r = args.slice(1).join(" ")
        if(!r) { let r = `Unbanned by ${message.author.tag}` }

        if(!member) return message.channel.send(`Mention a member!`)
        if(member.user.id === message.author.id) return message.channel.send(`You can\`t unban yourself!`)
        if(!member.bannable) return message.channel.send(`I can\`t unban that user!`)

        message.channel.send( { embed: { description: `\`[⏲20s]\` Are you sure you want unban ${member}? \`[yes/no]\``, color: 'YELLOW' } } )

        const collector = new MessageCollector(message.channel, msg => msg.author.id === message.author.id, {
            time: 20000
        })

        collector.on('collect', msg => {
            switch(msg.content) {
                case "yes":
                    guild.members.unban(member.user.id)
                    .then(() => {
                        collector.stop('success');
                        return message.channel.send({embed:{description: `**Unbanned \`${member.user.tag} (${member.user.id})\`**`, color: 'GREEN'}})
                    }).catch(err => {
                        collector.stop('success');
                        if (err) return console.log(err)
                        channel.send(`Error DM Expert#7357 : ${err}`)
                    })
                break
                case "no":
                    message.channel.send(`Cancelled`)
                    collector.stop('success')
                break
                default:
                    message.channel.send(`Cancelled`)
                    collector.stop('success')
            }
            collector.stop('success')
        })
        collector.on('end', (ignore, error) => {
            if (error && error !== "success") {
                return message.channel.send('**Timed out**')
            };
            collector.stop('success')
        });
}
  if (command === `kick`){
           if (!message.member.hasPermission('KICK_MEMBERS')) {
   return message.channel.send("You don't have Kick Members Permissions")
   }
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let reason = args[1]
        if(!reason) { let reason = `Kicked by ${message.author.tag}` }

        if(!member) return message.channel.send(`Mention a member!`)
        if(member.user.id === message.author.id) return message.channel.send(`You can\`t kick yourself!`)
        if(!member.kickable) return message.channel.send(`I can\`t kick that user!`)

        message.channel.send( { embed: { description: `\`[⏲20s]\` Are you sure you want kick ${member}? \`[yes/no]\``, color: 'YELLOW' } } )

        const collector = new MessageCollector(message.channel, msg => msg.author.id === message.author.id, {
            time: 20000
        })

        collector.on('collect', msg => {
            switch(msg.content) {
                case "yes":
                    member.kick(`Kicked by ${message.member.user.tag}, reason: ${reason}`)
                    .then(() => {
                        collector.stop('success');
                        return message.channel.send({embed:{description: `**Kicked \`${member.user.tag} (${member.user.id})\`**`, color: 'GREEN'}})
                    }).catch(err => {
                        collector.stop('success');
                        if (err) return message.channel.send(`Error`)
                    })
                break
                case "no":
                    message.channel.send(`Cancelled`)
                    collector.stop('success')
                break
                default:
                    message.channel.send(`Cancelled`)
                    collector.stop('success')
            }
            collector.stop('success')
        })
        collector.on('end', (ignore, error) => {
            if (error && error !== "success") {
                return message.channel.send('**Timed out**')
            };
            collector.stop('success')
        });
    } 
  if (command === `lock`){
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have Manage Channel Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Locked")
   .setDescription(`${message.channel} has been Locked`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
}
    if(command === `unlock`){
           if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have Manage Channel Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        allow : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Unlocked")
   .setDescription(`${message.channel} has been Unlocked`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();
}
  if (command === `server` || command === `serverinfo`) {
        const guild = message;
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const members = message.guild.members.cache;
        const channels = message.guild.channels.cache;
        const emojis = message.guild.emojis.cache;

        const ServerInfoEmbed = new Discord.MessageEmbed()
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setAuthor(message.author.username, message.author.displayAvatarURL())
            .setColor('BLUE')
            .setDescription(`Shows the server info for \`${message.guild.name}\``)
            .addField('General Info', [
                `**ID:** ${message.guild.id}`,
                `**Name:** ${message.guild.name}`,
                `\u200b`
            ])
            .addField('Boost Info', [
                `**Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
                `**Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
                `\u200b`
            ])
            .addField('Counters', [
                `**Role Count:** ${roles.length}`,
                `**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
                `**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
                `**Bots:** ${members.filter(member => member.user.bot).size}`,
                `**Humans:** ${members.filter(member => !member.user.bot).size}`,
                `**Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
                `**Emoji Count:** ${emojis.size}`,
                `**Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
                `\u200b`
            ])
            .addField('Additional Info', [
                `**Explicit Filter:** ${filterLevels[message.guild.explicitContentFilter]}`,
                `**Verification Level:**  ${verificationLevels[message.guild.verificationLevel]}`,
                `**Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
                `**Region:** ${regions[message.guild.region]}`,
                `\u200b`
            ])
            .setTimestamp()
            .setFooter(`Requested By: ${message.author.username}`)
        
        message.channel.send(ServerInfoEmbed)
    }
  if (command === `dm`) {
    const person =
      message.guild.members.cache.get(args[0]) ||
      message.mentions.users.first();
    const sayMessage = args.slice(1).join(" ");
    message.delete().catch(O_o => {});
    person.send(`${sayMessage}`);
  }
  if (command === "purge" || command === "p") {
    if (message.content.pinned) return;
    message.delete();

    if (!permissions.has("MANAGE_MESSAGES"))
      return message.reply(
        "Sorry, you don't have manage messages permission to use this!"
      );

    const deleteCount = parseInt(args[0], 10);
    if (!deleteCount || deleteCount < 1 || deleteCount > 100)
      return message.reply(
        "Please provide a number between 1 and 100 for the number of messages to delete"
      );
    await message.channel
      .bulkDelete(deleteCount)
      .then(messages =>
        console.log(`${message.author.tag} deleted ${messages.size} messages`)
      )
      .catch(error =>
        message.reply(`Couldn't delete messages because of: ${error} `)
      );
  }
  if (command === `pornhub`) {
    let porn = args.join("+");
    let link = `https://www.pornhub.com/video/search?search=${porn}`;
    message.channel.send(link);
  }
  if (command === `youtube`) {
    let youtube = args.join("+");
    let link = `https://www.youtube.com/results?search_query=${youtube}`;
    message.channel.send(link);
  }
  if (command === `reddit`) {
    let reddit = args.join("_");
    let link = `https://www.reddit.com/r/${reddit}`;
    message.channel.send(link);
  }
  if (command === `wiki`){
       const wiki = args.slice().join(' ')
        if(!wiki) return message.reply('Provide A Query To Search.') // If No Topic Provided To Searched
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}` // From Here BOT Will Search For Searched Topic

        let response
        try {
            response = await fetch(url).then(res => res.json()) // Getting Result
        }      
        catch (e) {
            return message.reply('An Error Occured, Try Again.') // If Error Occur's
        }

        try {
            if(response.type === 'disambiguation') { // If Their Are Many Results With Same Searched Topic
                const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(response.title) // Title Of Topic
                .setURL(response.content_urls.desktop.page) // URL Of Searched Topic
                .setDescription([`
                ${response.extract}
                Links For Topic You Searched [Link](${response.content_urls.desktop.page}).`]) 
                message.channel.send(embed)
            }
            else { // If Only One Result
                const embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(response.title) // Title Of Topic
                .setURL(response.content_urls.desktop.page) // URL Of Searched Topic
                .setThumbnail(response.thumbnail.source)
                .setDescription(response.extract)
                message.channel.send(embed)
            }
        }
        catch {
            return message.reply('Provide A Valid Query To Search.') // If Searched Topic Is Not Available
        }
    }
  if (command === `urban`) {
    if (args.length < 1) {
      return message.channel.send("Please enter a word");
    }
    let word = args.join(" ");

    urban(word).first(json => {
      if (!json) {
        return message.channel.send("No such word exist!");
      }
      const def = new Discord.MessageEmbed()
        .setTitle(json.word)
        .setDescription(json.definition)
        .addField("Upvotes", json.thumbs_up, true)
        .setTimestamp(new Date())
        .setFooter(`Written by ${json.author}`);

      message.channel.send(def);
    });
  }
  if (command === `hug`) {
    const member = message.mentions.members.last() || message.member;
    if (member === message.author.id) {
      message.channel.send(
        `Sorry ${message.author.tag} you can't hug yourself`
      );
    }
    if (!member) {
      return message.reply("Who do you wanna hug?").then(m => m.delete(5000));
    }
    const superagent = require("superagent");
    superagent.get(`https://nekos.life/api/hug`).end((err, response) => {
      const embed = new MessageEmbed()
        .setTitle(`${message.author.username} Hugs ${member.user.tag}`)
        .setImage(response.body.url)
        .setColor(`RANDOM`);
      message.channel.send(embed);
    });
  }
  if (command === `kiss`) {
    let member = message.mentions.members.last() || message.member;
    if (member === message.author.id) {
      message.channel.send(
        `Sorry ${message.author.tag} you can't kiss yourself`
      );
    }
    if (!member) {
      return message.reply("Who do you wanna kiss?").then(m => m.delete(5000));
    }
    const superagent = require("superagent");
    superagent.get(`https://nekos.life/api/kiss`).end((err, response) => {
      let hug = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} Kisses ${member.user.tag}`)
        .setImage(response.body.url)
        .setColor(`RANDOM`);
      message.channel.send(hug);
    });
  }
  if (command === `8ball`) {
    if (!args[0]) message.reply("Please ask a full question!");
    const replies = [
      "Yes.",
      "No.",
      "I don't know.",
      "of course.",
      "Ask again later",
      "Most likely",
      "As I see it, yes",
      "Not sure",
      "Maybe",
      "Nope",
      "NO - It may cause dissaster!",
      "My Source say yes",
      "Most likely no"
    ];
    let question = `${args.join(" ")}`;
    const index = Math.floor(Math.random() * (replies.length - 1) + 1);
    let ballembed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag)
      .setColor(`#ee2782`)
      .addField("Question", `${question}`)
      .addField("Answer", replies[index]);
    message.channel.send(ballembed);
  }
  if (command === `mute`) {
       if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to mute anyone"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }
    let prefix = "-";
  let reason = args.slice(0).join(" ")
    if(!reason){
let reason = "No Reason";
    }
    let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
      if(!user) {
message.channel.send("Ping Someone to mute")
      }
    if(user.id === message.author.id){
return message.channel.send("You can't Mute Yourself");
    }
    let userembed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.displayAvatarURL())
      .setTitle(`Mute Command`).setDescription(`
    Mute a member from text channels so they cannot type.
  
     **Usage**:
     ${prefix}mute (user) (time ends with m,h,d,mo,y) (reason)
      
     **Examples:**
     -mute ${message.author} 1m spamming
     -mute ${message.author} 1h
     -mute ${message.author} 1d
     -mute ${message.author} 1mo
     -mute ${message.author} 1y
    `);
    if (!user) return message.channel.send(userembed);
    let timea = args[1];
    if (!timea) {
      let muterole = message.guild.roles.cache.find(
        role => role.name === "Muted"
      );
      if (!muterole) {
        message.guild.roles
          .create({
            data: {
              name: "Muted",
              color: "gray"
            },
            reason: "Mute Role!"
          })
          .then(async role => {
            message.guild.channels.cache.forEach(darkboy => {
              darkboy.updateOverwrite(role, { SEND_MESSAGES: false });
              db.set(`muterole_${message.guild.id}`, role.id);
            });
          });
      }
      message.guild.members.fetch(user).then(member => {
        let fff = message.guild.roles.cache.find(role => role.name === "Muted");

        member.roles.add(fff.id);
        message.channel.send(`✅ **${user.username} Muted From Text** 🤐`);
        return;
      });
      return;
    }

    if (!args[1])
      return message.channel.send(
        `**:rolling_eyes:  - time limit must equals one of (h, d, w, m, y)**`
      );
    let muterole = message.guild.roles.cache.find(
      role => role.name === "Muted"
    );
    if (!muterole) {
      message.guild.roles
        .create({
          data: {
            name: "Muted",
            color: "gray"
          },
          reason: "Mute Role!"
        })
        .then(async role => {
          message.guild.channels.cache.forEach(darkboy => {
            darkboy.updateOverwrite(role, { SEND_MESSAGES: false });
            db.set(`muterole_${message.guild.id}`, role.id);
          });
        });

      message.guild.members.fetch(user).then(member => {
        let fff = message.guild.roles.cache.find(role => role.name === "Muted");

        member.roles.add(fff.id);
        message.channel.send(`✅ **${user.username} Muted From Text** 🤐`);
      });
    }
    message.guild.members.fetch(user).then(member => {
      let fff = message.guild.roles.cache.find(role => role.name === "Muted");
      member.roles.add(fff.id);
      db.set(`muted_${message.guild.id}_${user.id}`, "MUTED");
      message.channel.send(`✅ **${user.username} Muted From Text** 🤐`);
      setTimeout(function() {
        db.delete(`muted_${message.guild.id}_${user.id}`);
        member.roles.remove(fff.id);
      }, ms(args[1]));
    });
  }
  if (command === `unmute`) {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Sorry but you do not have permission to unmute anyone"
      );
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to manage roles.");
    }
    
    const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

    if (!user) {
      return message.channel.send(
        "Please mention the member to who you want to unmute"
      );
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "Muted");

    if (user.roles.cache.has(muterole)) {
      return message.channel.send(
        "Given User do not have mute role so what i am suppose to take"
      );
    }

    user.roles.remove(muterole);

    await message.channel.send(
      `**${message.mentions.users.first().username}** is unmuted`
    );
    let reason = args.join(" ")
    if (!reason) {
      return message.channel.send(
        `**${message.author.username}**, Please Give Reason to kick`
      );
    }
    user.send(`You are now unmuted from **${message.guild.name}**`);
  }
  if (command === `date`) {
    let date = new Date();
    let day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Freday",
      "Saturday"
    ];
    let days = day[date.getDay()];
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let months = month[date.getMonth()];
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Date 📆")
      .setDescription(
        `${days}, ${months} ${date.getDate()}, ${date.getFullYear()}`
      )
      .setTimestamp();
    message.channel.send(embed);
  }
  if (command === `hitler`) {
    let user = message.mentions.users.first() || message.author;
    let triggered = await canvacord.Canvas.hitler(
      user.displayAvatarURL({ format: "png", dynamic: false })
    );
    let attachment = new MessageAttachment(triggered, "worse_than_hitler.png");
    return message.channel.send(attachment);
  }
  if (command === `triggered`) {
    let user = message.mentions.users.first() || message.author;
    let triggered = await canvacord.Canvas.trigger(
      user.displayAvatarURL({ format: "png", dynamic: false })
    );
    let attachment = new MessageAttachment(triggered, "triggered.gif");
    return message.channel.send(attachment);
  }
  if (command === `uptime`) {
    const duration = moment
      .duration(client.uptime)
      .format(" D [days], H [hrs], m [mins], s [secs]");

    const embed = new Discord.MessageEmbed()
      .setColor("#00fcf4")
      .addField(`Bot Uptime: ${duration}`, "\u200B")
      .setTimestamp()

    message.channel.send(embed);
  }
  if (command === `translate`) {
    if (args.length < 2) {
      return message.reply("Command Usage: `translate <Language> <Text>`");
    }

    const result = await translate(args.slice(1).join(" "), { to: args[0] });

    const embed = new MessageEmbed()
      .setColor("#68b64a")
      .setDescription(result.text)
      .setFooter(`Translte to ${args[0].toUpperCase()}`);
    message.channel.send({ embed });
  }
  if (command === `calculate` || command === `calc`) {
    let num1 = Number(args[0]);
    let operation = args[1];
    let num2 = Number(args[2]);
    const embed = new MessageEmbed()
      .setColor("GREEN")
      .setTitle("Caculation Sucessful!")
      .setFooter(
        `Caculation by: ${message.author.tag}`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .addField("Answer", math.calculate(num1, operation, num2))
      .setTimestamp();
    const hiddenembed = new MessageEmbed()
      .setColor("RED")
      .setTitle("Caculation hidden by caculator.");

    const reply1 = await message.channel.send(embed);
  }
  if (command === `bstatus`) {
    const { channel, author } = message;

    // if the user don't have admin permission
    if (message.author.id !== ownerID1) {
      message.channel.send(
        `**${author.tag}** you don't have permission to use this!`
      );
      return;
    }

    /**
     * @param {String} statusType - what value to change the bots status
     */
    // in this function we check if the user did input the correct type
    function ifInvalidStatusType(statusType) {
      // all the valid status types
      const types = ["online", "invisible", "dnd", "idle"];

      /* if the statusType value is the same as 
                one of the values in the types array */
      if (types.includes(statusType)) {
        // set the bots status
        client.user.setStatus(statusType);

        channel.send(
          `**${author.tag}** I changed my status to \`${statusType}\`!`
        );
        return;
      }
      // if the user did input a invalid type that we didn't have in our array
      else {
        channel.send(`**${author.tag}** invalid status type!`);
        return;
      }
    }

    // if the user didn't type a second argument
    if (!args[0]) {
      channel
        .send(
          new MessageEmbed()

            .setColor("RANDOM")
            .setDescription(
              "\nPrefix: `-status <status_type>`\t\n\nStatuses to choose between:\n\n:green_circle:`online`\n\n👤`invisible`\n\n🔴`dnd`\n\n:waxing_crescent_moon:`idle`\n\n"
            )
            .addField(
              "Note:",
              "```It can take some extra seconds before\nit changes to your wanted status!```"
            )
            .setFooter(`--|Please write the status types all lowercase|-->`)
            .setTimestamp()
        )
        .catch(err => console.error(err));
      return;
    }
    // if the user typed a second argument
    if (args[0]) {
      ifInvalidStatusType(args[0]);
      return;
    }
  }
  if (command === `hentai`) {
    const kill = [
      "/img/Random_hentai_gif",
      "/img/pussy",
      "/img/nsfw_neko_gif",
      "/img/lewd",
      "/img/les",
      "/img/kuni",
      "/img/cum",
      "/img/classic",
      "/img/boobs",
      "/img/bj",
      "/img/anal",
      "/img/nsfw_avatar",
      "/img/yuri",
      "/img/trap",
      "/img/tits",
      "/img/solog",
      "/img/solo",
      "/img/pwankg",
      "/img/pussy_jpg",
      "/img/lewdkemo",
      "/img/lewdk",
      "/img/keta",
      "/img/hololewd",
      "/img/holoero",
      "/img/hentai",
      "/img/futanari",
      "/img/femdom",
      "/ig/feetg",
      "/img/erofeet",
      "/img/feet",
      "/img/ero",
      "/img/erok",
      "/img/erokemo",
      "/img/eron",
      "/img/eroyuri",
      "/img/cum_jpg",
      "/img/blowjob",
      "/img/spank",
      "/img/gasm"
    ];
    const index = Math.floor(Math.random() * (kill.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).

    const superagent = require("superagent");
    if (!message.channel.nsfw) {
      message.react("💢");
      return message.channel.send({
        embed: {
          color: 16734039,
          description: "You can use this command in an NSFW Channel!"
        }
      });
    }
    superagent
      .get(`https://nekos.life/api/v2${kill[index]}`)
      .end((err, response) => {
        const embed = new MessageEmbed()
          .setTitle(":smirk: Hentai")
          .setImage(response.body.url)
          .setColor(`RANDOM`)
          .setURL(response.body.url);
        message.channel.send(embed);
      });
  }
  if (command === `imdb`) {
    const imdb = require("imdb-api");
    if (!args.length) {
      return message.channel.send("Please give the name of movie or series");
    }

    const imob = new imdb.Client({ apiKey: "5e36f0db" }); //You need to paste you imdb api

    let movie = await imob.get({ name: args.join(" ") });

    let embed = new Discord.MessageEmbed()
      .setColor("#00ff00")
      .setTitle(movie.title)
      .setURL(movie.imdburl)
      .setDescription(movie.plot)
      .setThumbnail(movie.poster)
      .addField("❯ Rate", movie.rating, true)
      .addField("❯ Time", movie.runtime, true)
      .addField("❯ Awards", movie.awards, true)
      .addField("❯ Langueages", movie.languages, true)
      .addField("❯ Genres", movie.genres, true)
      .addField("❯ PG", movie.rated, true)
      .addField("❯ Coutry", movie.country, true)
      .addField("❯ Released", movie.released)
      .setFooter("All information is provided by IMDB");
    message.channel.send(embed);
  }
  if (command === `playstore`) {
    const PlayStore = require("google-play-scraper");
    if (!args[0])
      return message.channel.send(
        `Please Give Something To Search - ${message.author.username}`
      );

    PlayStore.search({
      term: args.join(" "),
      num: 1
    }).then(Data => {
      let App;

      try {
        App = JSON.parse(JSON.stringify(Data[0]));
      } catch (error) {
        return message.channel.send(
          `No Application Found - ${message.author.username}!`
        );
      }

      let Embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(App.icon)
        .setURL(App.url)
        .setTitle(`${App.title}`)
        .setDescription(App.summary)
        .addField(`Price`, App.priceText, true)
        .addField(`Developer`, App.developer, true)
        .addField(`Score`, App.scoreText, true)
        .setFooter(`Requested By ${message.author.username}`)
        .setTimestamp();

      return message.channel.send(Embed);
    });
  }
  if (command === `ship`) {
    let ship = Math.floor(Math.random() * 100) + 1;

    let user = message.mentions.users.first();
    let robber = message.author;

    if (!user) {
      return message.channel.send(
        "Make sure you pick a person who you want to ship!"
      );
    }

    let embed = new Discord.MessageEmbed()
      .setTimestamp(Date.now())
      .setTitle("Hmmmm who is Shipping today?")
      .setDescription(
        `**${robber.username}** & **${user.username}** your match is... ${ship}%`
      )
      .setColor(`RANDOM`);
    message.channel.send(embed).then(m => {
      m.react("❤");
      m.react("💙");
    });
  }
  if (command === `simp`) {
    let ship = Math.floor(Math.random() * 100) + 1;

    let user = message.mentions.users.first() || message.author;

    if (!user) {
      return message.channel.send(
        "Make sure you pick a person who you want to ship!"
      );
    }

    let embed = new Discord.MessageEmbed()
      .setTimestamp(Date.now())
      .setTitle("Hmmmm what is your simp rate at?")
      .setDescription(`**${user.username}** simp rate is... ${ship}%`)
      .setColor(`RANDOM`);
    message.channel.send(embed);
  }
  if (command === `random`) {
    const got = require("got");
    got("https://www.reddit.com/r/interestingasfuck/random.json")
      .then(response => {
        let content = JSON.parse(response.body);
        var title = content[0].data.children[0].data.title;
        var amazeme = content[0].data.children[0].data.url;
        let wow = new Discord.MessageEmbed()
          .setDescription(`**` + title + `**`)
          .setImage(amazeme)
          .setColor("RANDOM");
        message.channel.send(wow);
      })
      .catch(console.error);
  }
  if (command === `ppsize`|| command === `howbig`) {
      if(message.author.id === ownerID1){
              var facts = [
      "8================================================================================================D :sweat_drops:",
      "Broke the scale!",
      "Is over 9 Thousand",
      "[ERROR] Broke the PP Size Machine"
    ];
    var fact = Math.floor(Math.random() * facts.length);
    const embed = new MessageEmbed()
      .setTitle("Penis Generator")
      .setDescription(`${message.author.username} pp size ${facts[fact]}`);

    return message.channel.send(embed);
  }

    var facts = [
      "",
      "=",
      "==",
      "===",
      "====",
      "=====",
      "======",
      "=======",
      "========",
      "=========",
      "==========",
      "===========",
      "============",
      "=============",
      "==============" //little pyramid tho
    ];
    var fact = Math.floor(Math.random() * facts.length);
    let ppuser = message.mentions.users.first() || message.member.user;
    const embed = new MessageEmbed()
      .setTitle("Penis Generator")
      .setDescription(`${ppuser.username} pp size 8${facts[fact]}D`);

    message.channel.send(embed);
  }
  if (command === `reverse`) {
    let text = args.slice(0).join(" ");
    var msg_array = text.split(" ");

    var msg_string = text.split("");

    var reverse_string = "";
    var word;
    var split_word;
    for (var i = msg_string.length - 1; i >= 0; i -= 1) {
      reverse_string += msg_string[i];
    }
    message.channel.send(reverse_string);

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
  if (command === `owoify`) {
    const owo = require("owofy");

    message.channel.send(owo(`Owoified Text: **${args.join(" ")}**`));
  }
  if (command === `changemymind`) {
    let text = args.join(" ");
    if (!text) return message.channel.send("No text is provided.");
    let img = await canvacord.Canvas.changemymind(text);
    let attachment = new MessageAttachment(img, "changemymind.png");
    message.channel.send(attachment);
  }
  if (command === `howgay`) {
      if(message.author.id === ownerID1){
const member = message.author;
    let embed = new Discord.MessageEmbed()
      .setTitle(`${member.tag}'s gayrate`)
      .setDescription(`${member.tag} is 0% gay 🏳️‍🌈 `);
    return message.channel.send(embed);
}
    let result = Math.floor(Math.random() * 100);

    const member = message.mentions.members.last() || message.member;

    let embed = new Discord.MessageEmbed()
      .setTitle(`${member.user.tag}'s gayrate`)
      .setDescription(`${member.user.tag} is ${result}% gay 🏳️‍🌈 `);
    message.channel.send(embed);
  }
  if (command === `end`){
      message.delete()
    if(message.author.id === ownerID1){
    return process.exit();
  }}
  if (command === `rps`){
const rps = ['scissors','rock', 'paper', 'cock'];
const res = ['Scissors :scissors:','Rock :rock:', 'Paper :newspaper:' , 'Cock :eggplant:'];
  let userChoice;
    if (args.length) userChoice = args[0].toLowerCase();
    if (!rps.includes(userChoice)) 
      return message.channel.send('Please enter rock, paper, or scissors');
    userChoice = rps.indexOf(userChoice);
    const botChoice = Math.floor(Math.random()*3);
    let result;
    if (userChoice === botChoice) result = 'It\'s a draw!';
    else if (botChoice > userChoice || botChoice === 0 && userChoice === 2) result = `**${client.user.username}** wins!`;
    else result = `**${message.member.displayName}** wins!`;
    const embed = new MessageEmbed()
      .setTitle(`${message.member.displayName} vs. ${client.user.username}`)
      .addField('Your Choice:', res[userChoice], true)
      .addField(`${client.user.username}\'s Choice`, res[botChoice], true)
      .addField('Result', result, true)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
  if (command === `help`){
let embed = new MessageEmbed()
.setTitle(`Help Commands ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **`)
.setDescription(`Prefix: \`-\``)
.setColor(message.member.displayHexColor || "BLUE")
.setImage("https://media.discordapp.net/attachments/801797385142534155/823620547862200400/Screenshot_2021-03-22_2.13.52_PM.png")
      .addField(`\u200b`, [
        `**❯ -Help Fun**`,
        `**❯ -Help Mod**`,
        `**❯ -Help Other**`,
        `**❯ -Help NSFW**`,
        `**❯ -Help Owner**`
      ])
if(!args[0]) return channel.send(embed);
if(args[0].toLowerCase() === `nsfw`){
    let ac = new MessageEmbed()
.setImage("https://media.discordapp.net/attachments/801797385142534155/823620547862200400/Screenshot_2021-03-22_2.13.52_PM.png")
    .setTitle('NSFW Commands ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **')
    .addField(`** **`, [
      '**Hentai**',
      '**Pornhub**',
      `\u200b`
    ])
    .setTimestamp()
    .setColor(message.member.displayHexColor || "RED")
    .setFooter("NSFW CMDS")
    channel.send(ac)
}
if(args[0].toLowerCase() === `fun`){
    let a = new MessageEmbed()
.setImage("https://media.discordapp.net/attachments/801797385142534155/823620547862200400/Screenshot_2021-03-22_2.13.52_PM.png")
    .setTitle('Fun Commands ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **')
    .addField(`\u200b`, [
    '**Stickbug**',
    '**Flip**',
    '**Hug**',
    '**Kiss**',
    '**8ball**',
    '**Hitler**',
    '**Triggered**',
    '**Imdb**',
    '**Playstore**',
    '**Ship**',
    '**Simp**',
    '**Ppsize**',
    '**Changemymind**',
    '**Howgay**',
    '**Rps**',
    `\u200b`
 ])
     .setTimestamp()
    .setColor(message.member.displayHexColor || "RED")
    .setFooter("Fun CMDS")
    channel.send(a)
}
if(args[0].toLowerCase() === `mod`){
    let b = new MessageEmbed()
.setImage("https://media.discordapp.net/attachments/801797385142534155/823620547862200400/Screenshot_2021-03-22_2.13.52_PM.png")
    .setTitle('Mod Commands ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **')
    .addField(`\u200b`, [
        '**Nuke**',
        '**Ban**',
        '**Unban**',
        '**Kick**',
        '**Lock**',
        '**Unlock**',
        '**Purge**',
        '**Mute**',
        '**Unmute**',
        '**Addrole**',
        '**Takerole**',
        `\u200b`
    ])
        .setTimestamp()
    .setColor(message.member.displayHexColor || "RED")
    .setFooter("Mod CMDS")
    channel.send(b)
}
if(args[0].toLowerCase() === `other`){
    let c = new MessageEmbed()
.setImage("https://media.discordapp.net/attachments/801797385142534155/823620547862200400/Screenshot_2021-03-22_2.13.52_PM.png")
    .setTitle("Other Commands ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **")
    .addField(`\u200b`, [
		'**Remindme**',
        '**Application**',
        '**Whois**',
        '**Sudo**',
        '**Botinfo**',
        '**Ping**',
        '**Docs**',
        '**Invite**',
        '**Avatar**',
        '**Say**',
        '**Weather**',
        '**Serverinfo**',
        '**Youtube**',
        '**Reddit**',
        '**Wiki**',
        '**Urban**',
        '**Date**',
        '**Uptime**',
        '**Random**',
        '**Reverse**',
        '**Owoify**',
        '**Calculate**',
        '**Help**',
        `\u200b`
    ])
    .setTimestamp()
    .setColor(message.member.displayHexColor || "RED")
    .setFooter("Other CMDS")
    channel.send(c)
}
if(args[0].toLowerCase() === `owner`){
if(message.author.id !== `818931391659769867`) return channel.send(`You are not allowed to See this Info!`)
    let d = new MessageEmbed()
.setImage("https://media.discordapp.net/attachments/801797385142534155/823620547862200400/Screenshot_2021-03-22_2.13.52_PM.png")
    .setTitle('Owner Commands ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **')
    .addField(`\u200b`, [
      '**Stat**',
      '**Aadmin**',
      '**Username**',
      '**Bavatar**',
      '**Bstatus**',
      '**Botstuff**',
      '**End**',
      `\u200b`,
       '**WIP Commands**',
       '**clearapp**',
       '**setowner**',
       '**all**',
       `\u200b`
    ])
    .setTimestamp()
    .setColor(message.member.displayHexColor || "RED")
    .setFooter("Owner CMDS")
    channel.send(d)
}}
    if(command === `botstuff`){
if(message.author.id !== `818931391659769867`) return channel.send(`You are not allowed to See this Info!`)
 const z = new Discord.MessageEmbed()
 .setTitle(`${client.user.username} Secret Info`)
 .addField(`** **`, [
        `**→ Tokens ←**`,
        `**❯ This Bot:**`,
     	`ODIxNzkwMjg2MTQ0ODY0MzU2.YFI12A.lGUywI1hUHbxc1OlDe3bbsQITk0`,
        `\u200b`
      ])
 .addField(`\u200b`, [
        `**→ Code Snips ←**`,
        "[Audit Log](https://sourceb.in/FhMckQVTag)",
        "[User Cache](https://sourceb.in/kEzoZvEnBz)",
        "[Set Owner](https://sourceb.in/nr9KkMVn6z)",
        "[Default Code](https://sourceb.in/8urXHdZnL8)",
        "[Copy Of Code](https://sourceb.in/pdFbEj0o5Z)",
        `\u200b`
      ])
  .addField(`\u200b`, [
        `**→ Server Invites ←**`,
        "[Alt Server](https://discord.gg/zC43JsJg4q)",
        "[Private Server](https://discord.gg/PFKavAVRUH)",
        "[𝘝𝘶𝘪𝘵𝘵𝘰𝘯™](https://discord.gg/QMFfvXatHf)",
        "[𝙍𝙖𝙘𝙠𝙨](https://discord.gg/xCKUvc5S66)",
        "[𝘱𝘰𝘱 ✩](https://discord.gg/by2yG6adh3)",
        "[𝘼𝙡𝙩𝙚𝙧𝙣𝙖𝙩𝙞𝙫𝙚™](https://discord.gg/xBszQE7SqR)",
        "[𝔹ℝ𝔸𝕀ℕ𝔻𝔼𝔸𝔻 ☠](https://discord.gg/braindead)",
        "[𝗠𝗘𝗚𝗔 🍑](https://discord.gg/P6KTKABzM4)",
        "[Horny Heaven ☁](https://discord.gg/JarDFkmFe2)",
        "[Unlockd 💦](https://discord.gg/g4yv7CGTww)",
        `\u200b`
      ])
   .addField(`\u200b`, [
        `**→ Coding Server ←**`,
        "[Worn Off Keys](https://discord.gg/fdQ5qt34nX)",
        "[Plexi Dev](https://discord.gg/plexidev)",
        "[Discord JS](https://discord.com/invite/bRCvFy9)",
        "[Danbot Hosting](https://discord.com/invite/92HBc2Z)",
        `\u200b`
       ])
 .setTimestamp()
 .setColor(message.member.displayHexColor || "RED")
 .setFooter("https://panel.danbot.host/auth/login | Press the Reaction below to See Login Info")
 .setImage("https://media.discordapp.net/attachments/820446929212669993/821814381557710948/MXTb0i3.png?width=633&height=395")

        const x = new Discord.MessageEmbed()
         .setTitle(`Email Info`)
        .addField(`\u200b`, [
            '**→ Login Info ←**',
            '**Discord:**',
            '[juanbabysegura1115.jas@gmail.com](https://whyclick.com)',
            '[Juan1990!](https://whyclick.com)',
            `\u200b`,
            '[shawnkeishababy@gmail.com](https://whyclick.com)',
            '[Juan1990!](https://whyclick.com)',
            `\u200b`
        ])
  		.setTimestamp()
 		.setColor(message.member.displayHexColor || "RED")
 		.setFooter("https://panel.danbot.host/auth/login | Press the Reaction Below to See Bot Info")
 .setImage("https://media.discordapp.net/attachments/820446929212669993/821814381557710948/MXTb0i3.png?width=633&height=395")
        let y = new MessageEmbed()
 .setTitle('Site Login Info')
 .addField(`\u200b`, [
     '**→ Roblox ←**',
     '[Devcooi](https://roblox.com/)',
     'Juan1990!(https://roblox.com/)',
     `\u200b`,
     '**→ Mega ←**',
     '[juanbabysegura1115.jas@gmail.com](https://mega.nz/)',
     '[Juan1990!](https://mega.nz/)',
     `\u200b`
 ])
 .setTimestamp()
 .setColor(message.member.displayHexColor || "RED")
 .setFooter("https://panel.danbot.host/auth/login | Press the Reaction Below to See Bot Info")
 .setImage("https://media.discordapp.net/attachments/820446929212669993/821814381557710948/MXTb0i3.png?width=633&height=395")
              const page = [
                z,
                x,
                y
              ]

              const emojiList = ['🙂', '🙃'];

              pagination(message, page, emojiList)
}
});

client.login("ODIxNzkwMjg2MTQ0ODY0MzU2.YFI12A.lGUywI1hUHbxc1OlDe3bbsQITk0")
