import Joi from "joi";

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const UserCredentialsSpec = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const SiteSpec = {
  name: Joi.string().required(),
  address: Joi.string().required(),
  type: Joi.string().valid(
        "Castle",
        "Royal Site",
        "Ecclesiastical Site",
        "Monastic Site",
        "Manor / Fortified Residence",
        "Tower",
        "Fortified Settlement",
        "Other"
    ).required(),
  lattitude: Joi.number().required(),
  longitude: Joi.number().required(),
  description: Joi.string().required()
};

export const FeatureSpec = {
  featureType: Joi.string().required(),
  description: Joi.string().required()
};