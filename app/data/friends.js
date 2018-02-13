/*
------------------------
List of Mario Characters
------------------------
CHARACTER     SCORES
------------------------
Question  |   1 2 3 4 5 6 7 8 9 10
----------------------------------
Mario     |   3 2 1 5 5 1 3 1 1 1
Luigi     |   3 3 4 5 5 1 3 4 4 1
Wario     |   2 1 5 2 4 5 1 3 1 4
Waluigi   |   2 1 3 3 4 5 2 2 4 5
Bowser    |   5 1 5 1 1 5 4 5 1 3
Yoshi     |   4 3 2 4 1 1 3 1 5 2
Peach     |   3 5 5 5 3 1 5 5 3 1
Toad      |   2 4 4 4 1 1 4 5 4 4
Birdo     |   1 3 2 1 1 3 5 1 2 3
Teresa    |   1 2 4 3 2 3 2 1 3 2
----------------------------------

----------------------------------------------------------
List of Questions
----------------------------------------------------------
   1           2          3        4         5
Strongly    Disagree    Neutral   Agree    Strongly
Disagree                                   Agree
----------------------------------------------------------
1)  I prefer hot climates to cold ones
2)  I often find myself in situations I can't get out of
3)  I feel most at home in a castle
4)  I often play sports with people I call my friends
5)  I come from Italy, probably
6)  If there's a scheme, I'm in on it
7)  I consider myself high-class and fancy
8)  I am talkative with a lot to say
9)  I'd rather play a supportive role than lead the way
10) Waaaaaaaaaah!
----------------------------------------------------------
*/

