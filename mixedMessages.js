const sunSign = [["Energizer Bunny", "Aries"],
                ["Couch Potato", "Taurus"],
                ["Gossip Queen", "Gemini"],
                ["Grandma", "Cancer"],
                ["Influencer", "Leo"],
                ["Perfectionist", "Virgo"],
                ["Socialite", "Libra"],
                ["Human Lie Detector", "Scorpio"],
                ["Daredevil", "Sagittarius"],
                ["Hall Monitor", "Capricorn"],
                ["Night Owl", "Aquarius"],
                ["Fortune Teller", "Pisces"]
                ];

const moonSign = [["Bratty", "Aries"],
                ["Stubborn", "Taurus"],
                ["Scatter-brained", "Gemini"],
                ["Moody", "Cancer"],
                ["Dramatic", "Leo"],
                ["Type-A", "Virgo"],
                ["Objective", "Libra"],
                ["Suspicious", "Scorpio"],
                ["Claustrophobic", "Sagittarius"],
                ["Sarcastic", "Capricorn"],
                ["Emotionally Detatched", "Aquarius"],
                ["Spaced Out", "Pisces"]
                ];

const risingSign = [["Free-spirited", "Aries"],
                ["Polished", "Taurus"],
                ["Chatty", "Gemini"],
                ["Nurturing", "Cancer"],
                ["Creative", "Leo"],
                ["Punctual", "Virgo"],
                ["Thoughtful", "Libra"],
                ["Mysterious", "Scorpio"],
                ["Cultured", "Sagittarius"],
                ["Responsible", "Capicorn"],
                ["Unique", "Aquarius"],
                ["Idealistic", "Pisces"]
                ];

const generateAbom = () => {
    ranSun = sunSign[Math.floor(Math.random() * sunSign.length)];
    ranMoon = moonSign[Math.floor(Math.random() * moonSign.length)];
    ranRising = risingSign[Math.floor(Math.random() * risingSign.length)];

    
    combSun = ranSun[1].substring(0, ranSun[1].length / 3);
    combMoon = ranMoon[1].substring((ranMoon[1].length / 3), (ranMoon[1].length / 3) * 2);
    combRising = ranRising[1].substring((ranRising[1].length / 3) * 2, ranRising[1].length);

    
    
    console.log(`Your Sun sign characteristic is: ${ranSun[0]} \n Your Moon sign characteristic is: ${ranMoon[0]} \n Your Rising sign characteristic is: ${ranRising[0]} \n \n These combined would make your star sign abomination a: ${combSun}${combMoon}${combRising}.`);
};

generateAbom();