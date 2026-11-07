import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("brianboru@tipperaryfortifications.ie").required(),
    password: Joi.string().example("secret").required(),
  }).label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Brian").required(),
  lastName: Joi.string().example("Boru").required(),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArraySpec = Joi.array().items(UserSpecPlus).label("UserArray");

export const FeatureSpec = Joi.object()
  .keys({
  featureType: Joi.string().example("Cormac's Chapel").required(),
  description: Joi.string().example("A 12th-century Romanesque chapel consecrated in 1134, housing Ireland's only surviving Romanesque frescoes.").required(),
  siteid: IdSpec,
}).label("Feature Details");

export const FeatureSpecPlus = FeatureSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("FeatureDetailsPlus");

export const FeatureArraySpec = Joi.array().items(FeatureSpecPlus).label("FeatureArray");

export const SiteSpec = Joi.object()
  .keys({
    name: Joi.string().example("Rock of Cashel").required(),
    address: Joi.string().example("St. Patrick's Rock, Cashel, Co. Tipperary, E25 KX44, Ireland").required(),
    type: Joi.string().valid(
          "Castle",
          "Royal Site",
          "Ecclesiastical Site",
          "Monastic Site",
          "Manor / Fortified Residence",
          "Tower",
          "Fortified Settlement",
          "Other"
      ).example("Royal Site").required(),
    lattitude: Joi.number().example(52.52000).required(),
    longitude: Joi.number().example(-7.89000).required(),
    description: Joi.string().example("The Rock of Cashel (Irish: Carraig Phádraig), also known as Cashel of the Kings and St. Patrick's Rock, is a historical site that served both as an ecclesiatic settlement and a seat of power for the Kings of Munster.").required(),
    userid: IdSpec,
    features: FeatureArraySpec,
  }).label("SiteDetails");

export const SiteSpecPlus = SiteSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("SiteDetailsPlus");

export const SiteArraySpec = Joi.array().items(SiteSpecPlus).label("SiteArray");