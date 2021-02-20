# healthstack-hmo

Health Management Organisation ERP management application, also exposes fhir API for the accessing [fhir resources](https://hl7.org/FHIR/resourcelist.html)

- Backend runs on nodeJS (~v14.15.0) based on the [featherJS](https://docs.feathersjs.com) framework.
- Frontend based on [ReactJS](https://reactjs.org/)
- Database used is MongoDB.
## Development Setup

- Install node version 14.5.0 or higher using your favourite node version manager see how to install using [nvm here](https://github.com/nvm-sh/nvm)
- Install MongoDB, useful link [here](https://docs.mongodb.com/manual/installation)
- Checkout source code on this repo `git clone https://github.com/apmis/healthstack-hmo.git`
- Move to the project directory `cd healthstack-hmo` 
- Install node dependencies `yarn install`
- Rename `.env.sample` file to `.env` and adjust the variables based on yout specific setup
- Run application
`yarn run env-cmd yarn start-dev`





