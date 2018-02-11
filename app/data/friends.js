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
    scores: [3, 2, 1, 5, 5, 1, 3, 1, 1, 1]
  },
  {
    name: "Luigi",
    photo: "https://www.mariowiki.com/images/thumb/5/5c/Luigi_MP10.png/225px-Luigi_MP10.png",
    scores: [3, 3, 4, 5, 5, 1, 3, 4, 4, 1]
  },
  {
    name: "Wario",
    photo: "https://www.mariowiki.com/images/thumb/3/3c/Wario_MP100.png/375px-Wario_MP100.png",
    scores: [2, 1, 5, 2, 4, 5, 1, 3, 1, 4]
  },
  {
    name: "Waluigi",
    photo: "https://www.mariowiki.com/images/thumb/4/4c/Waluigi_MP10.png/150px-Waluigi_MP10.png",
    scores: [2, 1, 3, 3, 4, 5, 2, 2, 4, 5]
  },
  {
    name: "Bowser/King Koopa",
    photo:"https://www.mariowiki.com/images/thumb/7/7e/Bowser_-_Mario_Party_10.png/375px-Bowser_-_Mario_Party_10.png",
    scores: [5, 1, 5, 1, 1, 5, 4, 5, 1, 3]
  },
  {
    name: "Yoshi",
    photo: "https://www.mariowiki.com/images/thumb/4/4d/Yoshi_-_Mario_Party_10.png/150px-Yoshi_-_Mario_Party_10.png",
    scores: [4, 3, 2, 4, 1, 1, 3, 1, 5, 2]
  },
  {
    name: "Princess Peach/Princess Toadstool",
    photo: "https://www.mariowiki.com/images/thumb/8/83/Peach_MP100.png/180px-Peach_MP100.png",
    scores: [3, 5, 5, 5, 3, 1, 5, 5, 3, 1]
  },
  {
    name: "Toad",
    photo: "https://www.mariowiki.com/images/thumb/d/db/SMR_Toad.png/170px-SMR_Toad.png",
    scores: [2, 4, 4, 4, 1, 1, 4, 5, 4, 4]
  },
  {
    name: "Birdo/Catherine",
    photo: "https://www.mariowiki.com/images/thumb/a/a2/Birdo_MP9.png/255px-Birdo_MP9.png",
    scores: [1, 3, 2, 1, 1, 3, 5, 1, 2, 3]
  },
  {
    name: "Boo/Teresa",
    photo: "https://www.mariowiki.com/images/thumb/a/a1/Boo_CTTT.png/200px-Boo_CTTT.png",
    scores: [1, 2, 4, 3, 2, 3, 2, 1, 3, 2]
  }
];

module.exports = friends;
