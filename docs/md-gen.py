import json

input_path = "authors.json"
output_path = "../_profiles/"

authors = {
  "harrison_liddiard": {
    "name": "Harrison Liddiard",
    "title": "Chief Data Nerd Emeritus",
    "bio": "Harrison was the 2015–2016 data editor at the Daily Bruin. He studied linguistics and computer science at UCLA and has interned as a CMS developer at The New York Times. When he's not data-nerding, he enjoys casual Web-apping, design, scuba diving, pretending he's good at musical instruments and planning retreats.",
    "mug": "Yes",
    "twitter": "HLiddiard",
    "email": "hliddiard@media.ucla.edu",
    "github": "liddiard",
    "website": "https://harrisonliddiard.com"
  },
  "neil_bedi": {
    "name": "Neil Bedi",
    "title": "Beditor in Chief",
    "bio": "Neil is the creator of The Stack and was the data editor in 2014-2015. He was also a Daily Bruin Photo editor and a member of the Editorial Board. He currently works as an analyst at JPMorgan. He loves journalism, creating data visualizations, [reminding people of their own mortality](https://chrome.google.com/webstore/detail/motivation/kcngcjbgnnhcdgnaonkmjheanflddmpo) and a good beard.",
    "mug": "Yes",
    "email": "nbedi@media.ucla.edu",
    "twitter": "_neilbedi",
    "github": "nbedi",
    "website": "http://neilbedi.com"
  },
  "katie_shepherd": {
    "name": "Katie Shepherd",
    "title": "Data Reporter Extraordinare",
    "bio": "Katie was a reporter, editor and developer for the Daily Bruin, serving as an assistant News editor and an assistant Opinion editor. She's worked at the Los Angeles Times and is currently pursuing a master's degree at the Columbia University Graduate School of Journalism. She's passionate about policy, government, Netflix marathons and spicy wasabi peas.",
    "mug": "Yes",
    "email": "kshepherd@media.ucla.edu",
    "twitter": "katemshepherd",
    "github": "ksheps",
    "website": "http://katiemshepherd.com"
  },
  "byron_lutz": {
    "name": "Byron Lutz",
    "title": "Data Sage",
    "bio": "Byron is the creator of the Daily Bruin's Online department. He's worked on countless projects for The Bruin including [a website](https://github.com/dailybruin/gryphondor), [a social media manager](https://github.com/dailybruin/meow/) and [a reporting project in the Philippines](http://yolanda.dailybruin.com). He currently works as a software developer at [Factual](https://factual.com) in Los Angeles. He loves UniCamp (like a lot), experimenting with hairstyles and [holding watermelons](https://www.facebook.com/photo.php?fbid=10203809355127941&set=a.1522595138443.2073979.1041533851&type=1&permPage=1).",
    "mug": "Yes",
    "email": "byronlutz@gmail.com",
    "twitter": "byronlutz",
    "github": "blutz",
    "website": "https://blutz.github.io/"
  },
  "tim_guo": {
    "name": "Tim Guo",
    "title": "D3 Magnate",
    "bio": "Tim was a developer for the Daily Bruin. He's worked at Hulu and is currently studying computer science at Brown University. His interests include photography and psychology. He considers his greatest skill his ability to consume apples whole.",
    "mug": "Yes",
    "email": "tguo@media.ucla.edu",
    "twitter": "timguoqk",
    "github": "timguoqk",
    "website": "http://timguoqk.me"
  },
  "nick_yu": {
    "name": "Nick Yu",
    "title": "Honorary Councilmember Editor",
    "bio": "A microbiology, immunology and molecular genetics student, Nick covers Gene Block and his crew in addition to campus politics, which means he enjoys spending his Tuesday nights at Kerckhoff 417, where USAC meets. He has no idea what he wants to do with his life, but he likes writing and has an interest in studying viruses. He's a master of the top-button-unbuttoned-with-tie-and-boutonniere look.",
    "mug": "Yes",
    "email": "nyu1@media.ucla.edu",
    "twitter": "NickYu96"
  },
  "angie_wang": {
    "name": "Angie Wang",
    "title": "Executive Newsinator",
    "bio": "Angie is the News editor at the Daily Bruin. She was previously an assistant Photo editor and News contributor. This summer, she reported on undocumented student access to higher education on a national level. She studies communication with a specialization in computing and has a complicated relationship with tomatoes.",
    "mug": "Yes",
    "email": "angiewang@media.ucla.edu",
    "twitter": "angiezwang"
  },
  "tyson_ni": {
    "name": "Tyson Ni",
    "title": "Data Viz Apprentice",
    "bio": "Tyson likes telling stories with data. Feel free to send him feedback, data, or story ideas.",
    "mug": "Yes",
    "email": "tni@ucla.edu",
    "github": "tyson-ni"
  },
  "ryan_leou": {
    "name": "Ryan Leou",
    "title": "Daily Bruin Reporter",
    "bio": "Ryan is the national news and higher education editor for the Daily Bruin. He studies political and environmental science. In his free time, he enjoys browsing Wikipedia, napping, traveling around the world and compiling data about elections.",
    "mug": "Yes",
    "email": "rleou@media.ucla.edu",
    "twitter": "rleou"
  },
  "chang_liu": {
    "name": "Chang Liu",
    "title": "Stack Editor",
    "bio": "Chang is currently the guy in charge of this website. He studies Linguistics & Computer Science at UCLA. When he's not busy learning both natural and programming languages, he likes to take photos, dance and travel.",
    "mug": "Yes",
    "email": "chliu@media.ucla.edu",
    "github": "shampliu",
    "website": "http://changliu.io"
  },
  "michael_hull": {
    "name": "Michael Hull",
    "title": "Assistant Sports Editor",
    "bio": "Hull currently covers men's water polo for the Sports section. He was a writer for the track and field team in the spring of 2016, and for the NCAA champion men's water polo team in 2015.",
    "mug": "Yes",
    "email": "mhull@media.ucla.edu",
    "twitter": "michaelchull"
  },
  "jeffrey_chan": {
    "name": "Jeffrey Chan",
    "title": "Stack Developer",
    "bio": "Jeffrey is a front end developer who strives to add his own flavor to Daily Bruin webpages. He studies Electrical Engineering at UCLA and has an insatiable curiousity for technology. Outside of his academic coursework, he likes to tinker on personal projects, listen to EDM, and search for LA's finest cuisine.",
    "mug": "Yes",
    "email": "jchan6@media.ucla.edu",
    "twitter": "jeffreyxchan",
    "github": "jeffreyxchan"
  },
  "carter_wu": {
    "name": "Carter Wu",
    "title": "Stack Developer",
    "bio": "Carter is one of the developers for The Stack. He is currently studying Computer Science and Engineering, and enjoys working with big data. Outside of school, Carter loves to eat delicious food, play sports, and browse Reddit.",
    "mug": "Yes",
    "email": "xwu@media.ucla.edu",
    "github": "xiaoxuwu"
  },
  "yiling_liu": {
    "name": "Yiling Liu",
    "title": "Daily Bruin Contributor",
    "bio": "Yiling writes for the Science and Health beat in the Daily Bruin. She studies biochemistry. In her free time, she enjoys watching good music videos like Luhan's \"Lu\".",
    "mug": "Yes",
    "email": "yliu2@media.ucla.edu"
  },
  "natalie_ethell": {
    "name": "Natalie Ethell",
    "title": "Stack Developer",
    "bio": "Natalie is a 4th year computer science major. She has been dancing since she was 5 and enjoys any combination of bagels and dogs.",
    "mug": "Yes",
    "email": "nethell@media.ucla.edu",
    "github": "natalieethell"
  },
  "mahir_eusufzai": {
    "name": "Mahir Eusufzai",
    "title": "Stack Developer",
    "bio": "Mahir is a 4th year CS major. He's a huge Lakers fan and occasionally posts piano/guitar videos on YouTube.  He is frequently mistaken for Mihir Mathur.",
    "mug": "Yes",
    "email": "meusufzai@media.ucla.edu"
  },
  "fay_wu": {
    "name": "Fay Wu",
    "title": "Stack Developer",
    "bio": "Fay is in her last quarter at UCLA CS and loves oysters.",
    "mug": "Yes",
    "email": "mfaywu@ucla.edu",
    "github": "mfaywu"
  },
  "benson_han": {
    "name": "Benson Han",
    "title": "Casual Programmer",
    "bio": "Benson is a 2nd year Computer Science major and is more comfortable writing code than bios.",
    "mug": "Yes",
    "email": "bhan@media.ucla.edu",
    "github": "bensonhan"
  },
  "jerry_li": {
    "name": "Jerry Li",
    "title": "Stack Developer",
    "bio": "Jerry is a 3rd year CS major who transforms food into code. When not hacking away or getting lost in data, he likes to play badminton, fold origami, and play board games.",
    "mug": "Yes",
    "email": "jerrylinew@ucla.edu",
    "github": "jerrylinew"
  },
  "rupan_bharanidaran": {
    "name": "Rupan Bharanidaran",
    "title": "News Editor",
    "bio": "Bharanidaran is the news editor at the Daily Bruin and a fourth-year political science and economics student. He helped input data from the crime logs and enjoys reading books and analyzing campaign contribution data in his free time.",
    "mug": "Yes",
    "email": "rbharanidaran@media.ucla.edu"
  },
  "madeleine_pauker": {
    "name": "Madeleine Pauker",
    "title": "Managing Editor",
    "bio": "Pauker is the managing editor of the Daily Bruin and a third-year world arts and cultures student. She recorded data from 365 days of crime logs to create this post.",
    "mug": "Yes",
    "email": "mpauker@media.ucla.edu"
  },
  "rishub_kumar": {
    "name": "Rishub Kumar",
    "title": "Stack Developer",
    "bio": "Kumar is a UCLA alumnus and a previous Daily Bruin staffer.",
    "mug": "Yes",
    "email": "rkumar1@media.ucla.edu"
  },
  "dinkar_khattar": {
    "name": "Dinkar Khattar",
    "title": "Stack Developer",
    "bio": "Khattar is a third-year computer science student. He’s probably the guy you see yoyo-ing and/or riding a Bird down Charles E. Young Drive.",
    "mug": "Yes",
    "email": "dkhattar@media.ucla.edu",
    "github": "dkok97"
  },
  "henna_dialani": {
    "name": "Henna Dialani",
    "title": "Stack Developer",
    "bio": "Dialani is the 2018-2019 Stack editor and a fourth-year statistics student. When not working with data, she’s exploring Los Angeles and its food.",
    "mug": "Yes",
    "email": "hdialani@media.ucla.edu",
    "github": "hennadialani"
  },
  "nathan_smith": {
    "name": "Nathan Smith",
    "title": "Assistant Online Editor",
    "bio": "Smith is an assistant online editor at the Daily Bruin and a second-year computer science student. When he's not scrolling through USAC PDFs or staring at lines of code, he enjoys Eggo waffles, visiting museums and writing about electric scooters.",
    "mug": "Yes",
    "email": "nsmith@media.ucla.edu",
    "github": "nathunsmitty",
    "twitter": "nathunsmitty",
    "website": "https://nathansmith.io"
  },
  "lik_teng_ung": {
    "name": "Lik Teng Ung",
    "title": "Stack Developer",
    "bio": "Ung is a stack contributor at the Daily Bruin and a third-year statistics and political science student. He's an avid political poll watcher, Pythonistas and boba connoisseur.",
    "email": "lung@media.ucla.edu",
    "mug": "Yes"
  },
  "kyle_wong": {
    "name": "Kyle Wong",
    "title": "Stack Developer",
    "bio": "Wong is a third-year computer science student who enjoys attending hackathons.",
    "mug": "Yes",
    "email": "kwong@media.ucla.edu",
    "github": "kylewong975",
    "website": "http://kylewong.me"
  },
  "alexander_chan": {
    "name": "Alexander Chan",
    "title": "Stack Developer",
    "bio": "Chan is a graduate student in the Statistics Department. He likes stats, a lot. Previously, a software engineering intern at Amazon AWS, American Express, and data science intern at a start-up in France.",
    "mug": "Yes",
    "email": "achan@media.ucla.edu",
    "github": "alexander-chan"
  },
  "andrew_kan": {
    "name": "Andrew Kan",
    "title": "Stack Developer",
    "bio": "Kan is a second-year computer science and engineering student who enjoys longforms and any type of puzzle.",
    "mug": "Yes",
    "email": "akan@media.ucla.edu",
    "github": "kandrewz"
  },
  "saachi_kudtarkar": {
    "name": "Saachi Kudtarkar",
    "title": "Stack Developer",
    "bio": "Kudtarkar is a third-year mathematics of computation student. She enjoys watching TED talks and eating Veggie Grill, especially at the same time!",
    "mug": "Yes",
    "email": "skudtarkar@media.ucla.edu",
    "github": "saachinator"
  },
  "mattie_sanseverino": {
    "name": "Mattie Sanseverino",
    "title": "Stack Editor",
    "bio": "Mattie is a second-year Computer Science student. She loves the ocean and anything that contains too much sugar for her own good.",
    "mug": "Yes",
    "email": "msanseverino@media.ucla.edu",
    "github": "mattiesansev"
  },
  "keith_atienza": {
    "name": "Keith Atienza",
    "title": "Stack Developer",
    "bio": "Atienza is a fourth-year applied mathematics and statistics student who loves stand-up comedy and being lit.",
    "mug": "Yes",
    "email": "katienza@media.ucla.edu",
    "github": "atienzak"
  },
  "jeanette_lin": {
    "name": "Jeanette Lin",
    "title": "Stack Developer",
    "bio": "Lin is a fourth-year statistics student. Outside of school and data analysis projects, she loves hiking, going to the beach, and drinking boba.",
    "mug": "Yes",
    "email": "jlin1@media.ucla.edu",
    "github": "jeanettelin8"
  },
  "michael_huang": {
    "name": "Michael Huang",
    "title": "Stack Developer",
    "bio": "Michael is lit."
  },
  "radhika_ahuja": {
    "name": "Radhika Ahuja",
    "title": "Stack Developer",
    "bio": "Radhika is a fourth-year math of computation student. Outside of school, she enjoys writing, dance, cooking, and other things creative.",
    "mug": "yes",
    "email": "rahuja@media.ucla.edu",
    "github": "ahujaradhika",
    "website": "https://ahujaradhika.github.io/"
  },
  "annie_zhang": {
    "name": "Annie Zhang",
    "title": "Stack Developer",
    "bio": "Annie is a third year math major who really enjoys heist novels, murder mystery TV shows, noodles, and setting unrealistic goals.",
    "mug": "yes",
    "email": "azhang2@media.ucla.edu",
    "github": "aczhang777"
  },
  "madeline_blasingame": {
    "name": "Madeline Blasingame",
    "title": "Stack Developer",
    "mug": "yes",
    "bio": "Maddy is a first-year stats major whose only goal is to be TikTok famous.",
    "email": "mblasingame@media.ucla.edu",
    "github": "meblasingame"
  },
  "laurel_woods": {
    "name": "Laurel Woods",
    "title": "Stack Developer",
    "bio": "Laurel is a second-year student who's somewhere in between computer science and cognitive science. She loves anything outdoorsy, especially if her dog is there.",
    "mug": "Yes",
    "email": "lwoods@media.ucla.edu",
    "github": "laurelrwoods"
  },
  "bernard_mendez": {
    "name": "Bernard Mendez",
    "title": "Stack Developer/News Reporter",
    "bio": "Bernard is a second-year math student. Bernard also <a href='https://dailybruin.com/author/bernard-mendez/'>writes for the Daily Bruin's science and health section</a>. In his free time, Bernard enjoys wearing sweaters.",
    "mug": "Yes",
    "email": "bmendez@media.ucla.edu",
    "github": "bernardmendez",
    "website": "http://bernardmendez.com"
  },
  "charlotte_huang": {
    "name": "Charlotte Huang",
    "title": "Stack Developer",
    "bio": "Charlotte is a junior, majoring in Applied Math and Cognitive Science. She always wants to spend a day eating nothing but dark chocolate and drinking lattes with oat milk.",
    "mug": "Yes",
    "email": "chuang@media.ucla.edu",
    "github": "charlotte0408"
  },
  "justin_chai": {
    "name": "Justin Chai",
    "title": "Stack Developer",
    "bio": "Justin is a first-year linguisitics and computer science major.",
    "mug": "Yes",
    "email": "jchai@media.ucla.edu"
  },
  "jc_rios": {
    "name": "Juan C. Rios",
    "title": "Stack Developer",
    "email": "jrios@media.ucla.edu",
    "bio": "Rios is a third-year Computer Engineering student who enjoys programming and music.",
    "mug": "yes"
  },
  "kelly_chen": {
    "name": "Kelly Chen",
    "title": "Stack Developer",
    "email": "kchen2@media.ucla.edu",
    "bio": "Chen is a second-year statistics student. She can usually be found dancing, even when she's not supposed to, and is always looking for her next adventure.",
    "mug": "yes"
  },
  "keri_chen": {
    "name": "Keri Chen",
    "title": "Stack Developer",
    "email": "kchen1@media.ucla.edu",
    "bio": "Chen is a first-year sociology student. When not writing essays and articles, she enjoys watching Vox videos and takes pride in being able to pack for two weeks in a single carry-on.",
    "mug": "yes"
  },
  "sydney_kovach": {
    "name": "Sydney Kovach",
    "title": "Stack Developer",
    "email": "skovach@media.ucla.edu",
    "mug": "yes",
    "bio": "Sydney Kovach is a second year Global Studies and Geography student who loves dancing and taking yoga classes in her free time."
  }
}

for author in authors:
    author_key = str(author)
    output = """---
name: {}
title: {}""".format(authors[author]['name'], authors[author]['title'])

    try: 
        output = output + """
email: {}""".format(authors[author]['email'])
    except: 
        pass

    try: 
        output = output + """
mug: {}""".format(authors[author]['mug'])
    except: 
        pass

    try: 
        output = output + """
bio: {}""".format(authors[author]['bio'])
    except: 
        pass

    try: 
        output = output + """
github: {}""".format(authors[author]['github'])
    except: 
        pass

    try: 
        output = output + """
website: {}""".format(authors[author]['website'])
    except: 
        pass

    try: 
        output = output + """
mug: {}""".format(authors[author]['twitter'])
    except: 
        pass

    output = output + """
---"""

    print(output)
    with open(output_path + author + '.md', 'w') as f:
        f.write(output)