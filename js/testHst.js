import Hst from "./Hst.js";

QUnit.test( "a basic test example", function( assert ) {
    var value = "hello";
    assert.equal( value, "hello", "We expect value to be hello" );
  });
  QUnit.test( "Ontario Sales Tax", function( assert ) {
    const oHst = new Hst();
    assert.equal( oHst.calculate(5, 'ON'), 27.19, "We expect HST to be 1.30" );
  });
  QUnit.test( "Alberta Sales Tax", function( assert ) {
    const oHst = new Hst();
    assert.equal( oHst.calculate(10, 'AB'), 103.32, "We expect HST to be $.50" );
  });
  QUnit.test( "Asdf Sales Tax", function( assert ) {
    const oHst = new Hst();
    try{
      oHst.calculate(10, 'ASdf');
      assert.equal(true, false, "We expect HST for asdf to throw an exception")
    }catch(e){
      assert.equal(e, "unimplemented", "We expect a bad province to throw an unimplemented exception");
    }
    QUnit.test( "Manitoba", function( assert ) {
      const oHst = new Hst();
      assert.equal( oHst.calculate(10, 'MB'), 69.26, "We expect HST to be $1.20" );
    });
    QUnit.test( "Quebec", function( assert ) {
        const oHst = new Hst();
        assert.equal( oHst.calculate(10, 'QC'), 43.37, "We expect HST to be $1.50" );
    });
  });
