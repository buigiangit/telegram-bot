const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

const token = '7679136937:AAEnrOWJ7G0ngrcUG8F-QRf8K1k0GYxiB9s';  // API_TOKEN bằng token của bot
const groupChatId = '-1002375447514';  // Id của group chat

//**************Bot cong dong trader********************** */
const tokenCDT = '7831387437:AAFVyNBDUXutd8Np_vVVBTMnAxdByFc-cs0';  // API_TOKEN bằng token của bot CDT
const groupCDT = '-1002286588708';  // Id của group chat CDT sử dụng bot groupinfobot để lấy


const bot = new TelegramBot(token, { polling: true });
const botCDT = new TelegramBot(tokenCDT, { polling: true });
let sentMessageIds_CDT = [];

//Xóa tất cả tin nhắn từ bot
async function deleteAllBotMessages_CDT() {
  try {
    for (const messageId of sentMessageIds_CDT) {
      await bot.deleteMessage(groupCDT, messageId);
      console.log(`Đã xóa tin nhắn ID: ${messageId}`);
    }
    // Xóa danh sách sau khi hoàn thành
    sentMessageIds_CDT = [];
  } catch (err) {
    console.error('Lỗi khi xóa tin nhắn:', err);
  }
}
async function sendMessage_CDT() {
  const message = await botCDT.sendMessage(groupCDT,
    `✨ Chào mừng các bạn đến với Cộng Đồng Trader.

    ✅ Channel : https://t.me/congdongtraderchanel.


🔥 Khi tham gia Nhóm Private - Tàu Chiến, bạn sẽ được nhận:

    1️⃣ View nhận định thị trường liên tục hàng ngày.

    2️⃣ Nhiều lệnh Trade tỉa market, limit với TP,STL rõ ràng, lệnh tỉa liên tục

    3️⃣ Được hướng dẫn các PTKT cơ bản, nâng cao về thị trường, được chia sẻ kiến thức, kỹ năng và trải nghiệm khi trade.

🔥 Cách tham gia:

    1️⃣ Bước 1: Đăng kí Tài Khoản BingX theo  Link đăng ký: https://bingx.com/invite/CongDongTrader.

    2️⃣ Bước 2 : Sau khi tạo xong tài khoản và nạp tiền vào tài khoản BingX của các bạn để trade, nhắn số UID cho @huachu87 check.
    
💰 Chúc các bạn trade kỷ luật và xx tài khoản.

    `);

    sentMessageIds_CDT.push(message.message_id);
}
//******************************************************* */
// Lên lịch gửi tin nhắn
cron.schedule('0 * * * *', () => { //0 */8 * * * 

  deleteAllBotMessages_CDT();
  sendMessage_CDT()

  console.log('Tin nhắn đã được gửi ', groupCDT);

});

//**********************Group FBT*************************************************************** */

let sentMessageIds = [];

//Xóa tất cả tin nhắn từ bot
async function deleteAllBotMessages() {
  try {
    for (const messageId of sentMessageIds) {
      await bot.deleteMessage(groupChatId, messageId);
      console.log(`Đã xóa tin nhắn ID: ${messageId}`);
    }
    // Xóa danh sách sau khi hoàn thành
    sentMessageIds = [];
  } catch (err) {
    console.error('Lỗi khi xóa tin nhắn:', err);
  }
}

// Hàm gửi tin nhắn vào nhóm
async function sendMessage() {
  const message = await bot.sendMessage(groupChatId,
    `✨ Chào mừng các bạn đến với Future Boss Trading.

    ✅ Channel : https://t.me/FutureBossTrading.

    ✅ Facebook: https://www.facebook.com/share/g/15kmxtr5HZ/?mibextid=wwXIfr.

🔥 Khi tham gia Nhóm Private - Chiến Hạm, bạn sẽ được nhận:

    1️⃣ View nhận định thị trường liên tục hàng ngày.

    2️⃣ Nhiều lệnh Trade tỉa market, limit với TP,STL rõ ràng, lệnh tỉa liên tục

    3️⃣ Được hướng dẫn các PTKT cơ bản, nâng cao về thị trường, được chia sẻ kiến thức, kỹ năng và trải nghiệm khi trade.

🔥 Cách tham gia:

    1️⃣ Bước 1: Đăng kí Tài Khoản BingX theo  Link đăng ký: https://bingx.com/invite/FutureBossTrading.

    2️⃣ Bước 2 : Sau khi tạo xong tài khoản và nạp tối thiểu 100 USDT vào tài khoản BingX của các bạn để trade, nhắn số UID cho @quachgiaFBT hoặc @jptodahmoon check.
    
💰 Chúc các bạn trade kỷ luật và xx tài khoản.

    `);

  sentMessageIds.push(message.message_id);
}

// Lên lịch gửi tin nhắn
cron.schedule('0 * * * *', () => { //0 */8 * * * 

  deleteAllBotMessages();
  sendMessage()

  console.log('Tin nhắn đã được gửi ', groupVipChatId);

});

const chatId =''
// Lắng nghe lệnh /start từ người dùng
bot.onText(/\/start/, (msg) => {
  chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Bot đã sẵn sàng để gửi tin nhắn!')
});

console.log('Bot đang chạy...');