const friends = [
  {
    name: "Mario",
    photo: "https://www.mariowiki.com/images/thumb/a/aa/Mario_MP100.png/200px-Mario_MP100.png",
    scores: [3, 2, 1, 5, 5, 1, 3, 1, 1, 1],
    description: "Mario is the main character and protagonist of the long-running and highly successful Mario franchise. His trademark abilities are his jumping and stomping powers, with which he defeats most of his enemies; and his ability to gain powers with a plethora of items, such as the Super Mushroom, Fire Flower and the Super Star. Mario is a silent character without a distinct personality. Most of the time, he is the hero that goes on an adventure to save Princess Peach from Bowser, but he has been shown doing many other activities besides adventuring, such as racing and sporting with his younger twin brother and others."
  },
  {
    name: "Luigi",
    photo: "https://www.mariowiki.com/images/thumb/5/5c/Luigi_MP10.png/225px-Luigi_MP10.png",
    scores: [3, 3, 4, 5, 5, 1, 3, 4, 4, 1], 
    description: "Luigi is Mario's younger, taller twin brother and is a major protagonist of the Mario franchise, being second only to Mario. Throughout his life, he has lived in Mario's shadow, developing both cowardly and heroic tendencies. Despite this, Luigi has helped and fought alongside his brother on many occasions. Originally an exact copy, then palette swap of Mario, Luigi was created to facilitate a second player option. Since the two-player mode was dropped from most main Super Mario games beginning with Super Mario Land, Luigi has gained his own identity and personality."
  },
  {
    name: "Wario",
    photo: "https://www.mariowiki.com/images/thumb/3/3c/Wario_MP100.png/375px-Wario_MP100.png",
    scores: [2, 1, 5, 2, 4, 5, 1, 3, 1, 4],
    description: "Wario is a recurring character in the Mario franchise. He is an obese, muscular, hot-tempered, and greedy man, and Mario's yellow-and-purple clad arch-rival. He usually appears as an anti-hero, or in some cases an antagonist. His name is a combination of Mario's name and the Japanese word warui (悪い), meaning \"bad\". Wario's greed pushes him to commit malevolent acts, such as the seizing of Mario's castle. Wario has also proven to be very cunning as he has tricked Mario on many occasions. He often goes out on his own adventures, from stealing treasure to running a microgame making company. Wario has helped heroes of the Mushroom Kingdom on a few separate occasions as well."
  },
  {
    name: "Waluigi",
    photo: "https://www.mariowiki.com/images/thumb/4/4c/Waluigi_MP10.png/150px-Waluigi_MP10.png",
    scores: [2, 1, 3, 3, 4, 5, 2, 2, 4, 5],
    description: "Waluigi (Japanese: ワルイージ, Waruīji) is Luigi's very tall and skinny rival, and Wario's partner. Waluigi made his debut in Mario Tennis, and since then, he has made playable appearances exclusively in Mario franchise's spin-off titles. His name is a portmanteau of the Japanese words, Warui and Ruīji, meaning \"bad\" and \"Luigi\". In addition, his name is an anagram to the Japanese word Ijiwaru, which can mean \"ill-tempered\" or \"cruel\"."
  },
  {
    name: "Bowser",
    photo:"https://www.mariowiki.com/images/thumb/7/7e/Bowser_-_Mario_Party_10.png/375px-Bowser_-_Mario_Party_10.png",
    scores: [5, 1, 5, 1, 1, 5, 4, 5, 1, 3],
    description: "Bowser, sometimes known as King Koopa (Japanese: 大魔王クッパ, Daimaō Kuppa, which translates into \"Great Demon King Koopa\" or \"Great Sorcerer King Koopa\"), is a major character and the main antagonist of Nintendo's Mario franchise. He is the leader and most powerful of the Koopas, an evil-driven race of turtle-like creatures, and has been the archenemy of Mario, and to a small extent, Luigi, ever since his debut in Super Mario Bros. He has repeatedly kidnapped or attempted to kidnap Princess Peach with the ultimate goal of defeating Mario and taking over the Mushroom Kingdom, though he has also attempted to conquer various other realms and even the entire universe. Despite his villainous nature, he has occasionally helped Mario and other heroes against common threats and participates with them in their numerous sporting events in spin-off games."
  },
  {
    name: "Yoshi",
    photo: "https://www.mariowiki.com/images/thumb/4/4d/Yoshi_-_Mario_Party_10.png/150px-Yoshi_-_Mario_Party_10.png",
    scores: [4, 3, 2, 4, 1, 1, 3, 1, 5, 2],
    description: "Yoshi is one of the heroes of the Mario franchise, an ally of Mario and Luigi, and the protagonist of his own franchise. He is a member of the Yoshi species and has aided his brethren in saving their homeland on multiple occasions. He got his name from Yoshi's Island because he was first discovered there. In his youth, Yoshi managed to rescue and protect Baby Mario and Baby Luigi from the wrath of Kamek and the Koopa Troop. Yoshi is one of the few members of his species who can speak the language of the other characters, though it seems that this is not his first language, since, as in other games, his statements are translated through parentheses. In the Mario franchise, he is a major character and often acts as a steed for Mario and other protagonists, while in most of the Mario sports and party games, he is a playable character on his own."
  },
  {
    name: "Peach",
    photo: "https://www.mariowiki.com/images/thumb/8/83/Peach_MP100.png/180px-Peach_MP100.png",
    scores: [3, 5, 5, 5, 3, 1, 5, 5, 3, 1], 
    description: "Princess Peach (casually Peach, formerly Princess Toadstool outside of Japan) is a main character in the Mario franchise, and the princess of Mushroom Kingdom. She resides in her castle along with many Toads, who act as her loyal servants. Her kingdom is often attacked by the Koopa Troop, a group led by Bowser. Peach has an affinity for the color pink, which accents her gentle personality and kind temperament. Peach's gentle nature and role as the damsel are often represented with her heart abilities and princess emblems. Peach's initial design was said to represent her stubborn, yet cute, appearance."
  },
  {
    name: "Toad",
    photo: "https://www.mariowiki.com/images/thumb/d/db/SMR_Toad.png/170px-SMR_Toad.png",
    scores: [2, 4, 4, 4, 1, 1, 4, 5, 4, 4],
    description: "Toad is a character who is Princess Peach's attendant and a long time protector of the Mushroom Kingdom. He is actually a singular character among an entire species of look-alikes (much like Yoshi is to the Yoshi species), leading to confusion over some of his appearances, even with his unique color palette of having a red-spotted mushroom head and a blue vest. He usually has the role of a supporting character who tries to help Mario and Luigi on their adventures, although he occasionally has been a main protagonist. He also appears regularly as a playable character in the Mario spin-offs. His role as Peach's steward has sometimes instead been given to Toadsworth."
  },
  {
    name: "Catherine",
    photo: "https://www.mariowiki.com/images/thumb/a/a2/Birdo_MP9.png/255px-Birdo_MP9.png",
    scores: [1, 3, 2, 1, 1, 3, 5, 1, 2, 3],
    description: "Catherine, known outside of Japan as Birdo, is a recurring character in the Mario franchise. Her first appearance was as an enemy in Yume Kōjō: Doki Doki Panic, which was rebranded as Super Mario Bros. 2. Since then, she has appeared in various spin-off series of the franchise, and her original role as an antagonist has gradually been scrapped in favor of a newer role as an ally. Catherine is frequently depicted as a transgender or non-binary character."
  },
  {
    name: "Teresa",
    photo: "https://www.mariowiki.com/images/thumb/a/a1/Boo_CTTT.png/200px-Boo_CTTT.png",
    scores: [1, 2, 4, 3, 2, 3, 2, 1, 3, 2],
    description: "Teresa (known as Boo outside of Japan) is a common ghost enemy in the Mario franchise that first appears in Super Mario Bros. 3. They are a type of white spherical ghost with menacing and normally open mouths. They are known for their large tongues and small \"arms\" of some sort. However, the most distinctive characteristic of the Boos is their shy personality, where they cover their faces when someone looks them directly at the face. They will uncover their faces once the subject turns around."
  }
];

module.exports = friends;
