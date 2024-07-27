const TelegramBot = require('node-telegram-bot-api')
const token = '6060359502:AAHglU9CyZitphh2N_Lw76VNZI4cFTAHTuc'
const bot = new TelegramBot(token, { polling: true })

const userList = [
  {
    id: 431418459,
    name: 'Юлия Таирова',
    username: '@juliya_tairova',
  },
  {
    id: 257640114,
    name: 'Tirthadeva (Timur Tairov)',
    username: '@tirthadeva',
  },
]

const ShaktiMaTgBot = () => {
  bot.on('message', async (msg) => {
    const chatId = msg.chat.id
    const text = msg.text

    if (text === '/send') {
      await bot.sendMessage(chatId, 'Введите текст рассылки')
      userList.forEach((item) =>
        bot.on('message', async (msg) => {
          const textSend = msg.text
          await bot.sendMessage(item.id, textSend)
        })
      )
    }
  })

  return <div>TelegramBot</div>
}

export default ShaktiMaTgBot
