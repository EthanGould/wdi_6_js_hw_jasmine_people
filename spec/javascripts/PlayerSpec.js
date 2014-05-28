describe("Player", function() {

  beforeEach(function(){
    this.player = new Player("Ethan", "Gould", 30);
  });

  describe("#firstName", function(){
    it("person has a first name", function(){

      expect(this.player.firstName).toBe("Ethan");
    });
  });

  describe("#lastName", function(){
    it("person has a last name", function(){

      expect(this.player.lastName).toBe("Gould");
    });
  });

  describe("#age", function(){
    it("person has an age, defaults to 30", function(){

      expect(this.player.age).toBe(30);
    });
  });

  describe("#weight", function(){
    it("person has a weight, defaults to 80", function(){

      expect(this.player.weight).toBe(80);
    });
  });

  describe("#height", function(){
    it("person has a height between 150 and 200 cm", function(){

      expect(this.player.height).toBeGreaterThan(149);
      expect(this.player.height).toBeLessThan(201);
    });
  });

  // describe("#friends", function(){
  //   it("person has an array of friends", function(){

  //     expect(this.player.friends).toBeEmptyArray();
  //   });
  // });

  describe("#fullName", function(){
    it("returns first and last name", function(){

      expect(this.player.fullName(this.player.firstName, this.player.lastName)).toBe("Ethan Gould");
    });
  });
});
