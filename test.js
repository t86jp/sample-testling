'use strict';

var should = require('should');

describe('Helloモジュール', function(){
  describe('requireテスト', function(){
    it('requireで読み込めるべき', function(){
      (function(){
        require('./hello');
      }).should.not.throw();
    });
  });
  describe('モジュールテスト', function(){
    var subject;
    beforeEach(function(next){
      subject = require('./hello');
      next();
    });
    it('呼び出せるべき', function(){
      subject.should.be.a.Function;
    });
    it('Helloを返すべき', function(){
      var message = 'fuga';
      subject(message).should.equal('Hello ' + message);
    });
  });
});
