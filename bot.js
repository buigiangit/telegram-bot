const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

// Token và Group ID
const token = process.env.BOT_TOKEN;
const groupIdFBT = '-1002375447514';

const tokenCDT = process.env.BOT_TOKEN_CDT;
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
`🚀 <b>CHÀO MỪNG ĐẾN VỚI CỘNG ĐỒNG TRADER!</b>\n\n` +
`🎯 <b>Tham gia ngay Nhóm Private - “Tàu Chiến”</b> để cùng học hỏi & nâng cao tư duy giao dịch tài sản số:\n\n` +
`🔹 <b>View thị trường mỗi ngày</b> — Giúp bạn cập nhật thông tin và phản ứng chủ động trước biến động giá.\n\n` +
`🔹 <b>Chiến lược phân tích kỹ thuật</b> — Cung cấp các kịch bản giao dịch minh hoạ, có TP/SL tham khảo.\n\n` +
`🔹 <b>Thảo luận chuyên sâu 1-1</b> — Cùng đội ngũ có kinh nghiệm thực chiến chia sẻ về phân tích kỹ thuật và quản lý rủi ro.\n\n` +
`🔥 <b>Chúng tôi không đưa ra lời khuyên đầu tư</b> — Mọi chia sẻ mang tính giáo dục & phân tích để bạn tự đưa ra quyết định!\n\n` +
`🔑 <b>Cách tham gia:</b>\n` +
`🔸 Bước 1: Tạo tài khoản BingX tại <a href="https://bingx.com/invite/CongDongTrader">👉 LINK ĐĂNG KÝ</a>\n` +
`🔸 Bước 2: Gửi UID cho admin để được xét duyệt vào nhóm.\n\n` +
`🎁 <i>Ưu tiên hỗ trợ & tặng tài liệu hướng dẫn phân tích kỹ thuật cho thành viên đăng ký qua link!</i>\n\n` +
`💬 <b>Đừng đi trade một mình — Hãy để chúng tôi đồng hành cùng bạn!</b>\n\n` +
`⚠️ <i>Nhóm này không cung cấp dịch vụ đầu tư, không cam kết lợi nhuận và không đại diện cho bất kỳ tổ chức tài chính nào. Mọi nội dung chia sẻ chỉ mang tính chất tham khảo. Người tham gia tự chịu trách nhiệm với các quyết định của mình.</i>\n\n` +
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
`🚀 <b>CHÀO MỪNG ĐẾN VỚI FUTURE BOSS TRADING!</b>\n\n` +
`🎯 <b>Tham gia ngay Nhóm Private - “Chiến Hạm”</b> để cùng học hỏi & nâng cao tư duy giao dịch tài sản số:\n\n` +
`🔹 <b>View thị trường mỗi ngày</b> — Giúp bạn cập nhật thông tin và phản ứng chủ động trước biến động giá.\n\n` +
`🔹 <b>Chiến lược phân tích kỹ thuật</b> — Cung cấp các kịch bản giao dịch minh hoạ, có TP/SL tham khảo.\n\n` +
`🔹 <b>Thảo luận chuyên sâu 1-1</b> — Cùng đội ngũ có kinh nghiệm thực chiến chia sẻ về phân tích kỹ thuật và quản lý rủi ro.\n\n` +
`🔥 <b>Chúng tôi không đưa ra lời khuyên đầu tư</b> — Mọi chia sẻ mang tính giáo dục & phân tích để bạn tự đưa ra quyết định!\n\n` +
`🔑 <b>Cách tham gia:</b>\n` +
`🔸 Bước 1: Tạo tài khoản BingX tại <a href="https://bingx.com/invite/CongDongTrader">👉 LINK ĐĂNG KÝ</a>\n` +
`🔸 Bước 2: Gửi UID cho admin để được xét duyệt vào nhóm.\n\n` +
`🎁 <i>Ưu tiên hỗ trợ & tặng tài liệu hướng dẫn phân tích kỹ thuật cho thành viên đăng ký qua link!</i>\n\n` +
`💬 <b>Đừng đi trade một mình — Hãy để chúng tôi đồng hành cùng bạn!</b>\n\n` +
`⚠️ <i>Nhóm này không cung cấp dịch vụ đầu tư, không cam kết lợi nhuận và không đại diện cho bất kỳ tổ chức tài chính nào. Mọi nội dung chia sẻ chỉ mang tính chất tham khảo. Người tham gia tự chịu trách nhiệm với các quyết định của mình.</i>\n\n` +
`<b><i>— FBT Teams</i></b>`;

  const message = await botFBT.sendMessage(groupIdFBT, text, {
    parse_mode: 'HTML',
    disable_web_page_preview: true
  });

  sentMessageIds_CDT.push(message.message_id);
}

// Lên lịch gửi tin nhắn mỗi giờ (ví dụ: '0 * * * *' = đầu mỗi giờ)
cron.schedule('* * * * *', () => {
  deleteAllBotMessages_CDT();
  sendMessage_CDT();
  deleteAllBotMessages();
  sendMessage_FBT();
  console.log('Tin nhắn đã được gửi vào các nhóm!');
});

console.log('Bot đang chạy...');
