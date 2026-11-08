export const seedData = {
  users: {
    _model: "User",
    brianBoru: {
      firstName: "Brian",
      lastName: "Boru",
      email: "brianboru@tipperaryfortifications.ie",
      password: "secret"
    },
    conorOBrien: {
      firstName: "Conor",
      lastName: "O'Brien",
      email: "conorobrien@tipperaryfortifications.ie",
      password: "secret"
    },
    nicholasPurcell: {
      firstName: "Nicholas",
      lastName: "Purcell",
      email: "nicholaspurcell@tipperaryfortifications.ie",
      password: "secret"
    },
    jamesButler: {
      firstName: "James",
      lastName: "Butler",
      email: "jamesbutler@tipperaryfortifications.ie",
      password: "secret"
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
    ormondeCastle: {
        name: "Ormonde Castle",
        address: "Castle Park, Carrick-on-Suir, Co. Tipperary, E32 CX59, Ireland",
        type: "Manor / Fortified Residence",
        lattitude: 52.34500,
        longitude: -7.40778,
        // Wikipedia: https://en.wikipedia.org/wiki/Ormonde_Castle
        description: "Ormond Castle (Irish: Caisleán Urmhumhan) is a castle on the River Suir on the east side of Carrick-on-Suir, County Tipperary, Ireland.",
        userid: "->users.jamesButler"
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

