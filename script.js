function generateRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

const witcherBestiary = {
  creatureTypes: ['griffin', 'wyvern', 'nekkar', 'siren'],
  dangerLevels: ['low', 'moderate', 'high', 'deadly', 'legendary'],
  recommendations: ['prepare silver sword', 'study weaknesses', 'use potions wisely', 'seek professional help']
};

function generateRandomWisdom(bestiary) {
  const wisdom = [];

  for (let prop in bestiary) {
      let optionIdx = generateRandomNumber(bestiary[prop].length);
      let message = '';

      switch (prop) {
          case 'creatureTypes':
              message = `Beware the ${bestiary[prop][optionIdx]} in your path.`;
              break;
          case 'dangerLevels':
              message = `This creature poses a ${bestiary[prop][optionIdx]} threat.`;
              break;
          case 'recommendations':
              message = `Witcher's advice: ${bestiary[prop][optionIdx]}.`;
              break;
          case 'unknownProp':
              message = 'Insufficient knowledge in the bestiary.';
              break;
      }

      wisdom.push(message);
  }

  return wisdom;
}

function formatWisdom(wisdom) {
  const formatted = wisdom.join('\n');
  console.log(formatted);
}

const witcherWisdom = generateRandomWisdom(witcherBestiary);
formatWisdom(witcherWisdom);

