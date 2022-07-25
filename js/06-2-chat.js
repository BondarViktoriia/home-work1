// Напишите скрипт который проверяет возможность открыть чат с пользователем.
// Для этого пользовательм должен быть другом, быть онлайн и с режимом не беспокоить.

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;
console.log("Можно открыть чат?", canOpenChat);