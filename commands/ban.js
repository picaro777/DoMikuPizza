module.exports = {
    minArgs: 1,
    requiredPermissions: ["ADMINISTRATOR", "BAN_MEMBERS"],
    syntaxError: "Incorrect syntax, please use -ban <member>",
    description: "ban command",
    category: "admin",
    callback: ({ message }) => {
      const { member, mentions } = message;
      const target = mentions.users.first();
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id);
        targetMember.ban();
        message.channel.send(`<@${member.id}> user has been banned`);
      }
    },
  };