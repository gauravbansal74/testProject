'use strict';

describe('Test Spec for contactService', function() {


  var service;

  beforeEach(module('redmartApp'));


  beforeEach(inject(function(contactService) {
      service = contactService;
  }));

  //service.contacts = contacts;
  //console.log(service.contacts.length);

  it('should be loaded hello', function() {
    expect(service).toBeDefined();
  });


  it ('should return the length of contacts 6', function() {
    expect(service.contacts.length).toBe(6);
  });


  it ('should delete element using index', function() {
    service.removeContact(2);
    expect(service.contacts.length).toBe(5);
  });


  it ('should add element and check the length of array', function() {

    var addData = {
              id: 7,
              name : 'Jasmine Test',
              pic:'6.jpg',
              tel: '13265897',
              email: 'jasmine@jasmine.com'
            };
    service.saveContact(addData);
    expect(service.contacts.length).toBe(7);
  });
    
    
    




});