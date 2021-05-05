"use strict";

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = async () => {
  //doctypes
  let doctypes = [
    {
      description: "RUT",
      state: "actif",
    },
    {
      description: "Carte d'identité",
      state: "actif",
    },
    {
      description: "Passport",
      state: "actif",
    },
  ];

  /*   for (let i = 0; i < doctypes.length; i++) {
    const doctype = doctypes[i];

    await strapi.services.doctype.create({
      description: doctype.description,
      state: doctype.state,
    });
  } */

  //Motives

  let motives = [
    {
      description: "Renouvellement",
      state: "actif",
    },
    {
      description: "Demande de Passeport",
      state: "actif",
    },
    {
      description: "Changement Renseignements",
      state: "actif",
    },
    {
      description: "Passport Perdu",
      state: "actif",
    },
  ];

/*   for (let i = 0; i < motives.length; i++) {
    const motive = motives[i];

    await strapi.services["request-motive"].create({
      description: motive.description,
      state: motive.state,
    });
  } */

  //request_status
  let request_statuses = [
    {
      description: "Passport Disponible	",
      state: "actif",
    },
    {
      description: "Passport Abandonné",
      state: "actif",
    },
    {
      description: "Requête Annulée",
      state: "actif",
    },
    {
      description: "Passport Livré",
      state: "actif",
    },
    {
      description: "Envoyée a Washington",
      state: "actif",
    },
  ];

  /*   for (let i = 0; i < request_statuses.length; i++) {
    const request_status = request_statuses[i];

    await strapi.services['request_status'].create({
      description: request_status.description,
      state: request_status.state,
    });
  } */


  //user-profile
  let user_profiles = [
    {
      description: "user",
      state: "actif",
    },
    {
      description: "admin",
      state: "actif",
    },
  ];

  /*   for (let i = 0; i < user_profiles.length; i++) {
    const user_profile = user_profiles[i];

    await strapi.services['user_profiles'].create({
      description: user_profile.description,
      state: user_profile.state,
    });
  } */
};
