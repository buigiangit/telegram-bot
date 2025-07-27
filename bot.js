const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

// Token và Group ID
const token = '7679136937:AAEnrOWJ7G0ngrcUG8F-QRf8K1k0GYxiB9s';
const groupIdFBT = '-1002375447514';

const tokenCDT = '7831387437:AAFVyNBDUXutd8Np_vVVBTMnAxdByFc-cs0';
const groupIdCDT = '-1002286588708';

// Tạo bot không dùng polling
const botFBT = new TelegramBot(token);
const botCDT = new TelegramBot(tokenCDT);

let sentMessageIds_CDT = [];
let sentMessageIds = [];

// Xóa tin nhắn CDT
async function deleteAllBotMessages_CDT() {
  try {
    for (const messageId of sentMessageIds_CDT) {
      await botCDT.deleteMessage(groupIdCDT, messageId);
      console.log(`Đã xóa tin nhắn CDT ID: ${messageId}`);
    }
    sentMessageIds_CDT = [];
  } catch (err) {
    console.error('Lỗi xóa tin CDT:', err);
  }
}

// Gửi tin CDT
async function sendMessage_CDT() {
  const text = 
    `<b>🚀 CHÀO MỪNG ĐẾN VỚI CỘNG ĐỒNG TRADER !</b>\n\n` +

    `🎯 <b>Tham gia ngay Nhóm Private - "Tàu Chiến"</b> để nâng cấp tư duy & chiến lược đầu tư:\n\n` +

    `🔹 <b> View thị trường mỗi ngày</b> — Giúp bạn luôn đi trước xu hướng!\n\n` +
    `🔹 <b> Lệnh trade chất lượng</b> — Market / Limit kèm TP, SL rõ ràng, cập nhật liên tục.\n\n` +
    `🔹 <b> Mentoring trực tiếp</b> — Tư duy giao dịch, kỹ năng phân tích kỹ thuật từ đội ngũ có kinh nghiệm thực chiến.\n\n` +

    `🔥 <b>Chúng tôi không chỉ đưa lệnh — chúng tôi giúp bạn hiểu thị trường!</b>\n\n` +

    `🔑 <b>Cách tham gia cực đơn giản:</b>\n\n` +
    `🔹 <b>Bước 1:</b> Đăng ký tài khoản BingX tại <a href="https://bingx.com/invite/CongDongTrader">👉 LINK ĐĂNG KÝ</a>\n\n` +
    `🔹 <b>Bước 2:</b> Nạp tối thiểu 50 USDT, sau đó gửi UID cho @huachu87 để được xác nhận vào nhóm.\n\n` +

    `🎁 <i>Ưu tiên hỗ trợ & tặng kèm tài liệu chiến lược cho thành viên đăng ký qua link!</i>\n\n` +

    `💬 <b>Đừng đi trade một mình — Hãy để chúng tôi đồng hành cùng bạn!</b>\n\n` +
    `<b><i>— CDT Teams</i></b>`;

  const message = await botCDT.sendMessage(groupIdCDT, text, {
    parse_mode: 'HTML',
    disable_web_page_preview: true
  });

  sentMessageIds_CDT.push(message.message_id);
}

// Xóa tin nhắn FBT
async function deleteAllBotMessages() {
  try {
    for (const messageId of sentMessageIds) {
      await bot.deleteMessage(groupIdFBT, messageId);
      console.log(`Đã xóa tin nhắn FBT ID: ${messageId}`);
    }
    sentMessageIds = [];
  } catch (err) {
    console.error('Lỗi xóa tin FBT:', err);
  }
}

// Gửi tin FBT
async function sendMessage_FBT() {
  const text = 
    `<b>🚀 CHÀO MỪNG ĐẾN VỚI FUTURE BOSS TRADING !</b>\n\n` +

    `🎯 <b>Tham gia ngay Nhóm Private - "Chiến Hạm"</b> để nâng cấp tư duy & chiến lược đầu tư:\n\n` +

    `🔹 <b> View thị trường mỗi ngày</b> — Giúp bạn luôn đi trước xu hướng!\n\n` +
    `🔹 <b> Lệnh trade chất lượng</b> — Market / Limit kèm TP, SL rõ ràng, cập nhật liên tục.\n\n` +
    `🔹 <b> Mentoring trực tiếp</b> — Tư duy giao dịch, kỹ năng phân tích kỹ thuật từ đội ngũ có kinh nghiệm thực chiến.\n\n` +

    `🔥 <b>Chúng tôi không chỉ đưa lệnh — chúng tôi giúp bạn hiểu thị trường!</b>\n\n` +

    `🔑 <b>Cách tham gia cực đơn giản:</b>\n\n` +
    `🔹 <b>Bước 1:</b> Đăng ký tài khoản BingX tại <a href="https://bingx.com/invite/FutureBossTrading">👉 Link đăng ký</a>\n\n` +
    `🔹 <b>Bước 2:</b> Nạp tối thiểu 100 USDT, sau đó gửi UID cho @quachgiaFBT để được xác nhận vào nhóm.\n\n` +

    `🎁 <i>Ưu tiên hỗ trợ & tặng kèm tài liệu chiến lược cho thành viên đăng ký qua link!</i>\n\n` +

    `💬 <b>Đừng đi trade một mình — Hãy để chúng tôi đồng hành cùng bạn!</b>\n\n` +
    `<b><i>— FutureBossTrading</i></b>`;

  const message = await botFBT.sendMessage(groupIdFBT, text, {
    parse_mode: 'HTML',
    disable_web_page_preview: true
  });

  sentMessageIds_CDT.push(message.message_id);
}

// Lên lịch gửi tin nhắn mỗi giờ (ví dụ: '0 * * * *' = đầu mỗi giờ)
cron.schedule('0 6,12,23 * * *', () => {
  deleteAllBotMessages_CDT();
  sendMessage_CDT();
  deleteAllBotMessages();
  sendMessage_FBT();
  console.log('Tin nhắn đã được gửi vào các nhóm!');
});

console.log('Bot đang chạy...');
