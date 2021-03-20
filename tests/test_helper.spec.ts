import mongoose from 'mongoose';
//tell mongoose to use es6 implementation of promises
mongoose.Promise = global.Promise;
before((done) => {
  void mongoose.connect('mongodb://localhost:27017/saboathFhirTest');
  mongoose.connection
    .once('open', () => {
      console.log('Connected!');
      done();
    })
    .on('error', (error) => {
      console.warn('Error : ', error);
      done();
    });
});

//Called hooks which runs before something.
beforeEach((done) => {
  // mongoose.connection.collections.saboathFhirTest.drop(() => {
  //     //this function runs after the drop is completed
  //     done(); //go ahead everything is done now.
  // });
  done();
});
