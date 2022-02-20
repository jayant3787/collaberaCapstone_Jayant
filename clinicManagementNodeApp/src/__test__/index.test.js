import supertest from 'supertest';
import app from '../routes/app.js';
import { jest } from '@jest/globals';

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

describe("Test the root path", () => {
  test("It should response the GET method", done => {
    supertest(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

// describe("Test the text of the root path", () => {
//   jest.setTimeout(1000);
//   test("It should response the GET method", done => {
//     supertest(app)
//       .get("/")
//       .then(response => {
//         expect(response.contains('CLINIC')).toEqual(true);
//         done();
//       });
//   });
// });  

describe("Test the speciality route", () => {
  test("It should response the GET method", done => {
    supertest(app)
      .get("/doctors/search/speciality/Orthodontist")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});



// describe("Test the search doctors path", () => {
//   jest.setTimeout(1000);
//   test("It should response the GET method", done => {
//     supertest(app)
//       .get("/doctors/search/name/Shashank S")
//       .then(response => {
//         console.log(response.body.qualification);
//         expect((response.body.qualification.indexOf("MBBS") !== -1)).toEqual(true);
//         done();
//       });
//   });
// });


describe("Test the delete doctors ", () => {
  jest.setTimeout(5000);
  test("It should response the GET method", async () => {
    await supertest(app)
      .get("/doctors/delete/Meghal Chhabria")
      .then(response => {
        console.log(response._body);
        // expect((response.msg).indexOf("Doctor removed successfully") !== -1).toBe(true);
        // done();
      });
  });
});


// describe("Test to add doctors ", () => {
//   jest.setTimeout(1000);
//   test("It should response the GET method", done => {
//     supertest(app)
//       .get("/doctors/add/")
//       .then(response => {
//         expect(response.msg === "New doctor added successfully").toEqual(true);
//         done();
//       });
//   });
// });

// describe('Testing Doctor Search', () => {
//   jest.setTimeout(30000);

//   test('neither zone nor volunteer valid', async () => {
//       await request(app)
//       .post('/doctors/search/name/Prashk')
//       //.set('someparameter', 'somevalue')
//       .send().expect(200)
//   })
// })

// describe('Testing Doctor Add', () => {
//   jest.setTimeout(30000);
//   test('neither zone nor volunteer valid', async () => {
//       await request(app)
//       .post('/doctors/add')
//       .set('name', 'somevalue')
//   .set('age', 100)
//    set('gender','somevalue')
//       .send().expect(200)
//   })
// })




