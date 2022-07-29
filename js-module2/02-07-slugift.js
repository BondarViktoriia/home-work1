const slugify = function (string) {
//   const normalizedTitle = string.toLowerCase();
//   const words = normalizedTitle.split(' ');
//   const slug = words.join('-');

//   return slug;
      return string.toLowerCase().split(" ").join('-');
};

console.log(slugify('Top 10 benefits of React framework'));
console.log(slugify('Azure Static Web Apps are Awesome'));
console.log(slugify('Technical writting tips for non-native English speakers'));
