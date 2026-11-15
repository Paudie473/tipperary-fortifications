export const seedData = {
  users: {
    _model: "User",
    brianBoru: {
      firstName: "Brian",
      lastName: "Boru",
      email: "brianboru@tipperaryfortifications.ie",
      password: "secret",
      role: "user"
    },
    conorOBrien: {
      firstName: "Conor",
      lastName: "O'Briain",
      email: "conorobrien@tipperaryfortifications.ie",
      password: "secret",
      role: "user"
    },
    nicholasPurcell: {
      firstName: "Nicholas",
      lastName: "Purcell",
      email: "nicholaspurcell@tipperaryfortifications.ie",
      password: "secret",
      role: "user"
    },
    jamesButler: {
      firstName: "James",
      lastName: "Butler",
      email: "jamesbutler@tipperaryfortifications.ie",
      password: "secret",
      role: "user"
    },
    theobaldWalter: {
      firstName: "Theobald",
      lastName: "Walter",
      email: "theobaldwalter@tipperaryfortifications.ie",
      password: "secret",
      role: "user"
    },
    johnKingOfEngland: {
      firstName: "John",
      lastName: "Plantagenet",
      email: "johnplantagenet@tipperaryfortifications.ie",
      password: "secret",
      role: "user"
    },
    williamDeBurgh: {
      firstName: "William",
      lastName: "de Burgh",
      email: "williamdeburgh@tipperaryfortifications.ie",
      password: "secret",
      role: "user"
    },
    thomasButler: {
      firstName: "Thomas",
      lastName: "Butler",
      email: "thomasbutler@tipperaryfortifications.ie",
      password: "secret",
      role: "user"
    },
    edmundButler: {
      firstName: "Edmund",
      lastName: "Butler",
      email: "edmundbutler@tipperaryfortifications.ie",
      password: "secret",
      role: "user"
    },
    richardDukeOfYork: {
      firstName: "Richard",
      lastName: "Plantagenet",
      email: "richardplantagenet@tipperaryfortifications.ie",
      password: "secret",
      role: "user"
    },
    stRuadhan: {
      firstName: "Ruadhán",
      lastName: "of Lorrha",
      email: "ruadhanoflorrha@tipperaryfortifications.ie",
      password: "secret",
      role: "user"
    },
    donalMorOBrien: {
      firstName: "Dónal Mór",
      lastName: "Ó Briain",
      email: "donalmorobrien@tipperaryfortifications.ie",
      password: "secret",
      role: "user"
    },
    johnKennedy: {
      firstName: "John",
      lastName: "Kennedy",
      email: "johnkennedy@tipperaryfortifications.ie",
      password: "secret",
      role: "user"
    },
    edwardI: {
      firstName: "Edward",
      lastName: "Longshanks",
      email: "edwardlongshanks@tipperaryfortifications.ie",
      password: "secret",
      role: "user"
    },
    // This specially seeded admin account is currently the only possible one with the "admin" role
    admin: {
      firstName: "Tipperary",
      lastName: "Admin",
      email: "admin@tipperaryfortifications.ie",
      password: "secret",
      role: "admin"
    }
  },
  sites: {
    _model: "Site",
    rockOfCashel: {
        name: "Rock of Cashel",
        address: "St. Patrick's Rock, Cashel, Co. Tipperary, E25 KX44, Ireland",
        type: "Royal Site",
        lattitude: 52.52000,
        longitude: -7.89000,
        // Wikipedia: https://en.wikipedia.org/wiki/Rock_of_Cashel
        description: "The Rock of Cashel (Irish: Carraig Phádraig), also known as Cashel of the Kings and St. Patrick's Rock, is a historical site that served both as an ecclesiatic settlement and a seat of power for the Kings of Munster.",
        userid: "->users.brianBoru",
        img: "https://res.cloudinary.com/dgegej64r/image/upload/c_fill,f_auto,g_auto,h_800,q_auto,w_1200/q5czm21rbxrp924i2cfj?_a=BAMARORk0"
    },
    loughmoeCastle: {
        name: "Loughmoe Castle",
        address: "Loughmoe, Loughmore, Co. Tipperary, Ireland",
        type: "Castle",
        lattitude: 52.7549316,
        longitude: -7.82644719,
        // Wikipedia: https://en.wikipedia.org/wiki/Loughmoe_Castle
        description: "Loughmoe Castle (Irish: Caisláin Luach Magh, also spelt Loughmore Castle) is a ruined castle in County Tipperary, Ireland.",
        userid: "->users.nicholasPurcell"
    },
    cahirCastle: {
        name: "Cahir Castle",
        address: "Castle Street, Townparks, Cahir, Co. Tipperary, E21 P652, Ireland",
        type: "Castle",
        lattitude: 52.3745,
        longitude: -7.9272,
        // Wikipedia: https://en.wikipedia.org/wiki/Cahir_Castle
        description: "Cahir Castle (Irish: Caisleán na Cathrach), one of the largest castles in Ireland, is sited on an island in the river Suir.",
        userid: "->users.conorOBrien",
        img: "https://res.cloudinary.com/dgegej64r/image/upload/c_fill,f_auto,g_auto,h_800,q_auto,w_1200/aelgqkokv1navynxuyzt?_a=BAMARORk0"
    },
    roscreaCastle: {
        name: "Roscrea Castle",
        address: "Castle Street, Roscrea, Co. Tipperary, Ireland",
        type: "Castle",
        lattitude: 52.95494,
        longitude: -7.79788,
        // Wikipedia: https://en.wikipedia.org/wiki/Roscrea_Castle
        description: "Roscrea Castle is a 13th-century motte-and-bailey castle in the town of Roscrea, Ireland.",
        userid: "->users.jamesButler"
    },
    ormondCastle: {
        name: "Ormonde Castle",
        address: "Castle Park, Carrick-on-Suir, Co. Tipperary, E32 CX59, Ireland",
        type: "Manor / Fortified Residence",
        lattitude: 52.34500,
        longitude: -7.40778,
        // Wikipedia: https://en.wikipedia.org/wiki/Ormonde_Castle
        description: "Ormond Castle (Irish: Caisleán Urmhumhan) is a castle on the River Suir on the east side of Carrick-on-Suir, County Tipperary, Ireland.",
        userid: "->users.thomasButler"
    },
    ardfinnanCastle: {
      name: "Ardfinnan Castle",
      address: "Ardfinnan, Co. Tipperary, Ireland",
      lattitude: 52.311190,
      longitude: -7.880420,
      type: "Castle",
      description: "Ardfinnan Castle is an Anglo-Norman castle situated on a rocky elevation overlooking the River Suir in County Tipperary. It was constructed in 1185 on the orders of King John, alongside Lismore Castle, to secure an important river crossing and strengthen Norman control of the region. It is considered one of the earliest castles built by the Norman Crown in Ireland. The fortified complex originally included a keep, gateway, towers and a preceptory associated with the Knights Templar. Its strategic position provided extensive views across the Suir valley towards the Knockmealdown Mountains and Galtee Mountains. The castle was later used as a military garrison during the French Revolutionary Wars and remains a privately occupied historic property.",
      userid: "->users.johnKingOfEngland"
    },
    nenaghCastle: {
      name: "Nenagh Castle",
      address: "Castle Street, Nenagh, Co. Tipperary, Ireland",
      lattitude: 52.864430,
      longitude: -8.197550,
      type: "Castle",
      description: "Nenagh Castle is a Norman castle in the town of Nenagh, County Tipperary, constructed between approximately 1200 and 1220 by Theobald Walter, the first Chief Butler of Ireland. It became the principal residence of the Butler family and an important administrative centre for their estates in the region. The original complex included a large circular keep, curtain walls, several towers, a hall and a fortified gatehouse. The surviving five-storey cylindrical keep is particularly notable for its unusual architectural design and decorated windows. The castle changed hands during various conflicts and was briefly controlled by the Mac Ibrien family before returning to Butler ownership in the 16th century. Much of the original complex has disappeared, although the impressive keep remains a prominent landmark in Nenagh.",
      userid: "->users.theobaldWalter"
    },
    athasselAbbey: {
      name: "Athassel Abbey",
      address: "Athassel, Golden, Co. Tipperary, Ireland",
      lattitude: 52.479444,
      longitude: -7.983611,
      type: "Monastic Site",
          description: "Athassel Priory is an extensive medieval Augustinian monastery situated beside the River Suir near Golden, County Tipperary. Founded in the late 12th century under the patronage of William de Burgh, it developed into the largest medieval priory in Ireland, covering approximately four acres. The monastery was home to Augustinian Canons Regular and included a substantial church, cloisters, domestic buildings, a gatehouse and other structures. Its buildings were expanded and modified over approximately three centuries. The priory suffered repeated destruction, including attacks by Brian of Thomond in 1329 and John Fitzgerald of Desmond in 1581. Following the dissolution of the monasteries in the 16th century, the complex fell into ruin. Its surviving remains provide an impressive example of the scale and architectural development of medieval monastic institutions in Ireland.",
      userid: "->users.williamDeBurgh"
    },
    holycrossAbbey: {
      name: "Holycross Abbey",
      address: "Holycross Village, Holycross, Co. Tipperary, Ireland",
      lattitude: 52.639343,
      longitude: -7.868144,
      type: "Monastic Site",
      description: "Holycross Abbey is a former Cistercian monastery situated on the River Suir near Thurles in County Tipperary. Founded in the 12th century, traditionally around 1169, it was established under the patronage of Domnall Mór Ua Briain, King of Thomond. The abbey became an important religious centre and was associated with a relic of the True Cross, which gave the monastery its name and attracted pilgrims from across Ireland. Its buildings include a substantial Gothic church, cloisters, monastic living quarters and other structures characteristic of Cistercian architecture. The abbey experienced decline following the dissolution of the monasteries but remained an important religious landmark. Extensive restoration work was undertaken in the 20th century, and the former abbey church continues to serve as a place of worship.",
      userid: "->users.donalMorOBrien"
    },
    grantstownCastle: {
      name: "Grantstown Castle",
      address: "Grantstown, Kilfeakle, Co. Tipperary, Ireland",
      lattitude: 52.509100,
      longitude: -8.047860,
      type: "Manor / Fortified Residence",
      description: "Grantstown Castle is a historic fortified residence in the townland of Grantstown near Kilfeakle, County Tipperary. It forms part of the wider medieval landscape of fortified residences and tower houses that developed throughout the county following the Anglo-Norman settlement of Ireland. Such buildings generally served as the fortified homes of local landowning families, combining domestic accommodation with defensive features such as thick stone walls, narrow windows and elevated entrances. The castle is associated with the historic landed families of the area, although detailed information about its construction, ownership and subsequent history is limited.",
      userid: "->users.nicholasPurcell"
    },
    lackeenCastle: {
      name: "Lackeen Castle",
      address: "Lackeen, Abbeville, Lorrha, Co. Tipperary, Ireland",
      lattitude: 53.088400,
      longitude: -8.073800,
      type: "Manor / Fortified Residence",
      description: "Lackeen Castle is a historic tower house situated near Lorrha in County Tipperary. The castle is associated with the Kennedy family and is believed to have originated as a fortified stronghold in the medieval period, with substantial rebuilding or modification during the 16th century. It is a characteristic example of an Irish tower house, a type of fortified residence commonly constructed by landowning families between the 15th and 17th centuries. Its defensive architecture includes thick masonry walls and a vertically arranged series of rooms designed to provide both domestic accommodation and protection. The castle is also historically significant because the nearby area is associated with the discovery of the Lorrha Missal, an important early medieval Irish manuscript. Lackeen Castle is a protected National Monument.",
      userid: "->users.johnKennedy"
    },
    farneyCastle: {
      name: "Farney Castle",
      address: "Farney, Holycross, Co. Tipperary, Ireland",
      lattitude: 52.639000,
      longitude: -7.850000,
      type: "Manor / Fortified Residence",
      description: "Farney Castle is a historic fortified tower house situated near Holycross in County Tipperary. It represents the tradition of fortified domestic architecture that developed in Ireland during the late medieval period, when local landowning families constructed tower houses to provide secure residences and demonstrate their social status. Its stone structure and defensive architectural features reflect the importance of family strongholds in the rural landscape of medieval Tipperary. The castle has undergone restoration and remains a notable historic building in the area. Detailed historical information concerning its original construction and successive occupants is relatively limited.",
      userid: "->users.nicholasPurcell"
    },
    fethardTownWalls: {
      name: "Fethard Town Walls",
      address: "Fethard Town Centre, Fethard, Co. Tipperary, Ireland",
      lattitude: 52.465800,
      longitude: -7.692700,
      type: "Fortified Settlement",
      description: "The medieval town walls of Fethard are among the best-preserved examples of medieval urban defences in Ireland. Fethard was established as an Anglo-Norman settlement around the beginning of the 13th century, and its defensive walls were developed during the medieval period to protect its inhabitants, commercial activity and strategic importance. The earliest documented reference to the walls dates to 1292, when a royal grant allowed taxes to be collected to fund the town's fortification. Further grants were issued during the 14th and 15th centuries, supporting the construction and improvement of the stone defences. The walls included defensive towers and fortified gateways, with some surviving sections reaching considerable heights. Fethard later withstood threats during the Confederate and Cromwellian wars. Despite the removal of several gates and sections during the 19th century, substantial portions of the medieval walls remain standing.",
      userid: "->users.richardDukeOfYork"
    },
    carrickOnSuirTownWalls: {
      name: "Carrick-on-Suir Town Walls",
      address: "Town Centre, Carrick-on-Suir, Co. Tipperary, Ireland",
      lattitude: 52.347650,
      longitude: -7.418971,
      type: "Fortified Settlement",
      description: "The medieval town walls of Carrick-on-Suir were constructed to defend the Anglo-Norman settlement that developed on the northern bank of the River Suir. The town's origins date to the 12th and 13th centuries, and its strategic location beside an important river crossing contributed to its growth as a commercial and administrative centre. The earliest documented reference to its walls appears in the Ormond Deeds of 1324. During the 14th century, royal grants of murage and pontage were issued to support the construction and maintenance of the town's defensive walls and bridge. A major phase of building took place from 1445 under Edmund Mac Richard Butler, who was responsible for the construction of the bridge, castle and town walls. The fortifications protected both the Butler family's holdings and the town's commercial interests. Surviving sections can still be seen around Castle Park and other parts of the town.",
      userid: "->users.edmundButler"
    },
    clonmelTownWalls: {
      name: "Clonmel Town Walls",
      address: "Town Centre, Clonmel, Co. Tipperary, Ireland",
      lattitude: 52.353895,
      longitude: -7.701070,
      type: "Fortified Settlement",
      description: "The medieval town walls of Clonmel formed part of the defensive system protecting one of the most important settlements in County Tipperary. Clonmel developed into a prosperous medieval town because of its strategic location beside the River Suir and its importance as a commercial and administrative centre. Its fortifications included substantial stone walls and a series of defensive gateways, with the river and surrounding landscape providing additional natural protection. The town was strategically important to the powerful Butler family and later came under the influence of the Earls of Kildare. During the 17th century, Clonmel became a significant centre of resistance during the Cromwellian conquest of Ireland. Parts of the medieval defences were damaged or destroyed during this period. The West Gate, now a 19th-century reconstruction of an earlier entrance, and surviving wall sections near Old St Mary's Church provide visible evidence of the town's fortified past.",
      userid: "->users.edwardI"
    },
    stRuadhansChurch: {
      name: "St Ruadhán's Church, Lorrha",
      address: "St Ruadhan's Terrace, Lorrha, Co. Tipperary, Ireland",
      lattitude: 53.091572,
      longitude: -8.120249,
      type: "Ecclesiastical Site",
      description: "St Ruadhán's Church is part of an important early Christian ecclesiastical complex at Lorrha in County Tipperary. The site is traditionally associated with St Ruadhán, who founded a monastery there during the 6th century. Lorrha subsequently developed into an important religious centre, containing churches, crosses, monastic buildings and burial grounds. The original medieval church was substantially altered and rebuilt over the centuries, and the surviving remains include elements of a 15th-century structure. The present Church of Ireland building was constructed around 1815 against the eastern gable of the earlier medieval church. The site demonstrates the continuity of Christian worship at Lorrha over many centuries and forms part of one of the county's most significant early ecclesiastical landscapes.",
      userid: "->users.stRuadhan"
    },
    derrynaflanChurch: {
      name: "Derrynaflan Church",
      address: "Derrynaflan, Lurgoe, Co. Tipperary, Ireland",
      lattitude: 52.597315,
      longitude: -7.733829,
      type: "Ecclesiastical Site",
      description: "Derrynaflan Church is a medieval ecclesiastical building situated on a small raised island within Littleton Bog in County Tipperary. The surrounding monastic settlement is traditionally attributed to St Ruadhán of Lorrha and dates to the 6th century. The monastery became an important religious centre associated with the King-Bishops of Cashel and was particularly significant as a centre of the Culdee movement. The surviving stone church is a pre-Norman structure consisting of a single nave, with a later chancel added to the eastern end. The ecclesiastical complex also contains the remains of an enclosure, a medieval cemetery and other archaeological features. Derrynaflan is particularly famous as the discovery site of the Derrynaflan Hoard, a collection of early medieval ecclesiastical objects dating from the 8th and 9th centuries, including a celebrated silver chalice and paten. The site is a protected National Monument.",
      userid: "->users.stRuadhan"
    },
    lorrhaPriory: {
      name: "Lorrha Priory",
      address: "Lorrha, Co. Tipperary, Ireland",
      lattitude: 53.091940,
      longitude: -8.121270,
      type: "Monastic Site",
      description: "Lorrha Priory is a medieval Augustinian religious foundation situated in the historic ecclesiastical settlement of Lorrha in north County Tipperary. The wider settlement has a long Christian history dating back to the 6th century and is traditionally associated with St Ruadhán, who established an important monastery in the area. During the medieval period, Lorrha developed into a significant centre of religious activity, with several ecclesiastical foundations and associated buildings. The Augustinian priory formed part of this wider monastic landscape and reflects the expansion of organised religious communities in medieval Ireland. The surviving remains are situated close to other historic religious structures, including St Ruadhán's Church and Lorrha's medieval ecclesiastical monuments.",
      userid: "->users.stRuadhan"
    }
  },
  features: {
    _model: "Feature",
    chapel1: {
        featureType: "Cormac's Chapel",
        description: "A 12th-century Romanesque chapel consecrated in 1134, housing Ireland's only surviving Romanesque frescoes.",
        siteid: "->sites.rockOfCashel"
    },
    keep1: {
        featureType: "Keep",
        description: "A well-preserved keep.",
        siteid: "->sites.cahirCastle"
    },
    portcullis1: {
        featureType: "Portcullis",
        description: "Still operational, making it one of the few working medieval portcullises in Ireland.",
        siteid: "->sites.cahirCastle"
    },
    machicolations1: {
        featureType: "Machicolations",
        description: "Surviving in good condition as part of the castle's original defensive features.",
        siteid: "->sites.cahirCastle"
    },
    wellTower1: {
        featureType: "Well Tower",
        description: "Largely intact, with its upper levels providing views across the River Suir and surrounding landscape.",
        siteid: "->sites.cahirCastle"
    }
  }
};

