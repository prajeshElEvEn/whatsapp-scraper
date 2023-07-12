const express = require('express');
const dotenv = require('dotenv');
const logger = require('node-color-log');
const connectToDatabase = require('./config/db');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const Group = require('./models/groupModel');

dotenv.config()
connectToDatabase();
const app = express();
const port = process.env.PORT || 3000;

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

const getChats = async () => {
    const chats = await client.getChats()
    // console.log(JSON.stringify(chats[0]));
    return chats.filter((chat) => chat.isGroup)
}

const uploadChats = async () => {
    const chats = await getChats()
    chats.map(async (chat) => {
        const checkGroupExists = await Group.find({
            groupId: chat.id._serialized
        })
        // console.log(checkGroupExists);
        if (checkGroupExists.length > 0) {
            logger.warn('Already exists')
        } else {
            const group = new Group({
                groupId: chat.id._serialized,
                groupName: chat.name,
                groupDescription: chat.groupMetadata.desc,
                groupParticipants: chat.groupMetadata.participants
            })
            await group.save()
                .then(() => {
                    logger.success(`Group ${chat.name} saved`)
                })
                .catch((err) => {
                    logger.error(`Group ${chat.name} not saved`)
                })
        }
    })
}

const updateChats = async (notification) => {
    const chats = await getChats()
    const group = await Group.findOne({
        groupId: notification.id.remote
    })
    // console.log(group);
    const chat = chats.filter((e) => {
        if (e.id._serialized == notification.id.remote)
            return e;
    })
    // console.log(chat[0]);
    group.groupParticipants = chat[0].groupMetadata.participants
    await group.save()
}

client.on(`group_join`, async (notification) => {
    updateChats(notification)
})

client.on('group_leave', async (notification) => {
    updateChats(notification)
})

client.on('ready', () => {
    logger.success(`Whatsapp is ready`)
    uploadChats()
});

client.initialize();


app.listen(port, () => {
    logger.success(`Server running on ${port}`)
})
