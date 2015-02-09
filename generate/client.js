module.exports = {

  friendlyName: 'Sane frontend logic',

  description: 'Handle the addon logic for the sane frontend',

  extendedDescription: 'This example machine is part of machinepack-boilerplate, used to introduce everyone to machines.',

  inputs: {

    name: {
      example: 'user',
      description: 'Name of the resource',
      required: true
    },

    attributes: {
      example: 'name:string age:number',
      description: 'extra attributes that will be generated',
      required: false
    }

  },

  defaultExit: 'success',

  exits: {

    error: {
      description: 'An unexpected error occurred.'
    },

    success: {
      example:  {
        addNpmPackages: [{}],
        addEmberAddon: [{}],
        addToConfig: [{}],
        addBowerPackages: [{}],
        commands: [""]
      }
    }
  },

  fn: function (inputs, exits) {

    /**
     * Module Dependencies
     */

    // ...

    // Return an object containing the commands to run by the generator
    return exits.success({
      addEmberAddon:  [
      { name: 'ember-cli-simple-auth', target: '~0.7.3'},
      { name: 'ember-cli-simple-auth-oauth2', target: '~0.7.3'}
      ],
      addToConfig: {
        ENV : {
          'simple-auth': {
            authorizer: 'simple-auth-authorizer:oauth2-bearer'
          },
          'simple-auth-oauth2': {
            serverTokenEndpoint: '/api/v1/auths/login',
            serverTokenRevocationEndpoint: '/api/v1/auths/logout',
          }
        }
      }
      commands: ['ember g resource user username:string']
    });

  }

};
