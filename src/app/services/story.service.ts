import {Injectable} from "@angular/core";
import {Story} from "../model/story.model";
import {Http} from "@angular/http";

@Injectable()
export class StoryService {
  constructor(private http: Http) {
    this.parseStories();
  }

  getTopStories(): Promise<Array<Story>> {
    return new Promise(
      (resolve: Function, reject: Function): void => {
        // this.http.post(
        //   Configuration.BACK_END_HOST_URL + "/top-stories",
        //   {},
        //   new RequestOptions({
        //     headers: new Headers({
        //       "Content-Type": "application/json"
        //     })
        //   })).subscribe(
        //   (response: Response): void => {
        //     const RESPONSE_BODY: Array<Story> = response.json();
        //     resolve(RESPONSE_BODY);
        //   }, (error: any): void => {
        //     reject(error);
        //   }
        // );
        let stories: Array<Story> = [];

        for (let i: number = 0; i < 7; i++) {
          stories.push(this.stories[i]);
        }

        resolve(stories);
      }
    );
  }


  json: any = [{
    'status': 'ok',
    'source': 'cnn',
    'sortBy': 'top',
    'articles': [{
      'author': 'Nicole Chavez, CNN',
      'title': "California fires evacuee: 'There's nothing to sift through'",
      'description': 'With more than a dozen fires still burning, firefighters are battling the blazes while also painstakingly combing the rubble in incinerated neighborhoods.',
      'url': 'http://www.cnn.com/2017/10/15/us/california-fires-updates-recovery/index.html',
      'urlToImage': 'http://cdn.cnn.com/cnnnext/dam/assets/171015025216-01-california-wildfires-1015-super-tease.jpg',
      'publishedAt': '2017-10-15T12:49:55Z',
      'latitudes': [36.116203, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'longitudes': [-119.681564, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
      'author': "None",
      'title': 'Homeowners cry as they return after fire - CNN Video',
      'description': 'See heartbreaking moments as people return to destroyed homes and possessions as wildfires ravage Northern California.',
      'url': 'http://www.cnn.com/videos/tv/2017/10/12/returning-home-to-california-lc-orig.cnn',
      'urlToImage': 'http://cdn.cnn.com/cnnnext/dam/assets/171012160446-wildfire-1-super-tease.jpg',
      'publishedAt': "None",
      'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
      'author': 'Dakin Andone, CNN',
      'title': 'Las Vegas survivor loses home in wildfires',
      'description': "Michella Flores was at the Las Vegas concert during the mass shooting. Days later, she was home in California when wildfires destroyed her parents' home.",
      'url': 'http://www.cnn.com/2017/10/14/us/woman-escapes-las-vegas-shooting-california-fires/index.html',
      'urlToImage': 'http://cdn.cnn.com/cnnnext/dam/assets/171014142318-02-michella-flores-las-vegas-california-fire-super-tease.jpg',
      'publishedAt': '2017-10-15T07:50:03Z',
      'latitudes': [36.116203, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'longitudes': [-119.681564, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
      'author': "None",
      'title': 'Watch as fire burns inside hollow tree  - CNN Video',
      'description': 'Matthew McDermott was scoping out potential wildfire escape routes when he came across this tree with a blaze burning inside in Schellville, California.',
      'url': 'http://www.cnn.com/videos/us/2017/10/13/hollow-tree-fire-california-orig-trnd-lab.cnn',
      'urlToImage': 'http://cdn.cnn.com/cnnnext/dam/assets/171013111957-hollow-tree-fire-california-super-tease.jpg',
      'publishedAt': "None",
      'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
      'author': 'Miranda Green, CNN',
      'title': "At Values Voter Summit, Bannon declares 'war' on GOP establishment",
      'description': 'Former White House chief strategist Steve Bannon implored conservative activists at a Washington gathering Saturday morning to continue fighting the GOP establishment, attacking a number of Republican members of Congress by name, including Senate Majority Leader Mitch McConnell.',
      'url': 'http://www.cnn.com/2017/10/14/politics/steve-bannon-values-voter-summit/index.html',
      'urlToImage': 'http://cdn.cnn.com/cnnnext/dam/assets/170926122447-steve-bannon-super-tease.jpg',
      'publishedAt': '2017-10-15T11:17:03Z',
      'latitudes': [47.400902, 38.9041, 0, 0, 0, 0, 0, 0, 0, 0],
      'longitudes': [-121.490494, -77.0172, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
      'author': 'Gregory Wallace and Tal Kopan, CNN',
      'title': "Government lawyers ask judge to reject CNN's efforts to make Comey memos public",
      'description': "Government lawyers have asked a judge to reject CNN's requests to make public the memos of former FBI Director James Comey in which he details his meetings with President Donald Trump.",
      'url': 'http://www.cnn.com/2017/10/14/politics/comey-memos-foia/index.html',
      'urlToImage': 'http://cdn.cnn.com/cnnnext/dam/assets/170607210047-01-james-comey-file-super-tease.jpg',
      'publishedAt': '2017-10-14T22:06:41Z',
      'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
      'author': 'Ryan Nobles, CNN',
      'title': "GOP's Gillespie keeps his distance from Trump",
      'description': 'President Donald Trump has endorsed Republican Ed Gillespie in the Virginia gubernatorial race. But the candidate appears to go out of his way to avoid mentioning his most prominent supporter.',
      'url': 'http://www.cnn.com/2017/10/14/politics/virginia-governor-race-ed-gillespie-ralph-northam/index.html',
      'urlToImage': 'http://cdn.cnn.com/cnnnext/dam/assets/171014090911-ed-gillespie-10-14-2017-super-tease.jpg',
      'publishedAt': '2017-10-14T23:18:17Z',
      'latitudes': [37.769337, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'longitudes': [-78.169968, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
      'author': "None",
      'title': "Axelrod: Trump talks like he's jealous of Obama - CNN Video",
      'description': "Former Obama senior adviser David Axelrod discusses President Trump dismantling many of Obama's signature initiatives as president.",
      'url': 'http://www.cnn.com/videos/politics/2017/10/14/obama-trump-axelrod-jealous-obama-smerconish.cnn',
      'urlToImage': 'http://cdn.cnn.com/cnnnext/dam/assets/171014094738-obama-trump-axelrod-jealous-obama-smerconish-00000000-super-tease.jpg',
      'publishedAt': "None",
      'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
      'author': 'Steve Israel',
      'title': "Ex-congressman: The truth can't get me fired anymore",
      'description': "Steve Israel says retiring Sen. Bob Corker's subversive remarks about the White House show how politicians who leave office feel like they've had a gag removed.",
      'url': 'http://www.cnn.com/2017/10/13/opinions/speak-mind-politicians-israel-opinion/index.html',
      'urlToImage': 'http://cdn.cnn.com/cnnnext/dam/assets/170629142805-sen-bob-corker-may-10-2017-super-tease.jpg',
      'publishedAt': '2017-10-15T12:16:29Z',
      'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }, {
      'author': 'Brad Lendon, CNN',
      'title': "North Korea calls Trump a 'strangler of peace'",
      'description': 'North Korea continued its harsh anti-US rhetoric Sunday, calling President Donald Trump a "war merchant and strangler of peace."',
      'url': 'http://www.cnn.com/2017/10/15/asia/us-north-korea-tensions/index.html',
      'urlToImage': 'http://cdn.cnn.com/cnnnext/dam/assets/170831090611-kim-jong-un-and-trump-tease-super-tease.jpg',
      'publishedAt': '2017-10-15T11:30:20Z',
      'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }]
  },
    {
      'status': 'ok',
      'source': 'reuters',
      'sortBy': 'top',
      'articles': [{
        'author': 'Heather Somerville',
        'title': "California 'horror' fires burn on, 40 dead in one week",
        'description': "Authorities hope weaker winds will help more than 10,000 firefighters battle the deadliest blazes in California history, which have killed at least 40 people and destroyed thousands of structures in one of the state's worst natural disasters in years.",
        'url': 'https://www.reuters.com/article/us-california-fire/wildfires-kill-17-in-california-wine-country-idUSKBN1CG124',
        'urlToImage': 'https://s2.reutersmedia.net/resources/r/?m=02&d=20171015&t=2&i=1205534663&w=&fh=545px&fw=&ll=&pl=&sq=&r=LYNXMPED9E014',
        'publishedAt': '2017-10-15T09:00:59Z',
        'latitudes': [36.116203, 36.116203, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [-119.681564, -119.681564, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Reuters Editorial',
        'title': 'North Korea not ready to hold talks with South Korea in Russia: agencies',
        'description': "Politicians from North and South Korea will not hold direct talks in Russia on Monday about Pyongyang's nuclear and missile program despite attending the same event, Russian news agencies said on Sunday.",
        'url': 'https://www.reuters.com/article/us-northkorea-missiles-russia/north-korea-not-ready-to-hold-talks-with-south-korea-in-russia-agencies-idUSKBN1CK0B4',
        'urlToImage': 'https://s4.reutersmedia.net/resources/r/?m=02&d=20171015&t=2&i=1205556874&w=&fh=545px&fw=&ll=&pl=&sq=&r=LYNXMPED9E08T',
        'publishedAt': '2017-10-15T11:42:53Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Dave Graham and David Lawder',
        'title': 'Grim reality of NAFTA talks sets in after tough U.S. demands',
        'description': 'Negotiators from Canada and Mexico grappled with U.S. demands to drastically alter the North American Free Trade Agreement on Saturday, as talks over renewal of the pact vilified by President Donald Trump ran through a fourth straight day.',
        'url': 'https://www.reuters.com/article/us-trade-nafta/grim-reality-of-nafta-talks-sets-in-after-tough-u-s-demands-idUSKBN1CJ0TH',
        'urlToImage': 'https://s4.reutersmedia.net/resources/r/?m=02&d=20171014&t=2&i=1205520457&w=&fh=545px&fw=&ll=&pl=&sq=&r=LYNXMPED9D0KY',
        'publishedAt': '2017-10-14T22:29:22Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Lindsay Dunsmuir',
        'title': "Fed's Yellen says watching inflation closely but economy is strong",
        'description': 'The U.S economy remains strong and the strength of the labor market calls for continued gradual increases in interest rates despite subdued inflation, Federal Reserve Chair Janet Yellen said on Sunday.',
        'url': 'https://www.reuters.com/article/us-usa-fed-yellen/feds-yellen-says-watching-inflation-closely-but-economy-is-strong-idUSKBN1CK0IO',
        'urlToImage': 'https://s1.reutersmedia.net/resources/r/?m=02&d=20171015&t=2&i=1205568015&w=&fh=545px&fw=&ll=&pl=&sq=&r=LYNXMPED9E0D1',
        'publishedAt': '2017-10-15T13:03:27Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Jibran Ahmad',
        'title': "Afghan Taliban deny former hostage's claims of murder, rape",
        'description': 'A Taliban spokesman denied on Sunday accusations by a Canadian man that one of his children had been murdered and his wife raped while they were being held captive by militants who kidnapped them in Afghanistan in 2012.',
        'url': 'https://www.reuters.com/article/us-pakistan-afghanistan-kidnapping/afghan-taliban-deny-former-hostages-claims-of-murder-rape-idUSKBN1CK09T',
        'urlToImage': 'https://s2.reutersmedia.net/resources/r/?m=02&d=20171015&t=2&i=1205555989&w=&fh=545px&fw=&ll=&pl=&sq=&r=LYNXMPED9E07C',
        'publishedAt': '2017-10-15T09:10:49Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Reuters Editorial',
        'title': 'Hillary Clinton warns Britain on potential trade deal with Trump',
        'description': 'Former U.S. presidential candidate Hillary Clinton cautioned Britain on Sunday over its push to secure a trade deal with U.S. President Donald Trump after it leaves the European Union.',
        'url': 'https://www.reuters.com/article/us-usa-britain-clinton/hillary-clinton-warns-britain-on-potential-trade-deal-with-trump-idUSKBN1CK0IB',
        'urlToImage': 'https://s3.reutersmedia.net/resources/r/?m=02&d=20171015&t=2&i=1205567581&w=&fh=545px&fw=&ll=&pl=&sq=&r=LYNXMPED9E0CM',
        'publishedAt': '2017-10-15T12:56:41Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Abdi Sheikh',
        'title': "Death toll from blasts in Somalia's capital Mogadishu rises to 85",
        'description': "The death toll from twin bomb blasts that struck busy junctions in the heart of Somalia's capital Mogadishu has jumped to 85, making it one of the deadliest attacks since an Islamist insurgency began in 2007.",
        'url': 'https://www.reuters.com/article/us-somalia-attacks/death-toll-from-bomb-attacks-in-somalias-capital-rises-to-85-idUSKBN1CK08E',
        'urlToImage': 'https://s4.reutersmedia.net/resources/r/?m=02&d=20171015&t=2&i=1205554284&w=&fh=545px&fw=&ll=&pl=&sq=&r=LYNXMPED9E068',
        'publishedAt': '2017-10-15T09:36:29Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Maher Chmaytelli and Ahmed Rasheed',
        'title': "Kurds block Iraqi forces access to Kirkuk's oil fields, airbase",
        'description': "Kurdish Peshmerga fighters rejected a warning from an Iraqi paramilitary force to withdraw from a strategic junction south of Kirkuk, which controls the access to some of the region's main oilfields, a Kurdish security official told Reuters on Sunday.",
        'url': 'https://www.reuters.com/article/us-mideast-crisis-kurds-iraq-kirkuk/kurds-block-iraqi-forces-access-to-kirkuks-oil-fields-airbase-idUSKBN1CK0BX',
        'urlToImage': 'https://s3.reutersmedia.net/resources/r/?m=02&d=20171015&t=2&i=1205559124&w=&fh=545px&fw=&ll=&pl=&sq=&r=LYNXMPED9E09O',
        'publishedAt': '2017-10-15T12:58:55Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Sarah N. Lynch and Julia Harte',
        'title': 'Exclusive: Trump administration reduces support for prisoner halfway houses',
        'description': 'The administration of President Donald Trump has been quietly cutting support for halfway houses for federal prisoners, severing contracts with as many as 16 facilities in recent months, prompting concern that some inmates are being forced to stay behind bars longer than necessary.',
        'url': 'https://www.reuters.com/article/us-usa-justice-prisons-exclusive/exclusive-trump-administration-reduces-support-for-prisoner-halfway-houses-idUSKBN1CI2ZA',
        'urlToImage': 'https://s4.reutersmedia.net/resources/r/?m=02&d=20171013&t=2&i=1205448607&w=&fh=545px&fw=&ll=&pl=&sq=&r=LYNXMPED9C1WT',
        'publishedAt': '2017-10-13T23:59:41Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Shadia Nasralla and Kirsti Knolle',
        'title': "Europe's migration crisis casts long shadow as Austria votes",
        'description': "Austria voted on Sunday in a parliamentary election that is expected to see 31-year-old conservative Sebastian Kurz become chancellor on a pledge to take a hard line on refugees and prevent a repeat of Europe's migration crisis.",
        'url': 'https://www.reuters.com/article/us-austria-election/europes-migration-crisis-casts-long-shadow-as-austria-votes-idUSKBN1CJ0T8',
        'urlToImage': 'https://s2.reutersmedia.net/resources/r/?m=02&d=20171015&t=2&i=1205567776&w=&fh=545px&fw=&ll=&pl=&sq=&r=LYNXMPED9E0CD',
        'publishedAt': '2017-10-15T13:00:05Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }]
    },
    {
      'status': 'ok',
      'source': 'usa-today',
      'sortBy': 'top',
      'articles': [{
        'author': "None",
        'title': "Trump's move to end insurance subsidies jolts Washington",
        'description': 'In a pair of tweet Saturday, the president celebrated a blow to insurance companies.',
        'url': 'https://www.usatoday.com/story/news/politics/2017/10/14/trump-move-end-insurance-subsidies-jolts-health-industry-washington/764673001/',
        'urlToImage': 'https://www.gannett-cdn.com/-mm-/0fbfc1a03b323b430548cadb3fa22306896fa8c5/c=0-143-5421-3206&r=x1683&c=3200x1680/local/-/media/2017/10/14/USATODAY/USATODAY/636435855995001061-XXX-IMG-XXX-IMG-EPA-USA-TRUM-1-1-PBJVFMB9.JPG',
        'publishedAt': '2017-10-14T20:39:12Z',
        'latitudes': [47.400902, 38.9041, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [-121.490494, -77.0172, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': 'Las Vegas shooting victim takes first steps after emerging from coma',
        'description': 'The Maryland native shot in the head during last week’s Las Vegas shooting massacre emerged from a coma last week\xa0and took\xa0her first steps without assistance.',
        'url': 'http://www.wusa9.com/news/local/maryland/md-victim-shot-in-vegas-takes-first-steps/483368162',
        'urlToImage': 'https://www.gannett-cdn.com/-mm-/e940066c28e8924d68b896b594d7b9319fdd23e1/c=0-0-1173-663&r=x803&c=1600x800/local/-/media/2017/10/14/USATODAY/USATODAY/636436100039519993-Screen-Shot-2017-10-14-at-8.32.55-PM.jpg',
        'publishedAt': '2017-10-15T00:46:19Z',
        'latitudes': [39.063946, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [-76.802101, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': "'Saturday Night Live' finally tackles the Harvey Weinstein scandal, harassment in Hollywood",
        'description': "After receiving criticism for skirting the controversy, the sketch comedy show finally addressed the Weinstein scandal as well as Hollywood's toxic masculinity problem.",
        'url': 'https://www.usatoday.com/story/life/entertainthis/2017/10/15/saturday-night-live-finally-tackles-harvey-weinstein-scandal-harassment-hollywood/759900001/',
        'urlToImage': 'https://www.gannett-cdn.com/-mm-/d77f2e2eb3f88611f7edd1e065dd3b3fa6c89944/c=0-0-2999-1694&r=x1683&c=3200x1680/local/-/media/2017/10/15/USATODAY/USATODAY/636436508139688551-NUP-180310-0038.JPG',
        'publishedAt': '2017-10-15T12:09:04Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': "College football's Week 7 winners and losers",
        'description': 'Another disappointing performance by Tennesee leaves the Volunteers at the top of the losers list.',
        'url': 'https://www.usatoday.com/story/sports/ncaaf/2017/10/14/college-football-week-7-winners-and-losers/765389001/',
        'urlToImage': 'https://www.gannett-cdn.com/-mm-/a36f9ba96a033998ca9e03fc9e114794a173de6d/c=0-0-2996-1693&r=x803&c=1600x800/local/-/media/2017/10/14/USATODAY/USATODAY/636436074135509744-GTY-861338670-94573337.JPG',
        'publishedAt': '2017-10-15T04:01:50Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': 'Courtney Love warned young women about Harvey Weinstein more than a decade ago',
        'description': 'In a video interview, Love gave young women this advice: Decline an invite from Weinstein.',
        'url': 'https://www.usatoday.com/story/life/entertainthis/2017/10/14/harvey-weinstein-coutney-love-advice/765314001/',
        'urlToImage': 'https://www.gannett-cdn.com/-mm-/cba2808e5af03278b1b8a9c1bad08d1e54929c42/c=0-526-2391-1877&r=x1683&c=3200x1680/local/-/media/2017/10/14/USATODAY/USATODAY/636436059354726996-GTY-846626468.jpg',
        'publishedAt': '2017-10-14T23:47:16Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': 'Harvey Weinstein news: Academy expels embattled producer amid sexual assault allegations',
        'description': 'The Academy of Motion Picture Arts and Sciences Board kicked Weinstein out amid sexual assault allegations.',
        'url': 'https://www.usatoday.com/story/life/movies/2017/10/14/oscars-board-expected-review-weinsteins-membership/764530001/',
        'urlToImage': 'https://www.gannett-cdn.com/-mm-/f07d11050d83b7ba996865effba4465c60a2e5c5/c=0-265-3000-1960&r=x803&c=1600x800/local/-/media/2017/10/13/USATODAY/USATODAY/636435004439618924-AP-HARVEY-WEINSTEIN-94493521.JPG',
        'publishedAt': '2017-10-15T00:10:44Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': 'Crews sift ruins for traces of wildfire victims',
        'description': 'Death  toll from  fast-moving fires reaches40 across Sonoma, Mendocino, Yuba and Napa counties.',
        'url': 'https://www.usatoday.com/story/news/nation/2017/10/15/crews-sift-ruins-for-california-wildfire-victims/765803001/',
        'urlToImage': 'https://www.gannett-cdn.com/-mm-/399f6cc5859ff6728eb2dad7851a47281331e16b/c=0-237-3696-2325&r=x1683&c=3200x1680/local/-/media/2017/10/15/USATODAY/USATODAY/636436490658840495-Anthro.JPG',
        'publishedAt': '2017-10-15T11:47:47Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': "Cubs' Joe Maddon compares plate-blocking rule to recently-repealed Chicago soda tax",
        'description': 'Joe Maddon thinks drinking soda and trucking catchers should both be done with impunity.',
        'url': 'https://www.usatoday.com/story/sports/mlb/2017/10/15/cubs-joe-maddon-compares-plate-blocking-rule-recently-repealed-chicago-soda-tax/765647001/',
        'urlToImage': 'https://www.gannett-cdn.com/-mm-/f6c2776b0cb9c28a70691d24b4798562dfa6f228/c=0-230-4522-2785&r=x1683&c=3200x1680/local/-/media/2017/10/15/USATODAY/USATODAY/636436253731720309-GTY-861452542-94586385.JPG',
        'publishedAt': '2017-10-15T06:52:21Z',
        'latitudes': [41.8376, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [-87.6818, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': 'Arizona State shuts down No. 4 Washington in big Pac-12 upset',
        'description': "Washington became the third member of the Amway Coaches Poll's Top 10 to lose in Week 7, falling to Arizona State in a low-scoring contest.",
        'url': 'https://www.usatoday.com/story/sports/ncaaf/pac12/2017/10/14/arizona-state-sun-devils-upset-washington-huskies/765706001/',
        'urlToImage': 'https://www.gannett-cdn.com/-mm-/7c3128bd683799a389f624d4f04a4e533ff8cba2/c=0-17-3712-2114&r=x1683&c=3200x1680/local/-/media/2017/10/15/USATODAY/USATODAY/636436274271621487-USATSI-10347818.jpg',
        'publishedAt': '2017-10-15T07:17:25Z',
        'latitudes': [33.729759, 47.400902, 38.9041, 47.400902, 38.9041, 33.729759, 0, 0, 0, 0],
        'longitudes': [-111.431221, -121.490494, -77.0172, -121.490494, -77.0172, -111.431221, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': "Dodgers' postseason Yasiel Puig Party steamrolls Cubs in NLCS Game 1",
        'description': 'Yasiel Puig makes the Dodgers want to punish him, bench him, or even give up on him, believing he’ll never become the man they ever envisioned.',
        'url': 'https://www.usatoday.com/story/sports/mlb/columnist/bob-nightengale/2017/10/15/dodgers-yasiel-puig-turning-postseason-into-own-personal-party/765702001/',
        'urlToImage': 'https://www.gannett-cdn.com/-mm-/6f8949192a78ff6d84d22bcf8ee8f13a89e90ca0/c=0-0-4606-2602&r=x1683&c=3200x1680/local/-/media/2017/10/15/USATODAY/USATODAY/636436274586431505-USP-MLB-NLCS-CHICAGO-CUBS-AT-LOS-ANGELES-DODGERS-94585229.JPG',
        'publishedAt': '2017-10-15T06:52:20Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }]
    },
    {
      'status': 'ok',
      'source': 'buzzfeed',
      'sortBy': 'top',
      'articles': [{
        'author': 'Anna Kopsky',
        'title': '16 Fucked-Up Things That Actually Happened At Disney Parks',
        'description': '*clutches mouse ears*',
        'url': 'https://www.buzzfeed.com/annakopsky/fucked-up-things-thatve-actually-happened-on-disney',
        'urlToImage': 'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/12/13/tmp/buzzfeed-prod-fastlane-02/36e921b336c96ba978d4fd5f5077a042-0.jpg?crop=565:295;0,0',
        'publishedAt': '2017-10-11T22:16:03Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'AnaMaria Glavan',
        'title': "31 Pieces Of Clothing You'll Want To Live In This Fall",
        'description': 'Fashion for the season of APPLE CIDER DONUTS.',
        'url': 'https://www.buzzfeed.com/anamariaglavan/pieces-of-clothing-youll-want-to-live-in-this-fall',
        'urlToImage': 'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/13/14/enhanced/buzzfeed-prod-fastlane-03/original-20112-1507917795-4.png?crop=716:375;0,0',
        'publishedAt': '2017-10-15T12:01:08Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Natalya Lobanova',
        'title': 'Sorry Everyone, But I Hate Brunch And So Should You',
        'description': "It's just regular breakfast with an avocado and an egg thrown in for an extra fiver.",
        'url': 'https://www.buzzfeed.com/natalyalobanova/sorry-everyone-but-i-hate-brunch-and-so-should-you',
        'urlToImage': 'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/11/6/enhanced/buzzfeed-prod-fastlane-01/original-1740-1507719536-10.png?crop=1650:864;0,266',
        'publishedAt': '2017-10-15T10:01:12Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Ishmael N. Daro',
        'title': 'The Toronto Raptors Are No Longer Staying At Trump Hotels',
        'description': 'The lone Canadian NBA team joins a growing list of pro sports teams avoiding Trump properties.',
        'url': 'https://www.buzzfeed.com/ishmaeldaro/toronto-raptors-boycotting-trump-hotels',
        'urlToImage': 'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/13/14/tmp/buzzfeed-prod-fastlane-01/tmp-name-2-8905-1507918454-6_dblbig.jpg',
        'publishedAt': '2017-10-13T18:21:07Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Jamie Jones',
        'title': '24 Tweets So Beautiful That They Honestly Might Make You Cry A Little',
        'description': 'We need these more than ever.',
        'url': 'https://www.buzzfeed.com/jamiejones/tweets-so-beautiful',
        'urlToImage': 'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/13/12/tmp/buzzfeed-prod-fastlane-01/43181bcd1b6e9827d36639a6adf8964c-1.jpg?crop=621:325;0,41',
        'publishedAt': '2017-10-15T07:16:02Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Victor Nascimento',
        'title': "When We Look Back On These 2017 Fashion Trends, It's Going To Be So Embarrassing",
        'description': "There'll be some explaining to do.",
        'url': 'https://www.buzzfeed.com/victornascimento/15-fashion-trends-that-we-are-going-to-be-so-embarrassed',
        'urlToImage': 'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/6/15/campaign_images/buzzfeed-prod-fastlane-03/15-tendencias-de-hoje-que-vao-te-matar-de-vergonh-2-17913-1507316648-8_dblbig.jpg',
        'publishedAt': '2017-10-15T01:16:03Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Salvador Hernandez',
        'title': 'SNL\'s Remake Mixed CNN With Stephen King\'s "It" And Now I Have Nightmares',
        'description': 'If you thought the movie was scary, now imagine Kellyanne Conway as Pennywise.',
        'url': 'https://www.buzzfeed.com/salvadorhernandez/snls-remake-mixed-cnn-with-stephen-kings-it-and-now-i-have',
        'urlToImage': 'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/15/0/campaign_images/buzzfeed-prod-fastlane-01/snls-remake-mixed-cnn-with-stephen-kings-it-and-n-2-22368-1508043133-0_dblbig.jpg',
        'publishedAt': '2017-10-15T04:52:16Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Ishmael N. Daro',
        'title': 'This Politician Claims He Said "Choo" Not "Jew" And Now It\'s A Whole Thing',
        'description': 'You be the judge.',
        'url': 'https://www.buzzfeed.com/ishmaeldaro/ward-sutherland-johnny-choo',
        'urlToImage': 'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/12/17/enhanced/buzzfeed-prod-fastlane-03/original-12339-1507844036-2.jpg?crop=1000:524;0,82',
        'publishedAt': '2017-10-12T22:06:32Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Dave Stopera',
        'title': 'The 26 Highest Moments In The History Of Humanity',
        'description': 'AKA the peak of humanity.',
        'url': 'https://www.buzzfeed.com/daves4/toast-issues',
        'urlToImage': 'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/10/14/enhanced/buzzfeed-prod-fastlane-02/original-3367-1507658769-2.png?crop=820:430;113,263',
        'publishedAt': '2017-10-15T00:16:03Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Kat Angus',
        'title': '21 Photos That Will Fuck You Up For About Three Seconds',
        'description': 'Illusions, Michael.',
        'url': 'https://www.buzzfeed.com/katangus/illusions-michael',
        'urlToImage': 'https://img.buzzfeed.com/buzzfeed-static/static/2017-10/11/13/tmp/buzzfeed-prod-fastlane-03/e997ac82a018e71c4c4ec6f916c5207d-7.jpg?crop=625:327;0,13',
        'publishedAt': '2017-10-14T23:46:02Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }]
    },
    {
      'status': 'ok',
      'source': 'breitbart-news',
      'sortBy': 'top',
      'articles': [{
        'author': 'Daniel Nussbaum',
        'title': "**LIVE UPDATES** Harvey Weinstein Expelled from Film Academy; More Rape Allegations Emerge; Bob Breaks Silence: My Brother 'Should Pay with Everything'",
        'description': 'All the latest news in the mushrooming Harvey Weinstein sexual misconduct scandal. Refresh for updates.',
        'url': 'http://www.breitbart.com/big-hollywood/2017/10/13/live-updates-harvey-weinstein-scandal-unravels-hollywood-oliver-stone-accused-sexual-assault/',
        'urlToImage': 'http://media.breitbart.com/media/2017/10/HarveyExpelledLW.jpg',
        'publishedAt': '2017-10-13T06:26:33Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Breitbart News',
        'title': 'Motion Picture Academy Expels Harvey Weinstein',
        'description': 'Disgraced movie mogul Harvey Weinstein’s membership in the Academy of Motion Picture Arts and Sciences has been revoked by its board.',
        'url': 'http://www.breitbart.com/big-hollywood/2017/10/14/motion-picture-academy-expels-harvey-weinstein/',
        'urlToImage': 'http://media.breitbart.com/media/2017/10/WeinsteinExpelledFromFilmAcademy.jpg',
        'publishedAt': '2017-10-14T14:06:26Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Daniel J. Flynn',
        'title': 'Flynn: Rich! Harvey Weinstein Reminds Hillary Clinton of Donald Trump, Not Bill Clinton',
        'description': 'Hillary Clinton reacted to the abuse scandal embroiling Hollywood mogul Harvey Weinstein by saying the American people elected someone guilty of sexual assault to the presidency.',
        'url': 'http://www.breitbart.com/big-government/2017/10/14/flynn-rich-harvey-weinstein-reminds-hillary-clinton-donald-trump-not-bill-clinton/',
        'urlToImage': 'http://media.breitbart.com/media/2017/10/GettyImages-143345879-1-e1508032656241.jpg',
        'publishedAt': '2017-10-14T19:53:39Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Penny Starr',
        'title': 'EXCLUSIVE--Tony Perkins: Trump’s Commitment to Religious Liberty is Most Important Promise He’s Kept',
        'description': 'President of the Family Research Council Tony Perkins said that President Donald Trump is committed to protecting religious liberty',
        'url': 'http://www.breitbart.com/big-government/2017/10/14/exclusive-tony-perkins-trumps-commitment-to-religious-liberty-is-most-important-promise-hes-kept/',
        'urlToImage': 'http://media.breitbart.com/media/2017/10/tony-perkins-1-Penny-StarrBreitbart-News.jpg',
        'publishedAt': '2017-10-14T13:22:07Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Michelle Moons',
        'title': 'White House Working Mom Kellyanne Conway on the ‘High Horse Cavalry’ and Harvey Weinstein Scandal',
        'description': 'Counselor to the President Kellyanne Conway shared with Values Voter Summit participants on Friday the respect for and elevation of women in the White House as compared to the “high horse cavalry” and Harvey Weinstein.',
        'url': 'http://www.breitbart.com/big-government/2017/10/14/white-house-working-mom-kellyanne-conway-on-the-high-horse-cavalry-and-harvey-weinstein-scandal/',
        'urlToImage': 'http://media.breitbart.com/media/2017/10/Kellyanne-Conway-VVS-Mark-WilsonGetty-Images.jpg',
        'publishedAt': '2017-10-14T10:39:00Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Ian Hanchett',
        'title': "Sanders: GOP 'Pushing the Most Destructive and Unfair Budget and Tax Proposal' in Modern US History",
        'description': '',
        'url': 'http://www.breitbart.com/video/2017/10/14/sanders-gop-pushing-the-most-destructive-and-unfair-budget-and-tax-proposal-in-modern-us-history/',
        'urlToImage': 'http://media.breitbart.com/media/2017/04/Bernie-Sanders-speech-twitter.jpg',
        'publishedAt': '2017-10-14T10:40:39Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Dr. Susan Berry',
        'title': 'Planned Parenthood Sting Video Maker Vows, ‘I Am Not Backing Down’',
        'description': 'The video journalist who rocked the nation with his shocking recordings of Planned Parenthood officials allegedly involved in the sale of aborted baby body parts for profit, says he refuses to back down despite numerous attempts by the “abortion empire” to criminalize his work.',
        'url': 'http://www.breitbart.com/abortion/2017/10/14/planned-parenthood-sting-video-maker-vows-not-backing-down/',
        'urlToImage': 'http://media.breitbart.com/media/2017/10/David-Daleiden-FRC-podium-screenshot.jpg',
        'publishedAt': '2017-10-14T09:23:26Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Kristina Wong',
        'title': "Sebastian Gorka: Steve Bannon Like Obi-Wan Kenobi -- 'If You Strike Me Down Now, I Will Be More Powerful'",
        'description': 'The war against the Washington establishment is only beginning, chief strategist for the MAGA coalition Dr. Sebastian Gorka told the Value Voters Summit on Saturday.',
        'url': 'http://www.breitbart.com/big-government/2017/10/14/sebastian-gorka-steve-bannon-like-obi-wan-kenobi-if-you-strike-me-down-now-i-will-be-more-powerful/',
        'urlToImage': 'http://media.breitbart.com/media/2017/10/Obi-Wan-Kenobi-Lucasfilm-DisneySteve-Bannon-Stephen-K-Bannon-Getty.jpg',
        'publishedAt': '2017-10-14T14:15:51Z',
        'latitudes': [47.400902, 38.9041, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [-121.490494, -77.0172, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Ben Kew',
        'title': "Exclusive: Opposition Leaders on the Strange Collapse of Venezuela's Protest Movement",
        'description': '',
        'url': 'http://www.breitbart.com/national-security/2017/10/14/exclusive-opposition-leaders-strange-collapse-venezuelas-protest-movement/',
        'urlToImage': 'http://media.breitbart.com/media/2017/07/wi/ap/31/2n77rnc.jpg',
        'publishedAt': '2017-10-14T06:00:09Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Frances Martel',
        'title': 'Former Political Prisoner: Sound Reported in Cuba Sonic Attacks Similar to Prison Torture',
        'description': 'Following the publication of a sound the Associated Press (AP) asserts was potentially used to torture and maim American diplomats in Cuba, a former political prisoner tells Breitbart News that sound resembled what was used to torture him in a Cuban prison decades ago.',
        'url': 'http://www.breitbart.com/national-security/2017/10/13/former-cuban-political-prisoner-confirms-sound-reported-havana-sonic-attacks-similar-prison-torture/',
        'urlToImage': 'http://media.breitbart.com/media/2015/10/empty-jail-cell-prison-Reuters.jpg',
        'publishedAt': '2017-10-13T18:00:51Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }]
    },
    {
      'status': 'ok',
      'source': 'bbc-news',
      'sortBy': 'top',
      'articles': [{
        'author': 'BBC News',
        'title': 'More women accuse Weinstein of rape',
        'description': 'British actress Lysette Anthony says he attacked her at her London home in the late 1980s.',
        'url': 'http://www.bbc.co.uk/news/world-us-canada-41626563',
        'urlToImage': 'https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/0E1C/production/_98321630_composite_getty.gif',
        'publishedAt': '2017-10-15T08:29:45Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'BBC News',
        'title': "Woody Allen 'sad' for Harvey Weinstein",
        'description': 'The director tells the BBC he heard rumours but never the "horror stories" which have emerged.',
        'url': 'http://www.bbc.co.uk/news/world-us-canada-41626750',
        'urlToImage': 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/17518/production/_98321559_2b933287-d06d-4322-9c12-fa7032e1336a.jpg',
        'publishedAt': '2017-10-15T08:37:38Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'BBC News',
        'title': 'Austrians vote in watershed election',
        'description': "The country is tipped to return Europe's youngest leader amid a shift to the right after the migrant crisis.",
        'url': 'http://www.bbc.co.uk/news/world-europe-41625544',
        'urlToImage': 'https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/16D3E/production/_98320539_kurz2.jpg',
        'publishedAt': '2017-10-15T07:32:16Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'BBC News',
        'title': 'Fresh warnings as hurricane heads to UK',
        'description': 'Ophelia remains on track to hit the UK and Ireland as it weakens to a category two hurricane.',
        'url': 'http://www.bbc.co.uk/news/uk-41627442',
        'urlToImage': 'https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/10AE2/production/_98322386_mediaitem98322385.jpg',
        'publishedAt': '2017-10-15T11:37:42Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'BBC News',
        'title': 'Aramco says huge share listing on track',
        'description': "Oil giant Saudi Aramco dismisses reports the world's biggest share listing could be shelved.",
        'url': 'http://www.bbc.co.uk/news/business-41627231',
        'urlToImage': 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/67DF/production/_97719562_mediaitem97719561.jpg',
        'publishedAt': '2017-10-15T10:25:37Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'BBC News',
        'title': "'Devastation' as California wildfires rage",
        'description': 'Forty people have died and hundreds are still missing in California after six days of wildfires.',
        'url': 'http://www.bbc.co.uk/news/av/world-us-canada-41626484/california-wildfires-more-than-10000-firefighters-are-still-tackling-blazes',
        'urlToImage': 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/7988/production/_98321113_p05k0bk7.jpg',
        'publishedAt': '2017-10-15T10:32:41Z',
        'latitudes': [36.116203, 36.116203, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [-119.681564, -119.681564, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'BBC News',
        'title': "First flight to 'world's most useless airport'",
        'description': 'First commercial flight lands at "the world\'s most useless airport" on the remote island of St Helena.',
        'url': 'http://www.bbc.co.uk/news/av/world-africa-41625620/first-commercial-flight-lands-at-remote-island-of-st-helena',
        'urlToImage': 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/88BA/production/_98320053_p05jz6vm.jpg',
        'publishedAt': '2017-10-15T00:11:22Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'BBC News',
        'title': "Forces launch 'final assault' on Raqqa",
        'description': 'The Syrian Democratic Forces says it will not stop "until the whole city is clean" of IS militants.',
        'url': 'http://www.bbc.co.uk/news/world-middle-east-41626759',
        'urlToImage': 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/DCC0/production/_98321565_30472bc6-c2ee-4405-ab8a-e85aad468c79.jpg',
        'publishedAt': '2017-10-15T11:46:41Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'BBC News',
        'title': "Afghan police 'foil Kabul truck bomber'",
        'description': 'The driver is arrested after heavy explosives and bombs are found hidden under boxes of tomatoes.',
        'url': 'http://www.bbc.co.uk/news/world-asia-41626854',
        'urlToImage': 'https://ichef-1.bbci.co.uk/news/1024/cpsprodpb/0E8A/production/_98322730_mediaitem98322728.jpg',
        'publishedAt': '2017-10-15T10:41:55Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'BBC Sport',
        'title': 'Maria Sharapova beats Aryna Sabalenka to win Tianjin Open title',
        'description': 'Former world number one Maria Sharapova wins her first title since May 2015, beating Aryna Sabalenka 7-5 7-6 (10-8) in the Tianjin Open final.',
        'url': 'http://www.bbc.co.uk/sport/tennis/41626705',
        'urlToImage': 'http://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/113D4/production/_98321607_sharapova_afp.jpg',
        'publishedAt': '2017-10-15T11:28:42Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }]
    },
    {
      'status': 'ok',
      'source': 'fortune',
      'sortBy': 'top',
      'articles': [{
        'author': 'Associated Press',
        'title': 'Harvey Weinstein Expelled From Academy Amid Sexual Assault Allegations',
        'description': 'Amid sexual assault allegations',
        'url': 'http://time.com/4982921/harvey-weinstein-expelled-from-academy-amid-sexual-assault-allegations/',
        'urlToImage': 'https://timedotcom.files.wordpress.com/2017/10/weinstein.jpeg?w=720',
        'publishedAt': '2017-10-14T20:40:52Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': 'Tulane Offers Free Tuition to Puerto Rican College Students Displaced by Hurricane Maria',
        'description': 'They’re paying it forward, after other colleges took in their students following Katrina.',
        'url': 'http://fortune.com/2017/10/14/tulane-free-tuition-puerto-rico/',
        'urlToImage': 'https://fortunedotcom.files.wordpress.com/2017/10/tulane-u-graduation.png',
        'publishedAt': '2017-10-14T15:52:21Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': 'Fierce Winds Stir Deadly California Wildfires',
        'description': 'The wildfires have killed 35 people.',
        'url': 'http://fortune.com/2017/10/14/fierce-winds-stir-deadly-california-wildfires/',
        'urlToImage': 'https://fortunedotcom.files.wordpress.com/2017/10/ap_17282806964510.jpg',
        'publishedAt': '2017-10-14T12:36:30Z',
        'latitudes': [36.116203, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [-119.681564, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': 'Bitcoin’s Big Compromise Is Unravelling As a Contentious Upgrade Threatens to Split the Network',
        'description': 'Bitcoin is set to split in two in November over a contentious upgrade.',
        'url': 'http://fortune.com/2017/10/14/bitcoins-big-compromise-is-unravelling-as-a-contentious-upgrade-threatens-to-split-the-network/',
        'urlToImage': 'https://fortunedotcom.files.wordpress.com/2017/08/bitcoin-cash.gif',
        'publishedAt': '2017-10-14T14:09:43Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': 'These Are the Top 5 Safest Cities in the World to Live In',
        'description': 'No U.S. city even cracked the top 10.',
        'url': 'http://fortune.com/video/2017/10/13/top-5-safest-cities-in-the-world/',
        'urlToImage': 'https://fortunedotcom.files.wordpress.com/2017/10/singapore.jpg?w=820&h=570&crop=1',
        'publishedAt': '2017-10-13T20:29:41Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': 'Hackers Stole Restricted F-35 Data From an Australian Contractor',
        'description': 'The attackers left signs they may have been Chinese.',
        'url': 'http://fortune.com/2017/10/14/hacked-f-35-data/',
        'urlToImage': 'https://fortunedotcom.files.wordpress.com/2015/09/20278731994_730232d6d5_k.jpg',
        'publishedAt': '2017-10-14T15:05:41Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': "Hillary Clinton: 'Currents of Anger and Resentment Are Underpinning Our National Conversation'",
        'description': 'Clinton received an honorary doctorate from Swansea University in Wales.',
        'url': 'http://fortune.com/2017/10/14/hillary-clinton-swansea-university-speech/',
        'urlToImage': 'https://fortunedotcom.files.wordpress.com/2017/10/gettyimages-861263076.jpg',
        'publishedAt': '2017-10-14T14:51:23Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': 'LaGuardia Airport Evacuated After Man Claims to Have a Bomb',
        'description': 'A number of flights were diverted from the terminal for several hours',
        'url': 'http://fortune.com/2017/10/14/laguardia-airport-evacuated-bomb-threat/',
        'urlToImage': 'https://fortunedotcom.files.wordpress.com/2016/08/587178606.jpg',
        'publishedAt': '2017-10-14T13:35:22Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': "None",
        'title': 'Report: Iran Was Behind Cyber Attack on British Lawmakers',
        'description': 'Britain\'s parliament was hit by a "sustained and determined" cyber attack in June.',
        'url': 'http://fortune.com/2017/10/14/report-iran-behind-cyber-attack-british-lawmakers/',
        'urlToImage': 'https://fortunedotcom.files.wordpress.com/2017/03/gettyimages-652860538.jpg',
        'publishedAt': '2017-10-14T12:29:29Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }]
    },
    {
      'status': 'ok',
      'source': 'time',
      'sortBy': 'top',
      'articles': [{
        'author': 'Ellen Knickmeyer, Terry Chea / AP',
        'title': "'It's Like Jail.' More Than 100,000 People Still Can't Return to Their Homes as Wildfires Tear Through California",
        'description': '"It\'s like jail"',
        'url': 'http://time.com/4982769/gusty-winds-fan-california-wildfires-evacuations/',
        'urlToImage': 'https://timedotcom.files.wordpress.com/2017/10/california-wildfire-wine-napa.jpg?w=720',
        'publishedAt': '2017-10-14T16:12:47Z',
        'latitudes': [36.116203, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [-119.681564, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Aric Jenkins',
        'title': 'President Trump Brags About Drop in Health Insurance Stocks',
        'description': 'He also claimed that health insurance stocks fell as a result of his decision',
        'url': 'http://time.com/4982699/donald-trump-executive-order-health-care/',
        'urlToImage': 'https://timedotcom.files.wordpress.com/2017/10/rts1gcko.jpg?w=720',
        'publishedAt': '2017-10-14T14:22:31Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Ken Ritter / AP',
        'title': 'Las Vegas Gunman Targeted Jet Fuel Tanks and Responding Police',
        'description': 'He seemed determined to inflict even more carnage than the 58 people he murdered',
        'url': 'http://time.com/4982716/las-vegas-gunman-targeted-jet-fuel-tanks-responding-police/',
        'urlToImage': 'https://timedotcom.files.wordpress.com/2017/10/las-vegas-stephen-paddock-motives.jpg?w=720',
        'publishedAt': '2017-10-14T13:39:46Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Associated Press',
        'title': 'Harvey Weinstein Expelled From Academy Amid Sexual Assault Allegations',
        'description': 'Amid sexual assault allegations',
        'url': 'http://time.com/4982921/harvey-weinstein-expelled-from-academy-amid-sexual-assault-allegations/',
        'urlToImage': 'https://timedotcom.files.wordpress.com/2017/10/weinstein.jpeg?w=720',
        'publishedAt': '2017-10-14T20:40:52Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Alexis Adele / AP',
        'title': '4 Dead After Plane Crashes Into the Sea Off Ivory Coast',
        'description': 'Two Moldovans and four French citizens are injured',
        'url': 'http://time.com/4982696/4-dead-plane-crash-ivory-coast/',
        'urlToImage': 'https://timedotcom.files.wordpress.com/2017/10/ivory-coast-plane.jpg?w=720',
        'publishedAt': '2017-10-14T13:00:36Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Martin Benedyk, Rob Gillies, Jill Colvin / AP',
        'title': 'Freed Hostage Says Haqqani Kidnappers Killed His Infant Daughter',
        'description': 'He also said they raped his wife',
        'url': 'http://time.com/4982694/haqqani-network-afghanistan-kidnappers-killed-child/',
        'urlToImage': 'https://timedotcom.files.wordpress.com/2017/10/joshua-boyle-afghanistan.jpg?w=720',
        'publishedAt': '2017-10-14T13:02:25Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Alexia Fernandez / People',
        'title': "Kris Jenner's Stand-In House From 'Keeping Up With the Kardashians' Hits the Market",
        'description': 'There is certainly a lot to see inside the home',
        'url': 'http://time.com/money/4982721/kris-jenner-house/',
        'urlToImage': 'https://timedotcom.files.wordpress.com/2016/05/kris-jenner-changing-name-kris-kardashian.jpg?w=720',
        'publishedAt': '2017-10-14T14:04:48Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Abdi Guled / AP',
        'title': "'It's a Disaster.' 20 People Killed as Truck Bomb Detonates in Somalia's Capital",
        'description': 'At least 15 people were injured',
        'url': 'http://time.com/4982757/somalia-truck-bomb-20-dead-hodan-district/',
        'urlToImage': 'https://timedotcom.files.wordpress.com/2017/10/somalia-car-explosion.jpg?w=720',
        'publishedAt': '2017-10-14T15:42:05Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Associated Press',
        'title': "Vatican Court Convicts Ex-Children's Hospital President for Diverting Donations to Renovate Cardinal's Flat",
        'description': 'He was sentenced to a suspended one-year sentence',
        'url': 'http://time.com/4982701/vatican-court-childrens-hospital-embezzlement-conviction/',
        'urlToImage': 'https://timedotcom.files.wordpress.com/2017/10/vatican-pope-hospital.jpg?w=720',
        'publishedAt': '2017-10-14T13:27:59Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Associated Press',
        'title': "Duchess of Cambridge's Uncle Charged With Assault in London",
        'description': 'Gary Goldsmith faces a charge of assault by beating',
        'url': 'http://time.com/4982722/duchess-cambridge-uncle-charged-assault/',
        'urlToImage': 'https://timedotcom.files.wordpress.com/2017/10/gary-goldsmith-britain.jpg?w=720',
        'publishedAt': '2017-10-14T13:53:24Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }]
    },
    {
      'status': 'ok',
      'source': 'the-wall-street-journal',
      'sortBy': 'top',
      'articles': [{
        'author': 'Josh Zumbrun',
        'title': 'World’s Central Bankers, Finance Officials Keep Close Eye on Selection of Next Fed Chief',
        'description': 'As President Donald Trump mulls whether to keep Janet Yellen as chairwoman or pick a new candidate, officials around the world are watching the process, the result of which is likely to affect their economies.',
        'url': 'https://www.wsj.com/articles/worlds-central-bankers-finance-officials-keep-close-eye-on-selection-of-next-fed-chief-1508065201',
        'urlToImage': 'https://si.wsj.net/public/resources/images/BN-VP225_3g5uR_TOP_20171014180311.jpg',
        'publishedAt': '2017-10-15T11:00:00Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Sarah McFarlane',
        'title': 'Global Gas Producers Turn to Next Challenge: Finding Buyers',
        'description': 'After spending hundreds of billions of dollars to transform themselves into global natural-gas giants, big energy companies face a new challenge: generating more demand as supplies threaten to balloon and prices languish.',
        'url': 'https://www.wsj.com/articles/global-gas-producers-turn-to-next-challenge-finding-buyers-1508068801',
        'urlToImage': 'https://si.wsj.net/public/resources/images/BN-VO973_3aTXc_TOP_20171013153152.jpg',
        'publishedAt': '2017-10-15T12:00:00Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Michael C. Bender',
        'title': 'Trump’s Moves Ratchet Up Pressure on Congress',
        'description': 'President Donald Trump is increasing pressure on Congress, adding to lawmakers’ already complicated to-do list at a time when Republicans have full political control of the nation’s capital but no major legislative victories to show for it.',
        'url': 'https://www.wsj.com/articles/trump-moves-ratchet-up-pressure-on-congress-1507936683',
        'urlToImage': 'https://si.wsj.net/public/resources/images/BN-VP076_3g1PZ_TOP_20171013180619.jpg',
        'publishedAt': '2017-10-13T23:18:00Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Erich Schwartzel',
        'title': 'Academy Expels Harvey Weinstein After Sexual Assault Allegations',
        'description': 'Harvey Weinstein, the executive more affiliated with the Oscars than any producer in Hollywood, has been kicked out of the Academy of Motion Picture Arts and Sciences.',
        'url': 'https://www.wsj.com/articles/academy-expels-harvey-weinstein-after-sexual-assault-allegations-1508012843',
        'urlToImage': 'https://si.wsj.net/public/resources/images/BN-VP205_WEINST_SOC_20171014135443.jpg',
        'publishedAt': '2017-10-14T20:27:00Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Bob Tita',
        'title': 'Steel Is Back in Style With Car Makers',
        'description': 'Auto makers are using more lightweight, high-strength steel for components that shave pounds off their latest models.',
        'url': 'https://www.wsj.com/articles/steel-is-back-in-style-with-car-makers-1508065204',
        'urlToImage': 'https://si.wsj.net/public/resources/images/BN-VO960_autost_TOP_20171013145940.jpg',
        'publishedAt': '2017-10-15T11:00:00Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Erin Ailworth',
        'title': 'New California Fires Spread, Triggering Further Evacuations',
        'description': 'More evacuations were ordered in Northern California as some wildfires grew and new ones were sparked; elsewhere in the region, officials gained control of some blazes, allowing residents to return to their homes.',
        'url': 'https://www.wsj.com/articles/new-california-fires-spread-triggering-further-evacuations-1508018902',
        'urlToImage': 'https://si.wsj.net/public/resources/images/BN-VP198_3g1RL_TOP_20171014132333.jpg',
        'publishedAt': '2017-10-14T22:08:00Z',
        'latitudes': [36.116203, 36.116203, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [-119.681564, -119.681564, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Miriam Gottfried',
        'title': 'Barbarians Open Their Gates as Blackstone, Others Seek Retail Cash',
        'description': 'Blackstone Group LP is pushing aggressively into products for retail investors, betting it can raise as much from them over the long term as it does from the institutions that form the main source of its $371 billion of assets',
        'url': 'https://www.wsj.com/articles/barbarians-open-their-gates-as-blackstone-others-seek-retail-cash-1508068802',
        'urlToImage': 'https://si.wsj.net/public/resources/images/BN-VO995_3ehjk_TOP_20171013162448.jpg',
        'publishedAt': '2017-10-15T12:00:00Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Alexander Osipovich',
        'title': 'Pentagon Turns to High-Speed Traders to Fortify Markets Against Cyberattack',
        'description': 'Pentagon officials have been meeting with dozens of high-speed traders and others from Wall Street to study how hackers could unleash chaos in the U.S. financial system.',
        'url': 'https://www.wsj.com/articles/pentagon-turns-to-high-speed-traders-to-fortify-markets-against-cyberattack-1508065202',
        'urlToImage': 'https://si.wsj.net/public/resources/images/BN-VO552_DARPA__SOC_20171012172719.jpg',
        'publishedAt': '2017-10-15T11:00:00Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Associated Press',
        'title': 'Hundreds Killed by Truck Bomb in Somalia’s Capital',
        'description': 'The death toll from a massive explosion in Somalia’s capital has risen to 189, with more than 200 others injured, police and hospital sources said Sunday, making it the single deadliest attack ever in the Horn of Africa nation.',
        'url': 'https://www.wsj.com/articles/bomb-rocks-somalias-capital-20-people-killed-1508026482',
        'urlToImage': 'https://si.wsj.net/public/resources/images/BN-VP230_3g4Jd_TOP_20171014194930.jpg',
        'publishedAt': '2017-10-15T00:14:00Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Christopher Mims',
        'title': 'Your Next Home Could Run on Batteries',
        'description': 'A combination of solar power and the rise of residential energy storage is paving the way for a new kind of cable cutting.',
        'url': 'https://www.wsj.com/articles/your-next-home-could-run-on-batteries-1508065205',
        'urlToImage': 'https://si.wsj.net/public/resources/images/BN-VO451_KEYWOR_SOC_20171012151212.jpg',
        'publishedAt': '2017-10-15T11:00:00Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }]
    },
    {
      'status': 'ok',
      'source': 'the-huffington-post',
      'sortBy': 'top',
      'articles': [{
        'author': 'Jonathan Cohn',
        'title': "Trump's Obamacare Sabotage Is Doing Real Damage To American Health Care",
        'description': 'A series of blows is taking its toll.',
        'url': 'https://www.huffingtonpost.com/entry/trumps-obamacare-sabotage-is-doing-real-damage-to-american-health-care_us_59e1840be4b04d1d5182082d',
        'urlToImage': 'https://img.huffingtonpost.com/asset/59e1844d200000d554086bed.jpeg?cache=rgyicgzvrk&ops=1910_1000',
        'publishedAt': '2017-10-14T20:19:13Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Carla Herreria',
        'title': "'SNL' Finally Took On The Harvey Weinstein Scandal -- But Is It Too Late?",
        'description': 'The show burned Weinstein and addressed the abuse in Hollywood, after failing to mention the scandal last week.',
        'url': 'https://www.huffingtonpost.com/entry/snl-harvey-weinstein_us_59dea4b1e4b0fdad73b1e739',
        'urlToImage': 'https://img.huffingtonpost.com/asset/59e2f7492000000934086d0e.png?cache=0cspaveedo&ops=1910_1000',
        'publishedAt': '2017-10-15T06:04:53Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Dominique Mosbergen',
        'title': "On 'SNL,' Alec Baldwin’s Donald Trump Can't Stay On Message Either",
        'description': "The actor rehashed the president's distracted, headline-grabbing week during the show's cold open sketch on Saturday.",
        'url': 'https://www.huffingtonpost.com/entry/alec-baldwin-trump-snl-harrisburg-rally-speech_us_59e33e8ae4b03a7be5812cea',
        'urlToImage': 'https://img.huffingtonpost.com/asset/59e347fb2d0000971730a552.png?cache=chwidgj6lr&ops=1910_1000',
        'publishedAt': '2017-10-15T13:02:05Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Willa Frej, Carla Herreria',
        'title': 'Harvey Weinstein Kicked Out Of Motion Picture Academy',
        'description': 'The Academy of Motion Picture Arts and Sciences also slammed Hollywood for its "willful ignorance and complicity."',
        'url': 'https://www.huffingtonpost.com/entry/academy-kicks-out-harvey-weinstein_us_59df328ce4b0fdad73b220ea',
        'urlToImage': 'https://img.huffingtonpost.com/asset/59df33ab1500002000da1127.jpeg?cache=ht4tgfqcak&ops=1910_1000',
        'publishedAt': '2017-10-14T20:36:14Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Carla Herreria',
        'title': 'Toll Rises To 34 Dead As Catastrophic Fires Spread In Northern California',
        'description': "One teen died when his family tried to outrun the fire. An older woman stopped breathing in her husband's arms as they fought to survive in a pool.",
        'url': 'https://www.huffingtonpost.com/entry/victims-northern-california-wildfires_us_59e12d11e4b03a7be580c49d',
        'urlToImage': 'https://img.huffingtonpost.com/asset/59e14e9c1500002000da16a9.png?cache=greccmwkxo&ops=1910_1000',
        'publishedAt': '2017-10-14T02:24:47Z',
        'latitudes': [36.116203, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [-119.681564, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Carla Herreria',
        'title': "Film Producers' Discussion On Weinstein Scandal Had Only 1 Woman",
        'description': 'Amy Pascal was the only female on the panel convened by The Hollywood Reporter.',
        'url': 'https://www.huffingtonpost.com/entry/hollywood-reporter-roundtable-weinstein-one-woman_us_59e2bcfee4b03a7be5810b95',
        'urlToImage': 'https://img.huffingtonpost.com/asset/59e2d4652000000934086cfd.png?cache=rvcaozocpm&ops=1910_1000',
        'publishedAt': '2017-10-15T12:38:09Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Reuters',
        'title': 'Thousands More Flee Their Homes As California Wildfires Spread',
        'description': '“It’s an unwieldy beast right now,” a fire information officer said.',
        'url': 'https://www.huffingtonpost.com/entry/wildfires-california-saturday-evacuations_us_59e25984e4b0a52aca184cb9',
        'urlToImage': 'https://img.huffingtonpost.com/asset/59e25af11500002000da1753.jpeg?cache=dpvf34mulq&ops=1910_1000',
        'publishedAt': '2017-10-14T18:48:20Z',
        'latitudes': [36.116203, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [-119.681564, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Jessica Schulberg',
        'title': 'A Secretive NYC Backchannel May Be The Best Hope For Avoiding War With North Korea',
        'description': 'The North Korean diplomats in New York “don’t engage in propaganda, they don’t bang on the table, they don’t engage in threats,” a veteran diplomat said.',
        'url': 'https://www.huffingtonpost.com/entry/north-korea-new-york-channel_us_59de4babe4b0eb18af05877d',
        'urlToImage': 'https://img.huffingtonpost.com/asset/59de4de02d0000265e309c70.jpeg?cache=dmnwxkjibb&ops=1910_1000',
        'publishedAt': '2017-10-14T20:16:36Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Howard Fineman',
        'title': 'The Method To The Moron’s Madness',
        'description': 'The powers that be are underestimating Trump -- again.',
        'url': 'https://www.huffingtonpost.com/entry/trump-method-madness_us_59e125d7e4b03a7be580b923',
        'urlToImage': 'https://img.huffingtonpost.com/asset/59e13f17200000d554086bc0.jpeg?cache=17dedgdnu2&ops=1910_1000',
        'publishedAt': '2017-10-13T22:44:27Z',
        'latitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }, {
        'author': 'Jenna Amatulli, Damon Dahlen',
        'title': "'It's A Vibrant Environment': Meet The People Of Detroit",
        'description': 'This is the real Motor City.',
        'url': 'https://www.huffingtonpost.com/entry/its-a-vibrant-environment-meet-the-people-of-detroit_us_59d5ace6e4b0becae8025116',
        'urlToImage': 'https://img.huffingtonpost.com/asset/59e0f0a21500004800da155b.png?cache=qvgcnmrbgh&ops=1910_1000',
        'publishedAt': '2017-10-13T17:24:45Z',
        'latitudes': [42.383, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        'longitudes': [-83.1022, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }]
    }];

  stories: Array<Story> = [];

  parseStories() {
    this.json.forEach(
      (jso: any) => {
        //title
        //desc
        //url
        //date
        //lat
        //long
        jso.articles.forEach(
          (article) => {
            let adjustedLat = article.latitudes[0];
            let adjustedLong = article.longitudes[0];
            if (article.latitudes[0] === 0) {
              adjustedLat = this.randomLatitude();
            }
            if (article.longitudes[0] === 0) {
              adjustedLong = this.randomLongitude();
            }
            let story: Story = new Story(article.title, article.description, article.url, article.publishedAt, adjustedLat, adjustedLong, this);
            this.stories.push(story);
          }
        );
      }
    );
  }

  randomLatitude() {
    return Math.random() * (46 - 34) + 34
  }

  randomLongitude() {
return Math.random() * (-92 - -114) + -114;
   }

  getRelatedStories(story: Story): Promise<Array<Story>> {
    return new Promise(
      (resolve: Function, reject: Function): void => {
        // this.http.post(
        //   Configuration.BACK_END_HOST_URL + "/related-stories",
        //   {
        //     "story": story
        //   },
        //   new RequestOptions({
        //     headers: new Headers({
        //       "Content-Type": "application/json"
        //     })
        //   })).subscribe(
        //   (response: Response): void => {
        //     const RESPONSE_BODY: Array<Story> = response.json();
        //     resolve(RESPONSE_BODY);
        //   }, (error: any): void => {
        //     reject(error);
        //   }
        // );
        let stories: Array<Story> = [];
        let offset = Math.floor(Math.random() * (this.stories.length - 8));
        for (let i: number = offset; i < offset + 7; i++) {
          stories.push(this.stories[i]);
        }

        resolve(stories);
      }
    );
  }
}
