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
      addNpmPackages:  [
      { name: 'ember-cli-simple-auth', target: '~0.7.2'},
      { name: 'npm i ember-cli-simple-auth-oauth2', target: '~0.7.2'}
      ],
      addBowerPackages: [{ name: 'foundation', target: '~5.5.0'}],
      commands: [`ember g resource ${inputs.name} ${inputs.attributes}`]
    });

  }

};
