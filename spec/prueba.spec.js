const {Activity,Repository} = require("../scripts/controladores");

const repo= new Repository();

describe("clases  deben de existir", function () {
  it("la clases tiene que estar definidas", function () {
    
    expect(typeof Repository).toBeDefined();
    expect(typeof Activity).toBeDefined();
  });
});

describe("revisar si las clses tiene metodos", function (){
it("clase Activity no tiene que tener metodos, solo un contructor", function (){
  expect(Object.getOwnPropertyNames(Activity.prototype).length === 1).toBe(true);
});
it("clase Repository tiene que tener metodos", function (){
  expect(Object.getOwnPropertyNames(Repository.prototype).length > 1).toBe(true);
});
});

describe("Repository debe tener 3 metodos", function(){
  it("getAllActivities debe estar definido", function (){
    expect(repo.getAllActivities).toBeDefined();
  });
  it("createActivity debe estar definido", function(){
    expect(repo.createActivity).toBeDefined();
  });
  it("createActivity debe estar definido", function(){
    expect(repo.deleteActivity).toBeDefined();
  });
})