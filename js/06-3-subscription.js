// Написать скрипкт проверки подписки пользователя при доступе к контенту
// Есть три типа подписки: free , pro and vip
// Получить доступ могут только с подпиской pro and vip

const sub = 'pro';

// Если пользователь про или вип тогда есть доступ

const canAccessContent = sub === 'pro' || sub === 'vip';
console.log('Есть доступ к контенту??', canAccessContent);